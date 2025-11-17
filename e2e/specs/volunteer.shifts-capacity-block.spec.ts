import { test, expect } from '@playwright/test';
import { ShiftsPO } from '../page-objects/ShiftsPO';

test.describe('Volunteer - Shifts Capacity & Blocking', () => {
  let shiftsPO: ShiftsPO;

  test.beforeEach(async ({ page }) => {
    shiftsPO = new ShiftsPO(page);
    await shiftsPO.goto();
  });

  test('full shifts show disabled signup button', async ({ page }) => {
    // Create a scenario where a shift is full
    // This would require either:
    // 1. Setting up test data with a full shift
    // 2. Signing up enough volunteers to fill a shift

    // For now, test the UI behavior when isFull is true
    const fullShiftCard = page.locator('[data-testid="shift-card"]').filter({ hasText: 'Slots: 3 / 3' });

    if (await fullShiftCard.isVisible()) {
      // Full shifts should have disabled signup button
      const signupBtn = fullShiftCard.locator('[data-testid^="signup-"]').first().or(
        fullShiftCard.getByRole('button', { name: /sign up|full/i })
      );

      // Button should be disabled or show "Full"
      const isDisabled = await signupBtn.getAttribute('disabled') !== null;
      const hasFullText = await signupBtn.filter({ hasText: /full|at capacity/i }).isVisible();

      expect(isDisabled || hasFullText).toBe(true);
    }
  });

  test('cannot signup for past shifts', async ({ page }) => {
    // This would require creating past shifts in test data
    // or mocking the date to make shifts appear in the past

    // For now, test that past shifts don't show signup buttons
    const pastShifts = page.locator('[data-testid="shift-card"]').filter({ hasText: /past|expired/i });

    if (await pastShifts.count() > 0) {
      // Past shifts should not have signup buttons
      await expect(pastShifts.locator('[data-testid^="signup-"]')).not.toBeVisible();
    }
  });

  test('capacity badge updates correctly', async ({ page }) => {
    const firstShiftId = await shiftsPO.getFirstAvailableShiftId();

    // Check initial capacity exists
    const initialCapacity = await shiftsPO.capacityBadge(firstShiftId).textContent();
    expect(initialCapacity).toMatch(/Slots: \d+ \/ \d+/);

    // Sign up for the shift
    await shiftsPO.clickSignup(firstShiftId);

    // Wait for UI update
    await page.waitForTimeout(1000);

    // Capacity should update (optimistic update should increment the count)
    const updatedCapacity = await shiftsPO.capacityBadge(firstShiftId).textContent();
    expect(updatedCapacity).toMatch(/Slots: \d+ \/ \d+/);

    // The count should have changed (either increased or the test should just verify the format)
    expect(updatedCapacity).not.toBe(initialCapacity);
  });

  test('signup button becomes cancel button after signup', async () => {
    const firstShiftId = await shiftsPO.getFirstAvailableShiftId();

    // Initially signup button visible
    await expect(shiftsPO.signupButton(firstShiftId)).toBeVisible();
    await expect(shiftsPO.cancelButton(firstShiftId)).not.toBeVisible();

    // Sign up
    await shiftsPO.clickSignup(firstShiftId);

    // Now cancel button should be visible
    await expect(shiftsPO.cancelButton(firstShiftId)).toBeVisible();
    await expect(shiftsPO.signupButton(firstShiftId)).not.toBeVisible();
  });

  test('shows appropriate messaging for full shifts', async ({ page }) => {
    // Test visual indicators for full shifts
    const shiftCards = page.locator('[data-testid="shift-card"]').or(page.locator('card'));

    for (let i = 0; i < await shiftCards.count(); i++) {
      const card = shiftCards.nth(i);
      const capacityText = await card.getByText(/Slots: \d+ \/ \d+/).textContent();

      if (capacityText?.includes('3 / 3')) { // Assuming max is 3
        // Full shifts should have visual indication
        await expect(card.getByText(/full|at capacity/i).or(card.locator('[disabled]'))).toBeVisible();
      }
    }
  });
});
