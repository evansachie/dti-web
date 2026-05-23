"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import dynamic from "next/dynamic";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

const presets = [20, 50, 100, 250];

export function DonateCheckoutForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [transactionRef, setTransactionRef] = useState(() =>
    new Date().getTime().toString()
  );

  const amountValue = customAmount ? parseFloat(customAmount) : selectedAmount;
  const isValid = !!name && !!email && !!amountValue && amountValue > 0;

  const config = {
    reference: transactionRef,
    email: email,
    amount: Math.round((amountValue || 0) * 100),
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
    currency: "GHS",
  };

  const handleDonateSuccess = async (reference: Record<string, unknown>) => {
    const paymentReference = String(reference.reference || "");

    if (!paymentReference || !amountValue) {
      setErrorMsg("We could not verify this donation. Please contact TFDI.");
      return;
    }

    setIsVerifying(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/donations/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reference: paymentReference,
          amount: amountValue,
          email,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Donation verification failed.");
      }

      setReferenceId(String(result.reference || paymentReference));
      setIsSuccess(true);
    } catch (error: unknown) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "We could not verify this donation. Please contact TFDI."
      );
    } finally {
      setIsVerifying(false);
    }
  };

  const handleDonateClose = () => {
    console.log("Payment window closed by the user");
  };

  const handlePrevalidation = (e: React.FormEvent) => {
    setErrorMsg("");
    if (!isValid) {
      e.preventDefault();
      setErrorMsg(
        "Please enter a valid amount, full name, and your email address before continuing."
      );
      return;
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-[#EAF5F3] rounded-full flex items-center justify-center mb-6">
          <Heart size={36} className="text-[#24a186]" fill="#24a186" />
        </div>
        <h3
          className="text-[28px] md:text-[32px] font-medium text-[#252A34] mb-4"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          Thank You, {name}!
        </h3>
        <p className="text-zinc-500 text-[15px] leading-relaxed mb-6">
          Your generosity fuels our mission. We&apos;ve successfully processed
          your donation of GHS {amountValue}. Your support empowers our
          community initiatives across Ghana.
        </p>
        <div className="bg-white border border-zinc-200 px-4 py-3 mb-8 w-full text-left">
          <p className="text-[12px] text-zinc-400 uppercase tracking-wider font-bold mb-1">
            Transaction Reference
          </p>
          <p className="text-[14px] text-zinc-700 font-mono break-all">
            {referenceId}
          </p>
        </div>
        <button
          onClick={() => {
            setIsSuccess(false);
            setName("");
            setEmail("");
            setCustomAmount("");
            setSelectedAmount(50);
            setReferenceId("");
            setErrorMsg("");
            setTransactionRef(new Date().getTime().toString());
          }}
          className="w-full bg-[#252A34] hover:bg-[#1a1d24] text-white py-4 text-[13px] font-bold uppercase tracking-wider transition-colors"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-2 bg-[#EAF5F3] border border-[#219D80]/20 px-4 py-3 mb-8">
        <Heart size={14} className="text-[#24a186] shrink-0" fill="#24a186" />
        <p className="text-[#219D80] text-[12px] font-semibold">
          100% of your donation supports community programmes.
        </p>
      </div>

      <h3
        className="text-[24px] font-medium text-[#252A34] mb-6"
        style={{ fontFamily: "var(--font-playfair-display), serif" }}
      >
        Choose Your Contribution
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {presets.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
            className={`py-3.5 text-[15px] font-bold transition-all duration-200 ${
              selectedAmount === amount && !customAmount
                ? "bg-[#252A34] text-white"
                : "bg-white border border-zinc-200 text-zinc-700 hover:border-[#252A34] hover:text-[#252A34]"
            }`}
          >
            GHS {amount}
          </button>
        ))}
      </div>

      <form
        className="flex flex-col gap-4 mb-7"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
            Custom Amount (GHS)
          </label>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            placeholder="Enter amount e.g. 75"
            className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="For your donation receipt"
            className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
          />
        </div>

        <div onClick={handlePrevalidation} className="w-full mt-4">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-[13px] rounded-sm transition-all">
              {errorMsg}
            </div>
          )}
          {!isValid ? (
            <button
              type="button"
              onClick={(e) => handlePrevalidation(e)}
              className="w-full bg-[#24a186] hover:bg-[#1d826c] text-white py-4 text-[14px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              Donate{" "}
              {customAmount
                ? `GHS ${customAmount}`
                : selectedAmount
                  ? `GHS ${selectedAmount}`
                  : "Now"}
            </button>
          ) : (
            <div className="w-full bg-[#24a186] hover:bg-[#1d826c] text-white py-4 text-[14px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <PaystackButton
                {...config}
                onSuccess={handleDonateSuccess}
                onClose={handleDonateClose}
                className="w-full h-full text-inherit bg-transparent outline-none cursor-pointer"
                text={
                  isVerifying
                    ? "Verifying..."
                    : `Donate ${
                        customAmount
                          ? `GHS ${customAmount}`
                          : selectedAmount
                            ? `GHS ${selectedAmount}`
                            : "Now"
                      }`
                }
              />
            </div>
          )}
        </div>
      </form>

      <p className="text-zinc-400 text-[12px] text-center mt-4">
        Secure payments powered by Paystack. All funds go directly to TFDI.
      </p>
    </>
  );
}
