import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalContentProps = {
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalContent({
  effectiveDate,
  intro,
  sections,
}: LegalContentProps) {
  return (
    <main className="bg-white px-6 py-20 md:py-24">
      <article className="mx-auto max-w-[900px]">
        <div className="mb-12 border-b border-zinc-100 pb-8">
          <p className="mb-5 text-[12px] font-bold uppercase tracking-widest text-[#1B5E20]">
            Last updated: {effectiveDate}
          </p>
          <p className="text-[16px] leading-8 text-zinc-600">{intro}</p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2
                className="mb-4 text-[24px] font-medium leading-snug text-[#252A34]"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}
              >
                {section.title}
              </h2>
              <div className="space-y-4 text-[15px] leading-8 text-zinc-600">
                {section.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-zinc-100 pt-8">
          <p className="text-[14px] leading-7 text-zinc-500">
            For questions about these terms or this policy, contact us at{" "}
            <a
              href="mailto:developmentaltheatreinitiative@gmail.com"
              className="font-semibold text-[#1B5E20] hover:underline"
            >
              developmentaltheatreinitiative@gmail.com
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
