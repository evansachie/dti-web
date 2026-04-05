"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-[#24a186] text-white shadow-lg shadow-[#24a186]/40 hover:bg-[#1d826c] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center outline-none ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp
        size={22}
        strokeWidth={2.5}
        className="group-hover:animate-bounce"
      />
    </button>
  );
}
