import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full border-t border-zinc-200">
      <div className="max-w-[800px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Common Questions
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[34px] md:text-[40px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 text-[15px] mt-4 leading-relaxed max-w-2xl">
            Some of the most common inquiries about Theatre for Development and
            our community initiatives across Ghana.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-zinc-100">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-zinc-100 last:border-0 py-2"
              >
                <AccordionTrigger className="text-left text-[#252A34] text-[16px] md:text-[18px] font-medium pb-4 hover:no-underline hover:text-[#219D80] transition-colors gap-6 group">
                  <span
                    style={{
                      fontFamily: "var(--font-playfair-display), serif",
                    }}
                  >
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-[15px] leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
