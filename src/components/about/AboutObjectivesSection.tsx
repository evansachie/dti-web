import {
  BookOpen,
  Scale,
  Recycle,
  Users,
  Handshake,
  Megaphone,
} from "lucide-react";

export function AboutObjectivesSection() {
  const objectives = [
    {
      title: "Community Education",
      description:
        "Use theatre as a powerful tool for community education and widespread awareness.",
      icon: BookOpen,
    },
    {
      title: "Cultural Dialogue",
      description:
        "Promote active dialogue between deeply rooted tradition and rapid modernity.",
      icon: Scale,
    },
    {
      title: "Environmental Action",
      description:
        "Address severe environmental and sanitation issues directly through performance.",
      icon: Recycle,
    },
    {
      title: "Empowerment",
      description:
        "Empower youth and local communities to take charge of their narratives.",
      icon: Users,
    },
    {
      title: "Sustainable Partnerships",
      description:
        "Partner with institutions for sustainable, long-term development.",
      icon: Handshake,
    },
    {
      title: "Social Advocacy",
      description:
        "Launch targeted advocacy campaigns to address systemic social challenges at a grassroots level.",
      icon: Megaphone,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Strategic Focus
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Our Core Objectives
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
