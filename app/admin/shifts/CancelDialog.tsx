"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CancelDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedShiftIds: number[];
  onSuccess: () => void;
}

export function CancelDialog({
  isOpen,
  onOpenChange,
  selectedShiftIds,
  onSuccess,
}: CancelDialogProps) {
  const [reason, setReason] = useState("");
  const [affectedCount, setAffectedCount] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"confirm" | "success">("confirm");

  const handlePreflight = async () => {
    if (selectedShiftIds.length === 0) return;

    try {
      setIsSubmitting(true);
      setError(null);

      // Calculate affected count by fetching signup data
      const response = await fetch(`/api/admin/shifts/cancel?preflight=true&shiftIds=${selectedShiftIds.join(',')}`, {
        method: "GET",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const result = await response.json();
      setAffectedCount(result.affectedCount);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get affected count");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    if (selectedShiftIds.length === 0) return;

    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch("/api/admin/shifts/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shiftIds: selectedShiftIds,
          reason: reason.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const result = await response.json();
      setAffectedCount(result.affectedVolunteerCount);
      setStep("success");
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to cancel shifts");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setReason("");
    setAffectedCount(null);
    setError(null);
    setStep("confirm");
  };

  const handleConfirm = () => {
    if (step === "confirm") {
      if (affectedCount === null) {
        handlePreflight();
      } else {
        handleSubmit();
      }
    } else {
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]" data-testid="cancel-shifts-dialog">
        <DialogHeader>
          <DialogTitle>
            {step === "confirm" ? "Cancel Shifts" : "Shifts Cancelled"}
          </DialogTitle>
        </DialogHeader>

        {step === "confirm" ? (
          <>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This will cancel all volunteer signups for the selected shifts.
                Volunteers will be notified of the cancellation.
              </p>

              <div className="space-y-2">
                <Label htmlFor="cancel-reason">Cancellation Reason (Optional)</Label>
                <Textarea
                  id="cancel-reason"
                  placeholder="e.g., Weather conditions, facility maintenance..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  data-testid="cancel-reason"
                  rows={3}
                />
              </div>

              {selectedShiftIds.length > 0 && (
                <div className="text-sm text-muted-foreground">
                  Selected shifts: {selectedShiftIds.length}
                  <div data-testid="cancel-affected-count">
                    Affected volunteers: {affectedCount !== null ? affectedCount : '...calculating'}
                  </div>
                </div>
              )}

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                disabled={isSubmitting || selectedShiftIds.length === 0}
                data-testid="confirm-cancel-shifts"
              >
                {isSubmitting
                  ? "Processing..."
                  : affectedCount === null
                    ? "Preview Affected Volunteers"
                    : "Cancel Shifts"
                }
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Successfully cancelled shifts affecting {affectedCount} volunteer{affectedCount !== 1 ? 's' : ''}.
              </p>

              {reason && (
                <div className="text-sm">
                  Reason: {reason}
                </div>
              )}
            </div>

            <DialogFooter>
              <Button onClick={handleConfirm} data-testid="close-cancel-dialog">
                Close
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
