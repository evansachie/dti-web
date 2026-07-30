import type { StepProps } from "../internship-form-utils";
import { Field, inputClass } from "../internship-form-utils";
import { EDUCATION_OPTIONS } from "../internship-constants";

export function EducationStep({ form, set, errors }: StepProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#252A34]">
        Educational Background
      </h3>
      <Field
        label="Current Educational Status"
        error={errors.educationStatus}
        required
      >
        <div className="space-y-2">
          {EDUCATION_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="educationStatus"
                value={opt.value}
                checked={form.educationStatus === opt.value}
                onChange={(e) => set("educationStatus", e.target.value)}
                className="accent-[#1B5E20]"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </Field>
      <Field
        label="Institution Attended / Currently Attending"
        error={errors.institution}
        required
      >
        <input
          type="text"
          value={form.institution}
          onChange={(e) => set("institution", e.target.value)}
          className={inputClass(errors.institution)}
          placeholder="e.g. University of Ghana"
        />
      </Field>
      <Field label="Programme of Study" error={errors.programme} required>
        <input
          type="text"
          value={form.programme}
          onChange={(e) => set("programme", e.target.value)}
          className={inputClass(errors.programme)}
          placeholder="e.g. Theatre Arts"
        />
      </Field>
      <Field label="Level / Year of Study" error={errors.studyLevel}>
        <input
          type="text"
          value={form.studyLevel}
          onChange={(e) => set("studyLevel", e.target.value)}
          className={inputClass(errors.studyLevel)}
          placeholder="e.g. 3rd Year"
        />
      </Field>
      <Field label="Expected Graduation Year" error={errors.graduationYear}>
        <input
          type="text"
          value={form.graduationYear}
          onChange={(e) => set("graduationYear", e.target.value)}
          className={inputClass(errors.graduationYear)}
          placeholder="e.g. 2027"
        />
      </Field>
    </div>
  );
}
