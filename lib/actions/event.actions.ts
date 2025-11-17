"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { ActionResult } from "@/lib/types";
import { eventFormSchema, shiftIdSchema } from "@/lib/schemas";
import { z } from "zod";

const deleteEventSchema = z.object({
  eventId: z.coerce.number().int().positive({ message: "Invalid event ID" }),
});

const duplicateEventSchema = z.object({
  eventId: z.coerce.number().int().positive({ message: "Invalid event ID" }),
  fail: z.coerce.string().optional(), // For testing failure injection
});

const revalidateEventPaths = () => {
  revalidatePath("/admin/events");
  revalidatePath("/events");
};

export async function createEvent(prevState: ActionResult | undefined, formData: FormData): Promise<ActionResult<{ id: number }>> {
  try {
    await assertRole(UserRole.STAFF);

    const title = formData.get('title') as string;
    const startTime = formData.get('startTime') as string;
    const endTime = formData.get('endTime') as string;
    const description = formData.get('description') as string;

    if (!title || !startTime || !endTime) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: { title: !title ? ['Title is required'] : [], startTime: !startTime ? ['Start time is required'] : [], endTime: !endTime ? ['End time is required'] : [] },
        data: null,
      };
    }

    // validate times server-side
    const start = new Date(startTime);
    const end = new Date(endTime);
    if (!(start instanceof Date) || !(end instanceof Date) || Number.isNaN(+start) || Number.isNaN(+end)) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: { startTime: ['Invalid date/time'], endTime: ['Invalid date/time'] },
        data: null,
      };
    }
    if (end <= start) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: { endTime: ['End time must be after start time'] },
        data: null,
      };
    }

    const ev = await prisma.event.create({
      data: { title, startTime: start, endTime: end, description: description || null }
    });
    revalidatePath('/admin/events');
    revalidatePath('/events'); // public list must reflect immediately
    return {
      success: true,
      message: "Event created successfully.",
      fieldErrors: undefined,
      data: { id: ev.id },
    };
  } catch {
    return {
      success: false,
      message: "Failed to create event.",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function getEvents() {
  return prisma.event.findMany({
    orderBy: {
      startTime: "asc",
    },
  });
}

export async function updateEvent(_prevState: ActionResult | undefined, formData: FormData): Promise<ActionResult> {
  try {
    await assertRole(UserRole.STAFF);

    const idParsed = shiftIdSchema.safeParse({
      shiftId: formData.get("id"),
    });

    if (!idParsed.success) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: idParsed.error.flatten().fieldErrors,
        data: null,
      };
    }

    const parsed = eventFormSchema.safeParse({
      title: formData.get("title"),
      description: formData.get("description"),
      startTime: formData.get("startTime"),
      endTime: formData.get("endTime"),
      location: formData.get("location"),
      capacity: formData.get("capacity"),
    });

    if (!parsed.success) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: parsed.error.flatten().fieldErrors,
        data: null,
      };
    }

    const data = parsed.data;
    const startTime = new Date(data.startTime);
    const endTime = new Date(data.endTime);

    // Server-side validation: startTime must be before endTime
    if (startTime >= endTime) {
      return {
        success: false,
        message: "Start time must be before end time.",
        fieldErrors: { startTime: ["Start time must be before end time"] },
        data: null,
      };
    }

    // Server-side validation: forbid past start times
    if (startTime <= new Date()) {
      return {
        success: false,
        message: "Cannot update events to start in the past.",
        fieldErrors: { startTime: ["Start time must be in the future"] },
        data: null,
      };
    }

    await prisma.event.update({
      where: { id: idParsed.data.shiftId },
      data: {
        title: data.title,
        description: data.description,
        startTime,
        endTime: new Date(data.endTime),
        location: data.location,
        capacity: data.capacity,
      },
    });

    revalidateEventPaths();

    return {
      success: true,
      message: "Event updated successfully!",
      fieldErrors: undefined,
      data: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to update event",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function duplicateEvent(_prevState: ActionResult | undefined, formData: FormData): Promise<ActionResult> {
  try {
    await assertRole(UserRole.STAFF);

    const parsed = duplicateEventSchema.safeParse({
      eventId: formData.get("eventId"),
      fail: formData.get("fail"),
    });

    if (!parsed.success) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: parsed.error.flatten().fieldErrors,
        data: null,
      };
    }

    // Check if we should inject a failure for testing
    if (parsed.data.fail === '1') {
      return {
        success: false,
        message: "Simulated failure for testing optimistic rollback",
        fieldErrors: undefined,
        data: null,
      };
    }

    const originalEvent = await prisma.event.findUnique({
      where: { id: parsed.data.eventId },
    });

    if (!originalEvent) {
      return {
        success: false,
        message: "Event not found.",
        fieldErrors: { eventId: ["Event not found"] },
        data: null,
      };
    }

    // Create duplicate with "Copy of" prefix
    await prisma.event.create({
      data: {
        title: `Copy of ${originalEvent.title}`,
        description: originalEvent.description,
        startTime: originalEvent.startTime,
        endTime: originalEvent.endTime,
        location: originalEvent.location,
        capacity: originalEvent.capacity,
      },
    });

    revalidateEventPaths();

    return {
      success: true,
      message: "Event duplicated successfully!",
      fieldErrors: undefined,
      data: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to duplicate event",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function deleteEvent(_prevState: ActionResult | undefined, formData: FormData): Promise<ActionResult> {
  try {
    await assertRole(UserRole.STAFF);

    const parsed = deleteEventSchema.safeParse({
      eventId: formData.get("eventId"),
    });
    if (!parsed.success) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: parsed.error.flatten().fieldErrors,
        data: null,
      };
    }

    await prisma.event.delete({
      where: { id: parsed.data.eventId },
    });

    revalidateEventPaths();

    return {
      success: true,
      message: "Event deleted successfully!",
      fieldErrors: undefined,
      data: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to delete event",
      fieldErrors: undefined,
      data: null,
    };
  }
}
