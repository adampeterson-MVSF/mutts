import { NextResponse } from 'next/server';
import { validateTestEndpoint } from '@/lib/utils';

export async function POST(request: Request) {
  const validation = validateTestEndpoint(request);
  if (!validation.isValid) {
    return validation.response!;
  }

  try {
    // Clean up test artifacts
    // Note: DB cleanup is handled by individual test resets
    // This could clean up uploaded files, etc.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Cleanup failed:', error);
    return NextResponse.json({ error: 'Cleanup failed' }, { status: 500 });
  }
}
