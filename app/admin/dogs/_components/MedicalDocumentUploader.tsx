"use client";

import * as React from "react";
import { uploadMedicalDocument } from "@/lib/actions/medical.actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  MAX_FILE_SIZE,
  ALLOWED_EXTENSIONS,
  ALLOWED_CONTENT_TYPES
} from "@/lib/config/uploads";

type MedicalDocuments = Awaited<ReturnType<typeof import("@/lib/actions/medical.actions").getMedicalDocuments>>;

interface MedicalDocumentUploaderProps {
  dogId: number;
  documents: MedicalDocuments;
  onUploadSuccess?: () => void;
}

function validateFile(file: File): { valid: boolean; error?: string } {
  // Validate file extension
  const extension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    return {
      valid: false,
      error: `File type not allowed. Allowed types: ${ALLOWED_EXTENSIONS.join(', ')}`
    };
  }

  // Validate content type
  if (!ALLOWED_CONTENT_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: `File type "${file.type}" not allowed. Allowed types: PDF and images only.`
    };
  }

  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB`
    };
  }

  return { valid: true };
}

export function MedicalDocumentUploader({ dogId, documents, onUploadSuccess }: MedicalDocumentUploaderProps) {
  const [uploading, setUploading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [file, setFile] = React.useState<File | null>(null);
  const [fileValidationError, setFileValidationError] = React.useState<string | null>(null);

  // Check if filename already exists in documents
  const isDuplicateFilename = React.useMemo(() => {
    if (!file) return false;
    return documents.some(doc => doc.name.toLowerCase() === file.name.toLowerCase());
  }, [file, documents]);

  // Compute upload button disabled state
  const canUpload = file && !uploading && !fileValidationError && !isDuplicateFilename;

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setFileValidationError(null);
    const f = e.target.files?.[0] ?? null;

    if (!f) {
      setFile(null);
      return;
    }

    // Validate file immediately
    const validation = validateFile(f);
    if (!validation.valid) {
      setFileValidationError(validation.error || "Invalid file");
      setFile(null);
      return;
    }

    setFile(f);
  };

  const startUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('dogId', dogId.toString());
      formData.append('file', file);

      const result = await uploadMedicalDocument(undefined, formData);

      if (result.success) {
        // Clear file after successful upload
        setUploading(false);
        setFile(null);
        setFileValidationError(null);
        // Reset file input
        const fileInput = document.getElementById('medicalDocument') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        onUploadSuccess?.();
      } else {
        setUploading(false);
        setError(result.message || "Upload failed");
      }
    } catch (e) {
      setUploading(false);
      setError((e as Error)?.message ?? "Upload failed");
    }
  };

  return (
    <div className="grid gap-3 rounded-md border border-border p-4">
      <div className="grid gap-2">
        <Label htmlFor="medicalDocument">Medical document</Label>
        <Input
          id="medicalDocument"
          name="file"
          type="file"
          accept="application/pdf,image/*"
          onChange={onFile}
          aria-label="Upload medical document"
        />
      </div>

      {fileValidationError && (
        <div role="alert" className="text-red-600 text-sm">
          {fileValidationError}
        </div>
      )}

      {isDuplicateFilename && file && (
        <div role="alert" className="text-amber-600 text-sm">
          A file named &quot;{file.name}&quot; already exists. Please rename the file or choose a different one.
        </div>
      )}

      {error && (
        <div role="alert" data-testid="upload-error" className="text-red-600">
          {error}
          <div className="mt-2">
            <Button onClick={startUpload} data-testid="retry-upload">
              Retry
            </Button>
          </div>
        </div>
      )}

      <div className="flex justify-end gap-2">
        <Button onClick={startUpload} disabled={!canUpload} data-testid="start-upload">
          {uploading ? "Uploading…" : "Upload"}
        </Button>
      </div>
    </div>
  );
}
