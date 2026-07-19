import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, XCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Verify Volunteer | Developmental Theatre Initiative",
  description: "Verify a Developmental Theatre Initiative volunteer ID.",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ volunteerId: string }>;
}

interface VerifiedVolunteer {
  volunteerId: string;
  fullName: string;
  photoUrl: string | null;
  status: "PENDING" | "ACTIVE" | "SUSPENDED" | "INACTIVE";
  assignedTeam: { name: string } | null;
}

async function getVolunteer(volunteerId: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return null;

  const response = await fetch(
    `${apiUrl}/volunteers/verify/${encodeURIComponent(volunteerId)}`,
    { cache: "no-store" }
  );
  if (!response.ok) return null;
  return (await response.json()) as VerifiedVolunteer;
}

export default async function VolunteerVerificationPage({ params }: Props) {
  const { volunteerId } = await params;
  const volunteer = await getVolunteer(volunteerId);
  const isActive = volunteer?.status === "ACTIVE";

  return (
    <main className="min-h-screen bg-[#f7f8f5] px-6 pb-20 pt-40">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
        <div className="bg-[#1B5E20] px-8 py-7 text-white">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-[#F9A825]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Official verification
              </p>
              <h1 className="mt-1 text-2xl font-semibold">DTI Volunteer ID</h1>
            </div>
          </div>
        </div>

        {!volunteer ? (
          <div className="px-8 py-16 text-center">
            <XCircle className="mx-auto h-14 w-14 text-red-600" />
            <h2 className="mt-5 text-2xl font-semibold text-[#252A34]">
              Volunteer not verified
            </h2>
            <p className="mx-auto mt-3 max-w-md text-zinc-600">
              We could not match {volunteerId} to a DTI volunteer record. Check
              the ID or contact DTI if you believe this is an error.
            </p>
          </div>
        ) : (
          <div className="px-8 py-10">
            <div className="flex flex-col items-center gap-7 sm:flex-row sm:items-start">
              <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-[#F9A825] bg-zinc-100">
                {volunteer.photoUrl ? (
                  <Image
                    src={volunteer.photoUrl}
                    alt={volunteer.fullName}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl font-bold text-[#1B5E20]">
                    {volunteer.fullName
                      .split(/\s+/)
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
                    isActive
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {isActive ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  {isActive
                    ? "Active volunteer"
                    : `Status: ${volunteer.status}`}
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-[#252A34]">
                  {volunteer.fullName}
                </h2>
                <p className="mt-2 font-mono text-sm font-semibold tracking-wide text-zinc-500">
                  {volunteer.volunteerId}
                </p>
                <p className="mt-4 text-sm text-zinc-600">
                  Team: {volunteer.assignedTeam?.name ?? "Organization-wide"}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-zinc-100 bg-zinc-50 px-8 py-5 text-center text-xs leading-relaxed text-zinc-500">
          This page displays limited public information for identity
          verification.{" "}
          <Link
            href="/contact"
            className="font-semibold text-[#1B5E20] hover:underline"
          >
            Contact DTI
          </Link>{" "}
          for assistance.
        </div>
      </div>
    </main>
  );
}
