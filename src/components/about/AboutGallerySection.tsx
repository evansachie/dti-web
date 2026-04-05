import Image from "next/image";

export function AboutGallerySection() {
  const images = [
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/10.jpg",
    "/gallery/9.jpg",
    "/gallery/8.jpg",
    "/gallery/1.jpg",
    "/gallery/2.jpg",
  ];

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
            {images.slice(0, 3).map((src, i) => (
              <div
                key={`top-${i}`}
                className="w-full aspect-4/3 bg-[#f8fafa] flex items-center justify-center group overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#252A34]/0 group-hover:bg-[#252A34]/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {images.slice(3, 7).map((src, i) => (
              <div
                key={`bottom-${i}`}
                className="w-full aspect-square bg-[#f8fafa] flex items-center justify-center group overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 4}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#252A34]/0 group-hover:bg-[#252A34]/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
