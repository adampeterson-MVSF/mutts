// components/admin/DogPublicFields.tsx
"use client";

import { Dog } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormError } from "@/components/ui/form-error";

type FormState = {
  success: boolean;
  message: string | null;
  fieldErrors?: Record<string, string[]>;
};

interface DogPublicFieldsProps {
  dog?: Dog;
  state?: FormState;
}

export function DogPublicFields({ dog, state }: DogPublicFieldsProps) {
  return (
    <>
      {/* Bio and Special Needs */}
      <div className="flex flex-row items-start space-x-3 space-y-0">
        <Checkbox
          id="specialNeeds"
          name="specialNeeds"
          defaultChecked={dog?.specialNeeds || false}
        />
        <div className="space-y-1 leading-none">
          <Label htmlFor="specialNeeds">Special Needs</Label>
        </div>
      </div>
      <FormError error={state?.fieldErrors?.specialNeeds} />

      <div>
        <Label htmlFor="bioPublic">Public Bio</Label>
        <Textarea
          id="bioPublic"
          name="bioPublic"
          data-testid="textarea-bio"
          placeholder="Write the public-facing description here..."
          className="min-h-[100px]"
          defaultValue={dog?.bioPublic || ""}
        />
        <FormError error={state?.fieldErrors?.bioPublic} />
      </div>
    </>
  );
}
