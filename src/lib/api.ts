import { type VolunteerFormValues } from "./volunteer-schema";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Team {
  id: string;
  name: string;
  description: string | null;
}

export async function fetchTeams(): Promise<Team[]> {
  const res = await fetch(`${API_BASE_URL}/teams`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch teams");
  return res.json();
}

export async function registerVolunteer(
  data: VolunteerFormValues
): Promise<{ volunteerId: string; id: string }> {
  const res = await fetch(`${API_BASE_URL}/volunteers/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message ?? `Registration failed (${res.status})`);
  }

  return res.json();
}
