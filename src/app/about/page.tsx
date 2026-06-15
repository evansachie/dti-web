import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutObjectivesSection } from "@/components/about/AboutObjectivesSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutGallerySection } from "@/components/about/AboutGallerySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CtaSection } from "@/components/home/CtaSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn more about DTI's mission, vision, and the team driving social transformation through participatory theatre in Ghana.",
  path: "/about",
});

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
