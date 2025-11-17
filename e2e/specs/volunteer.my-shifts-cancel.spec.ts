import { test, expect } from '@playwright/test';
import { ShiftsPO } from '../page-objects/ShiftsPO';
import { apiCreateShift, apiCreateSignup } from '../utils/test-api';

test.describe('Volunteer - My Shifts Cancel', () => {
  let shiftsPO: ShiftsPO;
  let testShiftId: number;

  test.beforeEach(async ({ page, request }) => {
    shiftsPO = new ShiftsPO(page);

    // Create the exact data needed for this test block
    const shift = await apiCreateShift(request, { title: 'Test Cancel Shift' });
    testShiftId = shift.id;

    // This helper signs up the current test volunteer for the shift
    await apiCreateSignup(request, testShiftId, 'volunteer@test.example.com');
  });

  test('shows signed up shifts on my-shifts page', async ({ page }) => {
    await shiftsPO.gotoMyShifts();

    // Should show page title
    await expect(page.getByRole('heading', { name: 'My Upcoming Shifts' })).toBeVisible();

    // Now the test is deterministic. The shift will be here.
    await expect(page.getByText('Test Cancel Shift')).toBeVisible();
  });

  test('can cancel signed up shift', async ({ page }) => {
    // The shift is already created and signed up for in beforeEach

    // Go to my shifts page
    await shiftsPO.gotoMyShifts();

    // Should see the shift
    await expect(page.getByText('Test Cancel Shift')).toBeVisible();

    // Find the cancel button for our shift
    const cancelButton = page.getByTestId(`cancel-${testShiftId}`);
    await cancelButton.click();

    // Confirm
    await page.getByTestId('btn-confirm-delete').click(); // Or whatever your confirm button is

    // Assert
    await expect(page.getByTestId('toast-success')).toBeVisible();
    await expect(page.getByText('Test Cancel Shift')).not.toBeVisible();
  });

  test('cancelling shift decrements capacity on browse page', async ({ page }) => {
    // The shift is already created and signed up for in beforeEach

    // Go to browse page and check initial capacity
    await shiftsPO.goto();
    const capacityAfterSignup = await shiftsPO.capacityBadge(testShiftId.toString()).textContent();

    // Cancel from my shifts
    await shiftsPO.gotoMyShifts();
    const cancelButton = page.getByTestId(`cancel-${testShiftId}`);
    await cancelButton.click();
    await page.getByTestId('btn-confirm-delete').click();

    // Go back to browse page
    await shiftsPO.goto();

    // Capacity should decrease
    const capacityAfterCancel = await shiftsPO.capacityBadge(testShiftId.toString()).textContent();
    const signupMatch = capacityAfterSignup?.match(/Slots: (\d+) \/ (\d+)/);
    const cancelMatch = capacityAfterCancel?.match(/Slots: (\d+) \/ (\d+)/);

    if (signupMatch && cancelMatch) {
      const signupCount = parseInt(signupMatch[1]);
      const cancelCount = parseInt(cancelMatch[1]);
      expect(cancelCount).toBe(signupCount - 1);
    }
  });

  test('cancel button shows confirmation dialog', async ({ page }) => {
    // The shift is already created and signed up for in beforeEach

    // Go to my shifts
    await shiftsPO.gotoMyShifts();

    // Click cancel - this should show a confirmation dialog
    const cancelButton = page.getByTestId(`cancel-${testShiftId}`);
    await cancelButton.click();

    // Check for confirmation dialog (AlertDialog component)
    const confirmDialog = page.getByRole('dialog').or(page.getByTestId('alert-dialog'));
    await expect(confirmDialog).toBeVisible();

    // Confirm the cancellation
    await page.getByRole('button', { name: /confirm|yes|cancel shift/i }).click();

    // Wait for success message
    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 10000 });
  });

  test('shift cards show complete details', async ({ page }) => {
    // The shift is already created and signed up for in beforeEach

    // Go to my shifts
    await shiftsPO.gotoMyShifts();

    // Find our test shift card
    const shiftCard = page.getByText('Test Cancel Shift').locator('..').locator('..'); // Navigate up to card container

    // Should have title
    await expect(shiftCard.getByRole('heading')).toBeVisible();

    // Should have date and time
    await expect(shiftCard.getByText(/\w+, \w+ \d{1,2}, \d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M/)).toBeVisible();

    // Should have description
    await expect(shiftCard.locator('p')).toBeVisible();

    // Should have capacity badge
    await expect(shiftCard.getByText(/Slots: \d+ \/ \d+/)).toBeVisible();

    // Should have cancel button
    await expect(shiftCard.getByRole('button', { name: /cancel/i })).toBeVisible();
  });
});
