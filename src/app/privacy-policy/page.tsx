import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalContent } from "@/components/legal/LegalContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how Theatre for Development Initiative collects, uses, and protects personal information shared through its website.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Information We Collect",
    body: (
      <>
        <p>
          We may collect personal information you voluntarily provide when you
          contact us, subscribe to our newsletter, donate, or enquire about
          partnerships, workshops, projects, or media opportunities.
        </p>
        <p>
          This may include your name, email address, phone number, organisation,
          donation details, and the content of messages submitted through our
          website.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <p>
        We use your information to respond to enquiries, manage newsletter
        subscriptions, process donations, communicate about TFDI programmes, and
        improve how we present our projects, events, and advocacy work.
      </p>
    ),
  },
  {
    title: "Newsletter Communications",
    body: (
      <p>
        If you subscribe to our newsletter, your email address may be stored
        with our email service provider so we can send updates, stories, event
        notices, and campaign information. You can unsubscribe using the link
        included in our emails.
      </p>
    ),
  },
  {
    title: "Donations And Payment Processing",
    body: (
      <p>
        Donations made through the website may be processed by third-party
        payment providers. We do not store full card details on our website.
        Payment providers process payment information according to their own
        security and privacy practices.
      </p>
    ),
  },
  {
    title: "Cookies And Analytics",
    body: (
      <p>
        Our website may use basic cookies, analytics, or similar technologies to
        understand site usage, maintain functionality, and improve user
        experience. You can manage cookie preferences through your browser
        settings.
      </p>
    ),
  },
  {
    title: "Sharing Information",
    body: (
      <p>
        We do not sell personal information. We may share information with
        trusted service providers who help us operate the website, manage
        communications, process donations, or support TFDI programmes, only as
        needed for those purposes.
      </p>
    ),
  },
  {
    title: "Data Security And Retention",
    body: (
      <p>
        We take reasonable steps to protect personal information from
        unauthorised access, loss, misuse, or disclosure. We keep information
        only for as long as needed for communication, reporting, legal,
        operational, or legitimate organisational purposes.
      </p>
    ),
  },
  {
    title: "Your Choices",
    body: (
      <p>
        You may request that we update, correct, or delete personal information
        we hold about you, subject to any legal, financial, reporting, or
        operational obligations that require us to retain certain records.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <PageHero title="Privacy Policy" breadcrumb="Privacy Policy" />
      <LegalContent
        effectiveDate="May 23, 2026"
        intro="This Privacy Policy explains how Theatre for Development Initiative (TFDI) handles personal information shared through this website and related online services."
        sections={sections}
      />
    </div>
  );
}
