import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#212529] text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo.svg"
              alt="TFDI Logo"
              width={160}
              height={50}
              className="object-contain"
            />
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 pe-4">
            A community-driven organization using participatory theatre and
            creative arts as tools for education, advocacy, and social
            transformation.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#24a186] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#24a186] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#24a186] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#24a186] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 font-serif">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/about"
                className="text-zinc-400 text-sm hover:text-[#24a186] transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#24a186] rounded-full"></span>{" "}
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-zinc-400 text-sm hover:text-[#24a186] transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#24a186] rounded-full"></span>{" "}
                Active Projects
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-zinc-400 text-sm hover:text-[#24a186] transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#24a186] rounded-full"></span> Core
                Activities
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-zinc-400 text-sm hover:text-[#24a186] transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#24a186] rounded-full"></span>{" "}
                Latest News
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-zinc-400 text-sm hover:text-[#24a186] transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#24a186] rounded-full"></span>{" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 font-serif">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <MapPin className="text-[#24a186] mt-1 shrink-0" size={20} />
              <p className="text-zinc-400 text-sm leading-relaxed">
                Accra, Ghana
                <br />
                (Headquarters)
              </p>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-[#24a186] shrink-0" size={20} />
              <p className="text-zinc-400 text-sm">+233 (0) XXX XXX XXX</p>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-[#24a186] shrink-0" size={20} />
              <p className="text-zinc-400 text-sm">info@tfdiview.org</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 font-serif">Newsletter</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            Subscribe to our newsletter to receive the latest updates on our
            projects and workshops.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#24a186] transition-colors w-full"
            />
            <button
              type="submit"
              className="bg-[#24a186] hover:bg-[#1d826c] text-white px-4 py-3 text-sm font-semibold transition-colors w-full uppercase tracking-wider"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 mt-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Theatre For Development Initiative
            (TFDI). All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
