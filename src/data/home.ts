import {
  Brain,
  HeartPulse,
  Landmark,
  Leaf,
  Theater,
  TrendingUp,
  Users,
  Vote,
} from "lucide-react";

export const missionVisionData = {
  welcome: "Welcome to DTI",
  title: "Empowering Communities, Inspiring Change, Driving Development",
  description:
    "Developmental Theatre Initiative uses theatre, creative arts, dialogue, advocacy, and community participation to help people identify challenges, create solutions, and take collective action.",
  mission: {
    title: "Our Mission",
    description:
      "To educate, empower, and mobilize individuals and communities through participatory theatre, creative engagement, advocacy, and development initiatives that promote social inclusion, environmental sustainability, public well-being, and community transformation.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To be a leading organization that uses theatre, creative arts, and community participation to drive sustainable development, social transformation, and positive behavioural change across Ghana and beyond.",
  },
  coreValues: [
    "Integrity",
    "Accountability",
    "Participation",
    "Inclusivity",
    "Innovation",
    "Professionalism",
    "Collaboration",
    "Sustainability",
    "Community Empowerment",
    "Excellence",
  ],
};

export const servicesData = [
  {
    title: "Environment & Climate Action",
    description:
      "Promoting sanitation, environmental sustainability, waste management, climate awareness, and community environmental responsibility.",
    icon: Leaf,
  },
  {
    title: "Youth Development & Leadership",
    description:
      "Building leadership capacity, volunteerism, civic engagement, mentorship, and skills development among young people.",
    icon: TrendingUp,
  },
  {
    title: "Mental Health & Well-being",
    description:
      "Creating safe spaces for dialogue, awareness, emotional healing, and psychosocial support.",
    icon: Brain,
  },
  {
    title: "Public Health Education",
    description:
      "Using creative and participatory approaches to improve health awareness and promote healthy lifestyles.",
    icon: HeartPulse,
  },
  {
    title: "Theatre & Creative Arts",
    description:
      "Applying theatre, storytelling, and performance as tools for education, advocacy, and social transformation.",
    icon: Theater,
  },
  {
    title: "Culture & Heritage",
    description:
      "Promoting cultural appreciation, preservation of indigenous knowledge, and positive cultural practices.",
    icon: Landmark,
  },
  {
    title: "Governance & Civic Engagement",
    description:
      "Encouraging responsible citizenship, community participation, and democratic engagement.",
    icon: Vote,
  },
  {
    title: "Gender & Social Inclusion",
    description:
      "Promoting equal participation, inclusion, and opportunities for all.",
    icon: Users,
  },
];

export const homeProjectsData = [
  {
    slug: "clean-earth-clear-future",
    title: "Environmental Hygiene Awareness Project",
    status: "Upcoming",
    category: "Health & Sanitation",
    description:
      "A pilot project educating communities on proper sanitation through participatory theatre, health walks, and clean-up exercises.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80",
    categoryBg: "#24a186",
  },
  {
    slug: "love-beyond-romance",
    title: "Love Beyond Romance",
    status: "Recent",
    category: "Mental Health",
    description:
      "Exploring Love, Responsibility, and Youth Mental Health through Theatre for Development narratives across Ghana.",
    image: "/gallery/love-project.jpg",
    categoryBg: "#eab308",
  },
  {
    slug: "dialogue-on-the-stage",
    title: "Dialogue on the Stage",
    status: "Previous",
    category: "Culture & Development",
    description:
      "Exploring cultural practices and modern influences in marriage through an award-winning stage playtitled 'The Price of Love'.",
    image: "/gallery/12.jpg",
    categoryBg: "#a855f7",
  },
];

export const statsData = [
  { value: "50+", label: "Communities Reached" },
  { value: "20k+", label: "Beneficiaries Targeted" },
  { value: "2027-2031", label: "Strategic Vision" },
  { value: "8", label: "Programme Areas" },
];

export const testimonialsData = [
  {
    quote:
      "The environmental hygiene play staged here was an absolute eye-opener. It didn't just entertain us; it directly mobilized our entire community to take action. The massive cleanup exercise that followed is definitive proof of DTI's remarkable impact.",
    name: "Municipal Chief Executive",
    title: "Assin Foso Municipality",
    avatarLetter: "M",
  },
  {
    quote:
      "Participating in the 'Dialogue on the Stage' workshops completely transformed how I view civic responsibility. DTI consistently provides a safe space for youth to tackle complex national issues through the beauty of art and unity.",
    name: "Kwame Mensah",
    title: "Community Youth Leader",
    avatarLetter: "K",
  },
];

export const partnersData = [
  { name: "Government Institutions" },
  { name: "Development Agencies" },
  { name: "NGOs" },
  { name: "Corporate Organizations" },
  { name: "Educational Institutions" },
  { name: "Faith-Based Organizations" },
  { name: "Traditional Authorities" },
  { name: "Media Organizations" },
];
