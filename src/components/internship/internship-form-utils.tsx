"use client";

import { useRef } from "react";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { InternshipFormValues } from "@/lib/api";

export interface StepProps {
  form: InternshipFormValues;
  set: <K extends keyof InternshipFormValues>(
    key: K,
    value: InternshipFormValues[K]
  ) => void;
  toggleArray: (key: keyof InternshipFormValues, value: string) => void;
  errors: Record<string, string>;
}

export function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-[#252A34]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export function inputClass(error?: string) {
  return cn(
    "w-full px-4 py-2.5 rounded-lg border text-sm transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/20 focus:border-[#1B5E20]",
    error ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
  );
}

export function FileUpload({
  label,
  file,
  onUpload,
  onRemove,
  required,
}: {
  label: string;
  file?: File;
  onUpload: (f: File) => void;
  onRemove: () => void;
  required?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-[#252A34]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {file ? (
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
          <Upload className="w-4 h-4 text-[#1B5E20]" />
          <span className="text-sm text-gray-700 flex-1 truncate">
            {file.name}
          </span>
          <button
            type="button"
            onClick={onRemove}
            className="text-gray-400 hover:text-red-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onUpload(f);
          }}
        />
      )}
      {!file && (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg px-4 py-6 text-sm text-gray-500 hover:border-[#1B5E20] hover:text-[#1B5E20] transition-colors"
        >
          <Upload className="w-4 h-4" />
          Choose file (PDF, DOC, DOCX)
        </button>
      )}
    </div>
  );
}
