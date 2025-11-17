// WARNING: test-only authentication. Never expose /api/test-api/login outside test envs.

import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { waitForServerReady, resetDatabase, createTestSession } from './test-api-client';

// Sanitize env to eliminate NO_COLOR/FORCE_COLOR conflict warnings
if ('NO_COLOR' in process.env) delete process.env.NO_COLOR;
if ('FORCE_COLOR' in process.env) delete process.env.FORCE_COLOR;

export default async function globalSetup() {
  const baseURL = process.env.BASE_URL || 'http://localhost:3000';
  const roles = ['public', 'VOLUNTEER', 'STAFF', 'ADMIN'] as const;
  const log = (message: string, ...args: unknown[]) =>
    console.log(`[GLOBAL SETUP][${new Date().toISOString()}] ${message}`, ...args);

  log('Starting global setup for roles: %s', roles.join(', '));

  // Wait for server to be ready
  await waitForServerReady(baseURL);

  const dataset = (process.env.E2E_DATASET as 'realistic' | 'demo') || 'realistic';
  log('Resetting database via test API with dataset: %s', dataset);

  try {
    const summary = await resetDatabase(baseURL, dataset);

    log('Reset summary: %o', summary);

    // Log deterministic IDs for test targeting
    if (summary.deterministicIds) {
      log('Deterministic test IDs available:');
      Object.entries(summary.deterministicIds).forEach(([key, value]) => {
        log('  %s: %s', key, value);
      });
    }

    // Fail fast if seed didn't work
    const success = 'ok' in summary ? summary.ok : summary.success ?? false;
    if (!success) {
      const errorMsg = summary.isDuplicateError
        ? `[GLOBAL SETUP] Seed failed due to duplicate emails: ${summary.error ?? 'Unknown error'}`
        : `[GLOBAL SETUP] Seed failed: ${summary.error ?? 'Unknown error'}`;
      throw new Error(errorMsg);
    }

    log('Database reset successfully.');
  } catch (err) {
    log('Seeding failed: %o', err);
    throw err;
  }


  async function createSessionForRole(role: "ADMIN" | "STAFF" | "VOLUNTEER") {
    const storagePath = path.join(process.cwd(), 'e2e', `storageState.${role.toLowerCase()}.json`);
    const baseURL = process.env.E2E_BASE_URL ?? "http://127.0.0.1:3000";

    const cookie = await createTestSession(baseURL, role);

    // Create storage state with the cookie
    const storageState = {
      cookies: [{
        name: 'sb-access-token',
        value: cookie,
        domain: new URL(baseURL).hostname,
        path: '/',
        httpOnly: true,
        secure: false, // Allow for local development
      }],
      origins: []
    };

    fs.writeFileSync(storagePath, JSON.stringify(storageState));
    log(`Storage state for ${role} saved to ${storagePath} with cookie`);
  }

  log('Database prepared successfully. Creating authenticated sessions for test roles...');

  // Create public (empty) state
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.storageState({ path: 'e2e/storageState.public.json' });
  await context.close();
  await browser.close();
  log('Public storage state created.');

  // Create authenticated states using direct session creation
  try {
    await createSessionForRole('VOLUNTEER');
    await createSessionForRole('STAFF');
    await createSessionForRole('ADMIN');
  } catch (err) {
    log('Error during session creation:', err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    throw new Error(`Failed to create sessions: ${errorMessage}`);
  }

  log('Global setup completed successfully');
}
