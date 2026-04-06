import { Users, BookOpen, Recycle, Heart } from "lucide-react";

export const impacts = [
  { icon: Users, amount: 20, label: "Funds one community dialogue session" },
  {
    icon: BookOpen,
    amount: 50,
    label: "Sponsors a full drama workshop for youth",
  },
  {
    icon: Recycle,
    amount: 100,
    label: "Powers an environmental awareness campaign",
  },
  {
    icon: Heart,
    amount: 250,
    label: "Funds a complete community theatre performance",
  },
];

export function DonateImpactList() {
  return (
    <div className="flex flex-col gap-6 mb-12">
      {impacts.map((item, i) => (
        <div key={i} className="flex items-start gap-5 group">
          <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#EAF5F3]">
            <item.icon size={20} strokeWidth={1.5} className="text-[#24a186]" />
          </div>
          <div className="pt-1">
            <p className="text-[#252A34] font-bold text-[16px] mb-1">
              GHS {item.amount}
            </p>
            <p className="text-zinc-500 text-[14px] leading-relaxed">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
