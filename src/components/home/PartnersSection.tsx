import { partnersData } from "@/data/home";

export function PartnersSection() {
  return (
    <section className="py-16 px-6 bg-white border-t border-zinc-100 border-b">
      <div className="max-w-[1200px] mx-auto text-center">
        <h3 className="text-zinc-400 font-semibold text-[13px] tracking-[0.2em] uppercase mb-12">
          Partnership Opportunities
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-70">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className="min-h-14 w-40 bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold text-xs uppercase tracking-widest rounded-sm hover:opacity-100 hover:bg-zinc-200 transition-all duration-300 cursor-default px-4 py-3 text-center"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
