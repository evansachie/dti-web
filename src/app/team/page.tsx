import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TeamSection } from "@/components/team/TeamSection";
import { CtaSection } from "@/components/home/CtaSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Team",
  description:
    "Meet the dedicated leaders driving DTI's mission — Board of Directors, Advisory Council, and Executive Management Team.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Our Team" breadcrumb="Our Team" />

      <TeamSection category="board-of-directors" />

      <div className="w-full border-t border-zinc-100" />

      <TeamSection category="advisory-council" />

      <div className="w-full border-t border-zinc-100" />

      <TeamSection category="executive-management-team" />

      <div className="w-full border-t border-zinc-100" />

      <TeamSection category="team-leads" />

      <CtaSection />
    </div>
  );
}
