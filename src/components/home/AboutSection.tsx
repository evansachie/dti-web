import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <div className="w-full md:w-1/2 relative h-[450px] md:h-[550px] flex-shrink-0">
        <div className="absolute top-0 left-0 w-[70%] md:w-[65%] aspect-square bg-zinc-100 border-[8px] md:border-[12px] border-white shadow-xl z-0 overflow-hidden">
          <Image
            src="/gallery/1.jpg"
            alt="Community Engagement"
            fill
            sizes="(max-width: 768px) 70vw, 35vw"
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-0 right-0 md:right-4 w-[70%] md:w-[65%] aspect-square bg-zinc-100 border-[8px] md:border-[12px] border-white shadow-2xl z-10 overflow-hidden">
          <Image
            src="/gallery/2.jpg"
            alt="DTI in Action"
            fill
            sizes="(max-width: 768px) 70vw, 35vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
            About Us
          </span>
          <div className="h-[2px] w-[50px] bg-zinc-200"></div>
        </div>

        <h2
          className="text-[38px] md:text-[44px] leading-[1.1] text-[#252A34] font-medium mb-6"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          Building Sustainable Communities Through Theatre.
        </h2>

        <p className="text-zinc-500 leading-relaxed mb-6 text-[14px]">
          Developmental Theatre Initiative (DTI) is a non-profit organization
          committed to promoting sustainable development through theatre,
          creative arts, dialogue, advocacy, and community participation.
        </p>
        <p className="text-zinc-500 leading-relaxed mb-10 text-[14px]">
          Founded by Theatre for Development practitioner Enoch Aggrey, DTI
          empowers people to identify challenges, discuss solutions, and take
          collective action toward positive change.
        </p>

        <Link
          href="/about"
          className="bg-[#24a186] hover:bg-[#1d826c] text-white px-8 py-3.5 text-[14px] font-medium transition-colors inline-block"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
