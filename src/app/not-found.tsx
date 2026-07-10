import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fafafa]">
      <PageHero title="Page Not Found" breadcrumb="404" />

      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="relative w-full max-w-md aspect-square mb-4">
          <Image
            src="/not-found.svg"
            alt="404 - Page Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h2
          className="text-[34px] md:text-[40px] text-[#252A34] font-medium mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          Lost your way?
        </h2>

        <p className="text-zinc-500 text-[15px] max-w-md mx-auto leading-relaxed mb-10">
          We couldn&apos;t find the page you were looking for. It might have
          been moved, deleted, or perhaps the URL is incorrect.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#252A34] text-white px-8 py-3.5 text-[13px] font-bold uppercase tracking-wider hover:bg-[#1B5E20] transition-colors"
        >
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </div>
    </main>
  );
}
