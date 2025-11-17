import { test, expect } from '@playwright/test';

test.describe('Volunteer - Apply Foster', () => {
  test('shows foster application form when authenticated', async ({ page }) => {
    await page.goto('/apply/foster');

    // Should show foster-specific form sections
    await expect(page.getByRole('heading', { name: 'Foster Application' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Foster-Specific Information' })).toBeVisible();
    await expect(page.getByText('How many dogs can you foster at one time?')).toBeVisible();
    await expect(page.getByText('Do you have experience with animals?')).toBeVisible();
  });

  test('foster form includes capacity and experience questions', async ({ page }) => {
    await page.goto('/apply/foster');

    // Should have questions about animal experience
    await expect(page.getByText('I have cats')).toBeVisible();
    await expect(page.getByText('I have dogs')).toBeVisible();
    await expect(page.getByText('Tell us about your experience with animals')).toBeVisible();

    // Should have housing questions
    await expect(page.getByLabel('Housing Type')).toBeVisible();
    await expect(page.getByText('Do you have a yard?')).toBeVisible();
    await expect(page.getByText('Is your yard fenced?')).toBeVisible();
    await expect(page.getByText('Describe Your Home Environment')).toBeVisible();
  });

  test('can submit foster application', async ({ page }) => {
    await page.goto('/apply/foster');

    // Fill foster-specific fields
    await page.getByTestId('input-phone').fill('555-4321');
    await page.getByTestId('input-address').fill('456 Foster St, Foster City, FC 67890');

    // Housing details
    await page.getByTestId('select-housing-type').selectOption('RENT_HOME');
    await page.getByLabel('Yes').check(); // Check "Yes" for yard question
    await page.getByLabel('Is your yard fenced?').check();

    // Animal experience
    await page.getByTestId('checkbox-has-cats').check();
    await page.getByTestId('checkbox-has-dogs').check();
    await page.getByTestId('checkbox-can-administer-meds').check();

    // Reason for fostering
    await page.getByTestId('textarea-reason').fill('I want to help dogs transition to their forever homes while they wait.');

    // References
    await page.getByTestId('input-reference-1-name').fill('Previous Shelter Coordinator');
    await page.getByTestId('input-reference-1-phone').fill('555-8765');

    // Submit
    await page.getByTestId('btn-submit-application').click();

    // Success
    await expect(page).toHaveURL(/\/apply\/foster\/success/);
    await expect(page.getByText('Foster Application Submitted Successfully!')).toBeVisible();
  });

});
