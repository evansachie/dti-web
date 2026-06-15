"use client";

import Link from "next/link";
import { useState } from "react";
import { getErrorMessage } from "@/lib/utils";

type NewsletterFormVariant = "section" | "footer" | "sidebar";

type NewsletterFormProps = {
  variant?: NewsletterFormVariant;
  buttonLabel?: string;
  placeholder?: string;
};

const variantStyles = {
  section: {
    form: "flex flex-col sm:flex-row sm:flex-wrap gap-3 max-w-[520px] mx-auto",
    input:
      "flex-1 bg-white border border-zinc-200 px-5 py-3.5 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors",
    button:
      "bg-[#24a186] hover:bg-[#1d826c] text-white px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed",
    message: "text-[12px] mt-1 sm:basis-full sm:text-center",
    legal: "text-zinc-400 sm:basis-full sm:text-center",
  },
  footer: {
    form: "flex flex-col gap-3",
    input:
      "bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#24a186] transition-colors w-full placeholder:text-zinc-500",
    button:
      "bg-[#24a186] hover:bg-[#1d826c] text-white px-4 py-3 text-sm font-semibold transition-colors w-full uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed",
    message: "text-[12px] mt-1",
    legal: "text-zinc-500",
  },
  sidebar: {
    form: "flex flex-col gap-3",
    input:
      "w-full bg-white/5 border border-white/10 px-4 py-2.5 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#24a186] transition-colors",
    button:
      "w-full bg-[#24a186] hover:bg-[#1d826c] text-white py-2.5 text-[12px] font-bold uppercase tracking-wider transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
    message: "text-[12px]",
    legal: "text-white/35",
  },
};

export function NewsletterForm({
  variant = "section",
  buttonLabel = "Subscribe",
  placeholder = "Enter your email address",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const styles = variantStyles[variant];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const companyWebsite = String(formData.get("companyWebsite") ?? "");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, companyWebsite }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Newsletter signup failed.");
      }

      setStatus("success");
      setMessage(data.message);
      setEmail("");
    } catch (error: unknown) {
      setStatus("error");
      setMessage(getErrorMessage(error));
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input
            type="text"
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={placeholder}
        required
        disabled={status === "loading"}
        className={styles.input}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={styles.button}
      >
        {status === "loading" ? "Subscribing..." : buttonLabel}
      </button>
      {message && (
        <p
          className={`${styles.message} ${
            status === "success" ? "text-[#24a186]" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
      <p className={`${styles.legal} text-[11px] leading-relaxed`}>
        By subscribing, you agree to receive DTI emails. You can unsubscribe at
        any time. See our{" "}
        <Link href="/privacy-policy" className="text-[#24a186] hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
