import { NextResponse } from 'next/server';
import { validateTestEndpoint } from '@/lib/utils';

export async function POST(request: Request) {
  console.log('Test login route: Starting request');

  const validation = validateTestEndpoint(request);
  if (!validation.isValid) {
    return validation.response!;
  }

  try {
    const { role } = await request.json();
    console.log('Test login route: Role requested:', role);

    // For now, just return success without Supabase calls
    return NextResponse.json({
      success: true,
      message: `Mock login successful for role: ${role}`,
      role: role
    });
  } catch (error) {
    console.error('Test login failed:', error);
    return NextResponse.json({
      error: 'Login failed',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
