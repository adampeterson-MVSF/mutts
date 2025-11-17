import { NextResponse, type NextRequest } from 'next/server';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  if (!isAllowedTestRequest(request as unknown as NextRequest)) return blockAs404();

  try {
    const url = new URL(request.url);
    const count = parseInt(url.searchParams.get('count') || '3');

    // Create fake applications for testing
    const applications = [];
    for (let i = 0; i < count; i++) {
      // Get a test profile to associate with
      const profiles = await prisma.profile.findMany({ take: 5 });
      const profile = profiles[i % profiles.length];

      const app = await prisma.application.create({
        data: {
          reason: `Test adoption application ${i + 1}`,
          status: 'SUBMITTED',
          profileId: profile.id,
          applicantName: profile.name || `Test User ${i + 1}`,
          applicantEmail: profile.email,
          submittedAt: new Date(),
          // Associate with a dog if available
          dogId: i < 3 ? (i + 1) : null, // Associate first 3 with dogs 1-3
        }
      });
      applications.push(app);
    }

    return NextResponse.json({
      success: true,
      created: applications.length,
      applications: applications.map(a => ({ id: a.id, reason: a.reason }))
    });
  } catch (error) {
    console.error('Seed applications failed:', error);
    return NextResponse.json({
      error: 'Failed to create test applications'
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
