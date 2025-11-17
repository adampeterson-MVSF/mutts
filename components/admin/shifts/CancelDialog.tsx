"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface CancelDialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  selectedIds: number[];
  onConfirm: (reason: string) => Promise<void>;
  loading?: boolean;
}

export function CancelDialog(props: CancelDialogProps) {
  const { open, onOpenChange, selectedIds, onConfirm, loading } = props;
  const [reason, setReason] = React.useState('');
  const [affectedCount, setAffectedCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (open) {
      // Optionally fetch affected count server-side if needed.
      // If you've already computed this in parent, pass it down instead.
      setAffectedCount(null);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange} data-testid="cancel-shifts-dialog">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel selected shifts</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            This will cancel signups for <strong>{selectedIds.length}</strong> shift(s).
          </p>
          {affectedCount !== null && (
            <p className="text-sm">
              Affected volunteers (total): <strong data-testid="affected-volunteer-count">{affectedCount}</strong>
            </p>
          )}
          <label className="block text-sm font-medium">Reason (visible to volunteers)</label>
          <Textarea
            data-testid="input-cancel-reason"
            value={reason}
            onChange={e => setReason(e.target.value)}
            placeholder="e.g., Weather closure"
          />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
          <Button
            data-testid="confirm-cancel-shifts"
            onClick={() => onConfirm(reason)}
            disabled={loading}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
