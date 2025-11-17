import { z } from "zod";

const ServerEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  ALLOW_TEST_ENDPOINTS: z.string().optional(), // must be '1' AND NODE_ENV==='test'

  // Database
  DATABASE_URL: z.string().url(),

  // Supabase
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),

  // Optional monitoring
  SENTRY_DSN: z.string().url().optional(),

  // Test configuration
  TEST_SECRET: z.string().optional(),

  // PII encryption
  FIELD_ENCRYPTION_KEY: z.string().min(1, "FIELD_ENCRYPTION_KEY is required for PII encryption"),
  FIELD_ENCRYPTION_SALT: z.string().optional(),
}).superRefine((env, ctx) => {
  // Validate FIELD_ENCRYPTION_KEY format (should be base64-encoded 32 bytes)
  if (env.FIELD_ENCRYPTION_KEY) {
    try {
      const key = Buffer.from(env.FIELD_ENCRYPTION_KEY, 'base64');
      if (key.length !== 32) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "FIELD_ENCRYPTION_KEY must be a base64-encoded 32-byte key"
        });
      }
    } catch {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "FIELD_ENCRYPTION_KEY must be valid base64"
      });
    }
  }

  // Test affordances can only be enabled in test environment OR when explicitly allowed
  // This allows test endpoints to work during E2E testing even if NODE_ENV != test
  if (env.NODE_ENV !== "test" && env.ALLOW_TEST_ENDPOINTS !== "1") {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Test affordances cannot be enabled outside test environment unless ALLOW_TEST_ENDPOINTS=1"
    });
  }

  // Test secret should only be set in development/test or when test affordances are enabled
  if (env.NODE_ENV === "production" && env.TEST_SECRET && env.ALLOW_TEST_ENDPOINTS !== "1") {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "TEST_SECRET should not be set in production unless ALLOW_TEST_ENDPOINTS=1"
    });
  }
});

// Validate server-side environment variables
export const serverEnv = ServerEnvSchema.parse({
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "development",
});
