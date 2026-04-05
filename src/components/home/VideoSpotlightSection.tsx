import { Play } from "lucide-react";

export function VideoSpotlightSection() {
  return (
    <section className="py-24 px-6 bg-[#181b21] w-full">
      <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-[2px] w-[30px] bg-zinc-600"></div>
          <span className="text-[#24a186] text-[13px] font-bold uppercase tracking-wider">
            Watch Us In Action
          </span>
          <div className="h-[2px] w-[30px] bg-zinc-600"></div>
        </div>

        <h2
          className="text-[36px] md:text-[44px] leading-[1.2] text-white font-medium mb-6 drop-shadow-sm"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          Theatre Beyond The Stage
        </h2>

        <p className="text-zinc-400 text-[15px] max-w-2xl leading-[1.8] mb-14">
          Experience the raw energy, emotion, and actual community mobilization
          that happens when TFDI brings powerful, localized stories directly to
          the people.
        </p>

        <div className="w-full relative aspect-video bg-[#252A34] shadow-2xl overflow-hidden group cursor-pointer ring-1 ring-white/10 hover:ring-[#24a186]/50 transition-all duration-500">
          <div className="absolute inset-0 bg-[#2b313d] flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
            <span className="text-white/20 font-medium tracking-widest uppercase">
              [Live Performance/Community Video Thumbnail]
            </span>
          </div>

          <div className="absolute inset-0 bg-[#181b21]/40 group-hover:bg-[#181b21]/20 transition-colors duration-500"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-28 md:h-28 bg-[#24a186] rounded-full flex items-center justify-center pl-2 group-hover:scale-110 group-hover:bg-[#1d826c] transition-all duration-300 shadow-[0_0_40px_rgba(36,161,134,0.4)]">
              <Play
                size={44}
                fill="white"
                strokeWidth={0}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
