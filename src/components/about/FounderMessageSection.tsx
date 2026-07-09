import Image from "next/image";

export function FounderMessageSection() {
  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Founder&apos;s Message
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            A Message From Our Founder
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="relative w-full h-full min-h-[500px] bg-zinc-200 overflow-hidden shadow-lg">
              <Image
                src="/gallery/founder.jpeg"
                alt="Enoch Aggrey - Founder & Executive Director"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#252A34]/80 to-transparent p-6 pt-16">
                <p className="text-white font-bold text-[18px]">Enoch Aggrey</p>
                <p className="text-[#24a186] text-[12px] font-bold uppercase tracking-widest mt-1">
                  Founder & Executive Director
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 bg-white p-10 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-black/[0.03] border-l-0 lg:border-l-0 relative flex flex-col justify-center">
            <div className="absolute top-8 left-8 text-[100px] leading-none text-[#24a186]/10 font-serif select-none">
              &ldquo;
            </div>
            <div className="space-y-5 text-zinc-600 text-[15px] leading-[1.8] relative z-10">
              <p>
                The Developmental Theatre Initiative (DTI) was founded from a
                deep passion for contributing to national development and
                improving the lives of individuals and communities. Throughout
                my academic journey in Theatre Arts at the University of Ghana,
                particularly in the field of Theatre for Development, I gained a
                profound understanding of how theatre and participatory
                approaches can be used as powerful tools for education,
                empowerment, and social transformation.
              </p>
              <p>
                Through research, community engagement, and practical
                experiences, I came to realize that many social, environmental,
                public health, and cultural challenges persist not because
                solutions do not exist, but because sustainable change requires
                active community participation, ownership, and behavioural
                transformation. Development is most effective when people are
                involved in identifying challenges, analysing their causes, and
                creating solutions together.
              </p>
              <p>
                Inspired by this philosophy, I established DTI as a platform
                dedicated to using theatre, dialogue, creative engagement, and
                community participation to promote sustainable development and
                positive social change.
              </p>
              <p>
                Today, DTI exists to empower communities, inspire responsible
                action, and drive development through innovative and
                participatory approaches. We believe that by working together,
                we can build stronger communities, promote social
                responsibility, and create a more sustainable future for
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
