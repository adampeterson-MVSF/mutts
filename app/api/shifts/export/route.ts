// app/api/shifts/export/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { toCsv } from "@/lib/csv";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    await assertRole(UserRole.ADMIN);

    // Get all shifts including deleted ones
    const shifts = await prisma.shift.findMany({
      orderBy: { startsAt: "asc" },
      include: {
        _count: {
          select: { signups: true },
        },
      },
    });

    // Generate CSV data
    const csvData = shifts.map(shift => ({
      id: shift.id,
      title: shift.title,
      description: '', // Description field removed from schema
      start_time: shift.startsAt.toISOString(),
      end_time: shift.endsAt.toISOString(),
      max_volunteers: shift.capacity,
      signup_count: shift._count.signups,
      created_at: shift.createdAt.toISOString(),
      updated_at: shift.updatedAt.toISOString(),
      is_deleted: shift.status === "DELETED" ? 'Yes' : 'No',
      deleted_at: shift.deletedAt?.toISOString() || '',
    }));

    const csvHeaders = [
      'ID',
      'Title',
      'Description',
      'Start Time',
      'End Time',
      'Max Volunteers',
      'Signup Count',
      'Created At',
      'Updated At',
      'Is Deleted',
      'Deleted At'
    ];
    const csvContent = toCsv(csvData, csvHeaders);

    const filename = `shifts-${new Date().toISOString().split('T')[0]}.csv`;

    // Return CSV as download with proper headers
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('CSV export error:', error);
    return NextResponse.json(
      { error: 'Unauthorized or failed to generate export' },
      { status: error instanceof Error && error.message.includes('Unauthorized') ? 403 : 500 }
    );
  }
}

