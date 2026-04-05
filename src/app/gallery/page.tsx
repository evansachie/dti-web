import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGridSection } from "@/components/gallery/GalleryGridSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Gallery | Theatre for Development Initiative",
  description:
    "Explore TFDI's impact through our visual journey. Capturing the power of participatory theatre in rural communities across Ghana.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Impact In Pictures" breadcrumb="Gallery" />
      <GalleryGridSection />
      <CtaSection />
    </div>
  );
}
