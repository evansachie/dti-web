import { FileUpload } from "../internship-form-utils";
import type { FileState } from "../InternshipForm";

interface DocumentsStepProps {
  files: FileState;
  setFiles: React.Dispatch<React.SetStateAction<FileState>>;
  errors: Record<string, string>;
}

export function DocumentsStep({ files, setFiles, errors }: DocumentsStepProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#252A34]">
        Required Documents
      </h3>
      {errors.cv && <p className="text-sm text-red-500">{errors.cv}</p>}
      <FileUpload
        label="Updated CV"
        file={files.cv}
        onUpload={(f) => setFiles((p) => ({ ...p, cv: f }))}
        onRemove={() => setFiles((p) => ({ ...p, cv: undefined }))}
        required
      />
      <FileUpload
        label="Motivation Letter"
        file={files.motivationLetter}
        onUpload={(f) => setFiles((p) => ({ ...p, motivationLetter: f }))}
        onRemove={() =>
          setFiles((p) => ({ ...p, motivationLetter: undefined }))
        }
      />
      <FileUpload
        label="Portfolio (where applicable)"
        file={files.portfolio}
        onUpload={(f) => setFiles((p) => ({ ...p, portfolio: f }))}
        onRemove={() => setFiles((p) => ({ ...p, portfolio: undefined }))}
      />
      <FileUpload
        label="Academic/Professional Certificates (optional)"
        file={files.certificates}
        onUpload={(f) => setFiles((p) => ({ ...p, certificates: f }))}
        onRemove={() => setFiles((p) => ({ ...p, certificates: undefined }))}
      />
      <FileUpload
        label="Recommendation Letter (optional)"
        file={files.recommendationLetter}
        onUpload={(f) => setFiles((p) => ({ ...p, recommendationLetter: f }))}
        onRemove={() =>
          setFiles((p) => ({ ...p, recommendationLetter: undefined }))
        }
      />
    </div>
  );
}
