// components/admin/DogCoreFields.tsx
"use client";

import { Dog, DogStatus, Gender, DogSize } from "@prisma/client";
import { Input } from "@/components/ui/input";
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

interface DogCoreFieldsProps {
  dog?: Dog;
  state?: FormState;
}

export function DogCoreFields({ dog, state }: DogCoreFieldsProps) {
  return (
    <>
      {/* Basic Info */}
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          data-testid="input-dog-name"
          placeholder="Dog's name"
          defaultValue={dog?.name || ""}
          required
          maxLength={50}
        />
        <FormError error={state?.fieldErrors?.name} />
      </div>

      <div>
        <Label htmlFor="breed">Breed</Label>
        <Select
          name="breed"
          defaultValue={dog?.breed || ""}
        >
          <SelectTrigger data-testid="select-breed">
            <SelectValue placeholder="Select a breed" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Mixed Breed">Mixed Breed</SelectItem>
            <SelectItem value="Golden Retriever">Golden Retriever</SelectItem>
            <SelectItem value="Labrador Retriever">Labrador Retriever</SelectItem>
            <SelectItem value="German Shepherd">German Shepherd</SelectItem>
            <SelectItem value="Chihuahua">Chihuahua</SelectItem>
            <SelectItem value="Poodle">Poodle</SelectItem>
            <SelectItem value="Bulldog">Bulldog</SelectItem>
            <SelectItem value="Beagle">Beagle</SelectItem>
            <SelectItem value="Rottweiler">Rottweiler</SelectItem>
            <SelectItem value="Siberian Husky">Siberian Husky</SelectItem>
          </SelectContent>
        </Select>
        <FormError error={state?.fieldErrors?.breed} />
      </div>

      <div>
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          data-testid="input-dateOfBirth"
          placeholder="Date of birth"
          defaultValue={dog?.dateOfBirth ? new Date(dog.dateOfBirth).toISOString().split('T')[0] : ""}
        />
        <FormError error={state?.fieldErrors?.dateOfBirth} />
      </div>

      <div>
        <Label htmlFor="gender">Gender</Label>
        <Select
          name="gender"
          defaultValue={dog?.gender || ""}
        >
          <SelectTrigger data-testid="select-gender">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(Gender).map((g) => (
              <SelectItem key={g} value={g}>
                {g}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormError error={state?.fieldErrors?.gender} />
      </div>

      <div>
        <Label htmlFor="size">Size</Label>
        <Select
          name="size"
          defaultValue={dog?.size || ""}
        >
          <SelectTrigger data-testid="select-size">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(DogSize).map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormError error={state?.fieldErrors?.size} />
      </div>

      <div>
        <Label htmlFor="weight_lbs">Weight (lbs)</Label>
        <Input
          id="weight_lbs"
          name="weight_lbs"
          type="number"
          step="0.1"
          data-testid="input-weight"
          placeholder="Weight in pounds"
          defaultValue={dog?.weight_lbs || ""}
        />
        <FormError error={state?.fieldErrors?.weight_lbs} />
      </div>

      <div>
        <Label htmlFor="status">Status</Label>
        <Select
          name="status"
          defaultValue={dog?.status || DogStatus.INTAKE}
        >
          <SelectTrigger data-testid="select-status">
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(DogStatus).map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormError error={state?.fieldErrors?.status} />
      </div>
    </>
  );
}
