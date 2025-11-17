import { test, expect } from '@playwright/test';

test.describe('Auth - WhoAmI Page', () => {
  test('should show no user found for public users', async ({ page }) => {
    await page.goto('/test/whoami');
    await expect(page.getByTestId('whoami-role')).toHaveText('No user found');
  });

  test('should show volunteer role and user ID for volunteer users', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'e2e/storageState.volunteer.json' });
    const page = await context.newPage();

    await page.goto('/test/whoami');
    await expect(page.getByTestId('whoami-role')).toContainText('VOLUNTEER');
    // Should also show a user ID (not null/undefined)
    await expect(page.getByTestId('whoami-role')).toHaveText(/ID:\s*\w+/);

    await context.close();
  });

  test('should show staff role and user ID for staff users', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'e2e/storageState.staff.json' });
    const page = await context.newPage();

    await page.goto('/test/whoami');
    await expect(page.getByTestId('whoami-role')).toContainText('STAFF');
    // Should also show a user ID (not null/undefined)
    await expect(page.getByTestId('whoami-role')).toHaveText(/ID:\s*\w+/);

    await context.close();
  });

  test('should show admin role and user ID for admin users', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'e2e/storageState.admin.json' });
    const page = await context.newPage();

    await page.goto('/test/whoami');
    await expect(page.getByTestId('whoami-role')).toContainText('ADMIN');
    // Should also show a user ID (not null/undefined)
    await expect(page.getByTestId('whoami-role')).toHaveText(/ID:\s*\w+/);

    await context.close();
  });
});
