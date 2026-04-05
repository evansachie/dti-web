export function AboutGallerySection() {
  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <h2
          className="text-[32px] md:text-[38px] text-[#252A34] font-bold mb-8"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          Our Gallery
        </h2>

        <div className="flex flex-col gap-4 md:gap-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[1, 2, 3].map((_, i) => (
              <div
                key={`top-${i}`}
                className="w-full aspect-4/3 bg-[#d9dbdb] flex items-center justify-center group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[#252A34]/0 group-hover:bg-[#252A34]/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={`bottom-${i}`}
                className="w-full aspect-square bg-[#d9dbdb] flex items-center justify-center group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[#252A34]/0 group-hover:bg-[#252A34]/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
