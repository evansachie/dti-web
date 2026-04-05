import Image from "next/image";
import { missionVisionData } from "@/data/home";

export function MissionVisionSection() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row gap-16">
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[#219D80] text-[13px] font-bold uppercase tracking-wider">
            {missionVisionData.welcome}
          </span>
          <div className="h-[2px] w-[50px] bg-zinc-200"></div>
        </div>
        <h2
          className="text-4xl md:text-[44px] leading-[1.2] text-[#252A34] font-medium mb-6"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          {missionVisionData.title}
        </h2>
        <p className="text-zinc-600 mb-10 leading-relaxed text-[15px]">
          {missionVisionData.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <div className="bg-[#EAF5F3] p-8 border-l-2 sm:border-l-0 sm:border-b-2 border-[#219D80] flex-1">
            <h3 className="flex items-center gap-2 text-[#219D80] text-lg font-bold mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-target"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              {missionVisionData.mission.title}
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              {missionVisionData.mission.description}
            </p>
          </div>
          <div className="bg-[#EAF5F3] p-8 border-l-2 sm:border-l-0 sm:border-b-2 border-[#219D80] flex-1">
            <h3 className="flex items-center gap-2 text-[#219D80] text-lg font-bold mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-eye"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {missionVisionData.vision.title}
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              {missionVisionData.vision.description}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative mt-8 md:mt-20">
        <div className="w-full h-[450px] relative overflow-hidden bg-zinc-100 shadow-xl border-[8px] md:border-[12px] border-white">
          <Image
            src="/gallery/4.jpg"
            alt="Community Participation"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-white border-[6px] border-[#EAF5F3] p-8 relative -mt-16 ml-auto w-[90%] shadow-md z-10 hidden sm:block">
          <h4 className="font-semibold text-[#252A34] text-lg mb-5 uppercase tracking-wide">
            Our Core Values
          </h4>
          <ul className="space-y-4">
            {missionVisionData.coreValues.map((value, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 text-[15px] font-medium text-zinc-700"
              >
                <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-[#219D80]" />{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
