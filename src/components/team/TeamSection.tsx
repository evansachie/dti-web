import { Shield, Users, Settings, Palette } from "lucide-react";
import type { TeamMemberCategory } from "@/data/team";
import { teamCategories, teamMembers } from "@/data/team";
import { TeamMemberCard } from "./TeamMemberCard";

const categoryIcons: Record<TeamMemberCategory, typeof Shield> = {
  "board-of-directors": Shield,
  "advisory-council": Users,
  "executive-management-team": Settings,
  "team-leads": Palette,
};

interface TeamSectionProps {
  category: TeamMemberCategory;
}

export function TeamSection({ category }: TeamSectionProps) {
  const { title, description } = teamCategories[category];
  const members = teamMembers.filter((m) => m.category === category);
  const Icon = categoryIcons[category];

  if (members.length === 0) return null;

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-wider">
              {title}
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <div className="w-14 h-14 bg-[#FFF8E1] flex items-center justify-center rounded-full mb-5 mx-auto">
            <Icon size={24} className="text-[#1B5E20]" strokeWidth={1.5} />
          </div>
          <p className="text-zinc-500 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
