import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function AboutTeamSection() {
  return (
    <section className="py-24 px-6 bg-white w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          <span className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-wider">
            Leadership
          </span>
          <div className="h-[2px] w-[30px] bg-zinc-300"></div>
        </div>
        <h2
          className="text-[36px] md:text-[44px] leading-[1.2] text-[#252A34] font-medium mb-16"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          Meet The Founder
        </h2>

        <div className="max-w-[400px] mx-auto">
          <div className="relative w-full aspect-4/5 bg-zinc-100 mb-6 group overflow-hidden shadow-md">
            <Image
              src="/gallery/founder.jpg"
              alt="Enoch Aggrey"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-[#252A34]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
              <a
                href="tel:+233247134085"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#1B5E20] text-[#252A34] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/233247134085"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#1B5E20] text-[#252A34] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={`mailto:developmentaltheatreinitiative@gmail.com`}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#1B5E20] text-[#252A34] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <h3 className="text-[24px] font-bold text-[#252A34] mb-2">
            Enoch Aggrey
          </h3>
          <p className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-widest mb-4">
            Founder & Executive Director
          </p>
          <p className="text-zinc-500 text-[14px] leading-relaxed px-4">
            A Theatre for Development practitioner from the University of Ghana
            dedicated to using theatre, dialogue, creative engagement, and
            community participation to promote sustainable development and
            positive social change.
          </p>
        </div>
      </div>
    </section>
  );
}
