export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  excerpt: string;
  image: string;
  content?: string[];
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
  title: "Obra Ne Wara Wabo: The Life You Build Is the Life You Live",
  category: "Advocacy",
  date: "April 17, 2026",
  readTime: "4 min read",
  slug: "obra-ne-wara-wabo-the-life-you-build-is-the-life-you-live",
  excerpt:
    "Life is what you have made it. Not what is handed to you, not what is done for you, but what you choose to build, protect, and sustain. Today, that truth speaks directly to one of the most urgent challenges of our time: plastic pollution.",
  image: "/clean-earth-initiative.jpeg",
  content: [
    "“Obra ne wara wabo”. Life is what you have made it. Not what is handed to you, not what is done for you, but what you choose to build, protect, and sustain.",
    "Today, that truth speaks directly to one of the most urgent challenges of our time: plastic pollution.",
    "Your health is your life. And increasingly, that life is under threat, not by distant forces, but by the everyday choices we ignore.",
    "Plastic pollution is quietly but aggressively shaping the future of our generation. It goes beyond the visible litter on our streets and in our gutters. It is degrading the very foundation of our existence: our health, our environment, and our economic strength.",
    "When plastics invade our ecosystems, they don’t just disappear. They break down into smaller particles, infiltrating the air we breathe, the water we drink, and the food we eat. Over time, this reduces the quality of human health, weakening the very workforce that drives productivity. A weakened population cannot sustain strong economic growth. In this way, plastic pollution is not just an environmental issue, it is a development crisis.",
    "The physical consequences are even more immediate. Choked drainages filled with plastic waste continue to trigger floods in our communities, destroying homes, livelihoods, and infrastructure. Our water bodies are polluted, making clean water increasingly scarce and unsafe.",
    "Perhaps the most alarming impact lies beneath our feet. Our soils, once fertile and life-giving, are being contaminated with non-biodegradable plastics. This reduces agricultural productivity, threatens food security, and endangers the livelihoods of farmers. When the land can no longer produce, the ripple effects touch every sector of society.",
    "This is the reality we have built. And by the wisdom of “Obra ne wara wabo,” it is also the reality we have the power to change.",
    "The question is no longer whether plastic pollution is a problem. The question is whether we are ready to take responsibility for the life we are shaping.",
    "Change begins with awareness, but it does not end there. It requires action; intentional, collective, and sustained. It requires individuals, communities, institutions, and leaders to rise beyond convenience and choose responsibility.",
    "We must rethink our consumption habits. We must support and demand better waste management systems. We must educate, engage, and involve communities in solutions that are practical and lasting.",
    "Because at the end of the day, the future is not something we wait for. It is something we create.",
    "Let us rise. Let us act. Let us shape a future where life is not diminished by our neglect, but strengthened by our choices.",
  ],
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

export const allBlogPosts: BlogPost[] = [
  featuredPost,
  featuredPostTwo,
  ...blogPosts,
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
