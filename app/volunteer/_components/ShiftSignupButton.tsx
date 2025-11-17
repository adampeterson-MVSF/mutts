"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signupForShift } from "@/lib/actions/shift-signup.actions";
import { ActionResult, makeActionResult } from "@/lib/types";
import { useToast } from "@/components/ui/toast";

interface ShiftSignupButtonProps {
  shiftId: number;
  isFull: boolean;
}

export default function ShiftSignupButton({ shiftId, isFull }: ShiftSignupButtonProps) {
  const { showToast } = useToast();
  const router = useRouter();

  const [state, formAction] = useActionState(async (prevState: ActionResult, formData: FormData) => {
    const result = await signupForShift(prevState, formData);

    if (result.success) {
      showToast(result.message || "Successfully signed up for shift!", "success");
      router.refresh(); // Ensure server state is updated
    } else {
      showToast(result.message || "Failed to sign up for shift.", "error");
    }

    return result;
  }, makeActionResult());

  // Use useFormStatus for pending state
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <input type="hidden" name="shiftId" value={shiftId} />
      <Button
        type="submit"
        disabled={isFull || pending}
        className="w-full"
        aria-label={isFull ? "Shift is full" : "Sign up for this shift"}
        aria-busy={pending}
        data-testid={`signup-${shiftId}`}
      >
        {pending ? "Signing up..." : isFull ? "Shift Full" : "Sign Up"}
      </Button>
      {state.message && !state.success && (
        <p className="text-xs text-red-500 mt-1" role="alert">{state.message}</p>
      )}
    </form>
  );
}
