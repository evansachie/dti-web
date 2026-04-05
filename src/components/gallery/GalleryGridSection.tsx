"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

type Category = "All" | "Performances" | "Workshops" | "Community Dialogue";

interface GalleryItem {
  id: number;
  src: string;
  category: Category;
  title: string;
  location: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    category: "Performances",
    title: "The Price of Love Stage Play",
    location: "Accra, Ghana",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
    category: "Performances",
    title: "Annual Community Drama Festival",
    location: "Kumasi, Ghana",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    category: "Workshops",
    title: "Youth Advocacy Training",
    location: "Cape Coast, Ghana",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    category: "Workshops",
    title: "Facilitator Skills Workshop",
    location: "Legon, Accra",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    category: "Community Dialogue",
    title: "Sanitation Awareness Dialogue",
    location: "Assin Foso, Central Region",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
    category: "Community Dialogue",
    title: "Local Government Accountability Forum",
    location: "Eastern Region, Ghana",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    category: "Performances",
    title: "Traditional Dance Showcase",
    location: "National Theatre, Accra",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Workshops",
    title: "Artistic Expression Series",
    location: "Sunyani, Ghana",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    category: "Community Dialogue",
    title: "Health Advocacy Meeting",
    location: "Northern Region, Ghana",
  },
];

export function GalleryGridSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories: Category[] = [
    "All",
    "Performances",
    "Workshops",
    "Community Dialogue",
  ];

  const filteredData =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

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

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#252A34] text-white"
                    : "bg-white text-zinc-500 border border-zinc-200 hover:border-[#219D80] hover:text-[#219D80]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
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

                <div className="absolute top-6 right-6 w-10 h-10 bg-[#219D80] text-white flex items-center justify-center -translate-y-12 group-hover:translate-y-0 transition-transform duration-300 delay-100 shadow-lg">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-300">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-[1000px] max-h-[85vh] flex flex-col items-center">
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
