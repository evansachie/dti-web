"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedIndex((prev) =>
        prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
      );
    },
    [images.length]
  );

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedIndex((prev) =>
        prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
      );
    },
    [images.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
        );
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <section className="pt-8 border-t border-zinc-200">
      <h2
        className="text-3xl text-[#252A34] font-medium mb-8"
        style={{ fontFamily: "var(--font-playfair-display), serif" }}
      >
        Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative aspect-square bg-zinc-100 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={img}
              alt={`Gallery ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ZoomIn size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-6 animate-in fade-in duration-300 cursor-zoom-out"
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
            className="relative w-full max-w-[1200px] h-[80vh] flex flex-col items-center cursor-default group"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex]}
              alt="Project Fullscreen"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
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
    </section>
  );
}
