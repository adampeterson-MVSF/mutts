"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MedicalDocumentDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  documentToDelete: { id: number; name: string; path: string } | null;
  onConfirmDelete: () => void;
}

export function MedicalDocumentDeleteDialog({
  open,
  onOpenChange,
  documentToDelete,
  onConfirmDelete
}: MedicalDocumentDeleteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Medical Document</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete &quot;{documentToDelete?.name}&quot;? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirmDelete}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
