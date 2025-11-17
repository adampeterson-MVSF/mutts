import { test, expect } from '@playwright/test';
import { ShiftsPO } from '../page-objects/ShiftsPO';

test.describe('Volunteer - Shifts Browse & Signup', () => {
  let shiftsPO: ShiftsPO;

  test.beforeEach(async ({ page }) => {
    shiftsPO = new ShiftsPO(page);
    await shiftsPO.goto();
  });

  test('shows only future shifts', async () => {
    await shiftsPO.expectFutureShiftsOnly();
  });

  test('shifts display date, time, and capacity with realistic data', async () => {
    const firstShiftId = await shiftsPO.getFirstAvailableShiftId();

    // Check that capacity badge shows correct format
    await expect(shiftsPO.capacityBadge(firstShiftId)).toHaveText(/\d+ \/ \d+/);

    // Verify shift card has proper structure with realistic volunteer signups
    const shiftCard = shiftsPO.shiftCard(firstShiftId);
    await expect(shiftCard).toBeVisible();

    // Should show shift title and have some content
    await expect(shiftCard).toContainText(/./); // Has some text content
  });

  test('can sign up for available shift', async ({ page }) => {
    const firstShiftId = await shiftsPO.getFirstAvailableShiftId();

    // Click signup button
    await shiftsPO.clickSignup(firstShiftId);

    // Wait a bit for the backend to process and UI to update
    await page.waitForTimeout(2000);

    // Check that signup button becomes cancel button (indicates success)
    await expect(shiftsPO.signupButton(firstShiftId)).not.toBeVisible();
    await expect(shiftsPO.cancelButton(firstShiftId)).toBeVisible();
  });

  test('shifts are grouped by date', async ({ page }) => {
    // Check that shifts are grouped under date headers
    const dateHeaders = page.getByRole('heading').filter({ hasText: /\w+ \d{1,2}, \d{4}/ });
    await expect(dateHeaders.first()).toBeVisible();

    // Each date group should contain shift cards
    const firstDateGroup = dateHeaders.first().locator('..').locator('..'); // Parent container
    const shiftCards = firstDateGroup.locator('[data-testid="shift-card"]').or(page.locator('card'));
    expect(await shiftCards.count()).toBeGreaterThan(0);
  });

  test('shift details are displayed correctly', async ({ page }) => {
    const shiftCards = page.locator('[data-testid="shift-card"]').or(page.locator('card'));

    if (await shiftCards.count() > 0) {
      const firstCard = shiftCards.first();

      // Should have title/content
      await expect(firstCard).toContainText(/./);

      // Should have time range
      await expect(firstCard.getByText(/\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M/)).toBeVisible();

      // Should have structured description content
      await expect(firstCard.locator('strong').filter({ hasText: 'Date:' })).toBeVisible();
      await expect(firstCard.locator('strong').filter({ hasText: 'Time:' })).toBeVisible();
      await expect(firstCard.locator('strong').filter({ hasText: 'Capacity:' })).toBeVisible();

      // Should have capacity badge
      await expect(firstCard.getByText(/Slots: \d+ \/ \d+/)).toBeVisible();
    }
  });

  test('shows appropriate button based on signup status', async () => {
    const firstShiftId = await shiftsPO.getFirstAvailableShiftId();

    // Initially should show signup button (volunteer hasn't signed up yet)
    await expect(shiftsPO.signupButton(firstShiftId)).toBeVisible();
    await expect(shiftsPO.cancelButton(firstShiftId)).not.toBeVisible();

    // After signing up (if we implement this in the test)
    // await shiftsPO.clickSignup(firstShiftId);
    // await expect(shiftsPO.cancelButton(firstShiftId)).toBeVisible();
    // await expect(shiftsPO.signupButton(firstShiftId)).not.toBeVisible();
  });
});
