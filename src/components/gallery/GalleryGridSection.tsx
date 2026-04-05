"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Pagination } from "@/components/ui/Pagination";
import { Category, GalleryItem, galleryData } from "@/data/gallery";

export function GalleryGridSection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(galleryData.length / itemsPerPage);
  const pagedData = galleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pagedData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#219D80] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                      {item.category}
                    </span>
                    <h3
                      className="text-white text-[20px] font-medium mb-1"
                      style={{
                        fontFamily: "var(--font-playfair-display), serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-[12px] font-medium uppercase tracking-wider flex items-center gap-2">
                      <span className="w-4 h-px bg-[#219D80]"></span>
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 400, behavior: "smooth" });
          }}
        />

        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-300 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div
              className="relative w-full max-w-[1000px] max-h-[85vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[75vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-8 text-center">
                <span className="text-[#219D80] text-[12px] font-bold uppercase tracking-[0.3em] mb-3 block">
                  {selectedImage.category}
                </span>
                <h3
                  className="text-white text-[28px] sm:text-[36px] font-medium mb-2"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  {selectedImage.title}
                </h3>
                <p className="text-white/40 text-[14px] uppercase tracking-widest">
                  {selectedImage.location}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
