import { NextResponse } from 'next/server';
import { validateTestEndpoint } from '@/lib/utils';

export async function GET(request: Request) {
  const validation = validateTestEndpoint(request);
  if (!validation.isValid) {
    return validation.response!;
  }

  return NextResponse.json({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? '***SET***' : 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
    APP_ENV: process.env.APP_ENV,
  });
}
