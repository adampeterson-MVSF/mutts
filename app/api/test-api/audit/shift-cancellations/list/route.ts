import { NextResponse } from 'next/server';

import { audits } from '@/lib/testStores';

export async function GET() {
  return NextResponse.json({ audits });
}
