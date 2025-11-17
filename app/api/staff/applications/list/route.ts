// app/api/staff/applications/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole, AppStatus, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    await assertRole(UserRole.STAFF);

    const { searchParams } = new URL(request.url);

    // Parse query parameters
    const status = searchParams.get('status') as AppStatus | null;
    const search = searchParams.get('search')?.trim();
    const sortBy = searchParams.get('sortBy') || 'submittedAt';
    const sortOrder = (searchParams.get('sortOrder') || 'desc') as 'asc' | 'desc';
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = Math.min(parseInt(searchParams.get('pageSize') || '10'), 100); // Max 100 per page

    // Parse date range
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');
    const dateFromParsed = dateFrom ? new Date(dateFrom) : null;
    const dateToParsed = dateTo ? new Date(dateTo) : null;

    // Validate date range
    if (dateFromParsed && isNaN(dateFromParsed.getTime())) {
      return NextResponse.json({ error: 'Invalid dateFrom format' }, { status: 422 });
    }
    if (dateToParsed && isNaN(dateToParsed.getTime())) {
      return NextResponse.json({ error: 'Invalid dateTo format' }, { status: 422 });
    }

    // Build where clause
    const where: Prisma.ApplicationWhereInput = {};

    if (status) {
      where.status = status;
    }

    if (dateFromParsed || dateToParsed) {
      where.submittedAt = {};
      if (dateFromParsed) {
        where.submittedAt.gte = dateFromParsed;
      }
      if (dateToParsed) {
        where.submittedAt.lte = dateToParsed;
      }
    }

    if (search) {
      where.OR = [
        { applicantName: { contains: search, mode: 'insensitive' } },
        { applicantEmail: { contains: search, mode: 'insensitive' } },
        { dog: { name: { contains: search, mode: 'insensitive' } } },
      ];
    }

    // Validate sortBy field
    const validSortFields = ['submittedAt', 'status'];
    if (!validSortFields.includes(sortBy)) {
      return NextResponse.json({ error: 'Invalid sortBy field' }, { status: 422 });
    }

    // Build orderBy
    const orderBy: Prisma.ApplicationOrderByWithRelationInput = {
      [sortBy]: sortOrder,
    };

    // Calculate offset
    const skip = (page - 1) * pageSize;

    // Execute query with count
    const [applications, totalCount] = await Promise.all([
      prisma.application.findMany({
        where,
        orderBy,
        skip,
        take: pageSize,
        include: {
          dog: {
            select: { id: true, name: true },
          },
          assignedToUser: {
            select: { id: true, name: true, email: true },
          },
        },
      }),
      prisma.application.count({ where }),
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);

    return NextResponse.json({
      applications,
      pagination: {
        page,
        pageSize,
        totalCount,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });

  } catch (error) {
    console.error('Staff applications list error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}
