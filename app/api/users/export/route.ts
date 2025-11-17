// app/api/users/export/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { getAllUsers } from "@/lib/actions/profile.actions";
import { toCsv } from "@/lib/csv";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    await assertRole(UserRole.ADMIN);

    const users = await getAllUsers();

    // Generate CSV data
    const csvData = users.map(user => ({
      email: user.email,
      name: user.name || '',
      role: user.role,
    }));

    const csvHeaders = ['email', 'name', 'role'];
    const csvContent = toCsv(csvData, csvHeaders);

    // Return CSV as download with proper headers
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="users.csv"',
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

