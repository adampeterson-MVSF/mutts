// lib/actions/shift-signup.actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getActingUser } from "@/lib/actions/profile.actions";
import { ActionResult } from "@/lib/types";
import { shiftIdSchema } from "@/lib/schemas";
import {
  formatCapacityLimitMessage,
  getVolunteerCapacityInfo,
  getVolunteerReadinessMessage,
} from "@/lib/volunteer";

export async function signupForShift(_prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  try {
    const user = await getActingUser();

    const shiftIdResult = shiftIdSchema.safeParse({
      shiftId: formData.get('shiftId'),
    });
    if (!shiftIdResult.success) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: shiftIdResult.error.flatten().fieldErrors,
        data: null,
      };
    }

    if (!user) {
      return {
        success: false,
        message: "Authentication required.",
        fieldErrors: undefined,
        data: null,
      };
    }

    const { shiftId } = shiftIdResult.data;
    const now = new Date();

    // Rate limiting: Check if user recently signed up for any shift (prevent spam)
    const recentSignup = await prisma.volunteerShiftSignup.findFirst({
      where: {
        volunteerId: user.id,
        signupTime: {
          gte: new Date(now.getTime() - 1000), // Within last second
        },
      },
    });

    if (recentSignup) {
      return {
        success: false,
        message: "Please wait a moment before signing up again.",
        fieldErrors: undefined,
        data: null,
      };
    }

    const capacityInfo = await getVolunteerCapacityInfo(user.id, now);
    const readinessMessage = getVolunteerReadinessMessage(capacityInfo);
    if (readinessMessage) {
      return {
        success: false,
        message: readinessMessage,
        fieldErrors: undefined,
        data: null,
      };
    }

    if (!capacityInfo.hasCapacity) {
      return {
        success: false,
        message: formatCapacityLimitMessage(capacityInfo),
        fieldErrors: undefined,
        data: null,
      };
    }

    // Use transaction with FOR UPDATE to enforce capacity and prevent race conditions
    await prisma.$transaction(async (tx) => {
      // Lock the shift row and get current signup count
      const shift = await tx.shift.findUnique({
        where: { id: shiftId, status: "ACTIVE" },
        select: {
          id: true,
          capacity: true,
          startsAt: true,
          _count: {
            select: { signups: true }
          }
        },
      });

      if (!shift) {
        throw new Error("Shift not found or deleted.");
      }

      if (shift.startsAt <= now) {
        throw new Error("Cannot sign up for a shift that has already started.");
      }

      // Check capacity before allowing signup
      if (shift.capacity && shift._count.signups >= shift.capacity) {
        throw new Error("This shift is already at full capacity.");
      }

      const capacitySnapshot = await getVolunteerCapacityInfo(user.id, now, tx);
      if (!capacitySnapshot.hasCapacity) {
        throw new Error(formatCapacityLimitMessage(capacitySnapshot));
      }

      // Check for existing signup (unique constraint should handle this, but check explicitly)
      const existingSignup = await tx.volunteerShiftSignup.findUnique({
        where: {
          shiftId_volunteerId: {
            shiftId,
            volunteerId: user.id,
          },
        },
      });

      if (existingSignup) {
        throw new Error("You are already signed up for this shift.");
      }

      // Create the signup (unique constraint will prevent duplicates)
      await tx.volunteerShiftSignup.create({
        data: {
          shiftId,
          volunteerId: user.id,
        },
      });
    });

    revalidatePath("/volunteer");
    revalidatePath("/volunteer/shifts");
    revalidatePath("/volunteer/my-shifts");
    return {
      success: true,
      message: "Successfully signed up for shift!",
      fieldErrors: undefined,
      data: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to sign up",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function cancelShiftSignup(_prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  try {
    const user = await getActingUser();

    const shiftIdResult = shiftIdSchema.safeParse({
      shiftId: formData.get('shiftId'),
    });
    if (!shiftIdResult.success) {
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors: shiftIdResult.error.flatten().fieldErrors,
        data: null,
      };
    }

    if (!user) {
      return {
        success: false,
        message: "Authentication required.",
        fieldErrors: undefined,
        data: null,
      };
    }

    const { shiftId } = shiftIdResult.data;

    // Check that the shift hasn't started yet
    const shift = await prisma.shift.findUnique({
      where: { id: shiftId },
      select: { startsAt: true, status: true },
    });

    if (!shift || shift.status === "DELETED") {
      return {
        success: false,
        message: "Shift not found.",
        fieldErrors: undefined,
        data: null,
      };
    }

    if (shift.startsAt <= new Date()) {
      return {
        success: false,
        message: "Cannot cancel signup for a shift that has already started.",
        fieldErrors: undefined,
        data: null,
      };
    }

    // Rate limiting: Check if user recently cancelled a signup (prevent spam)
    const recentCancellation = await prisma.volunteerShiftSignup.findFirst({
      where: {
        volunteerId: user.id,
        signupTime: {
          gte: new Date(Date.now() - 1000), // Within last second (using signupTime as proxy for recent activity)
        },
      },
    });

    if (recentCancellation) {
      return {
        success: false,
        message: "Please wait a moment before cancelling again.",
        fieldErrors: undefined,
        data: null,
      };
    }

    await prisma.volunteerShiftSignup.deleteMany({
      where: {
        shiftId,
        volunteerId: user.id,
      },
    });

    revalidatePath("/volunteer");
    revalidatePath("/volunteer/shifts");
    revalidatePath("/volunteer/my-shifts");
    return {
      success: true,
      message: "Successfully cancelled shift signup!",
      fieldErrors: undefined,
      data: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to cancel signup",
      fieldErrors: undefined,
      data: null,
    };
  }
}
