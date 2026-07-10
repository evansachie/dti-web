import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectsData } from "@/data/projects";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested DTI project could not be found.",
      path: "/projects",
    });
  }

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#fafafa]">
      <div className="relative w-full h-[60vh] md:h-[70vh] bg-zinc-900 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/60 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-16 px-6">
          <div className="max-w-[1200px] w-full mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white font-bold text-[12px] uppercase tracking-widest mb-8 transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#1B5E20] text-white text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest">
                {project.category}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 uppercase tracking-widest">
                {project.status}
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl text-white font-medium leading-[1.1] mb-4 max-w-4xl"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              {project.title}
            </h1>
            <p className="text-xl text-zinc-300 font-medium italic max-w-2xl">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <section>
              <h2
                className="text-3xl text-[#252A34] font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}
              >
                Background and Rationale
              </h2>
              <div className="text-zinc-600 leading-relaxed space-y-4 text-[16px]">
                {project.details.background}
                <p>
                  The project uses creative arts, theatre, and dialogue as tools
                  to educate, engage, and empower young people to make informed
                  decisions about relationships, emotional well-being, and
                  mental health.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-12 border border-zinc-100 shadow-sm">
              <h2
                className="text-2xl text-[#252A34] font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}
              >
                Core Components
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.details.coreComponents.map((component, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-zinc-600 text-[15px]"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#1B5E20] shrink-0 mt-0.5"
                    />
                    <span>{component}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2
                className="text-3xl text-[#252A34] font-medium mb-8"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}
              >
                Implementation Strategy
              </h2>
              <div className="flex flex-col gap-8">
                <div className="border-l-2 border-[#1B5E20] pl-6 py-1">
                  <h3 className="text-[#252A34] font-bold uppercase tracking-wider text-[13px] mb-3">
                    Phase 1: Pilot Expansion
                  </h3>
                  <ul className="list-disc leading-loose list-inside text-zinc-600 text-[15px] marker:text-zinc-300">
                    {project.details.implementationStrategy.phase1.map(
                      (item, i) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="border-l-2 border-[#1B5E20] pl-6 py-1">
                  <h3 className="text-[#252A34] font-bold uppercase tracking-wider text-[13px] mb-3">
                    Phase 2: Media Integration
                  </h3>
                  <ul className="list-disc leading-loose list-inside text-zinc-600 text-[15px] marker:text-zinc-300">
                    {project.details.implementationStrategy.phase2.map(
                      (item, i) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="border-l-2 border-[#1B5E20] pl-6 py-1">
                  <h3 className="text-[#252A34] font-bold uppercase tracking-wider text-[13px] mb-3">
                    Phase 3: National Rollout
                  </h3>
                  <ul className="list-disc leading-loose list-inside text-zinc-600 text-[15px] marker:text-zinc-300">
                    {project.details.implementationStrategy.phase3.map(
                      (item, i) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {project.details.galleryImages &&
              project.details.galleryImages.length > 0 && (
                <ProjectGallery images={project.details.galleryImages} />
              )}

            <section>
              <h2
                className="text-3xl text-[#252A34] font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}
              >
                Expected Outcomes
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {project.details.expectedOutcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-white border border-zinc-100 shadow-sm"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#eaf5f2] text-[#1B5E20] font-bold text-sm shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-[#252A34] font-medium text-[15px] pt-1">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-10">
            <div className="bg-white p-8 border border-zinc-100 shadow-sm">
              <h3 className="text-[#252A34] font-bold uppercase tracking-wider text-[13px] mb-6">
                Project Overview
              </h3>

              <div className="space-y-5">
                <div>
                  <span className="flex items-center gap-2 text-[#1B5E20] text-[12px] font-bold uppercase tracking-widest mb-1">
                    <MapPin size={14} /> Location
                  </span>
                  <p className="text-zinc-600 text-[14px]">
                    {project.location}
                  </p>
                </div>
                <div>
                  <span className="flex items-center gap-2 text-[#1B5E20] text-[12px] font-bold uppercase tracking-widest mb-1">
                    <Clock size={14} /> Implementation
                  </span>
                  <p className="text-zinc-600 text-[14px]">
                    Starting {project.duration}
                  </p>
                </div>
                <div>
                  <span className="block text-zinc-400 text-[12px] font-bold uppercase tracking-widest mb-1">
                    Geographic Scope
                  </span>
                  <p className="text-zinc-600 text-[14px]">
                    {project.details.geographicScope}
                  </p>
                </div>
                <div>
                  <span className="block text-zinc-400 text-[12px] font-bold uppercase tracking-widest mb-1">
                    Target Audience
                  </span>
                  <p className="text-zinc-600 text-[14px]">
                    {project.details.targetAudience.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#252A34] p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-5">
                <CheckCircle2 size={150} />
              </div>
              <h3 className="font-bold uppercase tracking-wider text-[#1B5E20] text-[13px] mb-4">
                Primary Aim
              </h3>
              <p
                className="text-lg leading-relaxed font-medium italic"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}
              >
                &quot;{project.details.aim}&quot;
              </p>
            </div>

            <div>
              <h3 className="text-[#252A34] font-bold uppercase tracking-wider text-[13px] mb-5">
                Key Objectives
              </h3>
              <ul className="space-y-3">
                {project.details.objectives.map((obj, idx) => (
                  <li
                    key={idx}
                    className="text-zinc-600 text-[14px] flex gap-3"
                  >
                    <span className="text-[#1B5E20]">•</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#252A34] font-bold uppercase tracking-wider text-[13px] mb-5">
                Partners & Stakeholders
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.details.stakeholders.map((sh, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-100 text-zinc-600 text-[12px] font-medium px-3 py-1.5 rounded-full"
                  >
                    {sh}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#252A34] font-bold uppercase tracking-wider text-[13px] mb-5">
                Sustainability
              </h3>
              <ul className="space-y-3">
                {project.details.sustainability.map((sust, idx) => (
                  <li
                    key={idx}
                    className="text-zinc-600 text-[14px] flex gap-3"
                  >
                    <span className="text-[#1B5E20]">•</span>
                    {sust}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
