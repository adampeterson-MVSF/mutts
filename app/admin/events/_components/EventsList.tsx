"use client";

import { Event } from "@prisma/client";
import { useToast } from "@/components/ui/toast";
import { updateEvent, deleteEvent, duplicateEvent } from "@/lib/actions/event.actions";
import EventCard from "./EventCard";

interface EventsListProps {
  events: Event[];
}

export default function EventsList({ events }: EventsListProps) {
  const { showToast } = useToast();

  const handleUpdate = async (formData: FormData) => {
    const result = await updateEvent(undefined, formData);

    if (result.success) {
      showToast(result.message || "Event updated successfully!", "success");
    } else {
      showToast(result.message || "Failed to update event.", "error");
    }
  };

  const handleDelete = async (formData: FormData) => {
    const result = await deleteEvent(undefined, formData);

    if (result.success) {
      showToast(result.message || "Event deleted successfully!", "success");
    } else {
      showToast(result.message || "Failed to delete event.", "error");
    }
  };

  const handleDuplicate = async (formData: FormData) => {
    const result = await duplicateEvent(undefined, formData);

    if (result.success) {
      showToast(result.message || "Event duplicated successfully!", "success");
    } else {
      showToast(result.message || "Failed to duplicate event.", "error");
    }
  };

  // Sort events: upcoming first, then by start time
  const sortedEvents = [...events].sort((a, b) => {
    const now = new Date();
    const aIsUpcoming = a.startTime > now;
    const bIsUpcoming = b.startTime > now;

    if (aIsUpcoming && !bIsUpcoming) return -1;
    if (!aIsUpcoming && bIsUpcoming) return 1;

    return a.startTime.getTime() - b.startTime.getTime();
  });

  return (
    <div className="space-y-4" data-testid="events-table">
      {sortedEvents.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No events found. Create your first event above.
        </div>
      ) : (
        sortedEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onDuplicate={handleDuplicate}
          />
        ))
      )}
    </div>
  );
}
