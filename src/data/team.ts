export type TeamMemberCategory =
  | "board-of-directors"
  | "advisory-council"
  | "executive-management-team"
  | "team-leads";

export interface TeamMember {
  slug: string;
  name: string;
  position: string;
  category: TeamMemberCategory;
  intro: string;
  bio: string;
  photo: string;
  initials: string;
  heroPosition?: string;
}

export const teamCategories: Record<
  TeamMemberCategory,
  { title: string; description: string }
> = {
  "board-of-directors": {
    title: "Board of Directors",
    description:
      "Provides governance, strategic oversight, accountability, and policy direction for the organization.",
  },
  "advisory-council": {
    title: "Advisory Council",
    description:
      "Provides professional guidance, technical expertise, and strategic counsel to support DTI's mission.",
  },
  "executive-management-team": {
    title: "Executive Management Team",
    description:
      "Responsible for programme implementation, administration, stakeholder engagement, and day-to-day operations.",
  },
  "team-leads": {
    title: "Team Leads",
    description:
      "Heads of specialized teams driving creativity, operations, and technical excellence across DTI's programmes.",
  },
};

export const teamMembers: TeamMember[] = [
  {
    slug: "dr-daniel-appiah-adjei",
    name: "Dr. Daniel Appiah-Adjei",
    position: "Chairman, Board of Directors",
    category: "board-of-directors",
    initials: "DA",
    photo: "/team/daniel-appiah.jpeg",
    heroPosition: "center 10%",
    intro:
      "A Playwright/Poet and scholar at the University of Ghana whose work explores the African experience through theatre, symbols, and storytelling.",
    bio: "Dr. Daniel Appiah-Adjei is a Playwright/Poet at the Department of Theatre Arts, School of Performing Arts, University of Ghana, Legon. He was educated at Kumasi Anglican Secondary School and University of Ghana, Legon where he obtained his Master of Fine Arts Degree (MFA) in Theatre Arts and his Doctor of Philosophy (PhD) in Theatre Criticism.\n\nHis research/creative expertise as a playwright is grounded in the African experience and explores the intersection of race, class, identity and its impact on memory, personal integrity, and society. He strives to create relatable, flawed, and complex characters within multi-layered stories. He also focuses on researching and producing the work of African playwrights, and the history of archival collections that focus on the evolution of African theatre and storytelling. His scholarship is driven by a commitment to document and preserve under-researched narratives in symbolism of African theatre, particularly, how playwrights employ traditional symbols in their works.\n\nDr. Daniel Appiah-Adjei has written and published many plays, including Sansankroma (The Vessel of Our Destiny) (2023), Fremah and the Goldstool (2023), Freedom In Chains and Other Plays (Tweneboa Kodua, The Last Fools in Paradise) (2021), A Virgin Once Again (2019), Seek Ye (Children's Drama) (2021), Death On Trial (2017), The Tears of Lucifer (2015), and Atobra (2011).\n\nHe has other works on Drama and Theatre: Realism in African Drama: Atobra in Focus, Theatre of Symbols: Adinkra and Akan Clan Symbols in Modern Ghanaian Drama, Sharing Ideas on Adinkra Symbols, The Bleeding Flower (Novel), My Son's 20th Birth-Day Gift, The Beauty of Rhymes in Hymns: A Study of 72 Methodist Hymns, Matthew Chapter Four (Drama), and Instant Justice (Musical Drama).\n\nDr. Daniel Appiah-Adjei has several Poems and Choreo-poems to his credit. These include: The Bird in a Changing World, Song of Songs, The First Storm, Hell is Other People, The Divine Devotion, A Child Once Again, The Night is Young, Akua and It is Your Turn My Son.\n\nDr. Daniel Appiah-Adjei sees the authentic African Theatre as The Theatre of Symbols. That is reflected in his plays, novels, poems and academic papers. His interest as a scholar lies broadly on the promotion of Ghanaian and African Culture and youth development through the Arts.",
  },
  {
    slug: "ohenenana-kwadwo-gyembibi-mensah-bonsu",
    name: "Ohenenana Kwadwo Gyembibi Mensah Bonsu",
    position: "Board Member – Partnership & Resource Mobilization",
    category: "board-of-directors",
    initials: "KM",
    photo: "/team/ohenemana.jpeg",
    intro:
      "A dynamic young Ghanaian leader, youth advocate, and emerging public policy practitioner committed to accountable governance and youth empowerment.",
    bio: "Ohenenana Kwadwo Gyembibi Mensah Bonsu is a dynamic young Ghanaian leader, youth advocate, emerging public policy practitioner, and development-oriented professional committed to promoting principled leadership, accountable governance, youth empowerment, and sustainable national development.\n\nHe currently serves as a Youth Member of Parliament for the Ayawaso West Wuogon Constituency under the Youth Model Parliament initiative associated with the Parliament of Ghana. He is also a Member of the 68th UGSRC General Assembly, representing Commonwealth Hall, and serves as 1st Deputy Head of the Sponsorship Committee of the Political Science Students Association (POSSA).\n\nOhenenana also serves as an Ashanti Regional Ambassador with the International Youth Network, in connection with the youth, peace, and security agenda established under United Nations Security Council Resolution 2250. His leadership experiences have provided him with valuable exposure to youth participation, governance, advocacy, stakeholder engagement, and institutional leadership.\n\nBeyond his leadership and development interests, he is the Founder and CEO of Gyembibi Logistics, where he is developing entrepreneurial and organizational leadership experience.\n\nHis professional interests include governance, public policy, diplomacy, youth development, strategic leadership, institutional development, and community engagement. He is particularly passionate about creating opportunities for young people to participate meaningfully in decision-making and contribute to the development of their communities and country.\n\nOhenenana's leadership philosophy is grounded in accountability, integrity, inclusivity, transparency, courage, and service. He believes that effective leadership should strengthen institutions, amplify the voices of communities, create opportunities, and translate collective aspirations into meaningful and measurable results.\n\nAs a member of the Board of Directors of the Developmental Theatre Initiative (DTI), he contributes his perspectives on youth leadership, governance, institutional development, strategic partnerships, and community-focused development. His experience and commitment to youth empowerment align with DTI's vision of using theatre, creativity, and community participation to promote sustainable development and positive social change.\n\nHis personal leadership creed is: Servire Est Regnare — To Serve Is To Reign.",
  },
  {
    slug: "nana-yaw-owusu-ansah",
    name: "Nana Yaw Owusu-Ansah",
    position: "Board Member – Legal Affairs, Governance & Compliance",
    category: "board-of-directors",
    initials: "NO",
    photo: "/team/nana-owusu.jpeg",
    intro:
      "A researcher, legal professional, and advocate with expertise in law, criminology, and social justice.",
    bio: "Nana Yaw Owusu-Ansah is a researcher, legal professional, and advocate with a strong academic and professional interest in law, criminology, legal research, advocacy, and social justice.\n\nHe holds a degree in Criminology from the Philippines and a Bachelor of Laws (LLB) from the University of Ghana, where he graduated with Second Class Upper Honours. His interdisciplinary background in criminology and law provides him with a broad perspective on legal and societal issues and their implications for communities and institutions.\n\nNana Yaw has gained practical experience working with legal institutions and law firms, including Advent Chambers and EBA Law Consult. Through these experiences, he has developed competencies in legal research, legal analysis, legal writing, drafting, advocacy, and professional legal practice.\n\nDuring his time at the University of Ghana School of Law, he served two terms as Co-Head of the Library and Editorial Committee, contributing to initiatives focused on improving access to legal resources and strengthening a culture of research and academic excellence.\n\nHe has also served as an Editor of the University of Ghana Law School Journal, where he reviews and assesses articles submitted by student authors and provides editorial guidance to ensure that publications meet appropriate academic and editorial standards.\n\nBeyond his academic and professional work, Nana Yaw is passionate about research, writing, advocacy, social justice, and continuous learning. His interests include using law, criminology, and research to better understand societal challenges and contribute to institutional development and positive social change.\n\nAs a member of the Board of Directors of DTI, he contributes strategic oversight and governance expertise, bringing valuable perspectives in legal affairs, institutional governance, research, accountability, advocacy, and social justice. His role supports DTI in strengthening its governance framework, ensuring compliance with ethical and legal standards, and guiding the organization's development initiatives with a strong foundation in research, policy, and responsible institutional practice.",
  },
  {
    slug: "dr-joseph-offie-thompson",
    name: "Dr. Joseph Offie Thompson",
    position: "Advisory Council Member",
    category: "advisory-council",
    initials: "JT",
    photo: "/team/joseph-offie.jpeg",
    intro:
      "A Senior Lecturer at the University of Ghana and Research Chair of AAPG, specializing in geophysics, tectonics, and structural geology.",
    bio: "Dr. Joseph Offei Thompson is a Senior Lecturer in the Department of Earth Science at the University of Ghana and the Research Chair of the American Association of Petroleum Geologists (AAPG).\n\nHe is also the Sports Tutor of Jubilee Hall, University of Ghana.\n\nAcademic Background and Qualifications:\n• BSc – University of Ghana\n• MSc – France (University of Lille 1)\n• PhD – France (University of Rennes 1)\n\nPrimary Research Focus:\n\nDr. Thompson specializes in geophysics, tectonics, and structural geology, with research emphasis on:\n• Tectonics and Geodynamics: Passive margin formation, rift dynamics, crustal structure, and supercontinent cycles (including Rodinia–Gondwana).\n• Seismic Data Analysis: Integration of wide-angle and reflection seismic datasets to study continental crusts and deep sedimentary basins.\n• Regional Geology: Structure and evolution of continental margins in West Africa (e.g., West African Craton) and East Africa (e.g., Mozambique Margin, Limpopo Corridor).\n\nDr. Thompson has also reviewed and published a number of high impact scientific research journals.",
  },
  {
    slug: "lady-pastor-sussana-hammond",
    name: "Lady Pastor Sussana N. S. Hammond",
    position: "Advisory Council Member",
    category: "advisory-council",
    initials: "SH",
    photo: "/team/lady-pastor-sussana.jpeg",
    intro:
      "An educator, children's minister, and certified counselor with decades of experience in teaching, ministry, and community service.",
    bio: "Childhood Life\n\nPs. Mrs. Sussana N. S. Hammond Atisu was born in Osu, a suburb of Accra on Wednesday, 27th December, 1972 to Mr. Alexandra A. Hammond and Mrs. Matilda Asamaniwaa Hammond (deceased). She is the first of seven (7) siblings. She gave her life to Jesus Christ in 1984; was baptized in water in 1985; and received the Holy Spirit Baptism the same time she was baptized in water. She started teaching her father's Goodnews Club at age sixteen (16) with so much love and zeal for the work of God. Her passion was to teach little children.\n\nAcademic Life\n\nShe started her early childhood education in Kumasi, Dekyemso Nursery School and later on at the Harrow International School, Abeka-Accra where she wrote the Common Entrance Examination in 1986. She had her secondary school education at the Swedru Secondary School from 1986 to 1991. She enrolled at the Akrokerri Teacher Training College in 1991 to be trained as a professional teacher. She completed in 1994 with a 3 Year Post Secondary Teachers Cert A, awarded by the University of Cape Coast. She later had admission to the University of Ghana, Legon to pursue BSc Adm. in 2009 and graduated in 2012. She gained admission to the Assemblies of God Theological Seminary (AGTS) in 2015 to prepare spiritually and theologically for ministry. She graduated with Diploma in Theology in 2018. She is also a Certified Professional Counselor from the College of Counseling and Psychology (CCP).\n\nMinistry Life\n\nAt the Training College, she and other colleague students helped Ps. Tito Adjei, now Rev. Dr. Tito Adjei (Ashanti Regional Superintendent) to start the Akrokerri Assemblies of God Church with the little children in the Akrokerri community. After her training she was posted to Ada Songoya and was the only young teacher who was interested in teaching the little children at church. She has always been with the Children's Ministry. She served the following Children's Ministries: North Kaneshie Assemblies of God Church (1991–1998); Full Life Assemblies of God Church (1998–2006); Kwabenya Central Assemblies of God Church (2006–2014); and Living Springs Assemblies of God Church (2014–date) where she now serves as the Associate Pastor In-Charge of Women and Children Ministries. She also has a deep passion for Social Work, Rural Evangelism and Missions in general.\n\nCareer Life\n\nShe worked with the Presbyterian Education Unit in the Greater Accra Region from 1994–2002. She has taught in the following schools: Ada-Songoya Presbyterian Primary School (1994–1996); La Presbyterian Primary School (1996–1999); Apenkwa Presbyterian Primary School (1999–2002); and Ghana Atomic Energy Commission (GAEC) Basic School (2002–date). She loves her job as a Lower Primary and Nursery Teacher and enjoys singing the children songs and rhymes.\n\nFamily Life\n\nShe is married to Rev. Michael Atisu and the good Lord has blessed them with three biological children (Selasie, Delali, and Aseye) and many other children. She is a family oriented person and has been a strong pillar behind the husband's ministry for the past 22 years.",
  },
  {
    slug: "enoch-aggrey",
    name: "Enoch Aggrey",
    position: "Founder & Executive Director",
    category: "executive-management-team",
    initials: "EA",
    photo: "/gallery/founder.jpeg",
    intro:
      "A Ghanaian Theatre for Development Practitioner, Community Development Advocate, Educator, and Social Impact Leader committed to using theatre and participatory approaches to promote positive behavioural change and sustainable development.",
    bio: 'Enoch Aggrey is a Ghanaian Theatre for Development Practitioner, Community Development Advocate, Educator, and Social Impact Leader committed to using theatre, community engagement, and participatory approaches to promote positive behavioural change and sustainable development.\n\nHe holds a Bachelor of Arts degree from the University of Ghana, where he specialized in Theatre for Development under the mentorship and guidance of Dr. Felicia Owusu-Ansah of the Department of Theatre Arts. Through his academic training and field experiences, he developed a strong passion for addressing social, environmental, public health, and youth-related challenges through community-centered interventions.\n\nEnoch has over three years of experience in Theatre for Development practice, research, and community engagement, as well as four years of experience in primary and Junior High School teaching. His background in education has strengthened his commitment to youth development, mentorship, and participatory learning. In recognition of his academic excellence and leadership potential, he was selected as one of the outstanding students in the Department of Theatre Arts and was also chosen for the Department\'s Theatre Mentorship Programme.\n\nHis work focuses on empowering communities to identify challenges, facilitate dialogue, and collectively develop solutions that promote lasting behavioural and social change. He strongly believes that sustainable development is achieved when communities are actively involved in understanding and addressing issues that affect their lives.\n\nAs part of his Theatre for Development practice, Enoch has led and participated in several community-based projects, including:\n• Dialogue on the Stage: Using Theatre for Development to Navigate Tradition and Modernity in Contemporary Marriage Practices (formerly Bridging the Gap)\n• Love Beyond Romance: Exploring Love, Responsibility, and Youth Mental Health through Theatre for Development\n• Clean Earth, Clear Future, an environmental sanitation and advocacy campaign promoting responsible environmental behaviour and community ownership\n\nBeyond Theatre for Development, Enoch has led numerous student activity projects and held various leadership positions in educational, community, and faith-based organizations, demonstrating a strong commitment to service, youth development, organizational leadership, and community transformation.\n\nDriven by the conviction that development begins with people and that meaningful change requires participation, Enoch founded the Developmental Theatre Initiative (DTI) to create a sustainable platform for using theatre and creative engagement to address societal challenges, empower communities, and contribute to national development.\n\nHis areas of interest include:\n• Theatre for Development\n• Youth Development and Empowerment\n• Mental Health and Well-being\n• Environmental Sustainability and Sanitation\n• Public Health Education\n• Behavioural Change Communication\n• Community Development\n• Arts, Culture, and Social Transformation\n\nVision\nTo contribute to building a society where communities are empowered to take ownership of their development through participation, dialogue, creativity, and collective action.\n\nPersonal Philosophy\n"Teach me and I may forget, show me and I may remember, involve me and I may understand."\n\nEnoch believes that lasting development occurs when people are not merely informed about problems but are actively involved in identifying, understanding, and solving them.',
  },
  {
    slug: "mr-osman-dauda",
    name: "Mr. Osman Dauda",
    position: "Public Relations Officer",
    category: "executive-management-team",
    initials: "OD",
    photo: "/team/osman-douda.jpeg",
    intro:
      "A Ghanaian educator, writer, and emerging entrepreneur with a passion for education, creativity, and community impact.",
    bio: "Osman Dauda is a Ghanaian educator, writer, school administrator, and emerging entrepreneur with a strong passion for education, personal development, creativity, and community impact. He holds a Bachelor of Education in JHS Education, with a specialization in Ghanaian Language (Asante Twi) and English, from Foso College of Education.\n\nHe has experience in teaching, academic coordination, school administration, home tutoring, writing, and youth-focused initiatives. Osman is dedicated to creating opportunities that empower young people and contribute meaningfully to society.\n\nHe also has a keen interest in entrepreneurship, digital skills, educational technology, and creative projects that translate ideas into practical, impactful solutions.",
  },
  {
    slug: "patricia-mensah",
    name: "Patricia Mensah",
    position: "Creative & Design Team Head",
    category: "team-leads",
    initials: "PM",
    photo: "/team/patricia.jpeg",
    intro:
      "A creative professional with a background in Information Technology and a passion for visual storytelling and design.",
    bio: "Patricia Mensah is the Creative and Design Team Head at the Developmental Theatre Initiative (DTI), where she leads the organization's visual identity, branding, and creative communications.\n\nShe holds a degree in Information Technology from the University of Ghana, where she developed a strong foundation in technology, digital tools, and creative problem-solving. Her academic background in IT, combined with her natural eye for design, enables her to bridge the gap between technology and creative expression.\n\nAs the graphic designer for DTI's executive management team, Patricia is responsible for creating compelling visual content that communicates the organization's mission, projects, and impact. From promotional materials and event graphics to social media content and brand assets, her work ensures that DTI's visual presence is professional, consistent, and impactful.\n\nPatricia's creative approach is rooted in her belief that design is a powerful tool for communication and social engagement. She draws inspiration from her hobbies — reading and drawing — which feed her imagination and deepen her understanding of visual storytelling.\n\nHer areas of expertise include:\n• Graphic Design and Visual Branding\n• Digital Media and Content Creation\n• Print and Publication Design\n• Creative Direction and Art Direction\n• Visual Communication for Social Impact",
  },
  {
    slug: "evans-acheampong",
    name: "Evans Acheampong",
    position: "IT & Software Team Lead",
    category: "team-leads",
    initials: "EA",
    photo: "/team/evans.jpg",
    intro:
      "A fullstack developer with a background in Computer Engineering, specializing in Fintech and SaaS application development.",
    bio: "Evans Acheampong is the IT and Software Team Lead at the Developmental Theatre Initiative (DTI), where he oversees the organization's technology infrastructure, digital platforms, and software development initiatives.\n\nHe holds a degree in Computer Engineering from the University of Ghana, where he built a strong foundation in software engineering, systems design, and computational problem-solving. His academic training, combined with hands-on industry experience, equips him to architect and build robust, scalable digital solutions.\n\nProfessionally, Evans works in Fintech, where he develops and maintains financial technology systems that demand security, reliability, and performance. He has a keen interest in building Software-as-a-Service (SaaS) applications — designing products that are accessible, user-centric, and built to scale.\n\nAt DTI, Evans leads the IT team in developing and maintaining the organization's digital ecosystem, including the volunteer management platform, public website, and internal tools. His work ensures that DTI's technology infrastructure is modern, secure, and aligned with the organization's mission.\n\nHis areas of expertise include:\n• Fullstack Web Development\n• Fintech Systems and Payment Integration\n• SaaS Application Architecture\n• API Design and Development\n• Cloud Infrastructure and DevOps\n• Database Design and Optimization\n• UI/UX Implementation",
  },
  {
    slug: "prof-yaw-delali-bensah",
    name: "Prof. Yaw Delali Bensah",
    position: "Deputy Chairperson Board of Directors",
    category: "board-of-directors",
    initials: "YB",
    photo: "/team/prof-bensah.jpg",
    heroPosition: "center 20%",
    intro:
      "An Associate Professor of Materials Science and Engineering at the University of Ghana, pioneering innovations in biofuels, battery energy materials, and carbon technology.",
    bio: "Yaw Delali Bensah is a materials scientist, technologist, and Associate Professor of Materials Science and Engineering at the University of Ghana, where he has mentored over 120 graduate (Master's and Ph.D.) and undergraduate students.\n\nHe advances innovations in battery energy materials, carbon technology, biofuels, and materials for water processing, with several products nearing commercial market readiness. Professor Bensah earned his BSc at KNUST (Ghana), his MSc at NTNU (Norway), and his PhD at the University of Cincinnati (USA).\n\nHe serves widely as a journal editor and reviewer. Yaw Delali Bensah regularly serves as a consultant to local and international industries. Professionally well-rounded, his personal interests include sports, cosmology, and the intersections of religion, culture, race, and ethnicity. He is a Christian who worships with the Assemblies of God denomination, is married to Maame Afia Pokuaa Bensah, and is blessed with four children: Yudah, Yiram, Akyaa-Sika, and Anani-Konadu.",
  },
  {
    slug: "jacob-johnson-attakpah",
    name: "Jacob Johnson Attakpah",
    position: "Member, Board of Directors",
    category: "board-of-directors",
    initials: "JA",
    photo: "/team/Attakpah.jpg",
    heroPosition: "center 25%",
    intro:
      "A Ghanaian climate and circular economy leader serving as Zero Waste Director at the Green Africa Youth Organization (GAYO).",
    bio: "Jacob Johnson Attakpah is a Ghanaian climate and circular economy leader whose work spans zero waste systems, climate policy, and sustainable urban development. He currently serves as Zero Waste Director at the Green Africa Youth Organization (GAYO), where he leads strategy, partnerships, and fundraising for zero waste programming in Ghana and across Africa.\n\nOver the past several years, he has helped design and scale city and district-level waste and climate initiatives, from Ghana to Uganda, Botswana, and most recently Benin. Jacob has represented Ghana and African civil society in major international spaces, including the Intergovernmental Negotiating Committee sessions on plastic pollution, COP processes, and zero waste conferences globally.\n\nHis work has been recognised through awards including the Ghana National Plastic Action Partnership Community Champion Award (2025) and the Earthshot Prize Clean Our Air category (2024). His work has included supporting the review of Ghana's Nationally Determined Contributions for the WASH sector and helping shape broader climate rationale and policy inputs.\n\nWith academic training in climate science, sustainable development, and geoinformation science, he brings both technical insight and practical experience to conversations on waste, plastics, and climate action.",
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
