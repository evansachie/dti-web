import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Shield, Users, Settings, Palette } from "lucide-react";
import type { Metadata } from "next";
import { teamMembers, teamCategories, getMemberBySlug } from "@/data/team";
import type { TeamMemberCategory } from "@/data/team";
import { createPageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

const categoryIcons: Record<TeamMemberCategory, typeof Shield> = {
  "board-of-directors": Shield,
  "advisory-council": Users,
  "executive-management-team": Settings,
  "team-leads": Palette,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    return createPageMetadata({
      title: "Member Not Found",
      description: "The requested team member could not be found.",
      path: "/team",
    });
  }

  return createPageMetadata({
    title: member.name,
    description: member.intro,
    path: `/team/${member.slug}`,
    image: member.photo,
  });
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const { title: categoryName } = teamCategories[member.category];
  const Icon = categoryIcons[member.category];
  const hasBio = member.bio.length > 0;

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <div className="relative w-full h-[340px] md:h-[380px] bg-[#252A34] overflow-hidden">
        <div className="absolute inset-0 bg-[#1B5E20]/40" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)",
          }}
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center text-white pb-12 px-6">
          <div className="inline-flex items-center gap-2 bg-[#1B5E20]/90 backdrop-blur-sm px-4 py-2 rounded-full mb-5">
            <Icon size={14} className="text-white" strokeWidth={2} />
            <span className="text-white text-[11px] font-bold uppercase tracking-[0.15em]">
              {categoryName}
            </span>
          </div>
          <h1
            className="text-[36px] md:text-[48px] font-medium mb-2 tracking-tight drop-shadow-lg leading-tight"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            {member.name}
          </h1>
          <p className="text-white/70 text-[15px] md:text-[16px] font-light max-w-lg">
            {member.position}
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 w-full py-14">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#1B5E20] text-[13px] font-semibold uppercase tracking-wider transition-colors mb-12 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Our Team
        </Link>

        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden bg-zinc-100 mb-6 shadow-lg ring-[3px] ring-[#1B5E20]/20">
            <Image
              src={member.photo}
              alt={member.name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-zinc-500 text-[15px] leading-relaxed max-w-xl">
            {member.intro}
          </p>
        </div>

        <div className="w-16 h-[2px] bg-[#1B5E20]/20 mx-auto mb-10" />

        {hasBio ? (
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] text-zinc-600">
            {member.bio.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("•")) {
                const items = paragraph.split("\n").filter(Boolean);
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1 my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^•\s*/, "")}</li>
                    ))}
                  </ul>
                );
              }

              if (paragraph.endsWith(":") && !paragraph.includes(".")) {
                return (
                  <h3
                    key={index}
                    className="text-[20px] font-bold text-[#252A34] mt-8 mb-3"
                    style={{
                      fontFamily: "var(--font-playfair-display), serif",
                    }}
                  >
                    {paragraph}
                  </h3>
                );
              }

              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        ) : (
          <p className="text-zinc-400 text-[15px] italic">
            Full biography coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
