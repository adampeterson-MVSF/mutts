import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    await assertRole([UserRole.STAFF, UserRole.ADMIN]);

    const { shiftIds }: { shiftIds: number[] } = await request.json();

    if (!Array.isArray(shiftIds) || shiftIds.length === 0) {
      return NextResponse.json({ error: "Invalid shift IDs" }, { status: 400 });
    }

    // Count total active signups across all specified shifts
    const totalAffected = await prisma.volunteerShiftSignup.count({
      where: {
        shiftId: { in: shiftIds },
        cancelledAt: null, // Only count active signups
      },
    });

    return NextResponse.json({ affectedCount: totalAffected });
  } catch (error) {
    console.error('Failed to calculate bulk affected count:', error);
    return NextResponse.json({ error: "Failed to calculate affected count" }, { status: 500 });
  }
}
