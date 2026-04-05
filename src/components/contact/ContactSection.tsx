import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Share2,
} from "lucide-react";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone (Voice)",
      value: "+233 50 994 1591",
      href: "tel:+233509941591",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "0247 134 085",
      href: "https://wa.me/233247134085",
    },
    {
      icon: Mail,
      label: "Email",
      value: "tfdi.ghana@gmail.com",
      href: "mailto:tfdi.ghana@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "University of Ghana, Legon",
      href: "https://maps.google.com/?q=Department+of+Theatre+Arts+University+of+Ghana+Legon",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon – Fri: 8:00 AM – 5:00 PM",
      href: null,
    },
    {
      icon: Share2,
      label: "Follow Us",
      value: "@TFDI_Ghana",
      href: "https://instagram.com/tfdi_ghana",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
                Get In Touch
              </span>
              <div className="h-[2px] w-[30px] bg-zinc-200"></div>
            </div>
            <h2
              className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium mb-6"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              We&apos;d Love To Hear From You
            </h2>
            <p className="text-zinc-500 text-[15px] leading-relaxed mb-10">
              Whether you&apos;re a community leader, an institution, a donor,
              or simply passionate about social change through the arts — reach
              out. We&apos;re always open to partnerships, collaborations, and
              conversations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-[#f8fafa] border border-zinc-100 group hover:border-[#219D80]/30 transition-colors"
                >
                  <div className="w-11 h-11 bg-[#EAF5F3] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#24a186] transition-colors duration-300">
                    <item.icon
                      size={18}
                      className="text-[#24a186] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-[#252A34] text-[13px] font-semibold hover:text-[#219D80] transition-colors leading-snug"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#252A34] text-[13px] font-semibold leading-snug">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest mb-3">
                Follow Us
              </p>
              <SocialIcons variant="light" />
            </div>

            <div className="w-full h-[260px] overflow-hidden border border-zinc-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3293858787!2d-0.18834492414563!3d5.650498633483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b3b2a6965d1%3A0x7b09d6d29e1b5b6d!2sDepartment%20of%20Theatre%20Arts%2C%20University%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1712334000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TFDI Location - Dept. of Theatre Arts, University of Ghana"
              ></iframe>
            </div>
          </div>

          <div className="bg-[#f8fafa] border border-zinc-100 p-10">
            <div className="flex items-center gap-2 bg-[#EAF5F3] border border-[#219D80]/20 px-4 py-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#24a186] animate-pulse shrink-0"></div>
              <p className="text-[#219D80] text-[12px] font-semibold">
                We typically respond within 1–2 business days.
              </p>
            </div>

            <h3
              className="text-[24px] font-medium text-[#252A34] mb-2"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              Send Us a Message
            </h3>
            <p className="text-zinc-500 text-[14px] mb-8">
              Fill in the form below and we&apos;ll get back to you shortly.
            </p>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kofi Mensah"
                    className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+233 XX XXX XXXX"
                    className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                    Organisation (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. NGO, School, Company"
                    className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                  Subject
                </label>
                <select className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] focus:outline-none focus:border-[#24a186] transition-colors appearance-none">
                  <option value="">Select a topic...</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="project">Project Collaboration</option>
                  <option value="workshop">Workshop Booking</option>
                  <option value="donation">Donation / Support</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your interest or inquiry..."
                  className="bg-white border border-zinc-200 px-4 py-3 text-[14px] text-[#252A34] placeholder:text-zinc-400 focus:outline-none focus:border-[#24a186] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#24a186] hover:bg-[#1d826c] text-white py-4 text-[13px] font-bold uppercase tracking-wider transition-colors mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
