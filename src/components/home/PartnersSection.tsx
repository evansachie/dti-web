import { partnersData, partnershipTypesData } from "@/data/home";
import { Lightbulb, Users, Heart, Shield, Globe, Leaf } from "lucide-react";

const whyPartnerReasons = [
  {
    icon: Lightbulb,
    title: "Innovative Theatre for Development Approach",
  },
  {
    icon: Users,
    title: "Strong Community Engagement Model",
  },
  {
    icon: Heart,
    title: "Youth-Led and Community-Centered",
  },
  {
    icon: Shield,
    title: "Commitment to Accountability and Impact",
  },
  {
    icon: Globe,
    title: "Growing National Reach",
  },
  {
    icon: Leaf,
    title: "Focus on Sustainable Behavioural Change",
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 px-6 bg-white border-t border-zinc-100 border-b">
      <div className="max-w-[1200px] mx-auto text-center">
        <h3 className="text-zinc-400 font-semibold text-[13px] tracking-[0.2em] uppercase mb-12">
          Partnership Opportunities
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-70 mb-14">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className="min-h-14 w-40 bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold text-xs uppercase tracking-widest rounded-sm hover:opacity-100 hover:bg-zinc-200 transition-all duration-300 cursor-default px-4 py-3 text-center"
            >
              {partner.name}
            </div>
          ))}
        </div>

        <p className="text-zinc-400 text-[14px] mb-5 max-w-xl mx-auto leading-relaxed">
          Partnerships may include
        </p>

        <p className="text-zinc-500 text-[15px] font-medium max-w-2xl mx-auto leading-relaxed mb-16">
          {partnershipTypesData.map((type, index) => (
            <span key={index}>
              {type}
              {index < partnershipTypesData.length - 2
                ? ", "
                : index === partnershipTypesData.length - 2
                  ? " & "
                  : ""}
            </span>
          ))}
        </p>

        <div className="border-t border-zinc-100 pt-14">
          <h4
            className="text-[#252A34] text-[22px] font-medium mb-10"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Why Partner With DTI
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {whyPartnerReasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-[#f8fafa] border border-zinc-100 hover:border-[#1B5E20]/30 transition-colors duration-300"
              >
                <reason.icon size={20} className="text-[#1B5E20] shrink-0" />
                <span className="text-zinc-600 text-[14px] font-medium text-left">
                  {reason.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
