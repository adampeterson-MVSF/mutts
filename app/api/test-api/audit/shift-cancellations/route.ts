export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  if (process.env.EXPOSE_TEST_API !== '1') return NextResponse.json({ error: 'disabled' }, { status: 404 });
  if (req.headers.get('x-test-secret') !== (process.env.TEST_SECRET ?? 'test-secret-default'))
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const shiftId = req.nextUrl.searchParams.get('shiftId');

  const audits = await prisma.shiftCancellationAudit.findMany({
    where: shiftId ? { shiftId: parseInt(shiftId) } : undefined,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ audits });
}

export async function POST(req: NextRequest) {
  if (process.env.EXPOSE_TEST_API !== '1') return NextResponse.json({ error: 'disabled' }, { status: 404 });
  if (req.headers.get('x-test-secret') !== (process.env.TEST_SECRET ?? 'test-secret-default'))
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  // Truncate audit table for testing
  await prisma.shiftCancellationAudit.deleteMany({});

  return NextResponse.json({ success: true });
}
