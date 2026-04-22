import Image from "next/image";
import Link from "next/link";

export function CampaignSection() {
  return (
    <section className="bg-[#EAF5F3] py-24 w-full">
      <div className="px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
              Join the Movement
            </span>
            <div className="h-[2px] w-[50px] bg-[#219D80]/30"></div>
          </div>

          <h2
            className="text-[40px] md:text-[50px] leading-[1.1] text-[#252A34] font-semibold mb-6"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Clean Earth, Clear Future
          </h2>

          <div className="text-zinc-600 leading-relaxed space-y-5 text-[16px] mb-10 italic border-l-4 border-[#219D80] pl-6">
            <p>
              &quot;The time has come that the new and growing generation frees
              the earth from dirt and clear the pathway for a brighter,
              healthier and comfortable future.&quot;
            </p>
            <p>
              &quot;A future with green and healthy environment, a future for
              away from flood and eco-friendly future. It is time for us to take
              action and be responsible for our own environment.&quot;
            </p>
            <p className="font-semibold text-[#219D80] text-[16px] not-italic">
              Join the movement, a journey to a cleaner and healthy Ghana in the
              coming years.
            </p>
            <p className="not-italic text-zinc-500 text-[14px]">
              &mdash; Enoch Aggrey, CEO of TFDI
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-[#24a186] hover:bg-[#1d826c] text-white px-8 py-3.5 text-[15px] font-medium transition-colors inline-block rounded-sm"
          >
            Partner or Join Us Today
          </Link>
        </div>

        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0 bg-white relative">
          <Image
            src="/clean-earth.jpeg"
            alt="Clean Earth, Clear Future Campaign"
            width={800}
            height={1000}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
