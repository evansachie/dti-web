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

        <div className="w-full relative aspect-video bg-[#181b21] shadow-2xl overflow-hidden ring-1 ring-white/10 hover:ring-[#24a186]/50 transition-all duration-500 rounded-sm">
          <video
            src="/gallery/vid.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </div>
    </section>
  );
}
