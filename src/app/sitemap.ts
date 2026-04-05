import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { blogPosts } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/services",
    "/blogs",
    "/gallery",
    "/donate",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
