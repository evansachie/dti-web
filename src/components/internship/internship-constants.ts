import type { InternshipFormValues } from "@/lib/api";

export const GENDER_OPTIONS = [
  { value: "MALE", label: "Male" },
  { value: "FEMALE", label: "Female" },
  { value: "PREFER_NOT_TO_SAY", label: "Prefer not to say" },
];

export const EDUCATION_OPTIONS = [
  { value: "UNDERGRADUATE", label: "Undergraduate Student" },
  { value: "GRADUATE", label: "Graduate" },
  { value: "DIPLOMA", label: "Diploma Holder" },
  { value: "OTHER", label: "Other" },
];

export const INTEREST_OPTIONS = [
  "Theatre for Development Practice",
  "Community Engagement & Mobilization",
  "Research & Documentation",
  "Communications & Media",
  "Environmental Advocacy",
  "School Outreach Programmes",
  "Project Support & Administration",
  "Other",
];

export const THEATRE_AREA_OPTIONS = [
  "Acting",
  "Directing",
  "Scriptwriting",
  "Facilitation",
  "Theatre for Development",
  "Research",
  "Production Management",
  "Other",
];

export const SKILL_OPTIONS = [
  "Public Speaking",
  "Facilitation",
  "Writing",
  "Research",
  "Photography",
  "Videography",
  "Graphic Design",
  "Social Media Management",
  "Data Collection",
  "Event Organization",
  "Team Leadership",
  "Other",
];

export const DURATION_OPTIONS = [
  { value: "3_MONTHS", label: "3 Months" },
  { value: "6_MONTHS", label: "6 Months" },
  { value: "OTHER", label: "Other" },
];

export const INITIAL_FORM: InternshipFormValues = {
  fullName: "",
  gender: "",
  dateOfBirth: "",
  nationality: "",
  location: "",
  phone: "",
  email: "",
  educationStatus: "",
  institution: "",
  programme: "",
  studyLevel: "",
  graduationYear: "",
  areaOfInterest: [],
  areaOfInterestOther: "",
  hasTheatreExperience: false,
  theatreExperienceDesc: "",
  theatreAreas: [],
  theatreAreasOther: "",
  theatreProductions: "",
  tfdInterest: "",
  tfdSocialImpact: "",
  hasCommunityExperience: false,
  communityExperienceDesc: "",
  volunteerWork: "",
  skills: [],
  skillsOther: "",
  duration: "",
  availableFrom: "",
  willingFieldWork: true,
  personalStatement: "",
  reference1Name: "",
  reference1Position: "",
  reference1Phone: "",
  reference2Name: "",
  reference2Position: "",
  reference2Phone: "",
  declarationName: "",
  declarationDate: "",
};

export const STEPS = [
  "Personal Info",
  "Education",
  "Interests",
  "Experience",
  "Skills & Availability",
  "Statement & References",
  "Documents",
  "Declaration",
];
