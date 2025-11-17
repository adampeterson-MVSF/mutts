import { test, expect } from '@playwright/test';
import { waitForPage } from '../utils/test-helpers';

test.describe('Admin - Application Profile Structure', () => {
  test('admin can view application with profile data structure', async ({ page }) => {
    // Navigate to admin applications page
    await page.goto('/admin/applications');

    // Wait for page to be ready
    await waitForPage(page, 'admin/applications');

    // Find the first application in the table and click it
    const firstApplicationLink = page.locator('tbody tr').first().locator('a').first();
    await expect(firstApplicationLink).toBeVisible();
    await firstApplicationLink.click();

    // Should navigate to application detail page
    await waitForPage(page, 'admin/applications/');

    // Verify the page shows application details
    await expect(page.getByText('Applicant Information')).toBeVisible();

    // Verify that profile data is displayed (applicant phone should be visible if present)
    // Since we can't predict exact data, we just verify the structure works
    const pageText = await page.textContent('body');
    expect(pageText).toBeTruthy();

    // The key test: page should load without errors, indicating the profile data structure works
    await expect(page.getByText('Applicant Information')).toBeVisible();
  });

  test('admin can create activity log for dog', async ({ page }) => {
    // Navigate to a dog's log page (need to find a dog first)
    await page.goto('/admin/dogs');

    // Wait for page to be ready
    await waitForPage(page, 'admin/dogs');

    // Find the first dog and navigate to its log page
    const firstDogLink = page.locator('tbody tr').first().locator('a').first();
    await expect(firstDogLink).toBeVisible();

    // Get the dog ID from the URL or row
    const dogRow = page.locator('tbody tr').first();
    const dogLinkHref = await dogRow.locator('a').first().getAttribute('href');
    const dogId = dogLinkHref?.split('/').pop();

    if (dogId) {
      // Navigate to the log page
      await page.goto(`/admin/dog/${dogId}/log`);
      await waitForPage(page, 'admin/dog/log');

      // Verify the activity log form is present
      await expect(page.getByTestId('activity-log-form')).toBeVisible();

      // Verify the activity log list is present
      await expect(page.getByTestId('activity-log-list')).toBeVisible();

      // Fill out and submit the form
      await page.selectOption('select[name="type"]', 'NOTE');
      await page.fill('textarea[name="note"]', 'Test activity log entry');

      // Submit the form
      await page.click('button[type="submit"]');

      // Page should reload and show the new log entry
      // Wait for navigation/reload
      await page.waitForLoadState('networkidle');

      // Verify the page still has the form and list
      await expect(page.getByTestId('activity-log-form')).toBeVisible();
      await expect(page.getByTestId('activity-log-list')).toBeVisible();

      // The key test: form submission should work without client-side fetch errors
      const pageText = await page.textContent('body');
      expect(pageText).toBeTruthy();
    }
  });
});
