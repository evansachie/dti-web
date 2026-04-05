import { Globe, MessageCircle, Mail } from "lucide-react";

export function AboutTeamSection() {
  return (
    <section className="py-24 px-6 bg-white w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
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
          <div className="relative w-full aspect-4/5 bg-zinc-200 mb-6 group overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-[#D9dbdb] flex items-center justify-center text-[#219D80]/50 text-sm font-medium z-0">
              [Image: Enoch Aggrey]
            </div>

            <div className="absolute inset-0 bg-[#252A34]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#24a186] text-[#252A34] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#24a186] text-[#252A34] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={`mailto:tfdi.ghana@gmail.com`}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#24a186] text-[#252A34] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <h3 className="text-[24px] font-bold text-[#252A34] mb-2">
            Enoch Aggrey
          </h3>
          <p className="text-[#24a186] text-[13px] font-bold uppercase tracking-widest mb-4">
            Founder / Project Lead
          </p>
          <p className="text-zinc-500 text-[14px] leading-relaxed px-4">
            A visionary leader dedicated to utilizing creative arts and
            strategic theatre performances to bridge the gaps in education and
            drive widespread social awareness across Ghana.
          </p>
        </div>
      </div>
    </section>
  );
}
