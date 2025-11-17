import { test, expect } from '@playwright/test';
import { DogPO } from '../page-objects/DogPO';
import { getSpecialNeedsDogId } from '../utils/test-api';

test.describe('Public - Dog Profile', () => {
  test('displays realistic snapshot dog details', async ({ page }) => {
    // Click through from gallery to avoid hard-coding ids
    await page.goto('http://localhost:3000/adopt');
    const first = page.getByTestId('dog-card').first();
    await first.click(); // card links to /adopt/[id]

    // Wait for navigation to dog profile page
    await page.waitForURL(/\/adopt\/.+/, { timeout: 10000 });

    await expect(page.getByTestId('dog-primary-photo')).toBeVisible();
    await expect(page.getByTestId('dog-name')).toBeVisible();
    await expect(page.getByTestId('dog-breed')).toBeVisible();
    await expect(page.getByTestId('btn-sponsor')).toBeVisible();
  });

  test('displays special needs dog correctly', async ({ page, request }) => {
    const dogId = await getSpecialNeedsDogId(request);
    await page.goto(`http://localhost:3000/adopt/${dogId}`);

    const dogPO = new DogPO(page);
    // Wait for dog profile page to load
    await page.waitForURL(/\/adopt\/.+/, { timeout: 15000 });

    // Verify special needs badge is visible
    await expect(page.getByTestId('badge-special-needs')).toBeVisible();

    // Verify basic profile elements
    await expect(page.getByTestId('dog-name')).toBeVisible();
    await expect(page.getByTestId('dog-breed')).toBeVisible();
    await expect(dogPO.publicBio).toBeVisible();
  });

});
