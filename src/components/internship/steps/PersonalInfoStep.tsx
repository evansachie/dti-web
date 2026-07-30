import type { StepProps } from "../internship-form-utils";
import { Field, inputClass } from "../internship-form-utils";
import { GENDER_OPTIONS } from "../internship-constants";

export function PersonalInfoStep({ form, set, errors }: StepProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#252A34]">
        Personal Information
      </h3>
      <Field label="Full Name" error={errors.fullName} required>
        <input
          type="text"
          value={form.fullName}
          onChange={(e) => set("fullName", e.target.value)}
          className={inputClass(errors.fullName)}
          placeholder="Enter your full name"
        />
      </Field>
      <Field label="Gender" error={errors.gender} required>
        <div className="flex gap-4">
          {GENDER_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="gender"
                value={opt.value}
                checked={form.gender === opt.value}
                onChange={(e) => set("gender", e.target.value)}
                className="accent-[#1B5E20]"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </Field>
      <Field label="Date of Birth" error={errors.dateOfBirth} required>
        <input
          type="date"
          value={form.dateOfBirth}
          onChange={(e) => set("dateOfBirth", e.target.value)}
          className={inputClass(errors.dateOfBirth)}
        />
      </Field>
      <Field label="Nationality" error={errors.nationality} required>
        <input
          type="text"
          value={form.nationality}
          onChange={(e) => set("nationality", e.target.value)}
          className={inputClass(errors.nationality)}
          placeholder="e.g. Ghanaian"
        />
      </Field>
      <Field
        label="Current Location (City/Region)"
        error={errors.location}
        required
      >
        <input
          type="text"
          value={form.location}
          onChange={(e) => set("location", e.target.value)}
          className={inputClass(errors.location)}
          placeholder="e.g. Accra"
        />
      </Field>
      <Field label="Phone Number" error={errors.phone} required>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={inputClass(errors.phone)}
          placeholder="+233..."
        />
      </Field>
      <Field label="Email Address" error={errors.email} required>
        <input
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          className={inputClass(errors.email)}
          placeholder="you@example.com"
        />
      </Field>
    </div>
  );
}
