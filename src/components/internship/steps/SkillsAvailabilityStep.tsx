import { cn } from "@/lib/utils";
import type { StepProps } from "../internship-form-utils";
import { Field, inputClass } from "../internship-form-utils";
import { SKILL_OPTIONS, DURATION_OPTIONS } from "../internship-constants";

export function SkillsAvailabilityStep({
  form,
  set,
  toggleArray,
  errors,
}: StepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#252A34]">
          Skills & Competencies
        </h3>
        <p className="text-sm text-gray-500">Select all skills that apply.</p>
        <div className="grid grid-cols-2 gap-2">
          {SKILL_OPTIONS.map((opt) => (
            <label
              key={opt}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                form.skills.includes(opt)
                  ? "border-[#1B5E20] bg-[#1B5E20]/5"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              <input
                type="checkbox"
                checked={form.skills.includes(opt)}
                onChange={() => toggleArray("skills", opt)}
                className="accent-[#1B5E20]"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
        {form.skills.includes("Other") && (
          <input
            type="text"
            value={form.skillsOther}
            onChange={(e) => set("skillsOther", e.target.value)}
            className={inputClass("")}
            placeholder="Specify other skill"
          />
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#252A34]">Availability</h3>
        <Field
          label="Preferred internship duration"
          error={errors.duration}
          required
        >
          <div className="flex gap-4">
            {DURATION_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="duration"
                  value={opt.value}
                  checked={form.duration === opt.value}
                  onChange={(e) => set("duration", e.target.value)}
                  className="accent-[#1B5E20]"
                />
                <span className="text-sm text-gray-700">{opt.label}</span>
              </label>
            ))}
          </div>
        </Field>
        <Field
          label="When are you available to begin?"
          error={errors.availableFrom}
          required
        >
          <input
            type="text"
            value={form.availableFrom}
            onChange={(e) => set("availableFrom", e.target.value)}
            className={inputClass(errors.availableFrom)}
            placeholder="e.g. August 2026"
          />
        </Field>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.willingFieldWork}
            onChange={(e) => set("willingFieldWork", e.target.checked)}
            className="accent-[#1B5E20]"
          />
          <span className="text-sm text-gray-700">
            Willing to participate in community field activities
          </span>
        </label>
      </div>
    </div>
  );
}
