import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGridSection } from "@/components/gallery/GalleryGridSection";
import { CtaSection } from "@/components/home/CtaSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impact Gallery",
  description:
    "Explore TFDI's visual journey through Ghana. Capturing the power of participatory theatre, workshops, and community dialogue in action.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Impact In Pictures" breadcrumb="Gallery" />
      <GalleryGridSection />
      <CtaSection />
    </div>
  );
}
