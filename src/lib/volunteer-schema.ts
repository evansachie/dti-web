import { z } from "zod/v4";

export const volunteerSchema = z
  .object({
    fullName: z.string().trim().min(1, "Full name is required"),
    gender: z.enum(["MALE", "FEMALE", "PREFER_NOT_TO_SAY"]),
    ageRange: z.enum(["BELOW_18", "AGE_18_25", "AGE_26_35", "ABOVE_35"]),
    phone: z.string().trim().min(1, "Phone number is required"),
    email: z.email("Invalid email address"),
    location: z.string().trim().min(1, "Location is required"),
    roleDescription: z.enum([
      "STUDENT",
      "PROFESSIONAL",
      "CONTENT_CREATOR",
      "CREATIVE_ARTIST",
      "COMMUNITY_VOLUNTEER",
      "ENVIRONMENTAL_ADVOCATE",
      "OTHER",
    ]),
    roleDescriptionOther: z.string().optional(),
    skills: z.array(z.string()).min(1, "Select at least one skill"),
    skillsOther: z.string().optional(),
    preferredTeamId: z.string().optional(),
    availability: z.enum([
      "WEEKLY",
      "MONTHLY",
      "DURING_MAJOR_ACTIVITIES",
      "FLEXIBLE",
    ]),
    motivation: z
      .string()
      .trim()
      .min(1, "Tell us your motivation")
      .max(2000, "Max 2000 characters"),
    agreedToTerms: z.literal(true, {
      message: "You must agree to the terms",
    }),
  })
  .check((ctx) => {
    if (
      ctx.value.roleDescription === "OTHER" &&
      !ctx.value.roleDescriptionOther?.trim()
    ) {
      ctx.issues.push({
        code: "custom",
        input: ctx.value.roleDescriptionOther,
        path: ["roleDescriptionOther"],
        message: "Please specify your role",
      });
    }
  });

export type VolunteerFormValues = z.infer<typeof volunteerSchema>;
