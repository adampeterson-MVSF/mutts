// components/admin/DogInternalFields.tsx
"use client";

import { Dog } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormError } from "@/components/ui/form-error";

type FormState = {
  success: boolean;
  message: string | null;
  fieldErrors?: Record<string, string[]>;
};

interface DogInternalFieldsProps {
  dog?: Dog;
  state?: FormState;
}

export function DogInternalFields({ dog, state }: DogInternalFieldsProps) {
  return (
    <div>
      <Label htmlFor="notesInternal">Internal Notes (Staff Only)</Label>
      <Textarea
        id="notesInternal"
        name="notesInternal"
        placeholder="Temperament, medical notes, intake history..."
        className="min-h-[100px]"
        defaultValue={dog?.notesInternal || ""}
      />
      <FormError error={state?.fieldErrors?.notesInternal} />
    </div>
  );
}
