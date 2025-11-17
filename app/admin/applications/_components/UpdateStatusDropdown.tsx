"use client";

import { useEffect, useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { AppStatus } from "@prisma/client";
import { bulkUpdateApplications } from "@/lib/actions/application.actions";
import { useToast } from "@/components/ui/toast";
import { ActionResult, makeActionResult } from "@/lib/types";

interface UpdateStatusDropdownProps {
  selectedApplicationIds: number[];
  bulkNotes: string;
  onResult?: (result: ActionResult<{ failed?: { id: number; reason: string }[] }>) => void;
  onPendingChange?: (pending: boolean) => void;
}

export function UpdateStatusDropdown({
  selectedApplicationIds,
  bulkNotes,
  onResult,
  onPendingChange,
}: UpdateStatusDropdownProps) {
  const { showToast } = useToast();

  const [state, formAction, isPending] = useActionState(
    bulkUpdateApplications,
    makeActionResult<{ failed?: { id: number; reason: string }[] }>()
  );

  useEffect(() => {
    onPendingChange?.(isPending);
  }, [isPending, onPendingChange]);

  useEffect(() => {
    if (state.message) {
      showToast(state.message, state.success ? "success" : "error");
      onResult?.(state);
    }
  }, [state, showToast, onResult]);

  const idsValue = selectedApplicationIds.join(",");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" disabled={isPending || selectedApplicationIds.length === 0} data-testid="btn-bulk-update">
          {isPending ? 'Processing...' : `Apply to ${selectedApplicationIds.length} selected`}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild disabled={isPending}>
          <form action={formAction}>
            <input type="hidden" name="applicationIds" value={idsValue} />
            <input type="hidden" name="status" value={AppStatus.APPROVED} />
            <input type="hidden" name="statusNotes" value={bulkNotes} />
            <button type="submit" style={{ all: 'unset', width: '100%' }}>
              Approve Applications
            </button>
          </form>
        </DropdownMenuItem>
        <DropdownMenuItem asChild disabled={isPending}>
          <form action={formAction}>
            <input type="hidden" name="applicationIds" value={idsValue} />
            <input type="hidden" name="status" value={AppStatus.REJECTED} />
            <input type="hidden" name="statusNotes" value={bulkNotes} />
            <button type="submit" style={{ all: 'unset', width: '100%' }}>
              Reject Applications
            </button>
          </form>
        </DropdownMenuItem>
        <DropdownMenuItem asChild disabled={isPending}>
          <form action={formAction}>
            <input type="hidden" name="applicationIds" value={idsValue} />
            <input type="hidden" name="status" value={AppStatus.WITHDRAWN} />
            <input type="hidden" name="statusNotes" value={bulkNotes} />
            <button type="submit" style={{ all: 'unset', width: '100%' }}>
              Withdraw Applications
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
