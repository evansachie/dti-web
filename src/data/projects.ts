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
        "Environmental challenges remain among the most critical development concerns facing communities across Ghana. Issues including improper waste disposal, plastic pollution, poor sanitation practices, environmental degradation, and limited public participation continue to affect public health, livelihoods, and sustainable development. While several sanitation and environmental interventions exist, many focus mainly on infrastructure, clean-up activities, or enforcement. However, achieving long-term environmental sustainability requires a transformation of attitudes, behaviours, and community ownership. The Clean Earth, Clear Future (CECF) Programme responds to this need through an integrated, three-year approach that combines environmental education, Theatre for Development, community participation, and practical environmental action — using theatre, storytelling, and participatory communication as central methods for education, advocacy, dialogue, community empowerment, and behavioural change.",
      aim: "To promote sustainable environmental behaviour and build environmentally responsible communities across Ghana through theatre, education, innovation, and community participation.",
      objectives: [
        "To increase environmental awareness among students, teachers, and community members",
        "To promote responsible waste management and sustainable sanitation practices",
        "To use Theatre for Development to influence environmental attitudes and behaviours",
        "To build youth leadership through environmental clubs, Green Ambassador, and Green Leader programmes",
        "To support waste-to-wealth initiatives and green innovation",
        "To strengthen community participation in environmental protection and advocacy",
        "To establish a sustainable system for monitoring, evaluating, and learning from environmental behaviour change",
      ],
      coreComponents: [
        "Programme management and personnel",
        "School environmental education and youth leadership",
        "Community environmental advocacy and action",
        "Theatre for Development behavioural change campaigns",
        "Environmental clubs and Green Ambassadors",
        "Waste-to-wealth and green innovation",
        "Community clean-up and environmental action campaigns",
        "Media, advocacy, and communication",
        "Monitoring, evaluation, and learning",
        "Logistics, administration, and programme strengthening",
      ],
      targetAudience: [
        "Students and teachers in schools",
        "Youth groups and student leaders",
        "Community members and residents",
        "Environmental clubs and Green Ambassadors",
        "Local government authorities and community leaders",
        "Market women and traders",
      ],
      geographicScope:
        "Clean Earth, Clear Future operates nationwide but will begin with a pilot phase in Assin Foso and surrounding communities in the Central Region of Ghana, with planned expansion to other regions based on pilot learnings.",
      implementationStrategy: {
        phase1: [
          "Programme leadership, coordination, and field implementation (Assin Foso pilot)",
          "School environmental education and engagement in selected pilot schools",
        ],
        phase2: [
          "Community environmental advocacy, clean-up campaigns, and Theatre for Development performances",
          "Establishment of environmental clubs and training of Green Ambassadors",
        ],
        phase3: [
          "Waste-to-wealth and green innovation support",
          "Media, advocacy, and communication campaigns",
          "Continuous monitoring, evaluation, and learning with scale-up to nationwide implementation",
        ],
      },
      stakeholders: [
        "Government institutions and agencies",
        "Members of Parliament",
        "Metropolitan, Municipal, and District Assemblies",
        "NGOs and civil society organizations",
        "Schools and education institutions",
        "Corporate sponsors, waste management companies, and development partners",
        "Media organizations",
      ],
      expectedOutcomes: [
        "Increased awareness and understanding of environmental issues",
        "Improved sanitation and waste management behaviours",
        "Stronger youth environmental leadership",
        "Increased community participation in environmental protection",
        "Adoption of recycling and green innovation",
        "A replicable model for nationwide implementation",
      ],
      sustainability: [
        "Collaboration with key government structures, institutions, and MPs",
        "Community ownership of environmental protection",
        "Environmental clubs and volunteer networks",
        "Established theatre scripts, training materials, and documentation",
        "A replicable framework for scaling to other regions",
      ],
      galleryImages: ["/gallery/clean-earth.jpg"],
    },
  },
  {
    slug: "school-theatre-workshop",
    title: "School Theatre Workshop",
    subtitle: "Empowering Students Through Participatory Theatre",
    category: "Youth Development",
    location: "Assin Foso, Central Region (Pilot) / Nationwide",
    duration: "3 months (Pilot) / 12 months (Full Scale)",
    status: "Upcoming",
    description:
      "A school-based Theatre for Development programme that visits schools to train students in participatory theatre, develop short plays, and build confidence, creativity, and leadership skills among young people.",
    heroImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    details: {
      background:
        "Many schools in Ghana lack creative and engaging platforms for students to develop soft skills such as confidence, critical thinking, teamwork, and communication. Traditional classroom methods often leave little room for creative expression, particularly in underserved communities. Theatre for Development offers a proven participatory approach that empowers young people to explore social issues, express themselves, and develop leadership skills through drama and performance.",
      aim: "To empower students through participatory theatre training, creativity development, and leadership building in schools across Ghana.",
      objectives: [
        "To introduce students to Theatre for Development methodologies",
        "To build confidence, creativity, and communication skills among students",
        "To develop short plays addressing social issues relevant to young people",
        "To train student facilitators who can continue theatre activities in their schools",
        "To create a replicable model for school-based theatre programmes nationwide",
      ],
      coreComponents: [
        "Interactive theatre workshops in partner schools",
        "Training in improvisation, devising, and performance skills",
        "Development of short plays on social themes",
        "Student-led performances and community showcases",
        "Mentorship and capacity building for student facilitators",
        "Documentation of best practices and impact stories",
      ],
      targetAudience: [
        "Junior and Senior High School students",
        "Teachers and school administrators",
        "Youth groups and community organizations",
        "Educational institutions nationwide",
      ],
      geographicScope:
        "The programme will begin with a pilot phase in 3–5 schools in Assin Foso and surrounding communities in the Central Region, with plans to scale to other regions.",
      implementationStrategy: {
        phase1: [
          "Partner with 3–5 schools in the pilot area",
          "Conduct baseline assessments of student needs and interests",
        ],
        phase2: [
          "Deliver weekly theatre workshops over 8–12 weeks",
          "Guide students in developing and performing short plays",
        ],
        phase3: [
          "Organize inter-school showcases and community performances",
          "Evaluate impact and prepare for scale-up to additional schools",
        ],
      },
      stakeholders: [
        "Ghana Education Service",
        "School heads and teachers",
        "Parent-Teacher Associations",
        "Community leaders",
        "Youth organizations",
        "Corporate sponsors",
      ],
      expectedOutcomes: [
        "Improved confidence and communication skills among students",
        "Increased engagement in creative and leadership activities",
        "Development of short plays addressing social issues",
        "Trained student facilitators capable of leading theatre activities",
        "A replicable model for school-based theatre programmes",
      ],
      sustainability: [
        "Training of teacher facilitators to sustain programme activities",
        "Establishment of school drama clubs",
        "Partnerships with educational institutions",
        "Integration of theatre activities into school curricula",
      ],
      galleryImages: [],
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
  {
    slug: "working-but-not-working",
    title: "Working But Not Working",
    subtitle:
      "Exploring Youth Employment Reality Through Theatre for Development",
    category: "Youth Development",
    location: "Madina, Greater Accra (Pilot)",
    duration: "September – December 2026",
    status: "Upcoming",
    description:
      "A Theatre for Development project exploring youth employment, underemployment, and meaningful work. Through participatory research, storytelling, and theatre, the project brings young people together to examine the gap between being employed and experiencing meaningful, dignified, and adequate employment — culminating in a public performance and structured community dialogue.",
    heroImage:
      "https://images.unsplash.com/photo-1573167691330-597fd91bc6c7?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      background:
        "Discussions about youth employment often focus on a simple question: is a young person employed or unemployed? However, the realities of work are far more complex. A young person may be working yet earning an inadequate income, working fewer hours than desired, performing work unrelated to their education or skills, experiencing limited opportunities for progression, or working under conditions that provide little security, dignity, or personal development. WORKING BUT NOT WORKING explores the gap between being employed and experiencing meaningful employment. The project recognises that employment cannot always be understood simply by asking whether a person has a job, and instead asks: When does having a job become meaningful employment? Using Theatre for Development as a participatory methodology, the project brings together young people in Madina to examine their own experiences and perceptions of employment, explore recurring issues facing young people, and transform these experiences into stories and theatrical material through listening, exploration, reflection, expression, and dialogue.",
      aim: "To use Theatre for Development to explore youth underemployment and meaningful employment, amplify young people's experiences, and create platforms for community dialogue and reflection on better economic opportunities for young people.",
      objectives: [
        "To understand the experiences, perceptions, and challenges of young people in relation to employment, underemployment, and meaningful work",
        "To identify key issues affecting young people's ability to access and sustain meaningful employment",
        "To provide safe and inclusive participatory spaces for young people to discuss, reflect on, and creatively explore employment experiences",
        "To use Theatre for Development to transform participants' experiences, perspectives, and identified social issues into stories, scenes, and theatrical material",
        "To promote public dialogue on the realities of youth employment and underemployment",
        "To document lessons and recommendations to inform future youth employment and Theatre for Development interventions",
      ],
      coreComponents: [
        "Participatory Theatre for Development as the central methodology",
        "Preliminary fieldwork and community entry in Madina",
        "Youth employment reality survey",
        "Eight participatory TfD sessions (approximately 30–40 core participants)",
        "Theatre workshops using games, improvisation, role-play, image theatre, storytelling, and collective reflection",
        "Theatre development, script creation, and rehearsals",
        "Public performance in December followed by structured dialogue",
        "Communications, public engagement, and awareness campaign",
        "Monitoring, evaluation, and learning",
        "Documentation of process, stories, and outcomes",
      ],
      targetAudience: [
        "Approximately 30–40 young people (core participants)",
        "Young people who are employed (full-time, part-time, casual, or gig work)",
        "Young people who are self-employed or entrepreneurs",
        "Young people combining education and employment",
        "Freelancers and gig workers",
        "Young people who are underemployed or searching for employment",
        "The wider community through the public performance and dialogue",
      ],
      geographicScope:
        "Working But Not Working will initially be implemented in Madina, Greater Accra, Ghana, with the potential to be adapted for implementation in other communities based on pilot learnings.",
      implementationStrategy: {
        phase1: [
          "Preliminary fieldwork, community entry, and site mapping in Madina",
          "Exploratory youth employment survey and stakeholder identification",
          "Building relationships and understanding the local employment context",
        ],
        phase2: [
          "Eight participatory Theatre for Development sessions (30–40 participants)",
          "Exploration of employment experiences through games, storytelling, improvisation, role-play, and image theatre",
          "Character and scene development, and collective reflection",
        ],
        phase3: [
          "Theatre development, story selection, script and performance development, and rehearsals",
          "Public performance in December, followed by a structured post-performance dialogue",
          "Project documentation, learning, and recommendations for future DTI youth employment interventions",
        ],
      },
      stakeholders: [
        "Youth groups and young people in Madina",
        "Community leaders",
        "Educational and training institutions",
        "Employers and businesses",
        "Entrepreneurs",
        "Civil society organizations",
        "Government institutions",
        "Development organizations",
        "Media organizations",
        "Cultural and arts organizations and organizations supporting youth skills and economic opportunity",
      ],
      expectedOutcomes: [
        "Increased awareness of youth underemployment and the quality of employment",
        "Greater understanding of what young people consider meaningful employment",
        "Increased opportunities for young people to express their employment experiences",
        "Greater community discussion of the quality and adequacy of employment",
        "Increased recognition of youth perspectives in employment conversations",
        "Improved capacity of DTI to design future interventions addressing youth employment and underemployment",
      ],
      sustainability: [
        "The Madina implementation serves as a pilot for a broader DTI programme addressing youth employment and underemployment",
        "Evidence, stories, methodologies, and documentation from the pilot",
        "Unstructured link to partnerships in youth development, employment, entrepreneurship, skills development, and community development",
        "A participatory model adaptable to other communities",
      ],
      galleryImages: ["/gallery/working-but-not-working.jpg"],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((p) => p.slug === slug);
}
