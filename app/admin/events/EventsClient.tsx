"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Event } from "@prisma/client";
import { createEvent } from "@/lib/actions/event.actions";
import { RouteReady } from "@/components/testing/RouteReady";
import { useToast } from "@/components/ui/toast";
import EventForm from "./_components/EventForm";
import EventsList from "./_components/EventsList";

interface EventsClientProps {
  initialEvents: Event[];
}

export default function EventsClient({ initialEvents }: EventsClientProps) {
  const router = useRouter();
  const { ToastComponent, showToast } = useToast();
  const [isCreating, setIsCreating] = useState(false);

  const refreshEvents = async () => {
    router.refresh();
  };

  const handleCreateEvent = async (formData: FormData) => {
    setIsCreating(true);
    try {
      const result = await createEvent(undefined, formData);

      if (result.success) {
        showToast(result.message ?? "Event created successfully!", "success");
        await refreshEvents();
        return true;
      }

      showToast(result.message ?? "Failed to create event.", "error");
      return false;
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <ToastComponent />
      <div className="w-full max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2" data-testid="page-title">Event Management</h1>
          <p className="text-muted-foreground">
            Create and manage events for the senior dog rescue community.
          </p>
        </div>

        <EventForm onSubmit={handleCreateEvent} isSubmitting={isCreating} />

        <div>
          <h2 className="text-xl font-semibold mb-4">All Events</h2>
          <EventsList events={initialEvents} />
        </div>

        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="admin/events" />
        )}
      </div>
    </div>
  );
}
