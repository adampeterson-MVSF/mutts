// @ts-check
import { defineConfig } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';

// Load envs in this order (later overrides earlier)
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.test.local'), override: true });
dotenv.config({ path: path.resolve(process.cwd(), '.env'), override: true });

// Sanitize env to eliminate NO_COLOR/FORCE_COLOR conflict warnings
if ('NO_COLOR' in process.env) delete process.env.NO_COLOR;
if ('FORCE_COLOR' in process.env) delete process.env.FORCE_COLOR;
// Or, if you want colored output:
// process.env.FORCE_COLOR = '1'; delete process.env.NO_COLOR;

const TEST_SECRET = process.env.TEST_SECRET || 'test-secret-default';
const baseURL = process.env.BASE_URL || 'http://localhost:3000';

export default defineConfig({
  testDir: '.',
  timeout: 10_000,
  retries: 0,
  // Reduce workers in CI to avoid flakiness, keep high for local dev performance
  workers: process.env.CI ? 4 : 16,
  reporter: [['list']],
  globalSetup: require.resolve('./global-setup.ts'),
  globalTeardown: require.resolve('./global-teardown.ts'),
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: {
      // Node environment
      NODE_ENV: 'test',
      // Supabase – provide both client & server keys as needed by your app
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'dummy-key',
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
      // Site configuration
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
      // Encryption
      FIELD_ENCRYPTION_KEY: 't5KrZY6pkKDJhpUsbZ9vraRJ7v4pQFf7NKcrTcb857U=',
      FIELD_ENCRYPTION_SALT: 'test-salt',
      // test affordances
      EXPOSE_TEST_API: '1',
      ALLOW_TEST_ENDPOINTS: '1',
      TEST_SECRET,
      APP_ENV: 'test', // your own toggle; don't use NODE_ENV
    },
  },
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
    testIdAttribute: 'data-testid',
    extraHTTPHeaders: { 'x-test-secret': TEST_SECRET },
    storageState: 'e2e/storageState.public.json', // Default to public (unauthenticated)
  },
  expect: { timeout: 15_000 },
  grepInvert: [/@slow/],
  projects: [
    {
      name: 'public',
      testMatch: 'e2e/specs/public.*.spec.ts',
      use: {
        storageState: 'e2e/storageState.public.json',
      },
    },
    {
      name: 'volunteer',
      testMatch: 'e2e/specs/volunteer.*.spec.ts',
      use: {
        storageState: 'e2e/storageState.volunteer.json',
      },
    },
    {
      name: 'staff',
      testMatch: 'e2e/specs/access-matrix.spec.ts', // Only access-matrix tests for staff
      use: {
        storageState: 'e2e/storageState.staff.json',
      },
    },
    {
      name: 'admin',
      testMatch: 'e2e/specs/admin.*.spec.ts',
      use: {
        storageState: 'e2e/storageState.admin.json',
      },
    },
  ],
});
