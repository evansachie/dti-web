import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectsListSection } from "@/components/projects/ProjectsListSection";
import { VideoSpotlightSection } from "@/components/home/VideoSpotlightSection";
import { StatsSection } from "@/components/home/StatsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CtaSection } from "@/components/home/CtaSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Impact Projects",
  description:
    "Explore TFDI's active participatory theatre projects across Ghana. We drive community education, advocacy, and social change through the arts.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Our Projects" breadcrumb="Projects" />
      <ProjectsListSection />
      <VideoSpotlightSection />
      <StatsSection />
      <PartnersSection />
      <CtaSection />
    </div>
  );
}
