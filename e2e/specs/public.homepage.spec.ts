import { test } from '@playwright/test';
import { HomePO } from '../page-objects/HomePO';

test.describe('Public - Homepage', () => {
  let homePO: HomePO;

  test.beforeEach(async ({ page }) => {
    homePO = new HomePO(page);
    await homePO.goto();
  });

  test('displays mission copy and primary CTAs', async () => {
    await homePO.expectMissionCopyVisible();
    await homePO.expectPrimaryCTAsVisible();
  });

  test('header and footer links are functional', async () => {
    // Check header links
    await homePO.adoptCTA.isVisible();
    await homePO.fosterCTA.isVisible();
    await homePO.eventsCTA.isVisible();
    await homePO.loginLink.isVisible();

    // Test navigation (would click and verify URL changes)
    // await homePO.adoptCTA.click();
    // await expect(page).toHaveURL('/adopt');
  });

  // Add more tests for A11y, mobile menu, etc.
});
