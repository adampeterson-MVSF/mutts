import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

function FieldError({ error }: { error: string[] | undefined }) {
  if (!error || error.length === 0) return null;
  return <p className="text-red-500 text-sm mt-1">{error[0]}</p>;
}

interface HousingInfoSectionProps {
  errors?: Record<string, string[]> | null;
  savedData?: Record<string, unknown> | null;
  previousData?: Record<string, unknown> | null;
}

export default function HousingInfoSection({ errors, savedData, previousData }: HousingInfoSectionProps) {
  // Helper to get value with priority: savedData > previousData
  const getValue = (key: string) => {
    return (savedData?.[key] as string) || (previousData?.[key] as string) || undefined;
  };


  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="housingType">Housing Type</Label>
        <select
          id="housingType"
          name="housingType"
          className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          defaultValue={getValue("housingType") || ""}
          data-testid="select-housing-type"
        >
          <option value="">Select housing type</option>
          <option value="OWN_HOME">Own Home</option>
          <option value="RENT_HOME">Rent Home</option>
          <option value="OWN_APT_CONDO">Own Apt/Condo</option>
          <option value="RENT_APT_CONDO">Rent Apt/Condo</option>
          <option value="OTHER">Other</option>
        </select>
        <FieldError error={errors?.housingType} />
      </div>

      <div>
        <Label>Do you have a yard?</Label>
        <RadioGroup name="hasYard" className="flex flex-row space-x-6 mt-2" defaultValue={getValue("hasYard")} data-testid="radio-has-yard">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="YES" id="yard-yes" />
            <Label htmlFor="yard-yes" className="font-normal">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="NO" id="yard-no" />
            <Label htmlFor="yard-no" className="font-normal">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="SHARED" id="yard-shared" />
            <Label htmlFor="yard-shared" className="font-normal">Shared</Label>
          </div>
        </RadioGroup>
        <FieldError error={errors?.hasYard} />
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="yardFenced"
            name="yardFenced"
            defaultChecked={getValue("yardFenced") === "true"}
            data-testid="radio-yard-fenced"
          />
          <Label htmlFor="yardFenced">Is your yard fenced?</Label>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Required for safety if you have a yard.
        </p>
        <FieldError error={errors?.yardFenced} />
      </div>

      <div>
        <Label htmlFor="otherPets">Other Pets in Household (Optional)</Label>
        <Textarea
          id="otherPets"
          name="otherPets"
          placeholder="List type, breed, age, and temperament of other pets..."
          defaultValue={getValue("otherPets") || ""}
        />
      </div>

      <div>
        <Label htmlFor="homeEnvironmentDescription">Describe Your Home Environment</Label>
        <Textarea
          id="homeEnvironmentDescription"
          name="homeEnvironmentDescription"
          placeholder="e.g., Quiet apartment, busy house with kids, activity level, who lives there..."
          className="min-h-[100px]"
          defaultValue={getValue("homeEnvironmentDescription") || ""}
        />
        <p className="text-sm text-muted-foreground mt-1">
          Help us understand the setting the dog would live in.
        </p>
        <FieldError error={errors?.homeEnvironmentDescription} />
      </div>
    </div>
  );
}
