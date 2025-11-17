"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cancelShiftSignup } from "@/lib/actions/shift-signup.actions";
import { ActionResult, makeActionResult } from "@/lib/types";
import { useToast } from "@/components/ui/toast";

interface ShiftCancelButtonProps {
  shiftId: number;
}

function ConfirmCancelButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="destructive"
      disabled={pending}
    >
      {pending ? "Cancelling..." : "Cancel Signup"}
    </Button>
  );
}

export default function ShiftCancelButton({ shiftId }: ShiftCancelButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { showToast } = useToast();
  const router = useRouter();

  const [, formAction] = useActionState(async (prevState: ActionResult, formData: FormData) => {
    const result = await cancelShiftSignup(prevState, formData);

    if (result.success) {
      showToast(result.message || "Successfully cancelled shift signup!", "success");
      setIsDialogOpen(false);
      router.refresh(); // Ensure server state is updated
    } else {
      showToast(result.message || "Failed to cancel shift signup.", "error");
    }

    return result;
  }, makeActionResult());

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full"
          aria-label="Cancel your signup for this shift"
          data-testid={`cancel-${shiftId}`}
        >
          Cancel Signup
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancel Shift Signup</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to cancel your signup for this shift? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Signup</AlertDialogCancel>
          <AlertDialogAction
            asChild
            data-testid="btn-confirm-delete"
          >
            <form action={formAction}>
              <input type="hidden" name="shiftId" value={shiftId} />
              <ConfirmCancelButton />
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
