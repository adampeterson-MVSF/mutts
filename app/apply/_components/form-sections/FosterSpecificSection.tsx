import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FormError } from "@/components/ui/form-error";

function FieldError({ error }: { error: string[] | undefined }) {
  if (!error || error.length === 0) return null;
  return <p className="text-red-500 text-sm mt-1">{error[0]}</p>;
}

interface FosterSpecificSectionProps {
  errors?: Record<string, string[]> | null;
  savedData?: Record<string, unknown> | null;
  previousData?: Record<string, unknown> | null;
}

export default function FosterSpecificSection({ errors, savedData, previousData }: FosterSpecificSectionProps) {
  // Helper to get value with priority: savedData > previousData
  const getValue = (key: string) => {
    return (savedData?.[key] as string) || (previousData?.[key] as string) || "";
  };

  const getBooleanValue = (key: string) => {
    return (savedData?.[key] as boolean) || (previousData?.[key] as boolean) || false;
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Foster-Specific Information</h3>

      <div>
        <Label htmlFor="fosterCapacity">How many dogs can you foster at one time?</Label>
        <Input
          id="fosterCapacity"
          name="fosterCapacity"
          type="number"
          min="1"
          max="10"
          placeholder="1"
          defaultValue={getValue("fosterCapacity")}
          data-testid="input-foster-capacity"
          className="mt-2"
        />
        <p className="text-sm text-muted-foreground mt-1">
          Most fosters start with 1-2 dogs, but let us know your capacity.
        </p>
        <FormError error={errors?.fosterCapacity} />
      </div>

      <div>
        <Label>Do you have experience with animals?</Label>
        <div className="space-y-3 mt-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasCats"
              name="hasCats"
              defaultChecked={getBooleanValue("hasCats")}
              data-testid="checkbox-has-cats"
            />
            <Label htmlFor="hasCats" className="font-normal">
              I have cats
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasDogs"
              name="hasDogs"
              defaultChecked={getBooleanValue("hasDogs")}
              data-testid="checkbox-has-dogs"
            />
            <Label htmlFor="hasDogs" className="font-normal">
              I have dogs
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="canAdministerMeds"
              name="canAdministerMeds"
              defaultChecked={getBooleanValue("canAdministerMeds")}
              data-testid="checkbox-can-administer-meds"
            />
            <Label htmlFor="canAdministerMeds" className="font-normal">
              I can administer medications
            </Label>
          </div>
        </div>
        <FieldError error={errors?.hasCats || errors?.hasDogs || errors?.canAdministerMeds} />
      </div>

      <div>
        <Label htmlFor="experience">Tell us about your experience with animals</Label>
        <Textarea
          id="experience"
          name="experience"
          placeholder="Years of experience, types of animals, etc."
          defaultValue={getValue("experience")}
          data-testid="textarea-foster-experience"
          className="mt-2"
        />
        <p className="text-sm text-muted-foreground mt-1">
          Any relevant experience will help us match you with appropriate dogs.
        </p>
        <FormError error={errors?.experience} />
      </div>
    </div>
  );
}
