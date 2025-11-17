import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility - Core Pages', () => {
  test('homepage passes accessibility checks', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('adopt page passes accessibility checks', async ({ page }) => {
    await page.goto('/adopt');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('admin dashboard passes accessibility checks', async ({ page }) => {
    await page.goto('/admin');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('admin applications passes accessibility checks', async ({ page }) => {
    await page.goto('/admin/applications');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('dog profile page passes accessibility checks', async ({ page }) => {
    // Navigate to adopt page first to get a dog ID
    await page.goto('/adopt');
    await page.waitForSelector('[data-testid="dog-card"]');

    // Click on the first dog card
    const firstDogLink = page.locator('[data-testid="dog-card"]').first().locator('a');
    await firstDogLink.click();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
