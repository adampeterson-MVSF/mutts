// app/api/staff/applications/bulkAssign/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const bulkAssignSchema = z.object({
  ids: z.array(z.number().int().positive()).min(1, "At least one application ID required"),
  staffId: z.string().uuid("Invalid staff ID format"),
});

export async function POST(request: NextRequest) {
  try {
    await assertRole(UserRole.STAFF);

    const body = await request.json();

    // Validate input
    const { ids, staffId } = bulkAssignSchema.parse(body);

    // Verify staff user exists
    const staffUser = await prisma.profile.findUnique({
      where: { id: staffId },
      select: { id: true, role: true },
    });

    if (!staffUser) {
      return NextResponse.json({ error: 'Staff user not found' }, { status: 404 });
    }

    if (staffUser.role !== UserRole.STAFF && staffUser.role !== UserRole.ADMIN) {
      return NextResponse.json({ error: 'User is not authorized for assignment' }, { status: 422 });
    }

    // Perform bulk update with transaction
    const result = await prisma.$transaction(async (tx) => {
      const updateResult = await tx.application.updateMany({
        where: {
          id: { in: ids },
        },
        data: {
          assignedToUserId: staffId,
          updatedAt: new Date(),
        },
      });

      // Return success info
      return {
        updatedCount: updateResult.count,
        ids,
        staffId,
      };
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error('Bulk assign error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to assign applications' },
      { status: 500 }
    );
  }
}
