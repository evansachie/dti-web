import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { DonateFormSection } from "@/components/donate/DonateFormSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Donate | Theatre for Development Initiative",
  description:
    "Support TFDI's mission to use theatre and creative arts for social change. Your donation directly funds community performances, workshops, and advocacy campaigns in Ghana.",
};

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Support Our Work" breadcrumb="Donate" />
      <DonateFormSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}
