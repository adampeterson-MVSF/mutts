// components/admin/ShiftForm.tsx
"use client";

import { useActionState } from "react";
import { useEffect } from "react";
import { Shift } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { createShift, updateShift } from "@/lib/actions/shift.actions";
import { ActionResult } from "@/lib/types";
import { useToast } from "@/components/ui/toast";



// Helper to format date for datetime-local input
const formatDateTimeLocal = (date: Date | string | undefined): string => {
  if (!date) return "";
  try {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  } catch { return ""; }
};

function FormMessage({ error }: { error: string[] | undefined }) {
  if (!error || error.length === 0) return null;
  return <p className="text-red-500 text-sm mt-1">{error[0]}</p>;
}

interface ShiftFormProps {
  shift?: Shift; // Optional initial data for editing
  onSuccess?: () => void; // Optional callback on success (e.g., close dialog)
}

export default function ShiftForm({ shift, onSuccess }: ShiftFormProps) {
  const { showToast } = useToast();

  const [state, formAction] = useActionState(
    shift
      ? async (prevState: ActionResult, formData: FormData) => await updateShift(prevState, formData)
      : async (prevState: ActionResult, formData: FormData) => await createShift(prevState, formData),
    {
      success: false,
      message: null,
      fieldErrors: undefined,
      data: null,
    } satisfies ActionResult
  );

  // Handle success callback and show toast when state changes
  useEffect(() => {
    if (state.success && state.message) {
      showToast(state.message, "success");
      onSuccess?.();
    } else if (!state.success && state.message) {
      showToast(state.message, "error");
    }
  }, [state.success, state.message, onSuccess, showToast]);

  return (
    <form action={formAction} className="grid gap-4 py-4" data-testid="shift-form">
      {shift && <input type="hidden" name="shiftId" value={shift.id} />}

      <div>
        <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Title
        </label>
        <Input
          id="title"
          name="title"
          placeholder="Shift title"
          defaultValue={shift?.title || ""}
          required
          data-testid="input-title"
        />
        <FormMessage error={state.fieldErrors?.title} />
      </div>

      <div>
        <label htmlFor="description" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          placeholder="Optional detailed description of the shift"
          defaultValue={shift?.description || ""}
          data-testid="textarea-description"
        />
        <FormMessage error={state.fieldErrors?.description} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="startsAt" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Start Time
          </label>
          <Input
            id="startTime"
            name="startTime"
            type="datetime-local"
            defaultValue={formatDateTimeLocal(shift?.startsAt)}
            required
            data-testid="input-start-time"
          />
          <FormMessage error={state.fieldErrors?.startTime} />
        </div>

        <div>
          <label htmlFor="endsAt" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            End Time
          </label>
          <Input
            id="endTime"
            name="endTime"
            type="datetime-local"
            defaultValue={formatDateTimeLocal(shift?.endsAt)}
            required
            data-testid="input-end-time"
          />
          <FormMessage error={state.fieldErrors?.endTime} />
        </div>
      </div>

      <div>
        <label htmlFor="maxVolunteers" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Max Volunteers
        </label>
        <Input
          id="maxVolunteers"
          name="maxVolunteers"
          type="number"
          min="1"
          defaultValue={shift?.capacity || ""}
          data-testid="input-max-volunteers"
        />
        <FormMessage error={state.fieldErrors?.maxVolunteers} />
      </div>

      {state.message && !state.success && (
        <div role="alert" data-testid="server-error" className="text-sm text-red-500">
          {state.message}
        </div>
      )}

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit" data-testid="btn-save-shift">
          {shift ? "Save Changes" : "Create Shift"}
        </Button>
      </DialogFooter>
    </form>
  );
}
