"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDogById, getPotentialFosters, updateDog } from "@/lib/actions/dog.actions";
import { ActionResult } from "@/lib/types";
import { useActionState } from "react";
import { useToast } from "@/components/ui/toast";
import DogForm from "@/components/admin/DogForm";
import { DeleteDogButton } from "../../dogs/_components/DeleteDogButton";
import { RouteReady } from "@/components/testing/RouteReady";

function EditDogPageClient({
  dog,
  potentialFosters
}: {
  dog: Awaited<ReturnType<typeof getDogById>>,
  potentialFosters: Awaited<ReturnType<typeof getPotentialFosters>>
}) {
  const { showToast, ToastComponent } = useToast();

  const [state, formAction] = useActionState(async (state: ActionResult, formData: FormData) => {
    // Prevent double submission
    if (state.success) {
      return state;
    }

    // Call server action directly - server handles all validation
    const result = await updateDog(dog.id, formData);

    // Show toast based on result
    if (result.success) {
      showToast(result.message || "Dog updated successfully!", "success");
    } else {
      showToast(result.message || "Failed to update dog.", "error");
    }

    return result;
  }, {
    success: false,
    message: null,
    fieldErrors: undefined,
    data: null,
  } satisfies ActionResult);

  return (
    <>
      <ToastComponent />
      <div className="flex-1 w-full flex flex-col items-center p-8">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-6" data-testid="page-title">Edit {dog.name}</h1>
          {process.env.NEXT_PUBLIC_E2E === "true" && (
            <RouteReady route={`admin/edit-dog/${dog.id}`} />
          )}

          <DogForm
            dog={dog}
            potentialFosters={potentialFosters}
            formAction={formAction}
            state={state}
          />

          <DeleteDogButton dogId={dog.id} dogName={dog.name} />

          <div className="mt-8 border-t pt-6 space-y-4">
            <h2 className="text-2xl font-bold">Manage Records</h2>
            <Button variant="outline" asChild className="w-full">
              <Link href={`/admin/dog/${dog.id}?tab=medical`}>View Medical Records</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href={`/admin/dog/${dog.id}?tab=medical`}>Manage Medical Records</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditDogPageClient;
