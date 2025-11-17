import { z } from "zod";

// Client-safe environment variables (can be imported by client code)
const ClientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
});

// Validate client-safe environment variables
export const clientEnv = ClientEnvSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

// Helper to get the Supabase anon key (supports both naming conventions)
export const getSupabaseAnonKey = () => clientEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || clientEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
