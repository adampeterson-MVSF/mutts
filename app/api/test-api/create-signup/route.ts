import { NextRequest, NextResponse } from 'next/server';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  if (!isAllowedTestRequest(request)) return blockAs404();

  try {
    const { shiftId, volunteerEmail } = await request.json();

    // Find the volunteer profile by email
    const volunteer = await prisma.profile.findUnique({
      where: { email: volunteerEmail },
    });

    if (!volunteer) {
      return NextResponse.json({ error: 'Volunteer not found' }, { status: 404 });
    }

    const signup = await prisma.volunteerShiftSignup.create({
      data: {
        shiftId: parseInt(shiftId),
        volunteerId: volunteer.id,
      },
    });

    return NextResponse.json(signup);
  } catch (error) {
    console.error('Error creating test signup:', error);
    return NextResponse.json({ error: 'Failed to create signup' }, { status: 500 });
  }
}
