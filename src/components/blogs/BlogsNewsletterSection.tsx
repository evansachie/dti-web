import { NewsletterForm } from "@/components/newsletter/NewsletterForm";

export function BlogsNewsletterSection() {
  return (
    <section className="py-20 px-6 bg-[#f8fafa] w-full border-t border-zinc-100">
      <div className="max-w-[700px] mx-auto text-center">
        <span className="text-[#24a186] text-[13px] font-bold uppercase tracking-wider mb-4 block">
          Stay In The Loop
        </span>
        <h2
          className="text-[32px] md:text-[40px] leading-[1.2] text-[#252A34] font-medium mb-5"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          Get Our Latest Stories Delivered To You
        </h2>
        <p className="text-zinc-500 text-[15px] leading-relaxed mb-10">
          Subscribe to the DTI newsletter and be the first to receive updates on
          our projects, impact stories, and upcoming events.
        </p>
        <NewsletterForm />
        <p className="text-zinc-400 text-[12px] mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
