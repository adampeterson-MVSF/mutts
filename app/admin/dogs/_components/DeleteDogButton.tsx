"use client";

import { useState, useEffect } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteDog } from "@/lib/actions/dog.actions";
import { ActionResult } from "@/lib/types";
import { useToast } from "@/components/ui/toast";

interface DeleteDogButtonProps {
  dogId: number;
  dogName: string;
}

function ConfirmDeleteButton({ disabled, reasonLength }: { disabled?: boolean; reasonLength: number }) {
  const { pending } = useFormStatus();
  const isDisabled = pending || disabled || reasonLength < 10;

  return (
    <Button
      type="submit"
      disabled={isDisabled}
      variant="destructive"
      className="bg-destructive hover:bg-destructive/90"
    >
      {pending ? "Deleting..." : "Yes, delete"}
    </Button>
  );
}

export function DeleteDogButton({ dogId, dogName }: DeleteDogButtonProps) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const { showToast } = useToast();
  const router = useRouter();

  const deleteAction = async (prevState: ActionResult<null>, formData: FormData) => {
    const id = Number(formData.get("dogId"));
    const deleteReason = formData.get("reason") as string;
    const result = await deleteDog(id, deleteReason);

    // Show toast and handle redirect on success
    if (result.success) {
      showToast(result.message || "Dog deleted successfully!", "success");
      // Close dialog and redirect after a brief delay to show the toast
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    } else {
      showToast(result.message || "Failed to delete dog.", "error");
    }

    return result;
  };

  const [state, formAction] = useActionState(deleteAction, {
    success: false,
    message: null,
    fieldErrors: undefined,
    data: null,
  } satisfies ActionResult);

  // Close dialog on successful deletion
  useEffect(() => {
    if (state.success) {
      setOpen(false);
    }
  }, [state.success]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          variant="destructive"
          className="w-full mt-4"
          data-testid="btn-delete-dog"
        >
          Delete Dog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete {dogName}
            &apos;s record.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4">
          <Label htmlFor="delete-reason">Required reason for deletion</Label>
          <Textarea
            id="delete-reason"
            name="reason"
            placeholder="Please provide a detailed reason for deleting this dog's record (minimum 10 characters)..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mt-2"
            rows={3}
          />
          <p className="text-sm text-muted-foreground mt-1">
            {reason.length}/1000 characters (minimum 10 required)
          </p>
        </div>
        <AlertDialogFooter className="flex flex-col items-stretch gap-2">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form action={formAction} className="flex flex-col gap-2">
            <input type="hidden" name="dogId" value={dogId} />
            <input type="hidden" name="reason" value={reason} />
            <ConfirmDeleteButton disabled={state.success} reasonLength={reason.length} />
          </form>
          {state.message && (
            <p className="text-sm text-red-500">{state.message}</p>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
