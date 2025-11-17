// app/api/staff/activity/create/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole, ActivityType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createActivityLogSchema = z.object({
  dogId: z.number().int().positive("Dog ID must be a positive integer"),
  type: z.nativeEnum(ActivityType),
  note: z.string().min(1, "Note cannot be empty").max(1000, "Note too long"),
});

export async function POST(request: NextRequest) {
  try {
    await assertRole(UserRole.STAFF);

    // Get current user for createdByUserId
    const { headers } = await import('next/headers');
    const headerData = await headers();
    const testUserId = headerData.get('x-test-user-id');

    if (!testUserId) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const body = await request.json();

    // Validate input
    const { dogId, type, note } = createActivityLogSchema.parse(body);

    // Verify dog exists
    const dog = await prisma.dog.findUnique({
      where: { id: dogId },
      select: { id: true },
    });

    if (!dog) {
      return NextResponse.json({ error: 'Dog not found' }, { status: 404 });
    }

    // Create the activity log
    const activityLog = await prisma.activityLog.create({
      data: {
        dogId,
        type,
        note,
        createdByUserId: testUserId,
      },
      include: {
        createdByUser: {
          select: { id: true, name: true },
        },
      },
    });

    return NextResponse.json(activityLog, { status: 201 });

  } catch (error) {
    console.error('Staff activity log create error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create activity log' },
      { status: 500 }
    );
  }
}
