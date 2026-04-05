import { Quote } from "lucide-react";
import { testimonialsData } from "@/data/home";

export function TestimonialSection() {
  return (
    <section className="py-24 px-6 bg-[#f9fbfb] w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Testimonials
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[38px] md:text-[44px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            What People Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-10 md:p-12 shadow-sm shadow-[#219D80]/5 border border-[#219D80]/10 flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <Quote
                className="text-[#EAF5F3] absolute top-10 right-10 rotate-180 transition-transform duration-500 group-hover:scale-110"
                size={80}
                strokeWidth={0.5}
                fill="currentColor"
              />

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#24a186] flex items-center justify-center text-white font-serif text-2xl shadow-sm">
                  {testimonial.avatarLetter}
                </div>
                <div>
                  <h4 className="text-[#252A34] font-bold text-[17px] mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#219D80] text-[12px] font-bold uppercase tracking-wider">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <p className="text-zinc-500 leading-[1.8] text-[15px] font-medium italic relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
