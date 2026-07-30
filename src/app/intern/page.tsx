import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { InternshipForm } from "@/components/internship/InternshipForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Internship Application",
  description:
    "Apply for the Developmental Theatre Initiative Theatre for Development Internship Programme. Gain hands-on experience using theatre for social change.",
  path: "/intern",
});

export default function InternPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Internship Programme" breadcrumb="Internship" />
      <div className="max-w-3xl mx-auto w-full px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-[#252A34] mb-3">
            Theatre for Development Internship
          </h2>
          <p className="text-gray-600 text-sm max-w-lg mx-auto">
            Join DTI&apos;s internship programme and gain practical experience
            in Theatre for Development, community engagement, research, and
            advocacy. Fill out the form below to apply.
          </p>
        </div>
        <InternshipForm />
      </div>
    </div>
  );
}
