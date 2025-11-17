import { Page } from '@playwright/test';

export class HomePO {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    // Wait for homepage content to load
    await this.page.waitForSelector('h1, [data-testid]', { timeout: 15000 });
  }

  get getStartedCTA() {
    return this.page.getByTestId('btn-get-started');
  }

  get adoptCTA() {
    return this.page.getByTestId('btn-adopt');
  }

  get fosterCTA() {
    return this.page.getByTestId('btn-foster');
  }

  get eventsCTA() {
    return this.page.getByTestId('btn-events');
  }

  get loginLink() {
    return this.page.getByTestId('link-login');
  }

  async expectMissionCopyVisible() {
    await this.page.getByText(/senior dogs.*forever homes/i).isVisible({ timeout: 15000 });
  }

  async expectPrimaryCTAsVisible() {
    await this.adoptCTA.isVisible({ timeout: 10000 });
    await this.fosterCTA.isVisible({ timeout: 10000 });
    await this.eventsCTA.isVisible({ timeout: 10000 });
  }
}
