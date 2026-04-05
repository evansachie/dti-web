"use client";

import { useState } from "react";
import { Heart, Users, BookOpen, Recycle } from "lucide-react";

export function DonateFormSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  const presets = [20, 50, 100, 250];

  const impacts = [
    { icon: Users, amount: 20, label: "Funds one community dialogue session" },
    {
      icon: BookOpen,
      amount: 50,
      label: "Sponsors a full drama workshop for youth",
    },
    {
      icon: Recycle,
      amount: 100,
      label: "Powers an environmental awareness campaign",
    },
    {
      icon: Heart,
      amount: 250,
      label: "Funds a complete community theatre performance",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
                Make A Difference
              </span>
              <div className="h-[2px] w-[30px] bg-zinc-200"></div>
            </div>
            <h2
              className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium mb-6"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              Your Support Transforms Communities
            </h2>
            <p className="text-zinc-500 text-[15px] leading-relaxed mb-10">
              Every contribution — no matter the size — directly funds a
              community performance, an educational workshop, or an advocacy
              campaign that changes lives. TFDI operates on the ground where it
              matters most.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {impacts.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedAmount(item.amount);
                    setCustomAmount("");
                  }}
                  className={`flex items-center gap-5 p-5 border cursor-pointer transition-all duration-200 group ${
                    selectedAmount === item.amount
                      ? "border-[#219D80] bg-[#EAF5F3]"
                      : "border-zinc-100 bg-[#f8fafa] hover:border-[#219D80]/40"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      selectedAmount === item.amount
                        ? "bg-[#24a186]"
                        : "bg-white"
                    }`}
                  >
                    <item.icon
                      size={20}
                      strokeWidth={1.5}
                      className={
                        selectedAmount === item.amount
                          ? "text-white"
                          : "text-[#24a186]"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-[#252A34] font-bold text-[15px]">
                      GHS {item.amount} / ${item.amount}
                    </p>
                    <p className="text-zinc-500 text-[13px]">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#252A34] p-8 text-white">
              <p className="text-[#24a186] text-[12px] font-bold uppercase tracking-widest mb-3">
                Direct Bank Transfer
              </p>
              <div className="space-y-2 text-[14px] text-zinc-300">
                <p>
                  <span className="text-white font-semibold">
                    Account Name:
                  </span>{" "}
                  Theatre for Development Initiative
                </p>
                <p>
                  <span className="text-white font-semibold">Bank:</span> Ghana
                  Commercial Bank (GCB)
                </p>
                <p>
                  <span className="text-white font-semibold">Account No.:</span>{" "}
                  [To be added]
                </p>
                <p>
                  <span className="text-white font-semibold">Branch:</span>{" "}
                  Legon, Accra
                </p>
              </div>
              <p className="text-zinc-500 text-[12px] mt-4">
                After transferring, email us at{" "}
                <a
                  href="mailto:tfdi.ghana@gmail.com"
                  className="text-[#24a186] hover:underline"
                >
                  tfdi.ghana@gmail.com
                </a>{" "}
                with your receipt so we can acknowledge your gift.
              </p>
            </div>
          </div>

          <div className="bg-[#f8fafa] border border-zinc-100 p-10 sticky top-28">
            <div className="flex items-center gap-2 bg-[#EAF5F3] border border-[#219D80]/20 px-4 py-3 mb-8">
              <Heart
                size={14}
                className="text-[#24a186] shrink-0"
                fill="#24a186"
              />
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

            <div className="flex gap-2 mb-7">
              {(["once", "monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`flex-1 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                    frequency === f
                      ? "bg-[#24a186] text-white"
                      : "bg-white border border-zinc-200 text-zinc-500 hover:border-[#24a186] hover:text-[#24a186]"
                  }`}
                >
                  {f === "once" ? "Give Once" : "Give Monthly"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {presets.map((amount) => (
                <button
                  key={amount}
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

            <div className="flex flex-col gap-1.5 mb-7">
              <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                Custom Amount (GHS)
              </label>
              <input
                type="number"
                placeholder="Enter amount e.g. 75"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-4 mb-7">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
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
                  placeholder="For your donation receipt"
                  className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#24a186] hover:bg-[#1d826c] text-white py-4 text-[14px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Heart size={16} fill="white" />
              Donate{" "}
              {customAmount
                ? `GHS ${customAmount}`
                : selectedAmount
                  ? `GHS ${selectedAmount}`
                  : "Now"}
              {frequency === "monthly" ? " / Month" : ""}
            </button>

            <p className="text-zinc-400 text-[12px] text-center mt-4">
              Secure donation. All funds go directly to TFDI programmes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
