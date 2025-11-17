"use client";

import { useActionState, useEffect } from "react";
import { createActivityLog } from "@/lib/actions/log.actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";

interface ActivityLogFormProps {
  dogId: number;
}

export default function ActivityLogForm({ dogId }: ActivityLogFormProps) {
  const { showToast } = useToast();

  // Server action state
  const [state, formAction] = useActionState(createActivityLog, { message: "", success: false });

  // Handle action state changes
  useEffect(() => {
    if (state.message) {
      showToast(state.message, state.success ? "success" : "error");
    }
  }, [state, showToast]);

  return (
    <form action={formAction} className="space-y-4 mb-6" data-testid="activity-log-form">
      <input type="hidden" name="dogId" value={dogId} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Activity Type</label>
          <select
            name="type"
            className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm w-full"
            required
          >
            <option value="">Select type</option>
            <option value="NOTE">Note</option>
            <option value="CALL">Call</option>
            <option value="EMAIL">Email</option>
            <option value="VISIT">Visit</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Note</label>
          <Textarea
            name="note"
            placeholder="Enter activity details..."
            rows={3}
            data-testid="log-note"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        data-testid="save-log"
      >
        Save Log Entry
      </Button>
    </form>
  );
}
