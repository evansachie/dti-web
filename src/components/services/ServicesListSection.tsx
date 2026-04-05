import Image from "next/image";

export function ServicesListSection() {
  const services = [
    {
      title: "Community Theatre Performances",
      description:
        "We design and stage high-impact, participatory theatre performances directly within communities, tailored to local realities and encouraging communal problem-solving.",
      features: [
        "Original script development",
        "Community-specific themes",
        "Interactive audience participation",
        "Post-performance dialogue sessions",
      ],
      image:
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    },
    {
      title: "Social Awareness Campaigns",
      description:
        "Targeted, localized awareness campaigns combining live performances, health walks, and community activations to tackle specific societal challenges.",
      features: [
        "Multi-day campaign planning",
        "Health walk coordination",
        "Public sensitization events",
        "Measurable impact tracking",
      ],
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    },
    {
      title: "Educational Drama Workshops",
      description:
        "Structured workshops for schools, youth groups, and community organizations teaching storytelling, drama facilitation, and using theatre as an educational tool.",
      features: [
        "Curriculum-aligned content",
        "Youth & educator focused",
        "Hands-on drama exercises",
        "Certificate of participation",
      ],
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    },
    {
      title: "Advocacy & Sensitization Programs",
      description:
        "We partner with NGOs, government bodies, and institutions to deliver targeted advocacy programs using creative arts to sensitize communities.",
      features: [
        "Policy and rights advocacy",
        "Cultural heritage promotion",
        "SDG-aligned programming",
        "Institutional collaboration",
      ],
      image:
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80",
    },
    {
      title: "Event Production",
      description:
        "End-to-end production support for cultural events, festivals, and community performances — professionally executed with lasting community impact.",
      features: [
        "Creative direction & scripting",
        "Stage & venue management",
        "Performer coordination",
        "Post-event documentation",
      ],
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    },
    {
      title: "Research & Development Projects",
      description:
        "Rigorous research into the effectiveness of Theatre for Development as a social change methodology to continually improve our community programs.",
      features: [
        "Participatory action research",
        "Field data collection",
        "Impact assessment reports",
        "Academic & NGO collaboration",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              What We Offer
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[38px] md:text-[44px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Our Core Services
          </h2>
          <p className="text-zinc-500 text-[15px] mt-4 max-w-2xl leading-relaxed">
            From live performances to structured workshops, every TFDI service
            is grounded in the transformative power of participatory theatre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-br from-[#219D80]/60 to-[#252A34]/50"></div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-[19px] font-bold text-[#252A34] mb-3 leading-snug group-hover:text-[#219D80] transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-[14px] leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-4 border-t border-zinc-100">
                  {service.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-zinc-600 text-[13px]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#24a186] shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
