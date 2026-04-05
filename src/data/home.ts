import { Theater, Users, Megaphone, Music } from "lucide-react";

export const missionVisionData = {
  welcome: "Welcome to TFDI",
  title: "Let Us Come Together To Make A Difference",
  description:
    "We believe in the power of creative expression to communicate complex societal challenges and drive actionable community-led solutions.",
  mission: {
    title: "Our Mission",
    description:
      "To educate, empower, and mobilize communities through participatory theatre and creative engagement to address social, cultural, and environmental issues.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To become a leading force in using theatre and creative arts to drive sustainable development and social change across Ghana and beyond.",
  },
  coreValues: [
    "Community Engagement",
    "Creativity & Innovation",
    "Cultural Respect & Inclusivity",
    "Social Impact & Collaboration",
  ],
};

export const servicesData = [
  {
    title: "Community Theatre",
    description:
      "We design engaging performances highlighting local realities, encouraging reflective thinking and communual problem-solving.",
    icon: Theater,
  },
  {
    title: "Workshops & Training",
    description:
      "Capacity-building workshops for youth and educators, training them in storytelling, arts, and facilitation skills.",
    icon: Users,
  },
  {
    title: "Advocacy Campaigns",
    description:
      "Targeted localized campaigns on health, environmental sustainability, and human rights through public performances.",
    icon: Megaphone,
  },
  {
    title: "Cultural Preservation",
    description:
      "Promoting Ghanaian heritage by directly integrating traditional music, dance, and vibrant folklore into our plays.",
    icon: Music,
  },
];

export const homeProjectsData = [
  {
    title: "Environmental Hygiene Awareness (Assin Foso)",
    category: "Environment",
    description:
      "A highly successful project that utilized theatre to advocate for improved sanitation. The performance led to tangible community actions, including a massive cleanup exercise and a commitment from the Municipal Chief Executive.",
    image: null, // Placeholder for future use
    imageLabel: "[Project Image: Assin Foso]",
    categoryBg: "#24a186",
  },
  {
    title: "Dialogue on the Stage",
    category: "Advocacy",
    description:
      "A collaborative project featuring multiple theatre groups across Ghana. This platform uses theatrical performances to spark meaningful conversations on national issues, fostering unity, dialogue, and civic responsibility among citizens.",
    image: null,
    imageLabel: "[Project Image: Stage Dialogue]",
    categoryBg: "#24a186",
  },
];

export const statsData = [
  { value: "50+", label: "Communities Reached" },
  { value: "15+", label: "Active Projects" },
  { value: "10k+", label: "Audience Members" },
  { value: "20+", label: "Theatre Groups" },
];

export const testimonialsData = [
  {
    quote:
      "The environmental hygiene play staged here was an absolute eye-opener. It didn't just entertain us; it directly mobilized our entire community to take action. The massive cleanup exercise that followed is definitive proof of TFDI's remarkable impact.",
    name: "Municipal Chief Executive",
    title: "Assin Foso Municipality",
    avatarLetter: "M",
  },
  {
    quote:
      "Participating in the 'Dialogue on the Stage' workshops completely transformed how I view civic responsibility. TFDI consistently provides a safe space for youth to tackle complex national issues through the beauty of art and unity.",
    name: "Kwame Mensah",
    title: "Community Youth Leader",
    avatarLetter: "K",
  },
];
