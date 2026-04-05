import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/home/HomeHero";
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
  title: "TFDI | Theatre for Development Initiative",
  description:
    "A community-driven organization that uses participatory theatre and creative arts as tools for education, advocacy, and social transformation in Ghana.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <HomeHero
        eyebrow="Theatre For Development Initiative (TFDI)"
        title="Using Theatre to Inspire Change & Transform Lives"
        description="We engage communities through participatory theatre and creative arts—driving education, advocacy, and sustainable social transformation."
        primaryAction={{ label: "Our Projects", href: "/projects" }}
        secondaryAction={{ label: "About Us", href: "/about" }}
      />

      <main className="flex flex-col flex-1 w-full">
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
