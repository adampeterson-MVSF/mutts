"use client";

import { useActionState, useState } from "react";
import { AppStatus } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { updateApplicationStatus } from "@/lib/actions/application.actions";
import { humanizeEnum, getAllowedStatuses, areStatusNotesRequired } from "@/lib/utils";
import { makeActionResult } from "@/lib/types";
import type { AdminApplicationDetail } from "@/lib/view-models/applications";

interface ApplicationStatusEditorProps {
  application: Pick<AdminApplicationDetail, "id" | "status" | "applicationType" | "statusNotes">;
}

export default function ApplicationStatusEditor({ application }: ApplicationStatusEditorProps) {
  const [state, formAction] = useActionState(updateApplicationStatus, makeActionResult());
  const [selectedStatus, setSelectedStatus] = useState<AppStatus>(application.status);

  // Get available status options based on application type
  const availableStatuses = getAllowedStatuses(application.applicationType, application.status);

  // Check if notes are required for the selected status
  const requiresNotes = areStatusNotesRequired(selectedStatus);

  return (
    <div className="flex flex-col gap-4">
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="appId" value={application.id} />

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select
            name="status"
            defaultValue={application.status}
            onValueChange={(value) => setSelectedStatus(value as AppStatus)}
            data-testid="select-status"
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {availableStatuses.map(s => (
                <SelectItem key={s} value={s}>
                  {humanizeEnum(s)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="statusNotes">
            Status Change Notes {requiresNotes ? "(Required)" : "(Optional)"}
          </Label>
          <Textarea
            id="statusNotes"
            name="statusNotes"
            placeholder="Add notes about this status change for audit purposes..."
            defaultValue={application.statusNotes || ""}
            rows={3}
            required={requiresNotes}
            data-testid="textarea-notes"
          />
        </div>

        <Button type="submit" disabled={state.success} data-testid="btn-change-status">
          {state.success ? "Status Updated" : "Update Status"}
        </Button>
      </form>

      {/* Show messages */}
      {state.message && (
        <p className={state.success ? "text-green-600" : "text-red-500"}>
          {state.message}
        </p>
      )}
    </div>
  );
}
