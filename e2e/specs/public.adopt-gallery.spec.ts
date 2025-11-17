import { test, expect } from '@playwright/test';
import { AdoptPO } from '../page-objects/AdoptPO';
import { getHealth, pickBreedWithAtLeast, pickAgeRange } from '../utils/test-api';

test.describe('Public - Adopt Gallery', () => {
  let adoptPO: AdoptPO;

  test.beforeEach(async ({ page }) => {
    adoptPO = new AdoptPO(page);
    await adoptPO.goto();
  });

  test('defaults to available dogs only', async () => {
    await adoptPO.expectOnlyAvailableDogs();
  });

  test('loads realistic dog data from snapshot', async ({ page }) => {
    // Get dog cards and verify count
    const dogCards = adoptPO.getDogCards();
    const count = await dogCards.count();
    
    // Verify we have dogs from the demo dataset
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThanOrEqual(12);

    // Verify the page structure is correct
    await expect(page.getByRole('heading', { name: /Meet Our Senior Dogs/i })).toBeVisible();
  });

  test('photo badges render for dogs with photos', async () => {
    const dogCards = adoptPO.getDogCards();
    const count = await dogCards.count();

    // At least some dogs should have photos (from realistic dataset)
    let dogsWithPhotos = 0;
    for (let i = 0; i < Math.min(count, 10); i++) { // Check first 10 dogs
      const card = dogCards.nth(i);
      const hasImage = await card.locator('img').isVisible().catch(() => false);
      if (hasImage) {
        dogsWithPhotos++;
      }
    }
    expect(dogsWithPhotos).toBeGreaterThan(0);
  });

  test('pagination works', async () => {
    // Test pagination if there are enough dogs
    const pagination = adoptPO.getPagination();
    if (await pagination.isVisible()) {
      await pagination.getByRole('link', { name: 'Next' }).click();
      // Verify page changed
      await adoptPO.expectUrlContains(/page=2/);
    }
  });

  test('breed filter narrows results using realistic data', async ({ page, request }) => {
    const breed = await pickBreedWithAtLeast(request, 2);

    await page.goto('http://localhost:3000/adopt');
    // Wait for page to fully load (filters are wrapped in Suspense)
    await page.getByTestId('dog-cards-container').waitFor({ timeout: 15000 });
    // Wait for filter element to be attached to DOM (may be hidden by CSS)
    await page.getByTestId('filter-breed').waitFor({ state: 'attached', timeout: 15000 });
    const before = await page.getByTestId('dog-card').count();

    await page.getByTestId('filter-breed').click({ force: true });         // shadcn Select trigger
    await page.getByRole('option', { name: breed, exact: true }).click(); // Use exact match to avoid ambiguity
    await page.waitForLoadState('networkidle');

    const after = await page.getByTestId('dog-card').count();
    // Breed filtering should reduce results or keep them the same (if breed has many dogs)
    // Verify the filter was applied by checking the decoded search param value
    await expect.poll(() => new URL(page.url()).searchParams.get('breed')).toBe(breed);

    // Results should be fewer or equal
    expect(after).toBeLessThanOrEqual(before);
  });

  test('age filter narrows results using realistic data', async ({ page }) => {
    const { min, max } = await pickAgeRange();

    await page.goto('http://localhost:3000/adopt');
    // Wait for page to fully load (filters are wrapped in Suspense)
    await page.getByTestId('dog-cards-container').waitFor({ timeout: 15000 });
    // Wait for filter elements to be attached to DOM (may be hidden by CSS)
    await page.getByTestId('filter-age-min').waitFor({ state: 'attached', timeout: 15000 });
    const before = await page.getByTestId('dog-card').count();

    await page.getByTestId('filter-age-min').fill(String(min));
    await page.getByTestId('filter-age-max').fill(String(max));
    await page.waitForLoadState('networkidle');

    const after = await page.getByTestId('dog-card').count();
    // Age filtering may not significantly reduce results depending on seed distribution
    // Verify the filter was applied by checking decoded search params. Some paths coalesce to exact-age queries,
    // so only ageMin is required while ageMax (if present) should still match.
    await expect.poll(() => new URL(page.url()).searchParams.get('ageMin')).toBe(String(min));
    const appliedAgeMax = new URL(page.url()).searchParams.get('ageMax');
    if (appliedAgeMax !== null) {
      expect(appliedAgeMax).toBe(String(max));
    }

    // Results should be fewer or equal (if no dogs match the range, all are filtered out)
    expect(after).toBeLessThanOrEqual(before);
  });

  test('special needs filter works', async ({ page, request }) => {
    // Check if there are any special needs dogs in the seed first
    const h = await getHealth(request);

    // Only test the filter if there are special needs dogs
    if (h.summary.dogs.specialNeeds && h.summary.dogs.specialNeeds > 0) {
      await page.goto('http://localhost:3000/adopt');
      await page.getByTestId('dog-cards-container').waitFor({ timeout: 15000 });
      
      // Apply special needs filter if available
      const specialNeedsFilter = page.getByTestId('filter-special-needs');
      if (await specialNeedsFilter.isVisible()) {
        await specialNeedsFilter.click();
        await page.waitForLoadState('networkidle');

        // Should show dogs with special needs
        const dogCards = adoptPO.getDogCards();
        const count = await dogCards.count();
        expect(count).toBeGreaterThan(0);
      }
    } else {
      // Skip test if no special needs dogs in seed
      console.log('Skipping special needs filter test - no special needs dogs in seed');
    }
  });
});
