import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalContent } from "@/components/legal/LegalContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Review the terms for using Developmental Theatre Initiative's website, content, donation tools, and online forms.",
  path: "/terms-of-service",
});

const sections = [
  {
    title: "Use Of This Website",
    body: (
      <p>
        This website is provided to share information about DTI, our projects,
        campaigns, events, programmes, services, and opportunities for support
        or collaboration. You agree to use the website lawfully and
        respectfully.
      </p>
    ),
  },
  {
    title: "Website Content",
    body: (
      <p>
        Text, images, videos, logos, graphics, project descriptions, and other
        materials on this website belong to DTI or are used with permission
        unless otherwise stated. You may not copy, reproduce, modify, or
        distribute website content for commercial purposes without our written
        permission.
      </p>
    ),
  },
  {
    title: "Donations",
    body: (
      <p>
        Donations made through this website support DTI programmes, development
        initiatives, and community activities. Donation transactions may be
        processed by third-party payment providers. Please review payment
        details carefully before completing a transaction.
      </p>
    ),
  },
  {
    title: "Newsletter And Communications",
    body: (
      <p>
        When you subscribe to our newsletter or contact us through the website,
        you agree that we may use the information you provide to respond to you
        and send relevant updates. You can unsubscribe from newsletter emails at
        any time.
      </p>
    ),
  },
  {
    title: "External Links",
    body: (
      <p>
        Our website may link to third-party platforms, including social media,
        maps, payment processors, and partner websites. DTI is not responsible
        for the content, policies, or practices of third-party websites.
      </p>
    ),
  },
  {
    title: "No Guarantee Of Availability",
    body: (
      <p>
        We aim to keep the website accurate, available, and useful, but we do
        not guarantee uninterrupted access or that all information will always
        be complete, current, or error-free.
      </p>
    ),
  },
  {
    title: "Limitation Of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, DTI is not liable for losses or
        damages arising from your use of, or inability to use, this website or
        third-party services linked from it.
      </p>
    ),
  },
  {
    title: "Changes To These Terms",
    body: (
      <p>
        We may update these Terms of Service from time to time. Changes will be
        posted on this page with an updated date. Continued use of the website
        after changes are posted means you accept the updated terms.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <PageHero title="Terms of Service" breadcrumb="Terms" />
      <LegalContent
        effectiveDate="May 23, 2026"
        intro="These Terms of Service explain the conditions for using Developmental Theatre Initiative's website, online forms, donation tools, and related digital services."
        sections={sections}
      />
    </div>
  );
}
