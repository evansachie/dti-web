import Image from "next/image";

export function ServicesListSection() {
  const services = [
    {
      title: "Environment & Climate Action",
      description:
        "Promoting sanitation, environmental responsibility, climate awareness, waste management, and sustainable community practices through advocacy and action.",
      features: [
        "Sanitation awareness",
        "Clean-up exercises",
        "Climate education",
        "Community environmental action",
      ],
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    },
    {
      title: "Youth Development & Leadership",
      description:
        "Building leadership capacity, volunteerism, civic engagement, mentorship, and practical skills among young people.",
      features: [
        "Leadership development",
        "Volunteer engagement",
        "Mentorship",
        "Civic participation",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
    {
      title: "Mental Health & Well-being",
      description:
        "Creating safe spaces for dialogue, awareness, emotional healing, psychosocial support, and healthy relationships.",
      features: [
        "Dialogue circles",
        "Mental health awareness",
        "Counselling pathways",
        "Youth support systems",
      ],
      image: "/gallery/love-project.jpg",
    },
    {
      title: "Public Health Education",
      description:
        "Using theatre, creative arts, and participatory methods to improve health awareness and promote healthy lifestyles.",
      features: [
        "Health walks",
        "Community sensitization",
        "Healthy lifestyle education",
        "School and market outreach",
      ],
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
    {
      title: "Theatre & Creative Arts for Development",
      description:
        "Applying theatre, storytelling, and performance as tools for education, advocacy, community mobilization, and social transformation.",
      features: [
        "Participatory theatre",
        "Storytelling",
        "Performance facilitation",
        "Post-performance dialogue",
      ],
      image:
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    },
    {
      title: "Community Development & Social Inclusion",
      description:
        "Strengthening community participation, social cohesion, inclusion, and local ownership of development initiatives.",
      features: [
        "Community participation",
        "Social cohesion",
        "Inclusion and equity",
        "Local ownership of development",
      ],
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    },
    {
      title: "Research, Advocacy & Knowledge Development",
      description:
        "Conducting research, generating knowledge, and facilitating dialogue that contributes to informed decision-making and sustainable development.",
      features: [
        "Research and data collection",
        "Knowledge generation",
        "Policy advocacy",
        "Informed decision-making",
      ],
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    },
    {
      title: "Institutional Growth & Sustainability",
      description:
        "Building a strong, accountable, and resilient organization through effective governance, strategic partnerships, volunteer development, and resource mobilization.",
      features: [
        "Effective governance",
        "Strategic partnerships",
        "Resource mobilization",
        "Operational excellence",
      ],
      image:
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80",
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
            From environmental action to youth leadership and public well-being,
            every DTI programme is grounded in participation, dialogue, creative
            expression, and sustainable action.
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
