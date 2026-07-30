import type { StepProps } from "../internship-form-utils";
import { Field, inputClass } from "../internship-form-utils";

export function DeclarationStep({ form, set, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#252A34]">Declaration</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600 italic">
          &quot;I confirm that the information provided in this application is
          true and accurate. I understand that submitting this application does
          not guarantee selection, and successful applicants will be contacted
          after the review process.&quot;
        </div>
        <Field label="Applicant Name" error={errors.declarationName} required>
          <input
            type="text"
            value={form.declarationName}
            onChange={(e) => set("declarationName", e.target.value)}
            className={inputClass(errors.declarationName)}
            placeholder="Type your full name"
          />
        </Field>
        <Field label="Date" error={errors.declarationDate} required>
          <input
            type="date"
            value={form.declarationDate}
            onChange={(e) => set("declarationDate", e.target.value)}
            className={inputClass(errors.declarationDate)}
          />
        </Field>
      </div>
    </div>
  );
}
