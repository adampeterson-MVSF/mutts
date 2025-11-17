// app/api/staff/activity/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    await assertRole(UserRole.STAFF);

    const { searchParams } = new URL(request.url);
    const dogId = searchParams.get('dogId');

    if (!dogId) {
      return NextResponse.json({ error: 'dogId parameter is required' }, { status: 422 });
    }

    const dogIdNum = parseInt(dogId);
    if (isNaN(dogIdNum)) {
      return NextResponse.json({ error: 'Invalid dogId format' }, { status: 422 });
    }

    // Verify dog exists
    const dog = await prisma.dog.findUnique({
      where: { id: dogIdNum },
      select: { id: true },
    });

    if (!dog) {
      return NextResponse.json({ error: 'Dog not found' }, { status: 404 });
    }

    const activityLogs = await prisma.activityLog.findMany({
      where: { dogId: dogIdNum },
      orderBy: { createdAt: 'desc' },
      include: {
        createdByUser: {
          select: { id: true, name: true },
        },
      },
    });

    return NextResponse.json(activityLogs);

  } catch (error) {
    console.error('Staff activity logs list error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch activity logs' },
      { status: 500 }
    );
  }
}
