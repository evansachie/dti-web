import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function LatestNewsSection() {
  const newsItems = [
    {
      title: "TFDI Launches New Health Awareness Campaign in Central Region",
      category: "Advocacy",
      date: "Oct 12, 2026",
      excerpt:
        "Our newest participatory theatre project aims to combat prevalent localized health issues through interactive storytelling.",
      imagePlaceholder: "Health Campaign",
    },
    {
      title: "Celebrating Our Cultural Heritage Through Dance & Folklore",
      category: "Culture",
      date: "Sep 28, 2026",
      excerpt:
        "Highlights from our recent community workshop safely integrating traditional Ghanaian folklore into modern educational plays.",
      imagePlaceholder: "Cultural Dance",
    },
    {
      title: "How Community Theatre is Bridging The Educational Gap",
      category: "Education",
      date: "Aug 15, 2026",
      excerpt:
        "A deep dive into our TFDI methodology, showcasing how community participation is reliably driving school retention in rural areas.",
      imagePlaceholder: "Student Workshop",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Latest News & Blog
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[38px] md:text-[44px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Stay Updated With Our Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-[220px] w-full bg-zinc-200 overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#24a186] text-white text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest z-10">
                  {news.category}
                </div>
                <div className="absolute inset-0 bg-[#eef1f1] flex items-center justify-center text-[#219D80]/60 text-[13px] font-medium group-hover:scale-105 transition-transform duration-500">
                  [Image: {news.imagePlaceholder}]
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-zinc-400 text-[12px] font-medium uppercase tracking-wider mb-4">
                  <Calendar size={14} />
                  {news.date}
                </div>

                <Link href="/blogs" className="block outline-none">
                  <h3 className="text-[20px] font-semibold text-[#252A34] mb-4 leading-snug group-hover:text-[#219D80] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                </Link>

                <p className="text-zinc-500 leading-relaxed text-[14px] mb-8 flex-1 line-clamp-3">
                  {news.excerpt}
                </p>

                <Link
                  href="/blogs"
                  className="text-[#252A34] group-hover:text-[#219D80] font-bold text-[13px] uppercase tracking-wider transition-colors flex items-center gap-2 mt-auto"
                >
                  Read Article
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/blogs"
            className="border-2 border-zinc-200 text-zinc-600 hover:border-[#24a186] hover:bg-[#24a186] hover:text-white px-8 py-3.5 text-[14px] font-medium transition-all"
          >
            Visit Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
