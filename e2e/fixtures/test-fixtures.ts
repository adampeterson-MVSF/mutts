// e2e/fixtures/test-fixtures.ts
import { test as base } from '@playwright/test';

/**
 * Extended test fixtures with global error listeners
 * Catches console errors and HTTP 5xx responses to fail fast
 */
export const test = base.extend({
  page: async ({ page }, use) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(`ConsoleError: ${msg.text()}`);
      }
    });

    page.on('response', (resp) => {
      const s = resp.status();
      if (s >= 500) {
        errors.push(`HTTP ${s} @ ${resp.url()}`);
      }
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(page);

    if (errors.length) {
      throw new Error(`Browser errors detected:\n${errors.join('\n')}`);
    }
  },
});

/**
 * Enhanced beforeEach that logs project and cookie state
 */
export function setupProjectLogging(test: typeof base) {
  test.beforeEach(async ({ page }, testInfo) => {
    const roleCookie = (await page.context().cookies()).find(c => c.name === 'test_role')?.value ?? 'none';
    console.log(`[project=${testInfo.project.name}] [cookie.test_role=${roleCookie}]`);
  });
}

