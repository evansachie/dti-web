"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { Check, ChevronDown, Loader2, Send } from "lucide-react";
import { cn, getErrorMessage } from "@/lib/utils";
import { fetchTeams, registerVolunteer, type Team } from "@/lib/api";
import {
  volunteerSchema,
  type VolunteerFormValues,
} from "@/lib/volunteer-schema";

const GENDER_OPTIONS = [
  { value: "MALE", label: "Male" },
  { value: "FEMALE", label: "Female" },
  { value: "PREFER_NOT_TO_SAY", label: "Prefer not to say" },
] as const;

const AGE_OPTIONS = [
  { value: "BELOW_18", label: "Below 18" },
  { value: "AGE_18_25", label: "18–25" },
  { value: "AGE_26_35", label: "26–35" },
  { value: "ABOVE_35", label: "Above 35" },
] as const;

const ROLE_OPTIONS = [
  { value: "STUDENT", label: "Student" },
  { value: "PROFESSIONAL", label: "Professional" },
  { value: "CONTENT_CREATOR", label: "Content Creator" },
  { value: "CREATIVE_ARTIST", label: "Creative Artist" },
  { value: "COMMUNITY_VOLUNTEER", label: "Community Volunteer" },
  { value: "ENVIRONMENTAL_ADVOCATE", label: "Environmental Advocate" },
  { value: "OTHER", label: "Other" },
] as const;

const SKILL_OPTIONS = [
  "Acting / Drama",
  "Directing",
  "Scriptwriting",
  "Graphic Design",
  "Photography",
  "Videography",
  "Music / Sound",
  "Dance / Choreography",
  "Public Speaking",
  "Event Planning",
  "Social Media",
  "Teaching / Facilitation",
  "Translation",
  "Fundraising",
  "Technical / IT",
  "Other",
] as const;

const AVAILABILITY_OPTIONS = [
  { value: "WEEKLY", label: "Weekly" },
  { value: "MONTHLY", label: "Monthly" },
  { value: "DURING_MAJOR_ACTIVITIES", label: "During major activities only" },
  { value: "FLEXIBLE", label: "Flexible" },
] as const;

const INITIAL_FORM: VolunteerFormValues = {
  fullName: "",
  gender: "MALE",
  ageRange: "AGE_18_25",
  phone: "",
  email: "",
  location: "",
  roleDescription: "STUDENT",
  skills: [],
  availability: "FLEXIBLE",
  motivation: "",
  agreedToTerms: true as unknown as true,
};

