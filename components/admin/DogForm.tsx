// components/admin/DogForm.tsx
"use client";

import { Dog, Profile } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { useDogPhotoUpload } from "@/lib/hooks/useDogForm";
import { DogFormPhotoUpload } from "@/components/admin/DogFormPhotoUpload";
import { DogCoreFields } from "./DogCoreFields";
import { DogFosterAssignmentFields } from "./DogFosterAssignmentFields";
import { DogPublicFields } from "./DogPublicFields";
import { DogInternalFields } from "./DogInternalFields";

type FosterProfile = Pick<Profile, 'id' | 'name' | 'email'>;

function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending} data-testid={isEditing ? "btn-save-changes" : "btn-submit-dog"}>
      {pending ? (isEditing ? "Updating..." : "Creating...") : (isEditing ? "Update Dog" : "Create Dog")}
    </Button>
  );
}


type FormState = {
  success: boolean;
  message: string | null;
  fieldErrors?: Record<string, string[]>;
};

interface DogFormProps {
  dog?: Dog;
  potentialFosters: FosterProfile[];
  formAction: (formData: FormData) => void;
  state?: FormState;
}

export default function DogForm({
  dog,
  potentialFosters = [],
  formAction,
  state = { success: false, message: null, fieldErrors: undefined }
}: DogFormProps) {
  const {
    selectedFile,
    previewUrl,
    isDragOver,
    fileInputRef,
    handleDragOver,
    handleDragLeave,
    clearFile,
    handleFileInputChange,
    handleDrop,
  } = useDogPhotoUpload({ dog });



  return (
    <form action={formAction} className="flex flex-col gap-4">
      <DogFormPhotoUpload
        dog={dog}
        selectedFile={selectedFile}
        previewUrl={previewUrl}
        isDragOver={isDragOver}
        fileInputRef={fileInputRef}
        handleDragOver={handleDragOver}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
        handleFileInputChange={handleFileInputChange}
        clearFile={clearFile}
      />

      <DogCoreFields dog={dog} state={state} />

      <DogFosterAssignmentFields
        dog={dog}
        potentialFosters={potentialFosters}
        state={state}
      />

      <DogPublicFields dog={dog} state={state} />

      <DogInternalFields dog={dog} state={state} />

      <SubmitButton isEditing={!!dog} />
      {state.message && (
        <p className={`text-sm mt-2 ${state.success ? 'text-green-500' : 'text-red-500'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
