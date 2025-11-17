export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { assertRole, getActingUser } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { TestNotifications } from "@/app/test-transport/notifications";
import { z } from "zod";

const cancelShiftsSchema = z.object({
  shiftIds: z.array(z.number()),
  reason: z.string().optional(),
});

export async function GET(req: NextRequest) {
  try {
    // Require ADMIN role (throws error if not authorized)
    await assertRole(UserRole.ADMIN);

    const url = new URL(req.url);
    const preflight = url.searchParams.get('preflight') === 'true';
    const shiftIdsParam = url.searchParams.get('shiftIds');

    if (!preflight || !shiftIdsParam) {
      return NextResponse.json(
        { error: "Invalid preflight request" },
        { status: 400 }
      );
    }

    const shiftIds = shiftIdsParam.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));

    if (shiftIds.length === 0) {
      return NextResponse.json(
        { error: "At least one shift ID is required" },
        { status: 400 }
      );
    }

    // Validate that all shifts exist and are active
    const shifts = await prisma.shift.findMany({
      where: {
        id: { in: shiftIds },
        status: "ACTIVE",
      },
      select: { id: true, title: true },
    });

    const foundShiftIds = shifts.map(s => s.id);
    const missingShiftIds = shiftIds.filter(id => !foundShiftIds.includes(id));

    if (missingShiftIds.length > 0) {
      return NextResponse.json(
        {
          error: "Some shifts not found or not active",
          details: { missingShiftIds }
        },
        { status: 400 }
      );
    }

    // Count affected signups
    const affectedCount = await prisma.volunteerShiftSignup.count({
      where: {
        shiftId: { in: shiftIds },
        cancelledAt: null, // Only uncancelled signups
      },
    });

    return NextResponse.json({ affectedCount });
  } catch (error) {
    console.error("Error getting affected count:", error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message === "Authentication required.") {
        return NextResponse.json(
          { error: "Authentication required" },
          { status: 401 }
        );
      }
      if (error.message === "Insufficient permissions.") {
        return NextResponse.json(
          { error: "Admin access required" },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to get affected count" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Require ADMIN role (throws error if not authorized)
    await assertRole(UserRole.ADMIN);

    // Get current user for audit logging
    const actingUser = await getActingUser();
    if (!actingUser) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validation = cancelShiftsSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request data", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { shiftIds, reason } = validation.data;

    if (shiftIds.length === 0) {
      return NextResponse.json(
        { error: "At least one shift ID is required" },
        { status: 400 }
      );
    }

    // Validate that all shifts exist and are active
    const shifts = await prisma.shift.findMany({
      where: {
        id: { in: shiftIds },
        status: "ACTIVE",
      },
      select: { id: true, title: true },
    });

    const foundShiftIds = shifts.map(s => s.id);
    const missingShiftIds = shiftIds.filter(id => !foundShiftIds.includes(id));

    if (missingShiftIds.length > 0) {
      return NextResponse.json(
        {
          error: "Some shifts not found or not active",
          details: { missingShiftIds }
        },
        { status: 400 }
      );
    }

    // Perform cancellation in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Find all active signups for the specified shifts
      const signups = await tx.volunteerShiftSignup.findMany({
        where: {
          shiftId: { in: shiftIds },
          cancelledAt: null, // Only uncancelled signups
        },
        include: {
          shift: true,
        },
      });

      // Group signups by shift for audit logging
      const signupsByShift = signups.reduce((acc, signup) => {
        if (!acc[signup.shiftId]) {
          acc[signup.shiftId] = [];
        }
        acc[signup.shiftId].push(signup);
        return acc;
      }, {} as Record<number, typeof signups>);

      // Update signups to cancelled
      const now = new Date();
      await tx.volunteerShiftSignup.updateMany({
        where: {
          id: { in: signups.map(s => s.id) },
        },
        data: {
          cancelledAt: now,
          cancellationReason: reason,
        },
      });

      // Create audit entries for each shift (even if no signups were affected)
      const audits = [];
      for (const shiftId of shiftIds) {
        const shiftSignups = signupsByShift[shiftId] || [];
        const audit = await tx.shiftCancellationAudit.create({
          data: {
            shiftId,
            actorUserId: actingUser.id,
            affectedCount: shiftSignups.length,
            reason,
          },
        });
        audits.push(audit);

        // Send test notifications for each affected signup
        for (const signup of shiftSignups) {
          TestNotifications.push({
            userId: parseInt(signup.volunteerId),
            shiftId: signup.shiftId,
            reason,
            createdAt: now.toISOString(),
          });
        }
      }

      return {
        affectedCount: signups.length,
        audits,
      };
    });

    return NextResponse.json({
      affectedVolunteerCount: result.affectedCount,
      audits: result.audits,
    });

  } catch (error) {
    console.error("Error cancelling shifts:", error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message === "Authentication required.") {
        return NextResponse.json(
          { error: "Authentication required" },
          { status: 401 }
        );
      }
      if (error.message === "Insufficient permissions.") {
        return NextResponse.json(
          { error: "Admin access required" },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to cancel shifts" },
      { status: 500 }
    );
  }
}
