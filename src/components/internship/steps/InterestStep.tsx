import { cn } from "@/lib/utils";
import type { StepProps } from "../internship-form-utils";
import { inputClass } from "../internship-form-utils";
import { INTEREST_OPTIONS } from "../internship-constants";

export function InterestStep({ form, set, toggleArray, errors }: StepProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#252A34]">
        Internship Area of Interest
      </h3>
      <p className="text-sm text-gray-500">
        Select all areas that interest you.
      </p>
      {errors.areaOfInterest && (
        <p className="text-sm text-red-500">{errors.areaOfInterest}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {INTEREST_OPTIONS.map((opt) => (
          <label
            key={opt}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
              form.areaOfInterest.includes(opt)
                ? "border-[#1B5E20] bg-[#1B5E20]/5"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <input
              type="checkbox"
              checked={form.areaOfInterest.includes(opt)}
              onChange={() => toggleArray("areaOfInterest", opt)}
              className="accent-[#1B5E20]"
            />
            <span className="text-sm text-gray-700">{opt}</span>
          </label>
        ))}
      </div>
      {form.areaOfInterest.includes("Other") && (
        <input
          type="text"
          value={form.areaOfInterestOther}
          onChange={(e) => set("areaOfInterestOther", e.target.value)}
          className={inputClass(errors.areaOfInterestOther)}
          placeholder="Specify other area"
        />
      )}
    </div>
  );
}
