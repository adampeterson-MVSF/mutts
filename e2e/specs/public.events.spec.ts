import { test, expect } from '@playwright/test';

test.describe('Public - Events', () => {
  test('displays upcoming events by default', async ({ page }) => {
    await page.goto('http://localhost:3000/events', { waitUntil: 'networkidle' });

    // Wait for page content to load
    await page.waitForSelector('h1, h2, [data-testid]', { timeout: 15000 });

    // Should show "Upcoming Events" heading
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible({ timeout: 10000 });

    // Should show description
    await expect(page.getByText('Join us for adoption fairs, fundraisers, and community gatherings')).toBeVisible({ timeout: 10000 });

    // Should have Upcoming tab active
    const upcomingTab = page.getByRole('link', { name: 'Upcoming' });
    await expect(upcomingTab).toHaveClass(/bg-primary/, { timeout: 10000 });
  });

  test('upcoming events are sorted by date', async ({ page }) => {
    await page.goto('http://localhost:3000/events', { waitUntil: 'networkidle' });

    // Wait for events to load
    await page.waitForSelector('li, h1, h2, [data-testid]', { timeout: 15000 });

    const eventItems = page.locator('li').filter({ hasText: /.+/ });
    const count = await eventItems.count();

    if (count > 1) {
      // Get the first two events to check chronological order
      const firstEvent = eventItems.first();
      const secondEvent = eventItems.nth(1);

      const firstDate = await firstEvent.locator('p').filter({ hasText: /\d{1,2}\/\d{1,2}\/\d{4}/ }).textContent();
      const secondDate = await secondEvent.locator('p').filter({ hasText: /\d{1,2}\/\d{1,2}\/\d{4}/ }).textContent();

      // First event should be before or equal to second event chronologically
      const firstDateObj = new Date(firstDate || '');
      const secondDateObj = new Date(secondDate || '');
      expect(firstDateObj.getTime()).toBeLessThanOrEqual(secondDateObj.getTime());
    }
  });

  test('can switch between upcoming and past events', async ({ page }) => {
    await page.goto('http://localhost:3000/events', { waitUntil: 'networkidle' });

    // Wait for initial content
    await page.waitForSelector('h1, h2, [data-testid]', { timeout: 15000 });

    // Click Past Events tab
    await page.getByRole('link', { name: 'Past' }).click();

    // URL should update
    await expect(page).toHaveURL('/events?view=past', { timeout: 10000 });

    // Should show "Past Events" heading
    await expect(page.getByRole('heading', { name: 'Past Events' })).toBeVisible({ timeout: 10000 });

    // Past tab should be active
    const pastTab = page.getByRole('link', { name: 'Past' });
    await expect(pastTab).toHaveClass(/bg-primary/, { timeout: 10000 });

    // Go back to upcoming
    await page.getByRole('link', { name: 'Upcoming' }).click();
    await expect(page).toHaveURL('/events', { timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible({ timeout: 10000 });
  });

  test('events display complete information', async ({ page }) => {
    await page.goto('http://localhost:3000/events', { waitUntil: 'networkidle' });

    // Wait for events to load
    await page.waitForSelector('li, h1, h2, [data-testid]', { timeout: 15000 });

    const eventItems = page.locator('li').filter({ hasText: /.+/ });

    if (await eventItems.count() > 0) {
      const firstEvent = eventItems.first();

      // Should have title
      await expect(firstEvent.getByRole('heading')).toBeVisible({ timeout: 10000 });

      // Should have date/time info
      await expect(firstEvent.locator('p').filter({ hasText: /\d{1,2}\/\d{1,2}\/\d{4}/ })).toBeVisible({ timeout: 10000 });

      // Location may or may not be present
      // Description may or may not be present - just checking that the event has content
    }
  });

  test('shows empty state when no events', async ({ page }) => {
    // This would require mocking the getEvents function to return empty
    // For now, test the structure exists
    await page.goto('http://localhost:3000/events', { waitUntil: 'networkidle' });

    // Wait for page to load
    await page.waitForSelector('h1, h2, [data-testid]', { timeout: 15000 });

    // Check that the structure is ready for empty state
    await expect(page.getByText('No events scheduled right now. Check back soon!')).toBeVisible({ timeout: 10000 });
  });
});
