import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function BlogsListSection() {
  const featured = {
    title:
      "How Community Theatre is Bridging The Educational Gap in Rural Ghana",
    category: "Education",
    date: "April 2, 2026",
    readTime: "6 min read",
    slug: "how-community-theatre-is-bridging-the-educational-gap-in-rural-ghana",
    excerpt:
      "A deep dive into our TFDI methodology, showcasing how community participation is reliably driving school retention, critical thinking, and civic awareness in rural communities across Ghana.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
  };

  const featuredTwo = {
    title: "TFDI Launches New Health Awareness Campaign in Central Region",
    category: "Advocacy",
    date: "March 20, 2026",
    readTime: "4 min read",
    slug: "tfdi-launches-new-health-awareness-campaign-in-central-region",
    excerpt:
      "Our newest participatory theatre project aims to combat prevalent localized health challenges through interactive storytelling and community mobilization across rural districts.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
  };

  const posts = [
    {
      title: "Celebrating Our Cultural Heritage Through Dance & Folklore",
      category: "Culture",
      date: "February 28, 2026",
      slug: "celebrating-our-cultural-heritage-through-dance-and-folklore",
      readTime: "5 min read",
      excerpt:
        "Highlights from our recent community workshop safely integrating traditional Ghanaian folklore into modern educational plays and social advocacy performances.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
    {
      title: "The Price of Love: A Reflection on Tradition and Modernity",
      category: "Projects",
      date: "February 10, 2026",
      slug: "the-price-of-love-a-reflection-on-tradition-and-modernity",
      readTime: "7 min read",
      excerpt:
        "Behind the scenes of our award-winning stage play exploring cultural practices and modern influences in marriage across communities in Ghana.",
      image:
        "https://images.unsplash.com/photo-1598387846148-47e82ee120cc?w=800&q=80",
    },
    {
      title: "From Cleanup to Policy: How One Performance Changed Assin Foso",
      category: "Impact",
      date: "January 15, 2026",
      slug: "from-cleanup-to-policy-how-one-performance-changed-assin-foso",
      readTime: "8 min read",
      excerpt:
        "The remarkable story of how a single TFDI theatre performance on environmental hygiene led to a community-wide cleanup and a municipal government commitment.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    },
    {
      title: "Youth Voices: Training the Next Generation of Theatre Advocates",
      category: "Workshops",
      date: "December 12, 2025",
      slug: "youth-voices-training-the-next-generation-of-theatre-advocates",
      readTime: "5 min read",
      excerpt:
        "How TFDI's educational workshops are equipping young Ghanaians with the storytelling tools to become advocates for change in their own communities.",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    },
    {
      title:
        "Partnering for Impact: TFDI's Approach to Institutional Collaboration",
      category: "Partnerships",
      date: "November 30, 2025",
      slug: "partnering-for-impact-tfdis-approach-to-institutional-collaboration",
      readTime: "4 min read",
      excerpt:
        "Exploring how TFDI works with NGOs, government agencies, and local institutions to create scalable, sustainable social development programs.",
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=80",
    },
    {
      title:
        "Digital Storytelling: Using Theatre to Drive Change in the Social Media Era",
      category: "Impact",
      date: "March 20, 2026",
      slug: "digital-storytelling-using-theatre-to-drive-change-in-the-social-media-era",
      readTime: "6 min read",
      excerpt:
        "How TFDI is blending traditional theatre with digital platforms to reach wider audiences, amplify social advocacy, and engage Ghana’s youth through storytelling online.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
  ];

  const categoryColors: Record<string, string> = {
    Education: "bg-blue-100 text-blue-700",
    Advocacy: "bg-orange-100 text-orange-700",
    Culture: "bg-purple-100 text-purple-700",
    Projects: "bg-teal-100 text-teal-700",
    Impact: "bg-green-100 text-green-700",
    Workshops: "bg-yellow-100 text-yellow-700",
    Partnerships: "bg-pink-100 text-pink-700",
  };

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
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
                <span
                  className={`inline-block self-start text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest mb-5 rounded-full ${categoryColors[featured.category]}`}
                >
                  {featured.category}
                </span>
                <h2
                  className="text-[26px] md:text-[32px] leading-[1.3] text-[#252A34] font-medium mb-5 group-hover:text-[#219D80] transition-colors"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  {featured.title}
                </h2>
                <p className="text-zinc-500 text-[14px] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-5 text-zinc-400 text-[12px] font-medium mb-8">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {featured.readTime}
                  </span>
                </div>
                <Link
                  href={`/blogs/${featured.slug}`}
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
                  className={`inline-block self-start text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest mb-5 rounded-full ${categoryColors[featuredTwo.category]}`}
                >
                  {featuredTwo.category}
                </span>
                <h2
                  className="text-[26px] md:text-[32px] leading-[1.3] text-[#252A34] font-medium mb-5 group-hover:text-[#219D80] transition-colors"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  {featuredTwo.title}
                </h2>
                <p className="text-zinc-500 text-[14px] leading-relaxed mb-6">
                  {featuredTwo.excerpt}
                </p>
                <div className="flex items-center gap-5 text-zinc-400 text-[12px] font-medium mb-8">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {featuredTwo.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {featuredTwo.readTime}
                  </span>
                </div>
                <Link
                  href={`/blogs/${featuredTwo.slug}`}
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
              <div className="relative h-[320px] lg:min-h-[450px] overflow-hidden order-1 lg:order-2">
                <Image
                  src={featuredTwo.image}
                  alt={featuredTwo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
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
            {posts.map((post, index) => (
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
