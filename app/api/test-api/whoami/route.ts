import { NextResponse, type NextRequest } from 'next/server';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';
import { getSSRUser } from '@/lib/auth/session.server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  if (!isAllowedTestRequest(request as unknown as NextRequest)) return blockAs404();

  try {
    const user = await getSSRUser();
    if (!user) {
      return NextResponse.json({ role: null, userId: null }, { status: 401 });
    }

    // Get email from profile
    const profile = await prisma.profile.findUnique({
      where: { id: user.id },
      select: { email: true },
    });

    return NextResponse.json({
      role: user.role,
      userId: user.id,
      email: profile?.email || null,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get user info', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

