import { Theater, Users, Megaphone, Music } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Community Theatre",
      description:
        "We design engaging performances highlighting local realities, encouraging reflective thinking and communual problem-solving.",
      icon: Theater,
    },
    {
      title: "Workshops & Training",
      description:
        "Capacity-building workshops for youth and educators, training them in storytelling, arts, and facilitation skills.",
      icon: Users,
    },
    {
      title: "Advocacy Campaigns",
      description:
        "Targeted localized campaigns on health, environmental sustainability, and human rights through public performances.",
      icon: Megaphone,
    },
    {
      title: "Cultural Preservation",
      description:
        "Promoting Ghanaian heritage by directly integrating traditional music, dance, and vibrant folklore into our plays.",
      icon: Music,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
            What We Do
          </span>
          <div className="h-[2px] w-[30px] bg-zinc-300"></div>
        </div>
        <h2
          className="text-[38px] md:text-[44px] leading-[1.2] text-[#252A34] font-medium"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          Our Core Activities & Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-8 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2 cursor-default"
          >
            <div className="w-20 h-20 bg-[#EAF5F3] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#219D80] transition-colors duration-300">
              <service.icon
                className="text-[#219D80] group-hover:text-white transition-colors duration-300"
                size={32}
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-[19px] font-semibold text-[#252A34] mb-4 group-hover:text-[#219D80] transition-colors">
              {service.title}
            </h3>
            <p className="text-zinc-500 text-[14px] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
