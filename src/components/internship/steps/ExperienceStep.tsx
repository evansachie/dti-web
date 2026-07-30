import type { StepProps } from "../internship-form-utils";
import { Field, inputClass } from "../internship-form-utils";
import { THEATRE_AREA_OPTIONS } from "../internship-constants";

export function ExperienceStep({ form, set, toggleArray }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#252A34]">
          Theatre & Creative Experience
        </h3>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.hasTheatreExperience}
            onChange={(e) => set("hasTheatreExperience", e.target.checked)}
            className="accent-[#1B5E20]"
          />
          <span className="text-sm text-gray-700">
            I have experience in theatre or performing arts
          </span>
        </label>
        {form.hasTheatreExperience && (
          <>
            <Field label="Describe your experience">
              <textarea
                value={form.theatreExperienceDesc}
                onChange={(e) => set("theatreExperienceDesc", e.target.value)}
                className={inputClass("")}
                rows={3}
                placeholder="Briefly describe your theatre experience"
              />
            </Field>
            <Field label="Areas of theatre experience">
              <div className="grid grid-cols-2 gap-2">
                {THEATRE_AREA_OPTIONS.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={form.theatreAreas.includes(opt)}
                      onChange={() => toggleArray("theatreAreas", opt)}
                      className="accent-[#1B5E20]"
                    />
                    <span className="text-sm text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Productions / projects / performances">
              <textarea
                value={form.theatreProductions}
                onChange={(e) => set("theatreProductions", e.target.value)}
                className={inputClass("")}
                rows={3}
                placeholder="List any productions you have participated in"
              />
            </Field>
          </>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#252A34]">
          Community Development Experience
        </h3>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.hasCommunityExperience}
            onChange={(e) => set("hasCommunityExperience", e.target.checked)}
            className="accent-[#1B5E20]"
          />
          <span className="text-sm text-gray-700">
            I have participated in community development activities
          </span>
        </label>
        {form.hasCommunityExperience && (
          <>
            <Field label="Describe your experience">
              <textarea
                value={form.communityExperienceDesc}
                onChange={(e) => set("communityExperienceDesc", e.target.value)}
                className={inputClass("")}
                rows={3}
                placeholder="Describe your community development activities"
              />
            </Field>
            <Field label="Volunteer work, leadership, social impact">
              <textarea
                value={form.volunteerWork}
                onChange={(e) => set("volunteerWork", e.target.value)}
                className={inputClass("")}
                rows={3}
                placeholder="Mention any volunteer work or leadership roles"
              />
            </Field>
          </>
        )}
      </div>
    </div>
  );
}
