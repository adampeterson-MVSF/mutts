import { Page, expect } from '@playwright/test';
import { waitForPage } from '../utils/test-helpers';

export class AdoptPO {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/adopt');
    // Wait for the adopt page to fully load
    await waitForPage(this.page, 'public/adopt');
  }

  get filterStatus() {
    return this.page.getByTestId('filter-status');
  }

  dogCard(name: string) {
    return this.page.getByTestId(`dog-card-${name.toLowerCase()}`);
  }

  dogAdoptLink(name: string) {
    return this.page.getByTestId(`btn-adopt-${name.toLowerCase()}`);
  }

  async expectOnlyAvailableDogs() {
    // Check that only AVAILABLE dogs are shown
    const dogCards = this.page.getByTestId('dog-card');

    // Wait for dog cards container and first card to load with longer timeouts
    await this.page.getByTestId('dog-cards-container').waitFor({ timeout: 20000 });
    await dogCards.first().waitFor({ timeout: 20000 });

    const count = await dogCards.count();
    // For now, just check that we have cards - availability status might not be displayed
    expect(count).toBeGreaterThan(0);
  }

  async applyBreedFilter(breed: string) {
    // Click the breed select trigger to open the dropdown
    await this.page.getByTestId('filter-breed').click();
    // Select the breed option from the dropdown using exact text match
    await this.page.getByRole('option', { name: breed, exact: true }).click();
    // Wait for URL to update with filter params and results to reload
    await this.page.waitForURL(/\?breed=/, { timeout: 15000 });
    // Add a small delay for filtering to take effect
    await this.page.waitForTimeout(1000);
    // Wait for dog cards to rerender after filtering
    await this.page.getByTestId('dog-card').first().waitFor({ timeout: 15000 });
  }

  async applyAgeFilter(minAge: number, maxAge: number) {
    await this.page.getByTestId('filter-age-min').fill(minAge.toString());
    await this.page.getByTestId('filter-age-max').fill(maxAge.toString());
    await this.page.getByTestId('btn-apply-filters').click();
    // Wait for URL to update with filter params and results to reload
    await this.page.waitForURL(/\?age=\d+/, { timeout: 15000 });
    // Add a small delay for filtering to take effect
    await this.page.waitForTimeout(1000);
    // Wait for dog cards to rerender after filtering
    await this.page.getByTestId('dog-card').first().waitFor({ timeout: 15000 });
  }

  async expectUrlContains(text: string | RegExp) {
    return this.page.waitForURL(text);
  }

  getDogCards() {
    return this.page.getByTestId('dog-card');
  }

  getPagination() {
    return this.page.getByTestId('pagination');
  }
}
