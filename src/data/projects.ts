import { ReactNode } from "react";

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  duration: string;
  status: string;
  heroImage: string;
  description: string;
  details: {
    background: string | ReactNode;
    aim: string;
    objectives: string[];
    coreComponents: string[];
    targetAudience: string[];
    geographicScope: string;
    implementationStrategy: {
      phase1: string[];
      phase2: string[];
      phase3: string[];
    };
    stakeholders: string[];
    expectedOutcomes: string[];
    sustainability: string[];
    galleryImages?: string[];
  };
}

export const projectsData: ProjectDetail[] = [
  {
    slug: "clean-earth-clear-future",
    title: "Clean Earth, Clear Future",
    subtitle:
      "A Theatre for Development Approach to Environmental Hygiene in Ghana",
    category: "Health & Sanitation",
    location: "Assin Foso, Central Region (Pilot) / Nationwide",
    duration: "3 months (Pilot) / 12 months (Full Scale)",
    status: "Upcoming",
    description:
      "Environmental Hygiene Awareness Project is focused on educating communities on proper sanitation practices through theatre performances, health walks, clean-up exercises, and demonstration of proper waste disposal.",
    heroImage:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80",
    details: {
      background:
        "Environmental sanitation remains a major developmental challenge in Ghana, affecting public health, environmental sustainability, and overall quality of life. Many communities continue to struggle with improper waste disposal, plastic pollution, open defecation, and poor drainage systems. While government and institutional interventions have been implemented over the years, there is still a significant gap in community-level behavioral change. This calls for innovative, participatory, and culturally relevant approaches that actively involve people in finding solutions to sanitation challenges.",
      aim: "To promote environmental hygiene and sustainable sanitation practices in communities across Ghana through Theatre for Development.",
      objectives: [
        "To increase awareness of environmental sanitation issues",
        "To influence positive behavioral change through participatory theatre",
        "To engage community members and stakeholders in sanitation advocacy",
        "To reduce sanitation-related health risks through education and community action",
      ],
      coreComponents: [
        "Community-based drama performances on sanitation issues",
        "Monthly awareness campaigns in selected communities",
        "Health walks and clean-up exercises",
        "Stakeholder engagement meetings (chiefs, assembly members, youth leaders)",
        "Educational outreach in schools, markets, and public spaces",
        "Media engagement and publicity campaigns",
        "Establishment of a major dumping demonstration site as a practical model for waste management",
      ],
      targetAudience: [
        "Communities within Assin Foso and surrounding areas (pilot phase)",
        "Youth groups and students",
        "Market women and traders",
        "Local government authorities and community leaders",
      ],
      geographicScope:
        "Clean Earth, Clear Future operates nationwide but will begin with a pilot phase in Assin Foso and surrounding communities in the Central Region of Ghana.",
      implementationStrategy: {
        phase1: [
          "Use of local languages and culturally relevant performances in Assin Foso",
          "Collaboration with local leaders and institutions",
        ],
        phase2: [
          "Integration of education with entertainment (edutainment)",
          "Establishment of dumping demonstration sites",
        ],
        phase3: [
          "Continuous monitoring and community feedback",
          "Scale-up to nationwide implementation based on pilot learnings",
        ],
      },
      stakeholders: [
        "Government institutions",
        "Members of Parliament",
        "Metropolitan, Municipal, and District Assemblies",
        "NGOs and civil society organizations",
        "Corporate sponsors and development partners",
        "Media organizations",
      ],
      expectedOutcomes: [
        "Increased awareness and understanding of sanitation practices",
        "Improved attitudes and behaviors toward environmental cleanliness",
        "Enhanced community participation in sanitation initiatives",
        "Reduction in indiscriminate waste disposal",
        "A replicable model for nationwide implementation",
      ],
      sustainability: [
        "Collaboration with key government structures and MPs",
        "Community ownership of environmental cleanliness",
        "Demonstration models for waste management",
        "Replicable framework for scaling to other regions",
      ],
      galleryImages: ["/gallery/clean-earth.jpg"],
    },
  },
  {
    slug: "love-beyond-romance",
    title: "Love Beyond Romance",
    subtitle: "Exploring Love, Responsibility, and Youth Mental Health",
    category: "Mental Health",
    location: "Theatre Department, University of Ghana",
    duration: "31/03/2026",
    status: "Recent",
    description:
      "A participatory project across Ghana that uses theatrical narratives to navigate the complexities of modern and traditional responsibility within relationships.",
    heroImage: "/gallery/love-project.jpg",
    details: {
      background:
        "In recent years, Ghana has witnessed a growing concern around youth mental health, particularly among young people navigating relationships, academic pressures, unemployment, and social expectations. The influence of social media and modern relationship culture has further shaped unrealistic perceptions of love, often leading to emotional distress, anxiety, and unhealthy behavioral patterns. Despite the increasing need for mental health awareness, many young people lack safe, engaging, and culturally relevant platforms to discuss these issues openly. Love Beyond Romance was initially developed as a community-based Theatre for Development (TfD) project at the University of Ghana, where it successfully engaged students through performance, dialogue, and participatory activities. Building on this pilot success, the project seeks to expand into a national initiative to reach a wider youth population across Ghana.",
      aim: "To promote youth mental health awareness, emotional resilience, and responsible relationship practices across Ghana through participatory theatre and community engagement.",
      objectives: [
        "To increase awareness of youth mental health issues nationwide.",
        "To promote responsible attitudes toward love and relationships among young people.",
        "To create safe platforms for dialogue using Theatre for Development.",
        "To reduce stigma associated with mental health discussions.",
        "To build partnerships with institutions for sustained youth development programmes.",
      ],
      coreComponents: [
        "Community Health Walks (“Steps Beyond Roses”)",
        "Basic Health Screening & Mental Health Support",
        "Interactive Youth Engagement Activities",
        "Theatre for Development Performances",
        "Facilitated Dialogue Sessions with Experts",
        "Media Coverage & TV/Online Programming",
      ],
      targetAudience: [
        "Youth (15–35 years)",
        "University and SHS students",
        "Youth groups and community organizations",
        "Educators and youth advocates",
      ],
      geographicScope:
        "The project will be implemented across all regions of Ghana, beginning with a pilot expansion phase in selected regions before scaling nationwide.",
      implementationStrategy: {
        phase1: [
          "Build on University of Ghana success",
          "Extend to selected universities and communities",
        ],
        phase2: [
          "Collaborate with media houses such as TV3 Network Limited",
          "Develop a TV and digital series",
        ],
        phase3: [
          "Regional activations across Ghana",
          "Institutional partnerships",
        ],
      },
      stakeholders: [
        "Ghana Health Service",
        "Mental Health Authority Ghana",
        "Ministry of Youth and Sports Ghana",
        "Universities and educational institutions",
        "Media organizations",
        "NGOs and corporate sponsors",
      ],
      expectedOutcomes: [
        "Increased national awareness of youth mental health",
        "Improved understanding of responsible relationships",
        "Reduced stigma surrounding mental health issues",
        "Strengthened youth engagement and participation",
        "Established sustainable partnerships for long-term impact",
      ],
      sustainability: [
        "Institutional partnerships",
        "Media integration (TV & digital platforms)",
        "Continuous community engagement",
        "Capacity building for youth facilitators",
      ],
      galleryImages: [
        "/gallery/2.jpg",
        "/gallery/16.jpg",
        "/gallery/19.jpg",
        "/gallery/18.jpg",
        "/gallery/45.jpeg",
        "/gallery/46.jpeg",
      ],
    },
  },
  {
    slug: "dialogue-on-the-stage",
    title: "Dialogue on the Stage",
    subtitle: "Navigating Tradition and Modernity in Marriage",
    category: "Culture & Development",
    location: "Assin Foso, Central Region, Ghana",
    duration: "17th May 2025",
    status: "Previous",
    description:
      "A Theatre for Development project exploring cultural practices and modern influences in marriage through a stage play titled 'The Price of Love.'",
    heroImage: "/gallery/12.jpg",
    details: {
      background:
        "Marriage remains a central institution in Ghanaian society, deeply rooted in cultural traditions and values. However, contemporary influences such as globalization, religion, urbanization, and social media have significantly reshaped perceptions and practices surrounding marriage. This has created tensions between traditional expectations and modern realities, especially among young people. In many communities, these tensions manifest in conflicts over issues such as bride price, gender roles, family expectations, and relationship dynamics. Additionally, rising cases of relationship breakdowns, mistrust, and emotional trauma among the youth highlight the urgent need for open dialogue and community engagement. There is a growing disconnect between traditional marriage practices and modern relationship expectations, leading to confusion, conflict, and dissatisfaction among young people. Many individuals lack safe and structured platforms to openly discuss these challenges, resulting in misconceptions, unhealthy relationships, and fear of commitment.",
      aim: "To use Theatre for Development as a participatory tool to stimulate dialogue and promote understanding between traditional and modern perspectives on marriage among young people and community members.",
      objectives: [
        "To create awareness of the evolving nature of marriage practices in contemporary Ghana.",
        "To provide a platform for open dialogue on relationship challenges and expectations.",
        "To explore the impact of cultural traditions and modern influences on marriage.",
        "To encourage critical reflection and promote positive behavioral change among participants.",
        "To foster mutual understanding between generations on issues of marriage and relationships.",
      ],
      coreComponents: [
        "Community Entry and Engagement",
        "Data Collection (real-life experiences and perspectives)",
        "Devising the Performance (scripted play 'The Price of Love')",
        "Staging the Performance in a community setting",
        "Post-Performance Dialogue and facilitated discussions",
      ],
      targetAudience: [
        "Youth and young adults",
        "Couples and individuals in relationships",
        "Community leaders and elders",
        "Religious leaders",
        "General community members",
      ],
      geographicScope: "Assin Foso, Central Region, Ghana",
      implementationStrategy: {
        phase1: [
          "Engagement with community members to identify key concerns",
          "Gathering real-life experiences through discussions and interviews",
        ],
        phase2: [
          "Development of the scripted play 'The Price of Love'",
          "Staging of the play in a community setting",
        ],
        phase3: [
          "Facilitated post-performance discussions where audience members shared opinions",
          "Exploration of possible solutions to relationship challenges",
        ],
      },
      stakeholders: [
        "Enoch Aggrey (Lead Facilitator)",
        "Dennis Boateng Baffuor (Collaborator)",
        "Regina Totimeh (Collaborator)",
        "Community members and leadership",
      ],
      expectedOutcomes: [
        "Increased awareness of the complexities of modern relationships",
        "Improved communication and understanding among participants",
        "Positive shifts in attitudes towards marriage and relationships",
        "Empowerment of participants to make informed relationship choices",
        "Strengthened community dialogue on sensitive social issues",
      ],
      sustainability: [
        "Empowerment of participants to make informed relationship choices",
        "Strengthened community dialogue structures",
        "Positive shifts in generational mutual understanding",
      ],
      galleryImages: [
        "/gallery/12.jpg",
        "/gallery/40.jpg",
        "/gallery/41.jpg",
        "/gallery/42.jpg",
        "/gallery/43.jpg",
        "/gallery/44.jpg",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((p) => p.slug === slug);
}
