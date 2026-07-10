import { contactInfo } from "@/data/contact";
import { ContactForm } from "./ContactForm";
import { ContactMap } from "./ContactMap";
import {
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  TikTokIcon,
  TelegramIcon,
} from "@/components/ui/SocialIcons";

export function ContactSection() {
  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-wider">
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
                  className="flex items-start gap-4 p-5 bg-[#f8fafa] border border-zinc-100 group hover:border-[#1B5E20]/30 transition-colors"
                >
                  <div className="w-11 h-11 bg-[#FFF8E1] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#1B5E20] transition-colors duration-300">
                    <item.icon
                      size={18}
                      className="text-[#1B5E20] group-hover:text-white transition-colors duration-300"
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
                        className="text-[#252A34] text-[13px] font-semibold hover:text-[#1B5E20] transition-colors leading-snug"
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

            <div className="mb-8">
              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <FacebookIcon
                  href="https://www.facebook.com/people/Developmemtaltheatreinitiative/61590315404599/"
                  variant="light"
                  size={18}
                />
                <LinkedinIcon
                  href="https://www.linkedin.com/company/developmental-theatre-initiative/"
                  variant="light"
                  size={18}
                />
                <InstagramIcon
                  href="https://www.instagram.com/developmentaltheatreinitiative/"
                  variant="light"
                  size={18}
                />
                <TikTokIcon
                  href="https://www.tiktok.com/@developmentalthea"
                  variant="light"
                  size={18}
                />
                <TelegramIcon
                  href="https://t.me/developmentaltheatreinitiative"
                  variant="light"
                  size={18}
                />
              </div>
            </div>

            <ContactMap />
          </div>

          <div className="bg-[#f8fafa] border border-zinc-100 p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
