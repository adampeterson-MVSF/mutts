import { promises as fs } from 'fs';
import path from 'path';

const ROLES = ['public', 'volunteer', 'staff', 'admin'] as const;

export default async function globalTeardown() {
  const baseURL = process.env.BASE_URL || 'http://localhost:3000';
  const testSecret = process.env.TEST_SECRET || 'test-secret-default';
  const log = (message: string, ...args: unknown[]) =>
    console.log(`[GLOBAL TEARDOWN][${new Date().toISOString()}] ${message}`, ...args);
  const warn = (message: string, ...args: unknown[]) =>
    console.warn(`[GLOBAL TEARDOWN][${new Date().toISOString()}] ${message}`, ...args);

  const cleanupUrl = `${baseURL}/api/test-api/cleanup`;
  const attemptCleanup = async () => {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      log('Cleanup attempt %d/%d -> POST %s', attempt, maxAttempts, cleanupUrl);
      try {
        const response = await fetch(cleanupUrl, {
          method: 'POST',
          headers: {
            'x-test-secret': testSecret,
          },
        });

        log('Cleanup response status: %d %s', response.status, response.statusText);
        if (response.ok) {
          log('Cleanup endpoint acknowledged request');
          return;
        }

        const body = await response.text();
        warn('Cleanup attempt %d failed. Body: %s', attempt, body || '[empty]');
      } catch (err) {
        warn('Cleanup request threw on attempt %d: %o', attempt, err);
      }

      if (attempt < maxAttempts) {
        const waitMs = 1_000 * Math.pow(2, attempt - 1);
        log('Waiting %dms before retrying cleanup', waitMs);
        await new Promise(resolve => setTimeout(resolve, waitMs));
      }
    }

    warn('Cleanup endpoint did not succeed after %d attempts', maxAttempts);
  };

  try {
    await attemptCleanup();
  } catch (err) {
    warn('Cleanup attempts aborted due to unexpected error: %o', err);
  }

  // Only remove storage state files if we're in a clean environment
  // In development, we might want to keep them for debugging
  const shouldCleanupStorage = process.env.CI || process.env.CLEANUP_STORAGE === 'true';
  
  if (shouldCleanupStorage) {
    await Promise.all(ROLES.map(async (role) => {
      const storagePath = path.join(process.cwd(), 'e2e', `storageState.${role}.json`);
      try {
        log('Removing storage state for %s at %s', role, storagePath);
        await fs.rm(storagePath, { force: true });
        log('Removed storage state %s', storagePath);
      } catch (error) {
        warn('Failed to remove storage state %s: %o', storagePath, error);
      }
    }));
  } else {
    log('Skipping storage state cleanup (set CLEANUP_STORAGE=true to enable)');
  }
}
