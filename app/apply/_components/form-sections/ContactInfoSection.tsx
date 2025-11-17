import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/ui/form-error";


interface ContactInfoSectionProps {
  errors?: Record<string, string[]> | null;
  savedData?: Record<string, unknown> | null;
  previousData?: Record<string, unknown> | null;
  userProfile?: { name?: string; email?: string } | null;
}

export default function ContactInfoSection({ errors, savedData, previousData }: ContactInfoSectionProps) {
  // Helper to get value with priority: savedData > previousData
  const getValue = (key: string) => {
    return (savedData?.[key] as string) || (previousData?.[key] as string) || "";
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          placeholder="Your first name"
          defaultValue={getValue("firstName")}
          data-testid="field-first-name"
        />
        <FormError error={errors?.firstName} />
      </div>

      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          placeholder="Your last name"
          defaultValue={getValue("lastName")}
          data-testid="field-last-name"
        />
        <FormError error={errors?.lastName} />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          defaultValue={getValue("email")}
          data-testid="field-email"
        />
        <FormError error={errors?.email} />
      </div>

      <div>
        <Label htmlFor="applicantPhone">Phone Number (Optional)</Label>
        <Input
          id="applicantPhone"
          name="applicantPhone"
          type="tel"
          placeholder="(123) 456-7890"
          defaultValue={getValue("applicantPhone")}
          data-testid="input-phone"
        />
        <p className="text-sm text-muted-foreground mt-1">
          In case we need to reach you quickly.
        </p>
        <FormError error={errors?.applicantPhone} />
      </div>

      <div>
        <Label htmlFor="address">Street Address</Label>
        <Input
          id="address"
          name="address"
          placeholder="123 Main St, Anytown CA 90210"
          defaultValue={getValue("address")}
          data-testid="input-address"
        />
        <FormError error={errors?.address} />
      </div>

      <div>
        <Label htmlFor="vetName">Current or Previous Veterinarian (Optional)</Label>
        <Input
          id="vetName"
          name="vetName"
          placeholder="Vet Name / Clinic Name"
          defaultValue={getValue("vetName")}
        />
        <FormError error={errors?.vetName} />
      </div>

      <div>
        <Label htmlFor="vetPhone">Veterinarian Phone (Optional)</Label>
        <Input
          id="vetPhone"
          name="vetPhone"
          type="tel"
          placeholder="Vet's phone number"
          defaultValue={getValue("vetPhone")}
        />
        <p className="text-sm text-muted-foreground mt-1">
          We may contact them for a reference.
        </p>
        <FormError error={errors?.vetPhone} />
      </div>
    </div>
  );
}
