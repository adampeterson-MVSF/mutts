"use client";

import { useState } from "react";
import { Shift } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ShiftForm from "./ShiftForm";
import { Pencil } from "lucide-react";

interface EditShiftDialogProps {
  shift: Shift;
}

export function EditShiftDialog({ shift }: EditShiftDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          data-testid="btn-edit-shift"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" data-testid="shift-dialog">
        <DialogHeader>
          <DialogTitle>Edit Shift</DialogTitle>
          <DialogDescription>Make changes to the shift details.</DialogDescription>
        </DialogHeader>
        <ShiftForm shift={shift} onSuccess={handleFormSuccess} />
      </DialogContent>
    </Dialog>
  );
}
