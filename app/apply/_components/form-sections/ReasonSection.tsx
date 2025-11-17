import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppType } from "@prisma/client";

function FieldError({ error }: { error: string[] | undefined }) {
  if (!error || error.length === 0) return null;
  return <p className="text-red-500 text-sm mt-1">{error[0]}</p>;
}

interface ReasonSectionProps {
  formType: AppType;
  errors?: Record<string, string[]> | null;
  savedData?: Record<string, unknown> | null;
  previousData?: Record<string, unknown> | null;
}

export default function ReasonSection({ formType, errors, savedData, previousData }: ReasonSectionProps) {
  // Helper to get value with priority: savedData > previousData
  const getValue = (key: string) => {
    return (savedData?.[key] as string) || (previousData?.[key] as string) || "";
  };

  return (
    <div>
      <Label htmlFor="reason">Why {formType === AppType.ADOPTER ? 'Adopt' : 'Foster'} a Senior Dog?</Label>
      <Textarea
        id="reason"
        name="reason"
        placeholder={`Tell us a little about why you're interested in ${formType === AppType.ADOPTER ? 'adopting' : 'fostering'} a senior dog...`}
        className="min-h-[100px] mt-2"
        defaultValue={getValue("reason")}
        data-testid="textarea-reason"
      />
      <p className="text-sm text-muted-foreground mt-1">
        Share your motivation and what kind of home you can offer.
      </p>
      <FieldError error={errors?.reason} />
    </div>
  );
}
