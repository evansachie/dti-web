import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGridSection } from "@/components/gallery/GalleryGridSection";
import { CtaSection } from "@/components/home/CtaSection";
import { fetchGalleryImages, type GalleryImage } from "@/lib/api";
import { galleryData, type GalleryItem } from "@/data/gallery";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impact Gallery",
  description:
    "Explore DTI's visual journey through Ghana. Capturing the power of participatory theatre, workshops, and community dialogue in action.",
  path: "/gallery",
});

// The original static photos in /public/gallery stay visible underneath the
// admin-managed uploads so the gallery is never empty. Once every legacy
// photo has been re-uploaded through the admin Gallery page, this mapping
// (and galleryData) can be removed.
const LEGACY_CATEGORY_MAP: Record<string, string> = {
  Performances: "PERFORMANCES",
  Workshops: "WORKSHOPS",
  "Community Dialogue": "COMMUNITY_DIALOGUE",
};

function fromLegacy(item: GalleryItem): GalleryImage {
  return {
    id: `legacy-${item.id}`,
    title: item.title,
    category: LEGACY_CATEGORY_MAP[item.category] ?? "OTHER",
    location: item.location,
    takenOn: null,
    imageUrl: item.src,
    createdAt: "",
  };
}

export default async function GalleryPage() {
  const adminImages = await fetchGalleryImages();
  // Newest first: admin uploads on top, original photos underneath.
  const images = [...adminImages, ...galleryData.map(fromLegacy)];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Impact In Pictures" breadcrumb="Gallery" />
      <GalleryGridSection images={images} />
      <CtaSection />
    </div>
  );
}
