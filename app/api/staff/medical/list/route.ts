// app/api/staff/medical/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Require staff role
    await requireRole(UserRole.STAFF);

    const { searchParams } = new URL(request.url);
    const dogId = searchParams.get('dogId');

    if (!dogId || isNaN(Number(dogId))) {
      return NextResponse.json(
        { error: 'Valid dogId is required' },
        { status: 400 }
      );
    }

    const documents = await prisma.medicalDocument.findMany({
      where: { dogId: Number(dogId) },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        mime: true,
        size: true,
        createdAt: true,
      },
    });

    return NextResponse.json(documents);

  } catch (error) {
    console.error('Staff medical documents list error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch medical documents' },
      { status: 500 }
    );
  }
}
