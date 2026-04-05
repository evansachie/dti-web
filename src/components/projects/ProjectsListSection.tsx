import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";

export function ProjectsListSection() {
  const projects = [
    {
      title: "Environmental Hygiene Awareness Project",
      subtitle: "Assin Foso Pilot Phase",
      category: "Environment",
      location: "Assin Foso, Central Region",
      duration: "3 Months",
      status: "Completed",
      description:
        "A three-month pilot project focused on educating communities on proper sanitation practices through theatre performances, health walks, clean-up exercises, and demonstration of proper waste disposal. The performance led to tangible community actions, including a massive cleanup exercise and a commitment from the Municipal Chief Executive.",
      imagePlaceholder: "Assin Foso Project",
      highlights: [
        "Community-wide cleanup exercise",
        "Municipal Chief Executive commitment",
        "Health walk participation",
        "Waste disposal demonstrations",
      ],
    },
    {
      title: "Dialogue on the Stage",
      subtitle: "Navigating Tradition & Modernity in Marriage",
      category: "Advocacy",
      location: "Multiple Locations, Ghana",
      duration: "Ongoing",
      status: "Active",
      description:
        "A Theatre for Development project exploring cultural practices and modern influences in marriage through a stage play titled 'The Price of Love.' This collaborative project features multiple theatre groups across Ghana, sparking meaningful conversations on national issues, fostering unity, dialogue, and civic responsibility.",
      imagePlaceholder: "Dialogue on the Stage",
      highlights: [
        "Stageplay: 'The Price of Love'",
        "Multiple theatre group collaboration",
        "Cross-regional dialogue",
        "Civic responsibility focus",
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
              <div className="w-full lg:w-1/2 relative bg-zinc-200 min-h-[380px] group overflow-hidden">
                <div className="absolute inset-0 bg-[#d9dbdb] flex items-center justify-center text-[#219D80]/40 text-sm font-medium group-hover:scale-105 transition-transform duration-500">
                  [Image: {project.imagePlaceholder}]
                </div>
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
