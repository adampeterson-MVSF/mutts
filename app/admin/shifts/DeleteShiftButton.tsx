"use client";

import { useState, useEffect } from "react";
import { useActionState } from "react";
import { ActionResult, makeActionResult } from "@/lib/types";
import { Button } from "@/components/ui/button";
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
import { deleteShift, restoreShift, getShiftAffectedCount } from "@/lib/actions/shift.actions";
import { Trash2, Undo2 } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface DeleteShiftButtonProps {
  shiftId: number;
  shiftTitle: string;
  onSuccess?: () => void;
}


export function DeleteShiftButton({ shiftId, shiftTitle, onSuccess }: DeleteShiftButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showUndo, setShowUndo] = useState(false);
  const [undoTimeout, setUndoTimeout] = useState<NodeJS.Timeout | null>(null);
  const [affectedCount, setAffectedCount] = useState(0);
  const [cancelReason, setCancelReason] = useState("");
  const { showToast } = useToast();

  const [deleteState, setDeleteState] = useState<ActionResult<{ affectedVolunteerCount: number }>>(makeActionResult<{ affectedVolunteerCount: number }>());
  const [restoreState, restoreAction] = useActionState(restoreShift, makeActionResult());

  // Fetch affected count when dialog opens
  useEffect(() => {
    if (isOpen) {
      getShiftAffectedCount(shiftId).then(setAffectedCount).catch(() => setAffectedCount(0));
    }
  }, [isOpen, shiftId]);

  // Handle deletion state
  useEffect(() => {
    if (deleteState.success) {
      setIsOpen(false);
      showToast(deleteState.message || `Shift "${shiftTitle}" deleted successfully.`, "success");
      onSuccess?.(); // Trigger refresh
      setShowUndo(true);

      // Set timeout to hide undo option after 10 seconds
      const timeout = setTimeout(() => {
        setShowUndo(false);
      }, 10000);
      setUndoTimeout(timeout);
    } else if (deleteState.message && !deleteState.success) {
      // Show error toast and keep dialog open when deletion fails
      showToast(deleteState.message, "error");
    }

    return () => {
      if (undoTimeout) {
        clearTimeout(undoTimeout);
      }
    };
  }, [deleteState.success, deleteState.message, shiftTitle, showToast, undoTimeout, onSuccess]);

  const handleDelete = async () => {
    const formData = new FormData();
    formData.set('shiftId', shiftId.toString());
    if (cancelReason.trim()) {
      formData.set('reason', cancelReason.trim());
    }
    const result = await deleteShift({ success: false, message: null, fieldErrors: undefined, data: null }, formData);
    setDeleteState(result);
    if (result.success) {
      setAffectedCount(result.data?.affectedVolunteerCount || 0);
      setCancelReason(""); // Reset reason after successful delete
    }
  };

  const handleUndo = () => {
    const formData = new FormData();
    formData.set('shiftId', shiftId.toString());
    restoreAction(formData);
  };

  // Handle successful restoration
  useEffect(() => {
    if (restoreState.success) {
      setShowUndo(false);
      if (undoTimeout) {
        clearTimeout(undoTimeout);
      }
      showToast(restoreState.message || "Shift restored successfully!", "success");
    } else if (restoreState.message) {
      showToast(restoreState.message, "error");
    }
  }, [restoreState.success, restoreState.message, showToast, undoTimeout]);

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-destructive hover:text-destructive/80"
            data-testid="delete-shift"
          >
            <Trash2 className="h-3 w-3 mr-1" />
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent data-testid="confirm-delete-shift">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Shift</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &ldquo;{shiftTitle}&rdquo;?
              <span className="block mt-2">
                This will hide the shift from volunteers and cancel any existing signups. The shift can be restored later if needed.
              </span>
              {affectedCount > 0 && (
                <span className="block mt-2 font-medium text-destructive">
                  This will affect {affectedCount} volunteer{affectedCount !== 1 ? 's' : ''}.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          {affectedCount > 0 && (
            <div className="space-y-2 py-4">
              <Label htmlFor="cancel-reason">Cancellation Reason (Optional)</Label>
              <Textarea
                id="cancel-reason"
                placeholder="e.g., Weather conditions, facility maintenance..."
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                data-testid="input-cancel-reason"
                rows={3}
              />
            </div>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setCancelReason("")}>Cancel</AlertDialogCancel>
            <Button
              onClick={handleDelete}
              variant="destructive"
              data-testid="btn-confirm-delete"
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {showUndo && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleUndo}
          className="ml-2 text-green-600 hover:text-green-700"
          disabled={restoreState.success === false && restoreState.message !== null} // Disable if restore failed
        >
          <Undo2 className="h-4 w-4 mr-1" />
          Undo
        </Button>
      )}
    </>
  );
}
