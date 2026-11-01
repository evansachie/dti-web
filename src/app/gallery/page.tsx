import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGridSection } from "@/components/gallery/GalleryGridSection";
import { VideoGallerySection } from "@/components/gallery/VideoGallerySection";
import { CtaSection } from "@/components/home/CtaSection";
import { fetchGalleryImages, fetchGalleryVideos } from "@/lib/api";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impact Gallery",
  description:
    "Explore DTI's visual journey through Ghana. Capturing the power of participatory theatre, workshops, and community dialogue in action.",
  path: "/gallery",
});

export default async function GalleryPage() {
  const [images, videos] = await Promise.all([
    fetchGalleryImages(),
    fetchGalleryVideos(),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Impact In Pictures" breadcrumb="Gallery" />
      <VideoGallerySection videos={videos} />
      <GalleryGridSection images={images} />
      <CtaSection />
    </div>
  );
}
