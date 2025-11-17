import { test, expect } from '@playwright/test';

test.describe('Volunteer - Apply Adopt', () => {
  test.beforeEach(async ({ page }) => {
    // Whoami SSR page should show volunteer role (your sanity spec covers it; this is an inline guard)
    await page.goto('/test/whoami');
    await expect(page.getByTestId('whoami-role')).toHaveText(/volunteer/i);
  });

  test('shows adoption application form when authenticated', async ({ page }) => {
    await page.goto('/apply/adopt');
    await expect(page.getByTestId('adopt-form')).toBeVisible();

    // basic fields
    await expect(page.getByTestId('field-first-name')).toBeVisible();
    await expect(page.getByTestId('field-last-name')).toBeVisible();
    await expect(page.getByTestId('field-email')).toBeVisible();
  });

  test('can fill and submit adoption application', async ({ page }) => {
    await page.goto('/apply/adopt');

    // Contact Info Section
    await page.getByTestId('field-first-name').fill('Pat');
    await page.getByTestId('field-last-name').fill('Vol');
    await page.getByTestId('field-email').fill('pat.vol@example.com');
    await page.getByTestId('input-address').fill('123 Main St, Anytown CA 90210');

    // Housing Info Section
    await page.getByTestId('select-housing-type').selectOption('OWN_HOME');
    await page.getByLabel('Yes').check(); // hasYard
    await page.getByLabel('Is your yard fenced?').check(); // yardFenced
    await page.getByLabel('Describe Your Home Environment').fill('Quiet suburban home with a fenced backyard, perfect for a senior dog to enjoy their golden years.');

    // Reason Section
    await page.getByLabel('Why Adopt a Senior Dog?').fill('I have experience with senior dogs and understand their special needs. I want to provide a loving home for a dog who deserves to live out their life in comfort and care.');

    // Check if submit button is enabled
    const submitButton = page.getByTestId('btn-submit-application');
    const isDisabled = await submitButton.getAttribute('disabled');
    console.log('Submit button disabled attribute:', isDisabled);

    // Submit the form
    console.log('Clicking submit button');
    await submitButton.click();

    // Wait a moment for potential form processing
    await page.waitForTimeout(2000);

    // Check current URL
    const currentURL = page.url();
    console.log('Current URL after submit:', currentURL);

    // Check for any error messages on the page
    const errorElements = page.locator('[class*="error"], [class*="Error"], .text-red-500, .text-red-600');
    const errorCount = await errorElements.count();
    if (errorCount > 0) {
      const errorTexts = await errorElements.allTextContents();
      console.log('Found error messages:', errorTexts);
    }

    await expect(page).toHaveURL(/apply\/adopt\/success/);
    await expect(page.getByText('Adoption Application Submitted Successfully!')).toBeVisible();
  });

});
