import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import {
  featuredPost,
  featuredPostTwo,
  blogPosts,
  categoryColors,
} from "@/data/blogs";

export function BlogsListSection() {
  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-24 flex flex-col gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-[30px] bg-zinc-300"></div>
              <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
                Featured Post
              </span>
            </div>

            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-[320px] lg:min-h-[450px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
                <span
                  className={`inline-block self-start text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest mb-5 rounded-full ${categoryColors[featuredPost.category]}`}
                >
                  {featuredPost.category}
                </span>
                <h2
                  className="text-[26px] md:text-[32px] leading-[1.3] text-[#252A34] font-medium mb-5 group-hover:text-[#219D80] transition-colors"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  {featuredPost.title}
                </h2>
                <p className="text-zinc-500 text-[14px] leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-5 text-zinc-400 text-[12px] font-medium mb-8">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-[#252A34] hover:text-[#219D80] font-bold text-[13px] uppercase tracking-wider transition-colors group/link"
                >
                  Read Full Article
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-white order-2 lg:order-1">
                <span
                  className={`inline-block self-start text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest mb-5 rounded-full ${categoryColors[featuredPostTwo.category]}`}
                >
                  {featuredPostTwo.category}
                </span>
                <h2
                  className="text-[26px] md:text-[32px] leading-[1.3] text-[#252A34] font-medium mb-5 group-hover:text-[#219D80] transition-colors"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  {featuredPostTwo.title}
                </h2>
                <p className="text-zinc-500 text-[14px] leading-relaxed mb-6">
                  {featuredPostTwo.excerpt}
                </p>
                <div className="flex items-center gap-5 text-zinc-400 text-[12px] font-medium mb-8">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {featuredPostTwo.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {featuredPostTwo.readTime}
                  </span>
                </div>
                <Link
                  href={`/blogs/${featuredPostTwo.slug}`}
                  className="inline-flex items-center gap-2 text-[#252A34] hover:text-[#219D80] font-bold text-[13px] uppercase tracking-wider transition-colors group/link"
                >
                  Read Full Article
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
              <div className="relative h-[320px] lg:min-h-[450px] overflow-hidden order-1 lg:order-2 bg-zinc-50/50">
                <Image
                  src={featuredPostTwo.image}
                  alt={featuredPostTwo.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-[30px] bg-zinc-300"></div>
              <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
                Latest Articles
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-white border border-zinc-100 shadow-sm hover:shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[210px] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-full ${categoryColors[post.category]}`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-zinc-400 text-[11px] font-medium uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-bold text-[#252A34] mb-3 leading-snug group-hover:text-[#219D80] transition-colors line-clamp-2 flex-1">
                    {post.title}
                  </h3>

                  <p className="text-zinc-500 text-[13px] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#252A34] hover:text-[#219D80] font-bold text-[12px] uppercase tracking-wider transition-colors mt-auto group/link"
                  >
                    Read More
                    <ArrowRight
                      size={14}
                      strokeWidth={2.5}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
