import { Page, expect } from '@playwright/test';
import { waitForPage } from '../utils/test-helpers';

export class ShiftsPO {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/volunteer');
    await waitForPage(this.page, 'volunteer/dashboard');
  }

  shiftCard(id: string) {
    return this.page.locator(`[data-testid="shift-card"][data-shift-id="${id}"]`);
  }

  shiftRow(id: string) {
    return this.shiftCard(id);
  }

  signupButton(id: string) {
    return this.page.getByTestId(`signup-${id}`);
  }

  capacityBadge(id: string) {
    return this.page.getByTestId(`capacity-${id}`);
  }

  cancelButton(id: string) {
    return this.page.getByTestId(`cancel-${id}`);
  }

  async expectFutureShiftsOnly() {
    const pastShifts = this.page.locator('[data-testid="shift-card"]').filter({ hasText: /past|expired/i });
    await expect(pastShifts).toHaveCount(0);
  }

  async expectCapacityDisplayed(id: string, capacity: string) {
    await expect(this.capacityBadge(id)).toContainText(capacity);
  }

  async clickSignup(id: string) {
    await this.signupButton(id).click();
  }

  async clickCancel(id: string) {
    await this.cancelButton(id).click();
  }

  async gotoMyShifts() {
    await this.page.goto('/volunteer/my-shifts');
    await expect(this.page.locator('body')).toBeVisible();
  }

  async expectShiftInMyShifts(id: string) {
    await expect(this.shiftCard(id)).toBeVisible();
  }

  async getFirstAvailableShiftId(): Promise<string> {
    // Find the first shift card that has a signup button (not full and not already signed up)
    const signupButtons = this.page.getByTestId(/^signup-/);
    const firstButton = signupButtons.first();
    await expect(firstButton).toBeVisible({ timeout: 10000 });

    // Extract the ID from the test ID
    const testId = await firstButton.getAttribute('data-testid');
    if (!testId) throw new Error('Could not get test ID from signup button');
    const id = testId.replace('signup-', '');
    return id;
  }
}
