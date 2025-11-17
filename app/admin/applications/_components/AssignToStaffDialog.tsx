"use client";

import { useEffect, useState, useTransition, useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bulkAssignApplications } from "@/lib/actions/application.actions";
import { getAllStaffUsers } from "@/lib/actions/profile.actions";
import { useToast } from "@/components/ui/toast";
import { makeActionResult } from "@/lib/types";

interface AssignToStaffDialogProps {
  selectedApplicationIds: number[];
  onPendingChange?: (pending: boolean) => void;
}

export function AssignToStaffDialog({ selectedApplicationIds, onPendingChange }: AssignToStaffDialogProps) {
  const { showToast } = useToast();
  const [selectedStaffId, setSelectedStaffId] = useState("");
  const [staffUsers, setStaffUsers] = useState<Array<{ id: string; name: string | null; email: string }>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Fetch staff users when component mounts
  useEffect(() => {
    getAllStaffUsers().then(setStaffUsers).catch(console.error);
  }, []);

  // Server action for bulk assignment
  const [assignState, assignAction] = useActionState(bulkAssignApplications, makeActionResult());

  // Handle assign action state changes
  useEffect(() => {
    if (assignState.message) {
      showToast(assignState.message, assignState.success ? "success" : "error");
      if (assignState.success) {
        setSelectedStaffId("");
        setIsOpen(false);
      }
    }
  }, [assignState, showToast]);

  useEffect(() => {
    onPendingChange?.(isPending);
  }, [isPending, onPendingChange]);

  const handleAssign = (formData: FormData) => {
    startTransition(() => {
      assignAction(formData);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={isPending} data-testid="btn-bulk-assign">
          Assign to Staff
        </Button>
      </DialogTrigger>
      <DialogContent data-testid="assign-dialog">
        <DialogHeader>
          <DialogTitle>Assign Applications to Staff</DialogTitle>
          <DialogDescription>
            Select a staff member to assign {selectedApplicationIds.length} selected application{selectedApplicationIds.length !== 1 ? 's' : ''} to.
          </DialogDescription>
        </DialogHeader>
        <form action={handleAssign} className="py-4">
          {selectedApplicationIds.map(id => (
            <input key={id} type="hidden" name="applicationIds" value={id} />
          ))}
          <Select name="staffId" value={selectedStaffId} onValueChange={setSelectedStaffId} data-testid="select-assignee">
            <SelectTrigger>
              <SelectValue placeholder="Select staff member..." />
            </SelectTrigger>
            <SelectContent>
              {staffUsers.map((staff) => (
                <SelectItem key={staff.id} value={staff.id}>
                  {staff.name || staff.email}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <DialogFooter className="mt-4">
            <Button
              type="submit"
              disabled={!selectedStaffId || isPending}
              data-testid="btn-confirm-assign"
            >
              {isPending ? 'Assigning...' : 'Assign'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
