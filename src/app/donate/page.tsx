import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { DonateFormSection } from "@/components/donate/DonateFormSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CtaSection } from "@/components/home/CtaSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Support Our Work",
  description:
    "Invest in the power of creative expression. Your support directly funds participatory theatre performances, youth workshops, and social advocacy across Ghana.",
  path: "/donate",
});

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
