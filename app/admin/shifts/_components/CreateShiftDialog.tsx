"use client";

import { useState } from "react";
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
import { PlusCircle } from "lucide-react";

export function CreateShiftDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button data-testid="btn-create-shift">
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Shift
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" data-testid="shift-dialog">
        <DialogHeader>
          <DialogTitle>Create New Shift</DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new volunteer shift.
          </DialogDescription>
        </DialogHeader>
        <ShiftForm onSuccess={handleFormSuccess} />
      </DialogContent>
    </Dialog>
  );
}
