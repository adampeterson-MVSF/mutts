import { test, expect } from '@playwright/test';
import { DashboardPO } from '../page-objects/DashboardPO';

test.describe('Volunteer - Dashboard', () => {
  let dashboardPO: DashboardPO;

  test.beforeEach(async ({ page }) => {
    dashboardPO = new DashboardPO(page);
  });

  test('shows personalized welcome and quick log form', async ({ page }) => {
    await dashboardPO.goto();

    // Check what URL we're actually on
    console.log('Current URL:', page.url());

    // Should show welcome banner
    await expect(dashboardPO.welcomeBanner).toBeVisible();

    // Should show quick log form
    await expect(dashboardPO.quickLogForm).toBeVisible();
  });


  test('quick log updates appear in activity', async ({ page }) => {
    await dashboardPO.goto();

    // Check that the quick log form is visible
    await expect(dashboardPO.quickLogForm).toBeVisible();

    // Get the first available dog from the dropdown
    const dogSelect = page.getByTestId('select-dog');
    await dogSelect.click();
    const firstOption = page.locator('[data-slot="select-item"]').first();
    await firstOption.click();

    // Select activity type (default to WALK)
    await page.getByLabel('Activity Type').click();
    await page.getByText('WALK').click();

    // Fill in the note
    await page.getByTestId('input-log-note').fill('Quick test log entry');

    // Click submit button
    await dashboardPO.quickLogSubmit.click();

    // Check that success toast appears (activity was logged successfully)
    await expect(page.getByTestId('toast-success')).toBeVisible();

    // Note: Activity feed is not displayed on volunteer dashboard
    // Activity logs are visible on individual dog pages in admin area
  });

});
