import { NextResponse } from 'next/server';

import { audits } from '@/lib/testStores';

export async function POST() {
  audits.length = 0;
  return NextResponse.json({ ok: true });
}
