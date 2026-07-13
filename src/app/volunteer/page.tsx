import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { VolunteerForm } from "@/components/volunteer/VolunteerForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Volunteer Registration",
  description:
    "Join the Developmental Theatre Initiative as a volunteer. Apply now and be part of using theatre for social change in Ghana.",
  path: "/volunteer",
});

export default function VolunteerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Volunteer Registration" breadcrumb="Volunteer" />
      <div className="max-w-3xl mx-auto w-full px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-[#252A34] mb-3">
            Become a DTI Volunteer
          </h2>
          <p className="text-gray-600 text-sm max-w-lg mx-auto">
            Fill out the form below to apply as a volunteer. Our team will
            review your application and get back to you via email. You will
            receive your volunteer ID card once approved.
          </p>
        </div>
        <VolunteerForm />
      </div>
    </div>
  );
}
