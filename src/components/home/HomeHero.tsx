import Image from "next/image";
import Link from "next/link";

interface HomeHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}

export function HomeHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: HomeHeroProps) {
  return (
    <div className="relative w-full min-h-screen bg-[#252A34]/70 overflow-hidden flex items-center justify-center">
      <div
        className="absolute top-0 left-0 bottom-0 w-full"
        style={{
          backgroundColor: "rgb(27 94 32 / 55%)",
          clipPath: "polygon(0 0, 55% 0, 35% 100%, 0 100%)",
        }}
      >
        <div className="absolute top-24 left-0 bottom-0 w-[300px]">
          <Image
            src="/illustration-1.svg"
            alt=""
            fill
            className="object-contain object-top-left opacity-[0.2]"
            priority
          />
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-1/2 md:w-5/12 h-full">
        <Image
          src="/illustration-2.svg"
          alt=""
          fill
          className="object-contain object-bottom-right opacity-[0.06] translate-x-12 translate-y-12"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-16">
        <span className="text-[13px] md:text-[15px] font-semibold tracking-wider text-emerald-100 mb-4 uppercase">
          {eyebrow}
        </span>
        <h1
          className="text-[42px] md:text-[68px] leading-[1.1] font-medium mb-3 max-w-4xl tracking-tight drop-shadow-sm"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          {title}
        </h1>
        <p className="text-[14px] md:text-[16px] text-white/70 font-light italic mb-8 tracking-wide">
          Using Theatre For Social Change
        </p>
        <p className="text-[15px] md:text-[18px] text-white/90 font-light max-w-2xl mb-10 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href={primaryAction.href}
            className="bg-[#F9A825] hover:bg-[#F57F17] shadow-sm text-[#252A34] px-8 py-3.5 text-[15px] font-bold transition-colors min-w-[160px]"
          >
            {primaryAction.label}
          </Link>
          <Link
            href={secondaryAction.href}
            className="border border-white/40 hover:bg-white/10 text-white px-8 py-3.5 text-[15px] font-medium transition-colors min-w-[160px]"
          >
            {secondaryAction.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
