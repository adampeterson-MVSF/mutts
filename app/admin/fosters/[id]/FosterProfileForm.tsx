"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  FosterProfileWithProfile,
  updateFosterProfile,
} from "@/lib/actions/foster.actions";
import { ActionResult } from "@/lib/types";
import { useToast } from "@/components/ui/toast";
import { missing } from "@/lib/format";

const initialFosterProfileState: ActionResult = {
  success: false,
  message: null,
  fieldErrors: undefined,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} data-testid="btn-save-foster">
      {pending ? "Saving..." : "Save Changes"}
    </Button>
  );
}

function SaveAndInviteButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" name="intent" value="invite" disabled={pending} variant="default">
      {pending ? "Saving & Inviting..." : "Save & Invite"}
    </Button>
  );
}

export default function FosterProfileForm({
  fosterProfile,
}: {
  fosterProfile: FosterProfileWithProfile;
}) {
  const { showToast } = useToast();
  const [formState, formAction] = useActionState(
    updateFosterProfile,
    initialFosterProfileState,
  );


  // Show toast for form submission results
  useEffect(() => {
    if (formState.message) {
      if (formState.success) {
        showToast(formState.message, "success");
      } else {
        showToast(formState.message, "error");
      }
    }
  }, [formState.message, formState.success, showToast]);

  if (!fosterProfile) {
    return (
      <p className="text-sm text-muted-foreground">
        Unable to load this foster profile.
      </p>
    );
  }

  const profileName = missing(fosterProfile.profile?.name, "Unknown foster");

  return (
    <form action={formAction} className="grid gap-6" aria-live="polite">
      <input type="hidden" name="profileId" value={fosterProfile.profileId} />

      <div>
        <h2 className="text-xl font-semibold">{profileName}</h2>
        <p className="text-sm text-muted-foreground">
          {fosterProfile.profile?.email}
        </p>
      </div>

      {formState.message && (
        <p className={`rounded-md px-3 py-2 text-sm ${formState.success ? 'bg-emerald-500/10 text-emerald-700' : 'bg-destructive/10 text-destructive'}`}>
          {formState.message}
        </p>
      )}

      <div className="grid gap-4">
        <div className="flex items-center space-x-3">
          <Checkbox
            id="hasCats"
            name="hasCats"
            defaultChecked={fosterProfile?.hasCats ?? false}
            data-testid="checkbox-has-cats"
          />
          <Label htmlFor="hasCats" className="space-y-1 leading-none">
            <span className="font-medium">Comfortable with Cats</span>
            <p className="text-sm text-muted-foreground">
              Indicates the foster can house cats alongside dogs.
            </p>
          </Label>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            id="hasDogs"
            name="hasDogs"
            defaultChecked={fosterProfile?.hasDogs ?? false}
            data-testid="checkbox-has-dogs"
          />
          <Label htmlFor="hasDogs" className="space-y-1 leading-none">
            <span className="font-medium">Has Resident Dogs</span>
            <p className="text-sm text-muted-foreground">
              Useful when matching fosters with social dogs.
            </p>
          </Label>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            id="canAdministerMeds"
            name="canAdministerMeds"
            defaultChecked={fosterProfile?.canAdministerMeds ?? false}
            data-testid="checkbox-can-administer-meds"
          />
          <Label htmlFor="canAdministerMeds" className="space-y-1 leading-none">
            <span className="font-medium">Can Administer Medication</span>
            <p className="text-sm text-muted-foreground">
              Track fosters who can support medical treatment plans.
            </p>
          </Label>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Add internal notes about this foster home..."
          defaultValue={fosterProfile?.notes ?? ""}
          className="min-h-[120px]"
          data-testid="textarea-foster-notes"
        />
      </div>

      <div className="flex justify-end gap-3">
        <SubmitButton />
        <SaveAndInviteButton />
      </div>
    </form>
  );
}
