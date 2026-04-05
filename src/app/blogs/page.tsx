import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BlogsListSection } from "@/components/blogs/BlogsListSection";
import { BlogsNewsletterSection } from "@/components/blogs/BlogsNewsletterSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Blog & News | Theatre for Development Initiative",
  description:
    "Read the latest stories, project updates, and impact reports from the Theatre for Development Initiative (TFDI) in Ghana.",
};

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
