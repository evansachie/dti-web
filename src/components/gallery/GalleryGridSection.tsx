"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Pagination } from "@/components/ui/Pagination";
import type { GalleryImage } from "@/lib/api";

function formatCategory(category: string): string {
  return category
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function GalleryGridSection({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const pagedData = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setSelectedIndex((prev) =>
        prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
      );
    },
    [images.length]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setSelectedIndex((prev) =>
        prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
      );
    },
    [images.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrevious, handleNext]);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-wider">
                Our Visual Journey
              </span>
              <div className="h-[2px] w-[30px] bg-zinc-200"></div>
            </div>
            <h2
              className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              Capturing Impact & Art
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-500 text-[14px] leading-relaxed">
              Explore our visual archive capturing the raw energy of
              participatory theatre and the deep impact of our community
              workshops across Ghana.
            </p>
          </div>
        </div>

        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Images className="h-14 w-14 text-zinc-300" />
            <p className="mt-6 text-[18px] text-zinc-500">
              New photos are on the way — check back soon.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pagedData.map((item, localIndex) => {
                const globalIndex =
                  (currentPage - 1) * itemsPerPage + localIndex;
                return (
                  <div
                    key={item.id}
                    className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedIndex(globalIndex)}
                  >
                    <div className="relative aspect-4/5 overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-[#1B5E20] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                            {formatCategory(item.category)}
                          </span>
                          <h3
                            className="text-white text-[20px] font-medium mb-1"
                            style={{
                              fontFamily: "var(--font-playfair-display), serif",
                            }}
                          >
                            {item.title}
                          </h3>
                          {item.location && (
                            <p className="text-white/60 text-[12px] font-medium uppercase tracking-wider flex items-center gap-2">
                              <span className="w-4 h-px bg-[#1B5E20]"></span>
                              {item.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
            />
          </>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-300 cursor-zoom-out"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-101"
            >
              <X size={32} />
            </button>

            {images.length > 1 && (
              <button
                onClick={handlePrevious}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all z-101"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <div
              className="relative w-full max-w-[1000px] max-h-[85vh] flex flex-col items-center cursor-default group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[75vh]">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-8 text-center px-4">
                <span className="text-[#1B5E20] text-[12px] font-bold uppercase tracking-[0.3em] mb-3 block">
                  {formatCategory(selectedImage.category)}
                </span>
                <h3
                  className="text-white text-[28px] sm:text-[36px] font-medium mb-2"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  {selectedImage.title}
                </h3>
                {selectedImage.location && (
                  <p className="text-white/40 text-[14px] uppercase tracking-widest">
                    {selectedImage.location}
                  </p>
                )}
              </div>
            </div>

            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all z-101"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
