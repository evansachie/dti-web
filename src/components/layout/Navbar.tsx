"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Gallery", href: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

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
            ? "bg-[#252A34]/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
          <Link
            href="/"
            className="flex items-center relative z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src={isScrolled || isMobileMenuOpen ? "/logo2.svg" : "/logo.svg"}
              alt="TFDI Logo"
              width={250}
              height={125}
              className={`object-contain transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "h-[48px] w-auto"
                  : "h-[105px] w-auto"
              }`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-[14px] font-normal">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#219D80] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/donate"
              className={`px-6 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                pathname === "/donate"
                  ? "bg-[#24a186] text-white"
                  : "border border-white/20 hover:bg-white/10 text-white"
              }`}
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className={`px-6 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                pathname === "/contact"
                  ? "bg-white text-[#252A34]"
                  : "bg-[#24a186] hover:bg-[#1d826c] text-white"
              }`}
            >
              Contact
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
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors border-b border-white/10 pb-4 ${
                  isActive ? "text-[#219D80]" : "hover:text-[#219D80]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/donate"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-center w-full py-4 text-[15px] font-bold uppercase tracking-wider transition-colors ${
              pathname === "/donate"
                ? "bg-[#24a186] text-white"
                : "border-2 border-white/30 text-white hover:bg-white/10"
            }`}
          >
            Donate Now
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-center w-full py-4 text-[15px] font-bold uppercase tracking-wider transition-colors ${
              pathname === "/contact"
                ? "bg-white text-[#252A34]"
                : "bg-[#24a186] text-white hover:bg-[#1d826c]"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
