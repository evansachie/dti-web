import Image from "next/image";

export function AboutStorySection() {
  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Who We Are
            </span>
            <div className="h-[2px] w-[50px] bg-zinc-200"></div>
          </div>

          <h2
            className="text-[36px] md:text-[44px] leading-[1.2] text-[#252A34] font-medium mb-8"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Empowering Communities Through Theatre And Participation
          </h2>

          <div className="space-y-6 text-zinc-500 leading-relaxed text-[15px]">
            <p>
              Developmental Theatre Initiative (DTI) is a non-profit
              organization committed to promoting sustainable development
              through theatre, creative arts, dialogue, advocacy, and community
              participation.
            </p>
            <p>
              Established by Theatre for Development practitioner Enoch Aggrey
              in 2025, DTI is rooted in the principles of{" "}
              <strong>Theatre for Development (TfD)</strong>. We go beyond
              traditional entertainment — we engage communities as active
              participants in identifying challenges, reflecting on their
              causes, and creating solutions together.
            </p>
            <p>
              Our work supports social inclusion, environmental sustainability,
              public well-being, responsible citizenship, and community
              transformation across Ghana and beyond.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="bg-[#e4ecea] w-full aspect-[4/5] overflow-hidden relative group">
              <Image
                src="/gallery/3.jpg"
                alt="Community Play"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-[#e4ecea] w-full aspect-square overflow-hidden relative group">
              <Image
                src="/gallery/5.jpg"
                alt="Audience Reaction"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div className="bg-[#e4ecea] w-full aspect-square overflow-hidden relative group">
              <Image
                src="/gallery/6.jpg"
                alt="Action Prep"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-[#e4ecea] w-full aspect-4/5 overflow-hidden relative group">
              <Image
                src="/gallery/7.jpg"
                alt="Team Highlight"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
