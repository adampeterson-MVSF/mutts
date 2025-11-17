import { Page } from '@playwright/test';
import { selectOption } from '../utils/page-helpers';

export class DashboardPO {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/volunteer'); // Volunteer dashboard route
  }

  get welcomeBanner() {
    return this.page.getByTestId('welcome-banner');
  }

  get quickLogForm() {
    return this.page.getByTestId('card-quick-log');
  }

  get quickLogSubmit() {
    return this.page.getByTestId('submit-quicklog');
  }

  async submitQuickLog(dogName: string, note: string) {
    // Select dog from dropdown
    await selectOption(this.page, this.page.getByTestId('select-dog'), dogName);

    // Select activity type (default to WALK)
    await selectOption(this.page, this.page.getByLabel('Activity Type'), 'WALK');

    // Fill in the note
    await this.page.getByTestId('input-log-note').fill(note);

    // Click submit button
    await this.quickLogSubmit.click();
  }

  async expectPersonalizedWelcome(name: string) {
    await this.welcomeBanner.filter({ hasText: name }).isVisible();
  }
}