export function VolunteerForm() {
  const [form, setForm] = useState<VolunteerFormValues>({
    ...INITIAL_FORM,
    agreedToTerms: false as unknown as true,
  });
  const [teams, setTeams] = useState<Team[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState<{ volunteerId: string } | null>(
    null
  );
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    fetchTeams()
      .then(setTeams)
      .catch(() => {});
  }, []);

  function set<K extends keyof VolunteerFormValues>(
    key: K,
    value: VolunteerFormValues[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function toggleSkill(skill: string) {
    set(
      "skills",
      form.skills.includes(skill)
        ? form.skills.filter((s) => s !== skill)
        : [...form.skills, skill]
    );
  }

  function validate(): boolean {
    const result = volunteerSchema.safeParse(form);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const path = issue.path.join(".");
      if (path && !fieldErrors[path]) {
        fieldErrors[path] = issue.message;
      }
    }
    setErrors(fieldErrors);
    return false;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    startTransition(async () => {
      try {
        const result = await registerVolunteer(form);
        setSubmitted({ volunteerId: result.volunteerId });
      } catch (err) {
        setServerError(getErrorMessage(err));
      }
    });
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1B5E20]/10 mb-6">
          <Check className="w-10 h-10 text-[#1B5E20]" />
        </div>
        <h2 className="text-2xl font-semibold text-[#252A34] mb-3">
          Registration Submitted!
        </h2>
        <p className="text-gray-600 mb-2">Your volunteer ID is:</p>
        <p className="text-3xl font-bold text-[#1B5E20] tracking-wider mb-6">
          {submitted.volunteerId}
        </p>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          We&apos;ve received your application. Our team will review it and get
          back to you via email at <strong>{form.email}</strong>. You will
          receive your ID card once your application is approved.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
          {serverError}
        </div>
      )}

      <Section title="Personal Information">
        <Field label="Full Name" error={errors.fullName} required>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder="e.g. Kofi Mensah"
            className={inputClass(errors.fullName)}
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Gender" required>
            <Select
              value={form.gender}
              onChange={(v) =>
                set("gender", v as VolunteerFormValues["gender"])
              }
              options={GENDER_OPTIONS}
            />
          </Field>

          <Field label="Age Range" required>
            <Select
              value={form.ageRange}
              onChange={(v) =>
                set("ageRange", v as VolunteerFormValues["ageRange"])
              }
              options={AGE_OPTIONS}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Phone Number" error={errors.phone} required>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="+233 24 713 4085"
              className={inputClass(errors.phone)}
            />
          </Field>

          <Field label="Email Address" error={errors.email} required>
            <input
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="you@example.com"
              className={inputClass(errors.email)}
            />
          </Field>
        </div>

        <Field label="Location" error={errors.location} required>
          <input
            type="text"
            value={form.location}
            onChange={(e) => set("location", e.target.value)}
            placeholder="e.g. Accra, Legon"
            className={inputClass(errors.location)}
          />
        </Field>
      </Section>

      <Section title="Professional Background">
        <Field label="How would you describe yourself?" required>
          <Select
            value={form.roleDescription}
            onChange={(v) =>
              set(
                "roleDescription",
                v as VolunteerFormValues["roleDescription"]
              )
            }
            options={ROLE_OPTIONS}
          />
        </Field>

        {form.roleDescription === "OTHER" && (
          <Field label="Please specify" error={errors.roleDescriptionOther}>
            <input
              type="text"
              value={form.roleDescriptionOther ?? ""}
              onChange={(e) => set("roleDescriptionOther", e.target.value)}
              placeholder="Describe your role"
              className={inputClass(errors.roleDescriptionOther)}
            />
          </Field>
        )}
      </Section>

      <Section title="Skills">
        <p className="text-sm text-gray-500 mb-3">
          Select all skills you can contribute
        </p>
        <Field error={errors.skills}>
          <div className="flex flex-wrap gap-2">
            {SKILL_OPTIONS.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full border transition-colors",
                  form.skills.includes(skill)
                    ? "bg-[#1B5E20] text-white border-[#1B5E20]"
                    : "bg-white text-gray-600 border-gray-300 hover:border-[#1B5E20] hover:text-[#1B5E20]"
                )}
              >
                {skill}
              </button>
            ))}
          </div>
        </Field>

        {form.skills.includes("Other") && (
          <Field label="Other skills" error={errors.skillsOther}>
            <input
              type="text"
              value={form.skillsOther ?? ""}
              onChange={(e) => set("skillsOther", e.target.value)}
              placeholder="List your other skills"
              className={inputClass(errors.skillsOther)}
            />
          </Field>
        )}
      </Section>

      <Section title="Preferences">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Preferred Team">
            <Select
              value={form.preferredTeamId ?? ""}
              onChange={(v) => set("preferredTeamId", v || undefined)}
              options={[
                { value: "", label: "No preference" },
                ...teams.map((t) => ({ value: t.id, label: t.name })),
              ]}
            />
          </Field>

          <Field label="Availability" required>
            <Select
              value={form.availability}
              onChange={(v) =>
                set("availability", v as VolunteerFormValues["availability"])
              }
              options={AVAILABILITY_OPTIONS}
            />
          </Field>
        </div>

        <Field
          label="Why do you want to volunteer with DTI?"
          error={errors.motivation}
          required
        >
          <textarea
            value={form.motivation}
            onChange={(e) => set("motivation", e.target.value)}
            rows={4}
            maxLength={2000}
            placeholder="Tell us what motivates you to join..."
            className={cn(inputClass(errors.motivation), "resize-none")}
          />
          <p className="text-xs text-gray-400 mt-1 text-right">
            {form.motivation.length}/2000
          </p>
        </Field>
      </Section>

      <Section title="Terms & Agreement">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={!!form.agreedToTerms}
            onChange={(e) =>
              set(
                "agreedToTerms",
                (e.target.checked ? true : false) as unknown as true
              )
            }
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1B5E20] focus:ring-[#1B5E20]"
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
            I agree to the{" "}
            <Link
              href="/terms-of-service"
              target="_blank"
              className="underline text-[#1B5E20] hover:text-[#154218]"
            >
              terms and conditions
            </Link>{" "}
            of the Developmental Theatre Initiative and consent to being
            contacted regarding volunteer activities.
          </span>
        </label>
        {errors.agreedToTerms && (
          <p className="text-xs text-red-500 mt-1">{errors.agreedToTerms}</p>
        )}
      </Section>

      <div className="flex justify-end pt-2 pb-8">
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all",
            "bg-[#1B5E20] text-white hover:bg-[#154218] active:bg-[#0D3010]",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Application
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#252A34] mb-4 pb-2 border-b border-gray-200">
        {title}
      </h3>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputClass(), "appearance-none pr-10 cursor-pointer")}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}

function inputClass(error?: string): string {
  return cn(
    "w-full px-3 py-2 text-sm border rounded-lg bg-white text-gray-900",
    "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/20 focus:border-[#1B5E20]",
    "transition-colors",
    error ? "border-red-300" : "border-gray-300"
  );
}
