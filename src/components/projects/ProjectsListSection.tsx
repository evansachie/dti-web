import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";

export function ProjectsListSection() {
  const projects = [
    {
      title: "Environmental Hygiene Awareness Project",
      subtitle: "Assin Foso Pilot Phase",
      category: "Health & Sanitation",
      location: "Accra, Ghana",
      duration: "N/A",
      status: "Upcoming",
      description:
        "A three-month pilot project focused on educating communities on proper sanitation practices through theatre performances, health walks, clean-up exercises, and demonstration of proper waste disposal.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80",
      highlights: [
        "Interactive Theatre",
        "Community Clean-ups",
        "Demonstration Workshops",
      ],
    },
    {
      title: "Love Beyond Romance",
      subtitle: "Exploring Love, Responsibility, and Youth Mental Health",
      category: "Mental Health",
      location: "Theatre Department, University of Ghana",
      duration: "31/03/2026",
      status: "Recent",
      description:
        "Exploring Love, Responsibility, and Youth Mental Health through Theatre for Development. A participatory project across Ghana that uses theatrical narratives to navigate the complexities of modern and traditional responsibility within relationships.",
      image: "/gallery/love-project.jpg",
      highlights: [
        "Focus on Youth Mental Health",
        "Theatrical Advocacy for Responsibility",
        "Community Participation",
        "National Dialogue",
      ],
    },
    {
      title: "Dialogue on the Stage",
      subtitle: "Navigating Tradition and Modernity in Marriage",
      category: "Culture & Development",
      location: "Accra, Ghana",
      duration: "Completed",
      status: "Previous",
      description:
        "A Theatre for Development project exploring cultural practices and modern influences in marriage through a stage play titled 'The Price of Love.'",
      image: "/gallery/12.jpg",
      highlights: [
        "Participatory Research",
        "Stage Performance",
        "Community Dialogue",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Our Work
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[38px] md:text-[44px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Projects Making Real Impact
          </h2>
          <p className="text-zinc-500 text-[15px] mt-4 max-w-2xl leading-relaxed">
            Each project is rooted in participatory theatre methodology,
            designed to spark genuine dialogue and drive measurable community
            action.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-10 items-stretch ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-full lg:w-1/2 relative bg-[#f8fafa] flex items-center justify-center group overflow-hidden ${
                  project.title.includes("Dialogue")
                    ? "aspect-[16/10]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-500 ${
                    project.title.includes("Hygiene") ||
                    project.title.includes("Romance")
                      ? "object-contain p-8 lg:p-12"
                      : "object-cover object-top group-hover:scale-105"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-5 left-5 z-10">
                  <span
                    className={`text-white text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest ${
                      project.status === "Active"
                        ? "bg-[#24a186]"
                        : "bg-[#252A34]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-[#219D80] text-[12px] font-bold uppercase tracking-widest mb-3">
                  {project.category}
                </span>
                <h3
                  className="text-[28px] md:text-[32px] font-medium text-[#252A34] leading-tight mb-2"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  {project.title}
                </h3>
                ...
                <p className="text-zinc-400 text-[14px] font-medium italic mb-5">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-5 mb-6 text-[13px] text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#24a186]" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#24a186]" />
                    {project.duration}
                  </span>
                </div>
                <p className="text-zinc-500 leading-relaxed text-[14px] mb-8">
                  {project.description}
                </p>
                <div className="mb-8">
                  <p className="text-[#252A34] text-[13px] font-bold uppercase tracking-wider mb-4">
                    Key Highlights
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-zinc-600 text-[14px]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#24a186] shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#252A34] hover:text-[#219D80] font-bold text-[13px] uppercase tracking-wider transition-colors group/link"
                >
                  Read Full Case Study
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
