// e2e/specs/00.sanity.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Sanity Checks', () => {
  test('whoami exposes role via SSR', async ({ page }) => {
    await page.goto('/test/whoami');
    await expect(page.getByTestId('whoami-role')).toContainText(/(public|volunteer|staff|admin)/i);
  });

  test('health returns realistic distribution', async ({ request }) => {
    const res = await request.get('/api/test-api/health');
    expect(res.ok()).toBeTruthy();

    const json = await res.json();
    expect(json.dataset).toBe('realistic');

    // assert some variety
    expect(json.summary.dogs.total).toBeGreaterThan(40);
    expect(json.summary.dogs.size.S + json.summary.dogs.size.M + json.summary.dogs.size.L).toBeGreaterThan(0);
  });
});