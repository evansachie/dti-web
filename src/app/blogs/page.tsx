import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BlogsListSection } from "@/components/blogs/BlogsListSection";
import { BlogsNewsletterSection } from "@/components/blogs/BlogsNewsletterSection";
import { CtaSection } from "@/components/home/CtaSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog & News",
  description:
    "Read the latest stories, project updates, and impact reports from the Theatre for Development Initiative (TFDI) in rural Ghana.",
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Blog & News" breadcrumb="Blogs" />
      <BlogsListSection />
      <BlogsNewsletterSection />
      <CtaSection />
    </div>
  );
}
