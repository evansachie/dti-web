export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  excerpt: string;
  image: string;
}

export const featuredPost: BlogPost = {
  title: "How Community Theatre is Bridging The Educational Gap in Rural Ghana",
  category: "Education",
  date: "April 2, 2026",
  readTime: "6 min read",
  slug: "how-community-theatre-is-bridging-the-educational-gap-in-rural-ghana",
  excerpt:
    "A deep dive into our TFDI methodology, showcasing how community participation is reliably driving school retention, critical thinking, and civic awareness in rural communities across Ghana.",
  image:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
};

export const featuredPostTwo: BlogPost = {
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

export const blogPosts: BlogPost[] = [
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

export const categoryColors: Record<string, string> = {
  Education: "bg-blue-100 text-blue-700",
  Advocacy: "bg-orange-100 text-orange-700",
  Culture: "bg-purple-100 text-purple-700",
  Projects: "bg-teal-100 text-teal-700",
  Impact: "bg-green-100 text-green-700",
  Workshops: "bg-yellow-100 text-yellow-700",
  Partnerships: "bg-pink-100 text-pink-700",
};
