import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { FaqSection } from "@/components/contact/FaqSection";
import { PartnersSection } from "@/components/home/PartnersSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with DTI. Reach out for partnerships, project collaborations, workshop bookings, or general enquiries in Ghana.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Contact Us" breadcrumb="Contact" />
      <ContactSection />
      <FaqSection />
      <PartnersSection />
    </div>
  );
}
