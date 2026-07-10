import { Shield, Users, Settings } from "lucide-react";

export function AboutGovernanceSection() {
  const tiers = [
    {
      title: "Board of Directors",
      description:
        "Provides governance, strategic oversight, accountability, and policy direction.",
      icon: Shield,
    },
    {
      title: "Advisory Council",
      description:
        "Provides professional guidance, technical expertise, and strategic counsel.",
      icon: Users,
    },
    {
      title: "Executive Management Team",
      description:
        "Responsible for programme implementation, administration, stakeholder engagement, and day-to-day operations.",
      icon: Settings,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-wider">
              Governance
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Our Leadership Structure
          </h2>
          <p className="text-zinc-500 text-[15px] mt-4 max-w-2xl leading-relaxed">
            DTI is governed through a three-tier leadership structure that
            ensures accountability, strategic direction, and operational
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-black/[0.03] text-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#FFF8E1] flex items-center justify-center rounded-full mb-6 mx-auto group-hover:bg-[#1B5E20] transition-colors duration-300">
                <tier.icon
                  size={28}
                  className="text-[#1B5E20] group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[19px] font-bold text-[#252A34] mb-3">
                {tier.title}
              </h3>
              <p className="text-zinc-500 text-[14px] leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
