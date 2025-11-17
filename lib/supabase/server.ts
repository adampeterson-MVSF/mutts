import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseAnonKey } from "@/lib/env";

// Type for test mock client
type MockSupabaseClient = {
  auth: {
    getUser: () => Promise<{ data: { user: null }; error: null }>;
    verifyOtp: () => Promise<{ data: { user: null; session: null }; error: null }>;
    signInWithPassword: () => Promise<{ error: null }>;
  };
  storage: {
    from: () => {
      upload: () => Promise<{ error: null }>;
      download: () => Promise<{ data: null; error: null }>;
      remove: () => Promise<{ error: null }>;
      getPublicUrl: () => { data: { publicUrl: string } };
      createSignedUrl: () => Promise<{ data: { signedUrl: string }; error: null }>;
      createSignedUploadUrl: () => Promise<{ data: { signedUrl: string }; error: null }>;
      list: () => Promise<{ data: unknown[]; error: null }>;
    };
  };
};

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() {
  const cookieStore = await cookies();

  // In test environment, return a mock client to prevent Supabase errors
  // The test authentication is handled via headers, not cookies
  if (process.env.NODE_ENV === 'test') {
    return {
      auth: {
        getUser: async () => ({
          data: { user: null },
          error: null
        }),
        verifyOtp: async () => ({
          data: { user: null, session: null },
          error: null
        }),
        signInWithPassword: async () => ({ error: null })
      },
      storage: {
        from: () => ({
          upload: async () => ({ error: null }),
          download: async () => ({ data: null, error: null }),
          remove: async () => ({ error: null }),
          getPublicUrl: () => ({ data: { publicUrl: '' } }),
          createSignedUrl: async () => ({ data: { signedUrl: '' }, error: null }),
          createSignedUploadUrl: async () => ({ data: { signedUrl: '' }, error: null }),
          list: async () => ({ data: [], error: null })
        })
      }
    } as MockSupabaseClient;
  }

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    getSupabaseAnonKey(),
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}
