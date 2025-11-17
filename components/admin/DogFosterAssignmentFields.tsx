// components/admin/DogFosterAssignmentFields.tsx
"use client";

import { Dog } from "@prisma/client";
import { Label } from "@/components/ui/label";
import { FormError } from "@/components/ui/form-error";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormState = {
  success: boolean;
  message: string | null;
  fieldErrors?: Record<string, string[]>;
};

type FosterProfile = {
  id: string;
  name: string | null;
  email: string;
  hasFosterProfile?: boolean;
};

interface DogFosterAssignmentFieldsProps {
  dog?: Dog;
  potentialFosters: FosterProfile[];
  state?: FormState;
}

export function DogFosterAssignmentFields({
  dog,
  potentialFosters,
  state
}: DogFosterAssignmentFieldsProps) {
  return (
    <div>
      <Label htmlFor="fosterProfileId">Foster Parent</Label>
      <Select
        name="fosterProfileId"
        defaultValue={dog?.fosterProfileId ?? ""}
      >
        <SelectTrigger id="fosterProfileId" data-testid="select-foster">
          <SelectValue placeholder="Select a foster parent (optional)" />
        </SelectTrigger>
        <SelectContent>
          {potentialFosters.map((profile) => (
            <SelectItem key={profile.id} value={profile.id}>
              {profile.name || profile.email}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormError error={state?.fieldErrors?.fosterProfileId} />
    </div>
  );
}
