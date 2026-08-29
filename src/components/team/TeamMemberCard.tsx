import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block bg-white overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] border border-black/[0.03] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-400"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{ objectPosition: member.heroPosition ?? "center 25%" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252A34]/80 via-[#252A34]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <span className="inline-flex items-center gap-1.5 text-white text-[13px] font-semibold">
            View Profile <ArrowRight size={14} />
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-[17px] font-bold text-[#252A34] mb-1 leading-tight group-hover:text-[#1B5E20] transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-[#1B5E20] text-[11px] font-bold uppercase tracking-[0.15em] mb-3">
          {member.position}
        </p>
        <p className="text-zinc-500 text-[13px] leading-relaxed line-clamp-3">
          {member.intro}
        </p>
      </div>
    </Link>
  );
}
