import {
  Users,
  Palette,
  Globe,
  Lightbulb,
  Sparkles,
  MessageCircle,
  Leaf,
} from "lucide-react";

const principles = [
  {
    icon: Users,
    title: "Community Ownership",
    description:
      "Communities lead the process of identifying challenges and creating solutions.",
  },
  {
    icon: Palette,
    title: "Creative Expression",
    description:
      "Art and performance become powerful tools for education and transformation.",
  },
  {
    icon: Globe,
    title: "Inclusion",
    description:
      "Every voice matters regardless of age, gender, background, or status.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "New approaches that enhance effectiveness in addressing development challenges.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description:
      "Imagination and artistic expression drive innovative community solutions.",
  },
  {
    icon: MessageCircle,
    title: "Dialogue",
    description:
      "Open conversation fuels understanding and collective problem-solving.",
  },
  {
    icon: Leaf,
    title: "Sustainable Action",
    description:
      "Creating lasting positive impact for present and future generations.",
  },
];

export function OurApproachSection() {
  return (
    <section className="py-24 px-6 bg-[#f8fafa] w-full border-t border-zinc-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
            <span className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-wider">
              Our Approach
            </span>
            <div className="h-[2px] w-[30px] bg-zinc-300"></div>
          </div>
          <h2
            className="text-[36px] md:text-[42px] leading-[1.2] text-[#252A34] font-medium"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Theatre for Development
          </h2>
          <p className="text-zinc-500 text-[15px] mt-4 max-w-3xl leading-relaxed">
            DTI adopts the principles of Theatre for Development (TfD), which
            emphasize participation, dialogue, reflection, collective
            problem-solving, and community ownership. Our approach recognizes
            that sustainable development is achieved not by imposing solutions
            on communities but by engaging people as active participants in
            identifying challenges and creating solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`group bg-white p-8 border border-zinc-100 hover:border-[#1B5E20]/30 hover:shadow-lg transition-all duration-300 ${
                index === 6
                  ? "sm:col-span-2 lg:col-span-1 lg:max-w-[394px] lg:mx-auto"
                  : ""
              }`}
            >
              <div className="w-14 h-14 bg-[#FFF8E1] flex items-center justify-center rounded-full mb-5 group-hover:bg-[#1B5E20] transition-colors duration-300">
                <principle.icon
                  size={24}
                  className="text-[#1B5E20] group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#252A34] mb-3">
                {principle.title}
              </h3>
              <p className="text-zinc-500 text-[14px] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
