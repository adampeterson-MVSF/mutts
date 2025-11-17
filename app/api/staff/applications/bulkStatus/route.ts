// app/api/staff/applications/bulkStatus/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole, AppStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const bulkStatusSchema = z.object({
  ids: z.array(z.number().int().positive()).min(1, "At least one application ID required"),
  status: z.nativeEnum(AppStatus, { message: "Invalid status" }),
});

export async function POST(request: NextRequest) {
  try {
    await assertRole(UserRole.STAFF);

    const body = await request.json();

    // Validate input
    const { ids, status } = bulkStatusSchema.parse(body);

    // Perform bulk update with transaction
    const result = await prisma.$transaction(async (tx) => {
      const updateResult = await tx.application.updateMany({
        where: {
          id: { in: ids },
        },
        data: {
          status,
          updatedAt: new Date(),
        },
      });

      // Create audit logs for status changes
      const auditEntries = ids.map(id => ({
        applicationId: id,
        actorId: 'current-user-id', // This would be set from session in real implementation
        oldStatus: null, // We don't track old status in bulk operations
        newStatus: status,
        note: `Bulk status update to ${status}`,
      }));

      await tx.applicationAudit.createMany({
        data: auditEntries,
      });

      // Return success info
      return {
        updatedCount: updateResult.count,
        ids,
        status,
      };
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error('Bulk status update error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to update application statuses' },
      { status: 500 }
    );
  }
}
