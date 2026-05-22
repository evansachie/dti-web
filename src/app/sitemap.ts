import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { allBlogPosts } from "@/data/blogs";
import { projectsData } from "@/data/projects";

const siteLastModified = new Date("2026-05-22");

const projectLastModified: Record<string, Date> = {
  "clean-earth-clear-future": new Date("2026-05-22"),
  "love-beyond-romance": new Date("2026-03-31"),
  "dialogue-on-the-stage": new Date("2025-05-17"),
};

function parsePostDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? siteLastModified : parsed;
}

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
    url: absoluteUrl(route || "/"),
    lastModified: siteLastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: projectLastModified[project.slug] ?? siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = allBlogPosts.map((post) => ({
    url: absoluteUrl(`/blogs/${post.slug}`),
    lastModified: parsePostDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
