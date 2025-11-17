import { NextResponse } from 'next/server';

import { notifications } from '@/lib/testStores';

export async function GET() {
  return NextResponse.json({ notifications });
}