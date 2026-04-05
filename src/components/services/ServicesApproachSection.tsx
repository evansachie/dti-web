import Link from "next/link";

export function ServicesApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Community Assessment",
      description:
        "We begin by conducting in-depth research and consultations within the target community to fully understand their specific needs, cultural context, and pressing social issues.",
    },
    {
      number: "02",
      title: "Script & Programme Design",
      description:
        "Our creative team develops original scripts, workshop curricula, or campaign plans that directly reflect the community's realities, ensuring local relevance and maximum resonance.",
    },
    {
      number: "03",
      title: "Rehearsal & Training",
      description:
        "We train local performers and facilitators, building internal community capacity so that the impact of our work outlasts our direct involvement.",
    },
    {
      number: "04",
      title: "Performance & Delivery",
      description:
        "We execute the performance, workshop, or campaign with full creative and logistical oversight, ensuring high quality and safe, inclusive space for community participation.",
    },
    {
      number: "05",
      title: "Dialogue & Reflection",
      description:
        "Post-delivery sessions guide communities in processing themes, identifying personal action steps, and planning follow-up activities to sustain momentum.",
    },
    {
      number: "06",
      title: "Impact Evaluation",
      description:
        "We document, measure, and report on outcomes — tracking behaviour change, community action, and long-term social impact to continually refine our methodology.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
                Our Methodology
              </span>
              <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            </div>
            <h2
              className="text-[34px] md:text-[40px] leading-[1.2] text-[#252A34] font-medium mb-6"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              How We Deliver Impact
            </h2>
            <p className="text-zinc-500 text-[15px] leading-relaxed mb-8">
              Every TFDI engagement follows a rigorous, community-centred
              process. We don&apos;t just perform — we co-create with
              communities to ensure lasting, measurable change.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#24a186] hover:bg-[#1d826c] text-white px-8 py-3.5 text-[14px] font-medium transition-colors"
            >
              Partner With Us
            </Link>
          </div>

          <div className="w-full lg:w-3/5">
            <div className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 bg-white p-8 border border-zinc-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] group hover:border-[#219D80]/30 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#EAF5F3] rounded-full flex items-center justify-center text-[#219D80] text-[14px] font-black group-hover:bg-[#24a186] group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#252A34] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 text-[14px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
