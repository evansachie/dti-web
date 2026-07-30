import type { StepProps } from "../internship-form-utils";
import { Field, inputClass } from "../internship-form-utils";

export function StatementReferencesStep({ form, set, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#252A34]">
          Theatre for Development Interest
        </h3>
        <Field
          label="What interests you about Theatre for Development?"
          error={errors.tfdInterest}
          required
        >
          <textarea
            value={form.tfdInterest}
            onChange={(e) => set("tfdInterest", e.target.value)}
            className={inputClass(errors.tfdInterest)}
            rows={4}
            placeholder="150-200 words"
          />
        </Field>
        <Field
          label="How can theatre contribute to solving social challenges in Ghana?"
          error={errors.tfdSocialImpact}
          required
        >
          <textarea
            value={form.tfdSocialImpact}
            onChange={(e) => set("tfdSocialImpact", e.target.value)}
            className={inputClass(errors.tfdSocialImpact)}
            rows={4}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#252A34]">
          Personal Statement
        </h3>
        <Field
          label="Why do you want to join the DTI Internship Programme?"
          error={errors.personalStatement}
          required
        >
          <textarea
            value={form.personalStatement}
            onChange={(e) => set("personalStatement", e.target.value)}
            className={inputClass(errors.personalStatement)}
            rows={5}
            placeholder="250 words maximum"
          />
          <p className="text-xs text-gray-400 mt-1">
            {form.personalStatement.split(/\s+/).filter(Boolean).length} / 250
            words
          </p>
        </Field>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#252A34]">References</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-500">Reference 1</p>
            <input
              type="text"
              value={form.reference1Name}
              onChange={(e) => set("reference1Name", e.target.value)}
              className={inputClass("")}
              placeholder="Name"
            />
            <input
              type="text"
              value={form.reference1Position}
              onChange={(e) => set("reference1Position", e.target.value)}
              className={inputClass("")}
              placeholder="Position / Relationship"
            />
            <input
              type="tel"
              value={form.reference1Phone}
              onChange={(e) => set("reference1Phone", e.target.value)}
              className={inputClass("")}
              placeholder="Phone Number"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-500">Reference 2</p>
            <input
              type="text"
              value={form.reference2Name}
              onChange={(e) => set("reference2Name", e.target.value)}
              className={inputClass("")}
              placeholder="Name"
            />
            <input
              type="text"
              value={form.reference2Position}
              onChange={(e) => set("reference2Position", e.target.value)}
              className={inputClass("")}
              placeholder="Position / Relationship"
            />
            <input
              type="tel"
              value={form.reference2Phone}
              onChange={(e) => set("reference2Phone", e.target.value)}
              className={inputClass("")}
              placeholder="Phone Number"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
