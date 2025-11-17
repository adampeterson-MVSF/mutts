// lib/actions/log.actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { z } from "zod";

const createActivityLogSchema = z.object({
  dogId: z.coerce.number().int().positive({ message: "Invalid dog ID" }),
  type: z.enum(["NOTE", "CALL", "EMAIL", "VISIT"], { message: "Invalid activity type" }),
  note: z.string().min(1, { message: "Note is required" }).trim(),
});

export async function createActivityLog(
  prevState: { message?: string; success?: boolean },
  formData: FormData
): Promise<{ message: string; success: boolean }> {
  try {
    await assertRole(UserRole.STAFF);

    const parsed = createActivityLogSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!parsed.success) {
      return {
        message: "Validation failed: " + Object.values(parsed.error.flatten().fieldErrors).flat().join(", "),
        success: false
      };
    }

    const { dogId, type, note } = parsed.data;

    await prisma.activityLog.create({
      data: {
        dogId,
        type,
        note,
        createdByUserId: await getCurrentUserId(),
      },
    });

    revalidatePath(`/admin/dog/${dogId}`);
    revalidatePath('/volunteer');

    return {
      message: "Activity log created successfully",
      success: true
    };

  } catch (error) {
    console.error("Create activity log error:", error);
    return {
      message: error instanceof Error ? error.message : "Failed to create activity log",
      success: false
    };
  }
}

export async function getActivityLogs(dogId: number) {
  const parsed = z.object({ dogId: z.coerce.number().int().positive() }).safeParse({ dogId });
  if (!parsed.success) {
    throw new Error("Invalid dog ID");
  }

  const logs = await prisma.activityLog.findMany({
    where: { dogId },
    include: {
      createdByUser: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return logs;
}

export async function getUserActivityLogs(userId: string, limit: number = 10) {
  const parsed = z.object({
    userId: z.string().uuid(),
    limit: z.coerce.number().int().min(1).max(100).default(10)
  }).safeParse({ userId, limit });

  if (!parsed.success) {
    throw new Error("Invalid parameters");
  }

  const logs = await prisma.activityLog.findMany({
    where: { createdByUserId: userId },
    include: {
      dog: {
        select: {
          id: true,
          name: true,
        },
      },
      createdByUser: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
    take: limit,
  });

  return logs;
}

export async function getRecentLogsForUser(userId: string, limit: number = 10) {
  const parsed = z.object({
    userId: z.string().uuid(),
    limit: z.coerce.number().int().min(1).max(100).default(10)
  }).safeParse({ userId, limit });

  if (!parsed.success) {
    throw new Error("Invalid parameters");
  }

  const logs = await prisma.activityLog.findMany({
    where: { createdByUserId: userId },
    include: {
      dog: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
    take: limit,
  });

  return logs;
}

// Helper function to get current user ID
async function getCurrentUserId(): Promise<string> {
  // This is a simplified version - you might want to import this from another action
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  return user.id;
}