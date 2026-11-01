"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { GalleryVideo } from "@/lib/api";

function formatCategory(category: string): string {
  return category
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatDuration(seconds: number | null): string | null {
  if (!seconds || seconds <= 0) return null;
  const total = Math.round(seconds);
  const minutes = Math.floor(total / 60);
  const secs = total % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

// Renders nothing until the first video is uploaded, so the gallery page
// looks unchanged on sites that only use photos.
export function VideoGallerySection({ videos }: { videos: GalleryVideo[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setSelectedIndex((prev) =>
        prev !== null ? (prev === 0 ? videos.length - 1 : prev - 1) : null
      );
    },
    [videos.length]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setSelectedIndex((prev) =>
        prev !== null ? (prev === videos.length - 1 ? 0 : prev + 1) : null
      );
    },
    [videos.length]
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

  if (videos.length === 0) return null;

  const selectedVideo = selectedIndex !== null ? videos[selectedIndex] : null;

  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-wider">
                Impact in Motion
              </span>
              <div className="h-[2px] w-[30px] bg-zinc-200"></div>
            </div>
            <h2
              className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              Watch Our Work Come Alive
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-500 text-[14px] leading-relaxed">
              Step beyond the still frame — performances, workshops, and
              community moments, told in motion from across Ghana.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item) => {
            const duration = formatDuration(item.durationSec);
            return (
              <div
                key={item.id}
                className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedIndex(videos.indexOf(item))}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.posterUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 text-white transition-all duration-300 group-hover:bg-[#1B5E20] group-hover:scale-110">
                      <Play
                        className="h-6 w-6 translate-x-0.5"
                        fill="currentColor"
                      />
                    </span>
                  </div>

                  {duration && (
                    <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-[12px] font-medium text-white">
                      {duration}
                    </span>
                  )}

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
                      {item.description && (
                        <p className="text-white/60 text-[12px] font-medium uppercase tracking-wider line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedVideo && (
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

            {videos.length > 1 && (
              <button
                onClick={handlePrevious}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all z-101"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <div
              className="relative w-full max-w-[1000px] max-h-[85vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo.videoUrl}
                poster={selectedVideo.posterUrl}
                controls
                autoPlay
                className="w-full max-h-[65vh] bg-black"
              />
              <div className="mt-8 text-center px-4">
                <span className="text-[#1B5E20] text-[12px] font-bold uppercase tracking-[0.3em] mb-3 block">
                  {formatCategory(selectedVideo.category)}
                </span>
                <h3
                  className="text-white text-[28px] sm:text-[36px] font-medium mb-2"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  {selectedVideo.title}
                </h3>
                {selectedVideo.description && (
                  <p className="text-white/40 text-[14px] max-w-xl mx-auto">
                    {selectedVideo.description}
                  </p>
                )}
              </div>
            </div>

            {videos.length > 1 && (
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
