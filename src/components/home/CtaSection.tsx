import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative py-28 px-6 bg-[#252A34] overflow-hidden w-full flex items-center justify-center">
      <div
        className="absolute top-0 right-0 w-[50%] h-full bg-[#1B5E20]/30"
        style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
      ></div>

      <div className="relative z-10 max-w-[900px] text-center flex flex-col items-center">
        <h2
          className="text-[38px] md:text-[50px] leading-[1.2] text-white font-medium mb-6 drop-shadow-sm"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          We Believe That We Can Inspire More Communities With You
        </h2>
        <p className="text-white/80 text-[16px] md:text-[18px] mb-10 max-w-2xl font-light leading-relaxed">
          Your support allows DTI to reach marginalized communities and tackle
          pressing social issues through the power of participatory theatre.
          Partner with us to drive actionable change.
        </p>
        <Link
          href="/contact"
          className="bg-[#1B5E20] hover:bg-white hover:text-[#252A34] text-white px-10 py-4 text-[14px] font-bold transition-all uppercase tracking-wider shadow-lg"
        >
          Partner With Us
        </Link>
      </div>
    </section>
  );
}
