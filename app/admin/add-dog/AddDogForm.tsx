"use client";

import DogForm from "@/components/admin/DogForm";
import { createDog, getPotentialFosters } from "@/lib/actions/dog.actions";
import { ActionResult, makeActionResult } from "@/lib/types";
import { Dog } from "@prisma/client";
import { useActionState } from "react";
import { useToast } from "@/components/ui/toast";

export function AddDogForm({ potentialFosters }: { potentialFosters: Awaited<ReturnType<typeof getPotentialFosters>> }) {
  const { showToast, ToastComponent } = useToast();

  const [state, formAction] = useActionState(async (state: ActionResult<Dog>, formData: FormData) => {
    // NO client validation here.
    const result = await createDog(formData); // Call action directly.

    if (!result.success) {
      showToast(result.message || "Failed to create dog.", "error");
    }
    return result;
  }, makeActionResult<Dog>());

  return (
    <>
      <ToastComponent />
      <DogForm
        potentialFosters={potentialFosters}
        formAction={formAction}
        state={state}
      />
    </>
  );
}
