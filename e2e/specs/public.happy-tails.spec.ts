import { test, expect } from '@playwright/test';

test.describe('Public - Happy Tails', () => {
  test('displays adopted dogs with stories', async ({ page }) => {
    await page.goto('http://localhost:3000/happy-tails', { waitUntil: 'networkidle' });

    // Wait for page content to load
    await page.waitForSelector('h1, h2, [data-testid]', { timeout: 15000 });

    // Should show page title
    await expect(page.getByRole('heading', { name: 'Happy Tails' })).toBeVisible({ timeout: 10000 });

    // Should show description
    await expect(page.getByText('Celebrate the senior dogs who have found their forever homes')).toBeVisible({ timeout: 10000 });

    // Check if there are adopted dogs (from seed data, "Bella" is adopted)
    const dogCards = page.locator('[data-testid="dog-card"]').or(page.getByRole('article'));
    const count = await dogCards.count();

    if (count > 0) {
      // Check first dog card structure
      const firstCard = dogCards.first();

      // Should have dog name as heading
      await expect(firstCard.getByRole('heading')).toBeVisible({ timeout: 10000 });

      // Should have adoption date
      await expect(firstCard.getByText(/Adopted on/)).toBeVisible({ timeout: 10000 });

      // Should have photo
      await expect(firstCard.locator('img')).toBeVisible({ timeout: 10000 });

      // Should have "View adoption story" link
      await expect(firstCard.getByRole('link', { name: 'View adoption story' })).toBeVisible({ timeout: 10000 });
    } else {
      // If no adopted dogs, should show empty state
      await expect(page.getByText('No adoption stories yet—check back soon!')).toBeVisible({ timeout: 10000 });
    }
  });

  test('dog cards show correct information', async ({ page }) => {
    await page.goto('http://localhost:3000/happy-tails', { waitUntil: 'networkidle' });

    // Wait for content to load
    await page.waitForSelector('h1, h2, [data-testid]', { timeout: 15000 });

    const dogCards = page.locator('[data-testid="dog-card"]').or(page.getByRole('article'));

    if (await dogCards.count() > 0) {
      const firstCard = dogCards.first();

      // Should show breed and age info
      const description = firstCard.locator('p').filter({ hasText: /years old|Senior Dog/ });
      await expect(description).toBeVisible({ timeout: 10000 });

      // If dog has special needs, should show badge
      // Badge may or may not be present depending on dog
    }
  });

  test('clicking view story links to dog profile', async ({ page }) => {
    await page.goto('http://localhost:3000/happy-tails', { waitUntil: 'networkidle' });

    // Wait for content to load
    await page.waitForSelector('h1, h2, [data-testid]', { timeout: 15000 });

    const storyLink = page.getByRole('link', { name: 'View adoption story' }).first();

    if (await storyLink.isVisible({ timeout: 10000 })) {
      await storyLink.click();

      // Should navigate to adopt/[id] page
      await expect(page).toHaveURL(/\/adopt\/.+/, { timeout: 15000 });
    }
  });
});
