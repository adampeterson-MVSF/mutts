import { NextResponse, type NextRequest } from 'next/server';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';

export async function POST(request: Request) {
  if (!isAllowedTestRequest(request as unknown as NextRequest)) return blockAs404();

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