import Image from "next/image";
import Link from "next/link";

export function CampaignSection() {
  return (
    <section className="bg-[#FFF8E1] py-24 w-full">
      <div className="px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[#1B5E20] text-[13px] font-bold uppercase tracking-wider">
              Get Involved
            </span>
            <div className="h-[2px] w-[50px] bg-[#1B5E20]/30"></div>
          </div>

          <h2
            className="text-[40px] md:text-[50px] leading-[1.1] text-[#252A34] font-semibold mb-6"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
          >
            Volunteer With DTI
          </h2>

          <div className="text-zinc-600 leading-relaxed space-y-5 text-[16px] mb-10">
            <p>
              Be part of a movement that uses theatre and creative arts to drive
              real change in communities across Ghana. Whether you&apos;re a
              performer, organiser, or simply passionate about making a
              difference, there&apos;s a place for you.
            </p>
            <p className="font-semibold text-[#1B5E20] text-[16px]">
              Join our growing team of volunteers and help us empower
              communities through the power of theatre.
            </p>
          </div>

          <Link
            href="/volunteer"
            className="bg-[#F9A825] hover:bg-[#F57F17] text-[#252A34] px-8 py-3.5 text-[15px] font-bold transition-colors inline-block rounded-sm"
          >
            Register as a Volunteer
          </Link>
        </div>

        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0 bg-white relative">
          <Image
            src="/volunteer.jpeg"
            alt="Volunteer with DTI"
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
