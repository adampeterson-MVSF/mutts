import { NextResponse } from 'next/server';

import { notifications } from '@/lib/testStores';

export async function POST() {
  notifications.length = 0;
  return NextResponse.json({ ok: true });
}