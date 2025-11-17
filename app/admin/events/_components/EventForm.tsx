"use client";

import { useRef } from "react";
import { Event } from "@prisma/client";
import { Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export interface EventFormSubmitResult {
  success: boolean;
}

interface EventFormProps {
  event?: Event;
  onSubmit?: (formData: FormData) => Promise<EventFormSubmitResult | boolean | void>;
  onCancel?: () => void;
  isSubmitting?: boolean;
}

export default function EventForm({
  event,
  onSubmit,
  onCancel,
  isSubmitting = false,
}: EventFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const formId = event ? `edit-event-${event.id}` : "create-event";

  const handleSubmit = async (formData: FormData) => {
    if (event) {
      formData.set("id", event.id.toString());
    }

    const result = await onSubmit?.(formData);
    const didSucceed = typeof result === "boolean" ? result : result?.success;

    if (!event && didSucceed) {
      formRef.current?.reset();
    }
  };

  const startTimeDefault = event?.startTime
    ? event.startTime.toISOString().slice(0, 16)
    : "";
  const endTimeDefault = event?.endTime
    ? event.endTime.toISOString().slice(0, 16)
    : "";

  return (
    <form
      ref={formRef}
      id={formId}
      action={handleSubmit}
      className="space-y-4"
      data-testid="event-form"
    >
      {event ? (
        <input type="hidden" name="id" value={event.id} />
      ) : null}

      <div>
        <Label htmlFor={`${formId}-title`}>Title</Label>
        <Input
          id={`${formId}-title`}
          name="title"
          defaultValue={event?.title ?? ""}
          className="text-lg font-semibold"
          required
          data-testid="event-title"
        />
      </div>

      <div>
        <Label htmlFor={`${formId}-description`}>Description</Label>
        <Textarea
          id={`${formId}-description`}
          name="description"
          defaultValue={event?.description ?? ""}
          rows={3}
          data-testid="event-description"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor={`${formId}-startTime`}>Start Time</Label>
          <Input
            id={`${formId}-startTime`}
            name="startTime"
            type="datetime-local"
            defaultValue={startTimeDefault}
            required
            data-testid="event-date"
          />
        </div>

        <div>
          <Label htmlFor={`${formId}-endTime`}>End Time</Label>
          <Input
            id={`${formId}-endTime`}
            name="endTime"
            type="datetime-local"
            defaultValue={endTimeDefault}
            required
            data-testid="event-end-date"
          />
        </div>
      </div>

      <div>
        <Label htmlFor={`${formId}-location`}>Location</Label>
        <Input
          id={`${formId}-location`}
          name="location"
          defaultValue={event?.location ?? ""}
          data-testid="event-location"
        />
      </div>

      <div>
        <Label htmlFor={`${formId}-capacity`}>Capacity</Label>
        <Input
          id={`${formId}-capacity`}
          name="capacity"
          type="number"
          min="1"
          defaultValue={event?.capacity?.toString() ?? ""}
          data-testid="event-capacity"
        />
      </div>

      <div className="flex gap-2 pt-4">
        <Button
          type="submit"
          className="flex items-center gap-1"
          data-testid="btn-save-event"
          disabled={isSubmitting}
        >
          <Save className="h-3 w-3" />
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
        {onCancel ? (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="flex items-center gap-1"
            data-testid="btn-cancel-event"
            disabled={isSubmitting}
          >
            <X className="h-3 w-3" />
            Cancel
          </Button>
        ) : null}
      </div>
    </form>
  );
}
