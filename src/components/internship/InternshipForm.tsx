"use client";

import { useState, useTransition } from "react";
import { Check, ChevronLeft, ChevronRight, Loader2, Send } from "lucide-react";
import { cn, getErrorMessage } from "@/lib/utils";
import {
  submitInternshipApplication,
  type InternshipFormValues,
} from "@/lib/api";
import { INITIAL_FORM, STEPS } from "./internship-constants";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { EducationStep } from "./steps/EducationStep";
import { InterestStep } from "./steps/InterestStep";
import { ExperienceStep } from "./steps/ExperienceStep";
import { SkillsAvailabilityStep } from "./steps/SkillsAvailabilityStep";
import { StatementReferencesStep } from "./steps/StatementReferencesStep";
import { DocumentsStep } from "./steps/DocumentsStep";
import { DeclarationStep } from "./steps/DeclarationStep";

export interface FileState {
  cv?: File;
  motivationLetter?: File;
  portfolio?: File;
  certificates?: File;
  recommendationLetter?: File;
}

export function InternshipForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<InternshipFormValues>(INITIAL_FORM);
  const [files, setFiles] = useState<FileState>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState<{
    applicationNo: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  function set<K extends keyof InternshipFormValues>(
    key: K,
    value: InternshipFormValues[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function toggleArray(key: keyof InternshipFormValues, value: string) {
    const current = form[key] as string[];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    set(key, next as InternshipFormValues[typeof key]);
  }

  function validateStep(): boolean {
    const stepErrors: Record<string, string> = {};

    if (step === 0) {
      if (!form.fullName.trim()) stepErrors.fullName = "Required";
      if (!form.gender) stepErrors.gender = "Required";
      if (!form.dateOfBirth) stepErrors.dateOfBirth = "Required";
      if (!form.nationality.trim()) stepErrors.nationality = "Required";
      if (!form.location.trim()) stepErrors.location = "Required";
      if (!form.phone.trim()) stepErrors.phone = "Required";
      else if (form.phone.trim().length < 8)
        stepErrors.phone = "Enter a valid phone number";
      if (!form.email.trim()) stepErrors.email = "Required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        stepErrors.email = "Invalid email";
    } else if (step === 1) {
      if (!form.educationStatus) stepErrors.educationStatus = "Required";
      if (!form.institution.trim()) stepErrors.institution = "Required";
      if (!form.programme.trim()) stepErrors.programme = "Required";
    } else if (step === 2) {
      if (form.areaOfInterest.length === 0)
        stepErrors.areaOfInterest = "Select at least one";
    } else if (step === 4) {
      if (!form.duration) stepErrors.duration = "Required";
      if (!form.availableFrom.trim()) stepErrors.availableFrom = "Required";
    } else if (step === 5) {
      if (!form.tfdInterest.trim()) stepErrors.tfdInterest = "Required";
      else if (form.tfdInterest.trim().length < 10)
        stepErrors.tfdInterest = "Too short";
      if (!form.tfdSocialImpact.trim()) stepErrors.tfdSocialImpact = "Required";
      else if (form.tfdSocialImpact.trim().length < 10)
        stepErrors.tfdSocialImpact = "Too short";
      if (!form.personalStatement.trim())
        stepErrors.personalStatement = "Required";
      else if (
        form.personalStatement.trim().split(/\s+/).filter(Boolean).length > 250
      )
        stepErrors.personalStatement = "Max 250 words";
    } else if (step === 6) {
      if (!files.cv) stepErrors.cv = "CV is required";
    } else if (step === 7) {
      if (!form.declarationName.trim()) stepErrors.declarationName = "Required";
      if (!form.declarationDate) stepErrors.declarationDate = "Required";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }

  function nextStep() {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
    }
  }

  function handleSubmit() {
    setServerError(null);
    if (!validateStep()) return;

    startTransition(async () => {
      try {
        const result = await submitInternshipApplication(form, files);
        setSubmitted({ applicationNo: result.applicationNo });
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
          Application Submitted!
        </h2>
        <p className="text-gray-600 mb-2">Your application number is:</p>
        <p className="text-3xl font-bold text-[#1B5E20] tracking-wider mb-6">
          {submitted.applicationNo}
        </p>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          We&apos;ve received your application. Our team will review it and get
          back to you via email at <strong>{form.email}</strong>.
        </p>
      </div>
    );
  }

  const stepProps = { form, set, toggleArray, errors };

  return (
    <div>
      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center">
            <button
              type="button"
              onClick={() => i < step && setStep(i)}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-colors",
                i === step
                  ? "bg-[#1B5E20] text-white"
                  : i < step
                    ? "bg-[#1B5E20]/10 text-[#1B5E20] cursor-pointer"
                    : "bg-gray-100 text-gray-400"
              )}
            >
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </button>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "w-6 h-0.5 mx-1",
                  i < step ? "bg-[#1B5E20]" : "bg-gray-200"
                )}
              />
            )}
          </div>
        ))}
      </div>
      <div className="text-sm font-medium text-gray-500 mb-6">
        Step {step + 1} of {STEPS.length}: {STEPS[step]}
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">
          {serverError}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step === STEPS.length - 1) handleSubmit();
          else nextStep();
        }}
        className="space-y-6"
      >
        {step === 0 && <PersonalInfoStep {...stepProps} />}
        {step === 1 && <EducationStep {...stepProps} />}
        {step === 2 && <InterestStep {...stepProps} />}
        {step === 3 && <ExperienceStep {...stepProps} />}
        {step === 4 && <SkillsAvailabilityStep {...stepProps} />}
        {step === 5 && <StatementReferencesStep {...stepProps} />}
        {step === 6 && (
          <DocumentsStep files={files} setFiles={setFiles} errors={errors} />
        )}
        {step === 7 && <DeclarationStep {...stepProps} />}

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-[#252A34] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}
          {step < STEPS.length - 1 ? (
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#1B5E20] hover:bg-[#154d1a] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-2 bg-[#1B5E20] hover:bg-[#154d1a] disabled:opacity-60 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {isPending ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
