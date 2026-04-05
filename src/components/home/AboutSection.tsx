import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <div className="w-full md:w-1/2 relative h-[450px] md:h-[550px] flex-shrink-0">
        <div className="absolute top-0 left-0 w-[70%] md:w-[65%] aspect-square bg-[#d9dbdb] border-[12px] md:border-[16px] border-[#D9EFEA] z-0"></div>

        <div className="absolute bottom-0 right-0 md:right-4 w-[70%] md:w-[65%] aspect-square bg-[#d9dbdb] border-[12px] md:border-[16px] border-[#D9EFEA] z-10 overflow-hidden">
          <div className="absolute right-0 bottom-0 w-[80%] h-[80%]">
            <Image
              src="/illustration-2.svg"
              alt=""
              fill
              className="object-contain object-bottom-right opacity-10 translate-y-6 translate-x-6"
            />
          </div>
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
          Using Theatre As A Tool For Transformation.
        </h2>

        <p className="text-zinc-500 leading-relaxed mb-6 text-[14px]">
          Theatre for Development Initiative (TFDI) is a community-driven
          organization that uses participatory theatre and creative arts as
          tools for education, advocacy, and social transformation.
        </p>
        <p className="text-zinc-500 leading-relaxed mb-10 text-[14px]">
          Rooted in the principles of Theatre for Development, we engage
          communities in dialogue, awareness creation, and problem-solving
          around pressing societal issues.
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
