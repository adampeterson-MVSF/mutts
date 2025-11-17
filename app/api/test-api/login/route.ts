import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';
import { getSupabaseAnonKey } from '@/lib/env';

export async function POST(request: NextRequest) {
  if (!isAllowedTestRequest(request)) return blockAs404();

  const { role } = await request.json();

  if (!role || !['VOLUNTEER', 'STAFF', 'ADMIN'].includes(role)) {
    return NextResponse.json({ error: 'Invalid role. Must be VOLUNTEER, STAFF, or ADMIN' }, { status: 400 });
  }

  // Map role to email
  const email = `${role.toLowerCase()}@test.example.com`;
  const password = 'testpassword123';

  // Create a Supabase server client
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    getSupabaseAnonKey(),
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Perform real Supabase authentication
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  // Get the session data directly
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

  if (sessionError || !sessionData.session) {
    return NextResponse.json({ error: 'Failed to get session after login' }, { status: 500 });
  }

  // Return the access token for test setup
  return NextResponse.json({
    cookie: sessionData.session.access_token,
    message: 'Login successful',
    user: { id: data.user?.id, email: data.user?.email }
  });
}
