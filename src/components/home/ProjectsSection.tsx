import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeProjectsData } from "@/data/home";

export function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-[#f4f7f6] w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-[40px] bg-zinc-300"></div>
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Our Work
            </span>
            <div className="h-[2px] w-[40px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[38px] md:text-[44px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Explore Our Active Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {homeProjectsData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="relative aspect-square w-full bg-[#f8fafa] flex items-center justify-center overflow-hidden">
                <div
                  className="absolute top-5 left-5 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest z-10 shadow-sm"
                  style={{ backgroundColor: project.categoryBg }}
                >
                  {project.category}
                </div>
                <Image
                  src={project.image || "/gallery/1.jpg"}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-500 ${
                    project.title.includes("Hygiene") ||
                    project.title.includes("Romance")
                      ? "object-contain p-4"
                      : "object-cover object-top group-hover:scale-105"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-[#252A34] mb-4 leading-snug group-hover:text-[#219D80] transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-[14px] mb-8 flex-1">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-[#252A34] hover:text-[#219D80] font-bold text-[13px] uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="border-2 border-[#24a186] text-[#24a186] hover:bg-[#24a186] hover:text-white px-8 py-3.5 text-[14px] font-medium transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
