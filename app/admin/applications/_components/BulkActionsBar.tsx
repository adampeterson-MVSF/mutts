"use client";

import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckSquare } from "lucide-react";
import { AssignToStaffDialog } from "./AssignToStaffDialog";
import { UpdateStatusDropdown } from "./UpdateStatusDropdown";
import { FailedUpdateAlert } from "./FailedUpdateAlert";
import type { ActionResult } from "@/lib/types";

interface BulkActionsBarProps {
  selectedApplicationIds: number[];
}

export default function BulkActionsBar({ selectedApplicationIds }: BulkActionsBarProps) {
  const [bulkNotes, setBulkNotes] = useState("");
  const [failedUpdates, setFailedUpdates] = useState<Array<{ id: number; reason: string }>>([]);
  const [isAssignPending, setIsAssignPending] = useState(false);
  const [isStatusUpdatePending, setIsStatusUpdatePending] = useState(false);

  useEffect(() => {
    setFailedUpdates([]);
  }, [selectedApplicationIds]);

  const handleBulkResult = (result: ActionResult<{ failed?: { id: number; reason: string }[] }>) => {
    if (result.success) {
      setBulkNotes("");
    }
    setFailedUpdates(result.data?.failed || []);
  };

  const isOperationInProgress = isAssignPending || isStatusUpdatePending;

  return (
    <div className="bg-muted/50 border rounded-lg p-4 space-y-4" aria-label="Bulk actions for selected applications">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-4 w-4" />
          <span className="font-medium">
            {selectedApplicationIds.length} application{selectedApplicationIds.length !== 1 ? 's' : ''} selected
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="bulk-notes" className="text-sm">Notes (optional)</Label>
          <Textarea
            id="bulk-notes"
            placeholder="Add notes for this bulk action..."
            value={bulkNotes}
            onChange={(e) => setBulkNotes(e.target.value)}
            className="w-64 h-8 resize-none"
            rows={1}
            disabled={isOperationInProgress}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <AssignToStaffDialog
          selectedApplicationIds={selectedApplicationIds}
          onPendingChange={setIsAssignPending}
        />

        <UpdateStatusDropdown
          selectedApplicationIds={selectedApplicationIds}
          bulkNotes={bulkNotes}
          onResult={handleBulkResult}
          onPendingChange={setIsStatusUpdatePending}
        />
      </div>

      <FailedUpdateAlert failedUpdates={failedUpdates} />
    </div>
  );
}
