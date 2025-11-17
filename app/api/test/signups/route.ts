import { NextRequest, NextResponse } from "next/server";

// Test-only API for seeding signups in E2E tests
// Protected by X-Test-Secret header
export async function POST(request: NextRequest) {
  // Check for test secret header
  const testSecret = request.headers.get("X-Test-Secret");
  if (testSecret !== process.env.TEST_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { shiftId, userEmail }: { shiftId: number; userEmail: string } = await request.json();

    if (!shiftId || !userEmail) {
      return NextResponse.json(
        { error: "Missing required fields: shiftId and userEmail" },
        { status: 400 }
      );
    }

    // Create the signup directly using Prisma
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();

    try {
      // Find the volunteer profile by email
      const volunteer = await prisma.profile.findUnique({
        where: { email: userEmail },
        select: { id: true }
      });

      if (!volunteer) {
        return NextResponse.json(
          { error: `Volunteer with email ${userEmail} not found` },
          { status: 404 }
        );
      }

      // Check if shift exists
      const shift = await prisma.shift.findUnique({
        where: { id: shiftId },
        select: { id: true, title: true }
      });

      if (!shift) {
        return NextResponse.json(
          { error: `Shift with ID ${shiftId} not found` },
          { status: 404 }
        );
      }

      // Create the signup
      const signup = await prisma.volunteerShiftSignup.create({
        data: {
          shiftId,
          volunteerId: volunteer.id,
        },
      });

      return NextResponse.json({ success: true, signup });
    } finally {
      await prisma.$disconnect();
    }
  } catch (error) {
    console.error("Error creating test signup:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
