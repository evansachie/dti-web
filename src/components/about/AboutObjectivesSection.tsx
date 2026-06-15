import {
  Brain,
  HeartPulse,
  Leaf,
  Handshake,
  Megaphone,
  Theater,
  TrendingUp,
  Users,
} from "lucide-react";

export function AboutObjectivesSection() {
  const objectives = [
    {
      title: "Environment & Climate Action",
      description:
        "Promote sanitation, environmental responsibility, climate awareness, and sustainable community practices.",
      icon: Leaf,
    },
    {
      title: "Youth Development & Leadership",
      description:
        "Empower young people through leadership development, volunteerism, mentorship, civic engagement, and skills-building.",
      icon: TrendingUp,
    },
    {
      title: "Mental Health & Well-being",
      description:
        "Create safe spaces for dialogue, awareness, emotional healing, and psychosocial support.",
      icon: Brain,
    },
    {
      title: "Public Health Education",
      description:
        "Use theatre and participatory approaches to increase health awareness and promote healthy lifestyles.",
      icon: HeartPulse,
    },
    {
      title: "Theatre & Creative Arts",
      description:
        "Advance theatre, storytelling, and creative expression as tools for education, advocacy, and social change.",
      icon: Theater,
    },
    {
      title: "Community Development & Inclusion",
      description:
        "Strengthen community participation, social cohesion, inclusion, and local ownership of development initiatives.",
      icon: Users,
    },
    {
      title: "Research & Advocacy",
      description:
        "Generate knowledge and facilitate dialogue that contributes to informed decision-making and sustainable development.",
      icon: Megaphone,
    },
    {
      title: "Institutional Growth",
      description:
        "Build a strong, accountable, and resilient organization through governance, partnerships, volunteer development, and resource mobilization.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Strategic Direction
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Our 2027-2031 Priorities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="bg-white p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-black/[0.03] group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#EAF5F3] flex items-center justify-center rounded-full mb-6 group-hover:bg-[#24a186] transition-colors duration-300">
                <obj.icon
                  size={24}
                  className="text-[#24a186] group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[18px] font-bold text-[#252A34] mb-3">
                {obj.title}
              </h3>
              <p className="text-zinc-500 text-[14px] leading-relaxed">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
