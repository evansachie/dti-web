import { partnersData } from "@/data/home";

export function PartnersSection() {
  return (
    <section className="py-16 px-6 bg-white border-t border-zinc-100 border-b">
      <div className="max-w-[1200px] mx-auto text-center">
        <h3 className="text-zinc-400 font-semibold text-[13px] tracking-[0.2em] uppercase mb-12">
          Trusted By & Partnered With
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className="w-36 h-14 bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold text-xs uppercase tracking-widest rounded-sm hover:grayscale-0 hover:opacity-100 hover:bg-zinc-200 transition-all duration-300 cursor-default px-4 text-center"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
