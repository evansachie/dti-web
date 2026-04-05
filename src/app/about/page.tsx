import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutObjectivesSection } from "@/components/about/AboutObjectivesSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutGallerySection } from "@/components/about/AboutGallerySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Us | Theatre for Development Initiative",
  description:
    "Learn more about TFDI's mission, vision, and the team driving social transformation through participatory theatre.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="About Us" breadcrumb="About" />

      <AboutStorySection />
      <AboutObjectivesSection />
      <AboutTeamSection />
      <TestimonialSection />
      <PartnersSection />
      <AboutGallerySection />

      <CtaSection />
    </div>
  );
}
