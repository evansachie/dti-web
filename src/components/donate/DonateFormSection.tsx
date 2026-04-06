"use client";

import { DonateImpactList } from "./DonateImpactList";
import { BankTransferDetails } from "./BankTransferDetails";
import { DonateCheckoutForm } from "./DonateCheckoutForm";

export function DonateFormSection() {
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

            <DonateImpactList />
            <BankTransferDetails />
          </div>

          <div className="bg-[#f8fafa] border border-zinc-100 p-10 sticky top-28">
            <DonateCheckoutForm />
          </div>
        </div>
      </div>
    </section>
  );
}
