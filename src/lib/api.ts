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

export interface InternshipFormValues {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  nationality: string;
  location: string;
  phone: string;
  email: string;
  educationStatus: string;
  institution: string;
  programme: string;
  studyLevel: string;
  graduationYear: string;
  areaOfInterest: string[];
  areaOfInterestOther: string;
  hasTheatreExperience: boolean;
  theatreExperienceDesc: string;
  theatreAreas: string[];
  theatreAreasOther: string;
  theatreProductions: string;
  tfdInterest: string;
  tfdSocialImpact: string;
  hasCommunityExperience: boolean;
  communityExperienceDesc: string;
  volunteerWork: string;
  skills: string[];
  skillsOther: string;
  duration: string;
  availableFrom: string;
  willingFieldWork: boolean;
  personalStatement: string;
  reference1Name: string;
  reference1Position: string;
  reference1Phone: string;
  reference2Name: string;
  reference2Position: string;
  reference2Phone: string;
  declarationName: string;
  declarationDate: string;
}

export async function submitInternshipApplication(
  data: InternshipFormValues,
  files: {
    cv?: File;
    motivationLetter?: File;
    portfolio?: File;
    certificates?: File;
    recommendationLetter?: File;
  }
): Promise<{ id: string; applicationNo: string; message: string }> {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else if (typeof value === "boolean") {
      formData.append(key, String(value));
    } else if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  });

  const fileFields = [
    "cv",
    "motivationLetter",
    "portfolio",
    "certificates",
    "recommendationLetter",
  ] as const;
  fileFields.forEach((field) => {
    if (files[field]) {
      formData.append("files", files[field]!);
    }
  });

  const res = await fetch(`${API_BASE_URL}/internships`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message ?? `Submission failed (${res.status})`);
  }

  return res.json();
}
