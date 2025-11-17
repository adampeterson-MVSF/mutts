import { NextResponse, type NextRequest } from 'next/server';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';
import { prisma } from '@/lib/prisma';
import { DogStatus, Prisma } from '@prisma/client';

export async function GET(req: Request) {
  if (!isAllowedTestRequest(req as unknown as NextRequest)) return blockAs404();

  const { searchParams } = new URL(req.url);
  const specialNeeds = searchParams.get('specialNeeds') === '1';
  const hasPhoto = searchParams.get('hasPhoto') === '1';
  const status = (searchParams.get('status') as DogStatus) || DogStatus.AVAILABLE;

  try {
    const where: Prisma.DogWhereInput = { status };

    if (specialNeeds !== undefined) {
      where.specialNeeds = specialNeeds;
    }

    if (hasPhoto) {
      where.primaryPhotoUrl = { not: null };
    }

    const dog = await prisma.dog.findFirst({
      where,
      select: { id: true, mutt_id: true },
      orderBy: { id: 'asc' }, // Deterministic ordering
    });

    if (!dog) {
      return NextResponse.json(
        { error: 'No dog found matching criteria' },
        { status: 404 }
      );
    }

    return NextResponse.json({ id: dog.id.toString(), slug: dog.mutt_id });
  } catch (error) {
    console.error('Error finding dog:', error);
    return NextResponse.json(
      { error: 'Failed to find dog' },
      { status: 500 }
    );
  }
}