import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-[#212529] text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo.svg"
              alt="TFDI Logo"
              width={140}
              height={90}
              className="object-contain"
            />
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 pe-4">
            A community-driven organization using participatory theatre and
            creative arts as tools for education, advocacy, and social
            transformation in Ghana.
          </p>
          <SocialIcons variant="dark" />
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
                href="/gallery"
                className="text-zinc-400 text-sm hover:text-[#24a186] transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#24a186] rounded-full"></span>{" "}
                Media Gallery
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
              <p className="text-zinc-400 text-sm">
                +233 50 994 1591{" "}
                <span className="text-[10px] opacity-50 ml-1">(Voice)</span>
              </p>
            </li>
            <li className="flex items-center gap-4">
              <MessageCircle className="text-[#24a186] shrink-0" size={20} />
              <p className="text-zinc-400 text-sm">
                0247 134 085{" "}
                <span className="text-[10px] opacity-50 ml-1">(WhatsApp)</span>
              </p>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-[#24a186] shrink-0" size={20} />
              <p className="text-zinc-400 text-sm">tfdi.ghana@gmail.com</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 font-serif">Newsletter</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            Subscribe to our newsletter to receive the latest updates on our
            projects and workshops.
          </p>
          <NewsletterForm
            variant="footer"
            buttonLabel="Subscribe Now"
            placeholder="Your Email Address"
          />
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 mt-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Theatre For Development Initiative
            (TFDI). All Rights Reserved.{" "}
            <span className="mx-2 text-zinc-700">|</span>
            <Link
              href="https://evansdev.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#24a186] text-[11px] uppercase tracking-widest transition-colors font-semibold"
            >
              Designed & Developed by Evans Acheampong
            </Link>
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
