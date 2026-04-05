"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full text-white transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#252A34]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
          <Link
            href="/"
            className="flex items-center relative z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt="TFDI Logo"
              width={200}
              height={100}
              className={`object-contain transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "h-[50px] w-auto"
                  : "h-[85px] w-auto"
              }`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-[14px] font-normal">
            <Link
              href="/"
              className={`transition-colors ${isScrolled ? "hover:text-[#219D80]" : "hover:text-white/70"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${isScrolled ? "hover:text-[#219D80]" : "hover:text-white/70"}`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`transition-colors ${isScrolled ? "hover:text-[#219D80]" : "hover:text-white/70"}`}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className={`transition-colors ${isScrolled ? "hover:text-[#219D80]" : "hover:text-white/70"}`}
            >
              Services
            </Link>
            <Link
              href="/blogs"
              className={`transition-colors ${isScrolled ? "hover:text-[#219D80]" : "hover:text-white/70"}`}
            >
              Blogs
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/donate"
              className="border border-white/40 hover:bg-white/10 text-white px-6 py-2.5 text-[14px] font-medium transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="bg-[#24a186] hover:bg-[#1d826c] shadow-sm text-white px-6 py-2.5 text-[14px] font-medium transition-colors"
            >
              Contact us
            </Link>
          </div>

          <button
            className="lg:hidden relative z-50 text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[#252A34] z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-32 px-8 pb-10 text-white ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 text-[18px] font-medium tracking-wide overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-[#219D80] transition-colors border-b border-white/10 pb-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-[#219D80] transition-colors border-b border-white/10 pb-4"
          >
            About Us
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-[#219D80] transition-colors border-b border-white/10 pb-4"
          >
            Active Projects
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-[#219D80] transition-colors border-b border-white/10 pb-4"
          >
            Services
          </Link>
          <Link
            href="/blogs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-[#219D80] transition-colors border-b border-white/10 pb-4"
          >
            Latest News & Blogs
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/donate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-2 border-white/30 text-center text-white w-full py-4 text-[15px] font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Donate Now
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#24a186] text-center text-white w-full py-4 text-[15px] font-bold uppercase tracking-wider hover:bg-[#1d826c] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
