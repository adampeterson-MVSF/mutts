import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

const DEFAULT_SHIFT_CAPACITY = 1;
const MAX_SHIFT_CAPACITY = 3;

function clampCapacity(capacity: number | null | undefined): number {
  if (typeof capacity !== "number" || Number.isNaN(capacity)) {
    return DEFAULT_SHIFT_CAPACITY;
  }
  return Math.min(Math.max(capacity, DEFAULT_SHIFT_CAPACITY), MAX_SHIFT_CAPACITY);
}

export interface VolunteerCapacityInfo {
  maxActiveShifts: number;
  activeShiftCount: number;
  hasCapacity: boolean;
  trainingCompleted: boolean;
  backgroundCheckCompleted: boolean;
  isClearedForShifts: boolean;
}

type PrismaClientLike = {
  profile: {
    findUnique: Prisma.ProfileDelegate["findUnique"];
  };
  volunteerShiftSignup: {
    count: Prisma.VolunteerShiftSignupDelegate["count"];
  };
};

/**
 * Returns the volunteer's shift capacity and readiness information.
 * @param volunteerId Profile ID of the volunteer
 * @param now Reference time for "active" shift calculations (default: current time)
 * @param db Optional Prisma client/transaction (defaults to global client)
 */
export async function getVolunteerCapacityInfo(
  volunteerId: string,
  now: Date = new Date(),
  db: PrismaClientLike = prisma
): Promise<VolunteerCapacityInfo> {
  const profile = await db.profile.findUnique({
    where: { id: volunteerId },
    select: {
      shiftCapacity: true,
      trainingCompleted: true,
      backgroundCheckCompleted: true,
    },
  });

  if (!profile) {
    throw new Error("Volunteer profile not found");
  }

  const maxActiveShifts = clampCapacity(profile.shiftCapacity);
  const activeShiftCount = await db.volunteerShiftSignup.count({
    where: {
      volunteerId,
      cancelledAt: null,
      shift: {
        status: "ACTIVE",
        startsAt: {
          gte: now,
        },
      },
    },
  });

  const trainingCompleted = Boolean(profile.trainingCompleted);
  const backgroundCheckCompleted = Boolean(profile.backgroundCheckCompleted);

  return {
    maxActiveShifts,
    activeShiftCount,
    hasCapacity: activeShiftCount < maxActiveShifts,
    trainingCompleted,
    backgroundCheckCompleted,
    isClearedForShifts: trainingCompleted && backgroundCheckCompleted,
  };
}

/**
 * Human-friendly message describing missing prerequisites, if any.
 */
export function getVolunteerReadinessMessage(info: VolunteerCapacityInfo): string | null {
  const missing: string[] = [];
  if (!info.trainingCompleted) missing.push("training");
  if (!info.backgroundCheckCompleted) missing.push("background check");

  if (missing.length === 0) {
    return null;
  }

  if (missing.length === 2) {
    return "Please complete training and your background check before signing up for shifts.";
  }

  return `Please complete your ${missing[0]} before signing up for shifts.`;
}

/**
 * Formats a capacity limit message when the volunteer has reached their maximum active shifts.
 */
export function formatCapacityLimitMessage(details: Pick<VolunteerCapacityInfo, "activeShiftCount" | "maxActiveShifts">): string {
  const { activeShiftCount, maxActiveShifts } = details;
  return `You already have ${activeShiftCount} active shift${activeShiftCount === 1 ? "" : "s"} scheduled. The maximum is ${maxActiveShifts}.`;
}
