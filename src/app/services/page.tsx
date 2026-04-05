import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesListSection } from "@/components/services/ServicesListSection";
import { ServicesApproachSection } from "@/components/services/ServicesApproachSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CtaSection } from "@/components/home/CtaSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Services",
  description:
    "Explore TFDI's range of services: from community theatre performances and educational workshops to advocacy campaigns across Ghana.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Our Services" breadcrumb="Services" />
      <ServicesListSection />
      <ServicesApproachSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}
