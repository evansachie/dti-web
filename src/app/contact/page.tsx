import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { PartnersSection } from "@/components/home/PartnersSection";

export const metadata: Metadata = {
  title: "Contact Us | Theatre for Development Initiative",
  description:
    "Get in touch with TFDI. Reach out for partnerships, project collaborations, workshop bookings, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <PageHero title="Contact Us" breadcrumb="Contact" />
      <ContactSection />
      <PartnersSection />
    </div>
  );
}
