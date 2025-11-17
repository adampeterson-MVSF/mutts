import { NextRequest, NextResponse } from 'next/server';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  if (!isAllowedTestRequest(request)) return blockAs404();

  try {
    const { title, description, startsAt, endsAt, capacity } = await request.json();

    const shift = await prisma.shift.create({
      data: {
        title: title || 'Test Shift',
        description: description || 'Test shift for E2E testing',
        startsAt: new Date(startsAt),
        endsAt: new Date(endsAt),
        capacity: capacity || 3,
      },
    });

    return NextResponse.json(shift);
  } catch (error) {
    console.error('Error creating test shift:', error);
    return NextResponse.json({ error: 'Failed to create shift' }, { status: 500 });
  }
}
