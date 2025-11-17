import { NextResponse, type NextRequest } from 'next/server';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';

// In-memory mailbox for testing (only in test environment)
let testMailbox: Array<{to: string; subject: string; body: string}> = [];

export async function POST(request: Request) {
  if (!isAllowedTestRequest(request as unknown as NextRequest)) return blockAs404();

  testMailbox = [];
  return NextResponse.json({ success: true });
}

// GET to retrieve emails for testing
export async function GET(request: Request) {
  if (!isAllowedTestRequest(request as unknown as NextRequest)) return blockAs404();

  return NextResponse.json({ emails: testMailbox });
}
