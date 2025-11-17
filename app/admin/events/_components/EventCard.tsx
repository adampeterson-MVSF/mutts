"use client";

import { useState } from "react";
import { Event } from "@prisma/client";
import { formatDateTimeWithTimezone, isPastDate } from "@/lib/utils/date";
import { Calendar, MapPin, Edit, Trash2, Copy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EventForm from "./EventForm";

interface EventCardProps {
  event: Event;
  onUpdate?: (formData: FormData) => Promise<void>;
  onDelete?: (formData: FormData) => Promise<void>;
  onDuplicate?: (formData: FormData) => Promise<void>;
}

export default function EventCard({ event, onUpdate, onDelete, onDuplicate }: EventCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleUpdate = async (formData: FormData) => {
    if (!onUpdate) {
      return;
    }

    setIsSaving(true);
    try {
      await onUpdate(formData);
      setShowEditDialog(false);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!onDelete) return;

    const formData = new FormData();
    formData.append("eventId", event.id.toString());

    setIsDeleting(true);
    try {
      await onDelete(formData);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDuplicate = async (formData: FormData) => {
    if (onDuplicate) {
      await onDuplicate(formData);
    }
  };

  const isPast = isPastDate(event.startTime);
  const isUpcoming = !isPast && new Date(event.startTime).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000; // Next 7 days

  return (
    <Card className={`${isPast ? "opacity-75" : ""}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {event.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span>
                {formatDateTimeWithTimezone(event.startTime)} - {formatDateTimeWithTimezone(event.endTime)}
              </span>
              {isPast && <Badge variant="secondary">Past</Badge>}
              {isUpcoming && !isPast && <Badge variant="default">Upcoming</Badge>}
            </CardDescription>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowEditDialog(true)}
              className="flex items-center gap-1"
            >
              <Edit className="h-3 w-3" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              data-testid="duplicate-event"
              onClick={() => {
                const formData = new FormData();
                formData.append("eventId", event.id.toString());
                handleDuplicate(formData);
              }}
              className="flex items-center gap-1"
            >
              <Copy className="h-3 w-3" />
              Duplicate
            </Button>
            <Button
              variant="destructive"
              size="sm"
              data-testid="delete-event"
              onClick={() => setShowDeleteDialog(true)}
              disabled={isDeleting}
              className="flex items-center gap-1"
            >
              <Trash2 className="h-3 w-3" />
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {event.description && (
            <p className="text-sm text-muted-foreground">{event.description}</p>
          )}

          {event.location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            Created: {formatDateTimeWithTimezone(event.createdAt)}
            {event.updatedAt.getTime() !== event.createdAt.getTime() && (
              <> • Updated: {formatDateTimeWithTimezone(event.updatedAt)}</>
            )}
          </div>
        </div>
      </CardContent>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent data-testid="confirm-delete-event">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Event</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &ldquo;{event.title}&rdquo;? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
          </DialogHeader>
          <EventForm
            event={event}
            onSubmit={handleUpdate}
            onCancel={() => setShowEditDialog(false)}
            isSubmitting={isSaving}
          />
        </DialogContent>
      </Dialog>
    </Card>
  );
}
