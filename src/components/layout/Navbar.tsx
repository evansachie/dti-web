"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  {
    name: "Media",
    children: [
      { name: "Blogs", href: "/blogs" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  {
    name: "Get Involved",
    children: [
      { name: "Volunteer", href: "/volunteer" },
      { name: "Internship", href: "/intern" },
    ],
  },
];

function isActive(item: NavItem, pathname: string): boolean {
  if (item.href)
    return (
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href))
    );
  return item.children?.some((c) => pathname === c.href) ?? false;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const hasSolidHeader =
    pathname.startsWith("/verify/") || isScrolled || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function closeDropdowns() {
    setOpenDropdown(null);
    setMobileOpenGroup(null);
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full text-white transition-all duration-300 ${
          hasSolidHeader
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
              src={hasSolidHeader ? "/logo2.svg" : "/logo.svg"}
              alt="DTI Logo"
              width={250}
              height={125}
              className={`object-contain transition-all duration-300 ${
                hasSolidHeader ? "h-[48px] w-auto" : "h-[105px] w-auto"
              }`}
              priority
            />
          </Link>

          <div
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-7 text-[14px] font-normal"
          >
            {navItems.map((item) => {
              if (!item.children) {
                const active = isActive(item, pathname);
                return (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className={`transition-all duration-300 relative py-1 ${
                      active
                        ? "text-white font-semibold"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#1B5E20] rounded-full" />
                    )}
                  </Link>
                );
              }

              const active = isActive(item, pathname);
              const isOpen = openDropdown === item.name;

              return (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                    className={`flex items-center gap-1 transition-all duration-300 py-1 ${
                      active
                        ? "text-white font-semibold"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#1B5E20] rounded-full" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#252A34] border border-white/10 rounded-lg shadow-xl py-1 z-50">
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeDropdowns}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              childActive
                                ? "text-[#1B5E20] bg-white/5 font-medium"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/donate"
              className={`px-6 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                pathname === "/donate"
                  ? "bg-[#F9A825] text-[#252A34]"
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
                  : "bg-[#F9A825] hover:bg-[#F57F17] text-[#252A34]"
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
        <div className="flex flex-col gap-2 text-[18px] font-medium tracking-wide overflow-y-auto">
          {navItems.map((item) => {
            if (!item.children) {
              const active = isActive(item, pathname);
              return (
                <Link
                  key={item.name}
                  href={item.href!}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors border-b border-white/10 py-4 ${
                    active ? "text-[#1B5E20]" : "hover:text-[#1B5E20]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            }

            const active = isActive(item, pathname);
            const isOpen = mobileOpenGroup === item.name;

            return (
              <div key={item.name} className="border-b border-white/10">
                <button
                  onClick={() => setMobileOpenGroup(isOpen ? null : item.name)}
                  className={`flex items-center justify-between w-full py-4 transition-colors ${
                    active ? "text-[#1B5E20]" : "hover:text-[#1B5E20]"
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-3 text-[16px] transition-colors ${
                            childActive
                              ? "text-[#1B5E20] font-medium"
                              : "text-white/60 hover:text-[#1B5E20]"
                          }`}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/donate"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-center w-full py-4 text-[15px] font-bold uppercase tracking-wider transition-colors ${
              pathname === "/donate"
                ? "bg-[#F9A825] text-[#252A34]"
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
                : "bg-[#F9A825] text-[#252A34] hover:bg-[#F57F17]"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
