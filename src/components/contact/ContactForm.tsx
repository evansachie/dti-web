"use client";

import Link from "next/link";
import { useState } from "react";
import { submitContactForm } from "@/lib/contact";
import { getErrorMessage } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    subject: "",
    message: "",
    newsletterOptIn: false,
    companyWebsite: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await submitContactForm(formData);
      setStatus("success");
      setMessage("Thank you! Your message has been sent successfully.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organisation: "",
        subject: "",
        message: "",
        newsletterOptIn: false,
        companyWebsite: "",
      });
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setMessage(getErrorMessage(error));
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#FFF8E1] border border-[#1B5E20]/20 p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-[22px] font-bold text-[#252A34] mb-3">
          Message Sent!
        </h3>
        <p className="text-zinc-500 text-[15px] leading-relaxed mb-6">
          {message}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#1B5E20] font-bold text-[13px] uppercase tracking-wider hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-2 bg-[#FFF8E1] border border-[#1B5E20]/20 px-4 py-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#1B5E20] animate-pulse shrink-0"></div>
        <p className="text-[#1B5E20] text-[12px] font-semibold">
          We typically respond within 1–2 business days.
        </p>
      </div>

      <h3
        className="text-[24px] font-medium text-[#252A34] mb-2"
        style={{ fontFamily: "var(--font-playfair-display), serif" }}
      >
        Send Us a Message
      </h3>
      <p className="text-zinc-500 text-[14px] mb-8">
        Fill in the form below and we&apos;ll get back to you shortly.
      </p>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="hidden" aria-hidden="true">
          <label>
            Company website
            <input
              type="text"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Kofi Mensah"
              className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#1B5E20] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#1B5E20] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+233 XX XXX XXXX"
              className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#1B5E20] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
              Organisation (Optional)
            </label>
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="e.g. NGO, School, Company"
              className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#1B5E20] transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
            Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] focus:outline-none focus:border-[#1B5E20] transition-colors appearance-none"
          >
            <option value="">Select a topic...</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="project">Project Collaboration</option>
            <option value="workshop">Workshop Booking</option>
            <option value="donation">Donation / Support</option>
            <option value="media">Media / Press</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your interest or inquiry..."
            className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#1B5E20] transition-colors resize-none"
          />
        </div>

        <label className="flex items-start gap-3 text-[13px] leading-relaxed text-zinc-500">
          <input
            type="checkbox"
            name="newsletterOptIn"
            checked={formData.newsletterOptIn}
            onChange={handleChange}
            className="mt-1 h-4 w-4 shrink-0 accent-[#1B5E20]"
          />
          <span>
            I would also like to receive DTI news, project updates, and event
            information by email.
          </span>
        </label>

        <p className="text-[12px] leading-relaxed text-zinc-400">
          By submitting this form, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-[#1B5E20] hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms-of-service"
            className="font-medium text-[#1B5E20] hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>

        {status === "error" && (
          <p className="text-red-500 text-sm font-medium">{message}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#F9A825] hover:bg-[#F57F17] text-[#252A34] py-4 text-[13px] font-bold uppercase tracking-wider transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
