import { NextRequest, NextResponse } from "next/server";
import { createShift, deleteShift } from "@/lib/actions/shift.actions";

// Test-only API for seeding shifts in E2E tests
// Protected by X-Test-Secret header
export async function POST(request: NextRequest) {
  // Check for test secret header
  const testSecret = request.headers.get("X-Test-Secret");
  if (testSecret !== process.env.TEST_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { title, startTime, endTime, maxVolunteers }: {
      title: string;
      startTime: string;
      endTime: string;
      maxVolunteers?: number;
    } = await request.json();

    if (!title || !startTime || !endTime) {
      return NextResponse.json(
        { error: "Missing required fields: title, startTime, and endTime" },
        { status: 400 }
      );
    }

    // Create a FormData object to match the server action signature
    const formData = new FormData();
    formData.set('title', title);
    formData.set('startsAt', startTime);
    formData.set('endsAt', endTime);
    if (maxVolunteers) formData.set('capacity', maxVolunteers.toString());

    // Use the existing createShift server action
    const result = await createShift({ success: false, message: null, fieldErrors: undefined, data: null }, formData);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message || "Failed to create shift" },
        { status: 400 }
      );
    }

    // We need to return the created shift ID, but the server action doesn't return the shift data
    // Let's query for the shift we just created
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();

    try {
      const createdShift = await prisma.shift.findFirst({
        where: {
          title,
          startsAt: new Date(startTime),
          endsAt: new Date(endTime),
        },
        orderBy: { createdAt: 'desc' },
      });

      if (!createdShift) {
        return NextResponse.json(
          { error: "Shift was created but could not be retrieved" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, shift: { id: createdShift.id } });
    } finally {
      await prisma.$disconnect();
    }
  } catch (error) {
    console.error("Error creating test shift:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE method for deleting shifts in tests
export async function DELETE(request: NextRequest) {
  // Check for test secret header
  const testSecret = request.headers.get("X-Test-Secret");
  if (testSecret !== process.env.TEST_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { shiftId }: { shiftId: number } = await request.json();

    if (!shiftId) {
      return NextResponse.json(
        { error: "Missing required field: shiftId" },
        { status: 400 }
      );
    }

    // Create a FormData object to match the server action signature
    const formData = new FormData();
    formData.set('shiftId', shiftId.toString());

    // Use the existing deleteShift server action
    const result = await deleteShift({ success: false, message: null, fieldErrors: undefined, data: null }, formData);

    if (!result.success) {
      // Return the error as is, but map specific messages to HTTP status
      const status = result.message?.includes('active signups') ? 409 : 400;
      return NextResponse.json(
        { error: result.message || "Failed to delete shift" },
        { status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting test shift:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
