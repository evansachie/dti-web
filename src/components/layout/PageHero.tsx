import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

export function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <div className="relative w-full h-[380px] md:h-[420px] bg-[#252A34]/70 overflow-hidden">
      <div
        className="absolute top-0 left-0 bottom-0 w-[65%] bg-[#219D80]/55"
        style={{ clipPath: "polygon(0 0, 80% 0, 58% 100%, 0 100%)" }}
      >
        <div className="absolute top-16 left-0 bottom-0 w-[250px]">
          <Image
            src="/illustration-1.svg"
            alt=""
            fill
            className="object-contain object-left-top opacity-[0.2]"
            priority
          />
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-1/2 md:w-1/3 h-full">
        <Image
          src="/illustration-2.svg"
          alt=""
          fill
          className="object-contain object-bottom-right opacity-[0.06] translate-x-8 translate-y-8"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white mt-12 px-4">
        <h1
          className="text-[44px] md:text-[52px] font-medium mb-3 tracking-tight drop-shadow-sm"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          {title}
        </h1>
        <p className="text-[13px] md:text-[14px] text-white/90 font-light flex items-center gap-2">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            Home
          </Link>
          <span className="text-white/60">/</span>
          <span>{breadcrumb}</span>
        </p>
      </div>
    </div>
  );
}
