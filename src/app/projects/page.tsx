import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectsListSection } from "@/components/projects/ProjectsListSection";
import { VideoSpotlightSection } from "@/components/home/VideoSpotlightSection";
import { StatsSection } from "@/components/home/StatsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Projects | Theatre for Development Initiative",
  description:
    "Explore TFDI's active and completed projects using participatory theatre to drive community education, advocacy, and social change across Ghana.",
};

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
