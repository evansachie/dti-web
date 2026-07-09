import { statsData } from "@/data/home";

export function StatsSection() {
  return (
    <section className="bg-[#219D80] py-20 px-6 w-full relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 2px, transparent 2px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8 relative z-10 divide-y sm:divide-y-0 sm:divide-x sm:divide-white/20">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-3"
          >
            <h3
              className="text-white text-[42px] md:text-[56px] font-bold mb-3 drop-shadow-sm whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              {stat.value}
            </h3>
            <p className="text-[#D9EFEA] text-[13px] md:text-[14px] uppercase tracking-widest font-bold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
