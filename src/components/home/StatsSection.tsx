export function StatsSection() {
  const stats = [
    { value: "50+", label: "Communities Reached" },
    { value: "15+", label: "Active Projects" },
    { value: "10k+", label: "Audience Members" },
    { value: "20+", label: "Theatre Groups" },
  ];

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

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 divide-x-0 lg:divide-x lg:divide-white/20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            <h3
              className="text-white text-[42px] md:text-[56px] font-bold mb-3 drop-shadow-sm"
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
