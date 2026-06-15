import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/home/HomeHero";
import { CampaignSection } from "@/components/home/CampaignSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MissionVisionSection } from "@/components/home/MissionVisionSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { LatestNewsSection } from "@/components/home/LatestNewsSection";
import { VideoSpotlightSection } from "@/components/home/VideoSpotlightSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = createPageMetadata({
  title: "DTI | Developmental Theatre Initiative",
  description:
    "Developmental Theatre Initiative promotes sustainable development through theatre, creative arts, dialogue, advocacy, and community participation.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <HomeHero
        eyebrow="Developmental Theatre Initiative (DTI)"
        title="Using Theatre for Social Change"
        description="Empowering communities, inspiring change, and driving development through theatre, creative arts, dialogue, advocacy, and community participation."
        primaryAction={{ label: "Our Projects", href: "/projects" }}
        secondaryAction={{ label: "About Us", href: "/about" }}
      />

      <main className="flex flex-col flex-1 w-full">
        <CampaignSection />
        <AboutSection />
        <MissionVisionSection />
        <StatsSection />
        <ProjectsSection />
        <ServicesSection />
        <LatestNewsSection />
        <VideoSpotlightSection />
        <TestimonialSection />
        <PartnersSection />
        <CtaSection />
      </main>
    </div>
  );
}
