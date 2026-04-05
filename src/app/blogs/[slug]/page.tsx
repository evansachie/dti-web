import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { PageHero } from "@/components/layout/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Detail | Theatre for Development Initiative",
  description:
    "Read the full article from the Theatre for Development Initiative.",
};

const relatedPosts = [
  {
    title: "TFDI Launches New Health Awareness Campaign in Central Region",
    category: "Advocacy",
    date: "March 20, 2026",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    title: "The Price of Love: A Reflection on Tradition and Modernity",
    category: "Projects",
    date: "February 10, 2026",
    image:
      "https://images.unsplash.com/photo-1598387846148-47e82ee120cc?w=600&q=80",
  },
  {
    title: "Youth Voices: Training the Next Generation of Theatre Advocates",
    category: "Workshops",
    date: "December 12, 2025",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
  },
];

export default function BlogDetailPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Blog & News" breadcrumb="Blogs" />

      <div className="max-w-[1200px] mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          <article>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#219D80] text-[13px] font-semibold uppercase tracking-wider transition-colors mb-8 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Blogs
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-teal-100 text-teal-700 text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-full">
                Education
              </span>
              <span className="flex items-center gap-1.5 text-zinc-400 text-[13px]">
                <Calendar size={13} /> April 2, 2026
              </span>
              <span className="flex items-center gap-1.5 text-zinc-400 text-[13px]">
                <Clock size={13} /> 6 min read
              </span>
            </div>

            <h1
              className="text-[32px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium mb-8"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              How Community Theatre is Bridging The Educational Gap in Rural
              Ghana
            </h1>

            <div className="relative w-full aspect-video overflow-hidden mb-10">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
                alt="Community Theatre in Rural Ghana"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] text-zinc-600">
              <p>
                For many communities across rural Ghana, traditional classroom
                education has long been inaccessible — limited by underfunded
                schools, high dropout rates, and a persistent disconnect between
                formal curricula and lived, local realities. Theatre for
                Development Initiative (TFDI) is working to bridge that gap, not
                with textbooks alone, but with the transformative power of
                participatory theatre.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-playfair-display), serif",
                  color: "#252A34",
                  fontSize: "26px",
                  fontWeight: "600",
                  margin: "2rem 0 1rem",
                }}
              >
                The Problem We Set Out to Solve
              </h2>
              <p>
                In communities like Assin Foso in the Central Region, student
                retention rates remain critically low. Children often leave
                school early to support family income, and the lessons taught in
                classrooms feel distant from the challenges they face at home —
                sanitation, early marriage, environmental degradation. TFDI
                recognized that education, to be effective, had to meet
                communities where they actually are.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-playfair-display), serif",
                  color: "#252A34",
                  fontSize: "26px",
                  fontWeight: "600",
                  margin: "2rem 0 1rem",
                }}
              >
                Theatre As a Pedagogy
              </h2>
              <p>
                Using the Theatre for Development (TfD) methodology, TFDI
                facilitators work directly with community members — not just
                youth, but also parents, chiefs, healthcare workers, and local
                leaders — to co-create performances that speak truth to their
                specific situation. This is not scripted entertainment imposed
                from outside. It is collaborative storytelling that emerges from
                the community itself.
              </p>
              <p>
                The results are measurable. After a series of performances
                focused on environmental hygiene in Assin Foso, the community
                organized its own cleanup exercise and secured commitments from
                the Municipal Chief Executive to improve waste management
                infrastructure. Theatre, in this case, directly catalyzed
                political will and civic action.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-playfair-display), serif",
                  color: "#252A34",
                  fontSize: "26px",
                  fontWeight: "600",
                  margin: "2rem 0 1rem",
                }}
              >
                What&apos;s Next
              </h2>
              <p>
                TFDI is expanding its educational theatre model to two new
                community sites in 2026, with funding support from partner
                institutions. Each site will receive a full six-week programme
                including needs assessment, performance development, and
                post-performance dialogue facilitation. We are actively seeking
                institutional partners and individual donors to scale this work
                further.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#EAF5F3] flex items-center justify-center text-[#24a186] font-black text-xl">
                  E
                </div>
                <div>
                  <p className="text-[#252A34] font-bold text-[15px]">
                    Enoch Aggrey
                  </p>
                  <p className="text-zinc-400 text-[13px]">
                    Founder / Project Lead, TFDI
                  </p>
                </div>
              </div>
              <div>
                <p className="text-zinc-400 text-[12px] font-bold uppercase tracking-widest mb-2">
                  Share Article
                </p>
                <SocialIcons variant="light" />
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 flex flex-col gap-10">
            <div>
              <h3 className="text-[16px] font-bold text-[#252A34] uppercase tracking-wider mb-6 pb-3 border-b border-zinc-100">
                Related Articles
              </h3>
              <div className="flex flex-col gap-6">
                {relatedPosts.map((post, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex gap-4 group items-start"
                  >
                    <div className="relative w-20 h-20 shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[#24a186] text-[10px] font-bold uppercase tracking-widest">
                        {post.category}
                      </span>
                      <p className="text-[#252A34] text-[13px] font-semibold leading-snug group-hover:text-[#219D80] transition-colors line-clamp-2 mt-0.5">
                        {post.title}
                      </p>
                      <p className="text-zinc-400 text-[12px] mt-1">
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[16px] font-bold text-[#252A34] uppercase tracking-wider mb-6 pb-3 border-b border-zinc-100">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Education",
                  "Advocacy",
                  "Culture",
                  "Projects",
                  "Impact",
                  "Workshops",
                  "Partnerships",
                ].map((cat) => (
                  <Link
                    key={cat}
                    href="#"
                    className="px-4 py-2 border border-zinc-200 text-zinc-600 text-[12px] font-semibold hover:border-[#219D80] hover:text-[#219D80] transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#252A34] p-7 text-white">
              <p className="text-[#24a186] text-[11px] font-bold uppercase tracking-widest mb-3">
                Newsletter
              </p>
              <p className="text-white font-semibold text-[16px] mb-3 leading-snug">
                Get updates on our latest stories & projects
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#24a186] transition-colors mb-3"
              />
              <button className="w-full bg-[#24a186] hover:bg-[#1d826c] text-white py-2.5 text-[12px] font-bold uppercase tracking-wider transition-colors">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
