import { test, expect } from '@playwright/test';

test.describe('Public - Debug Tests', () => {
  test('can navigate to homepage', async ({ page }) => {
    console.log('Base URL:', page.url());
    console.log('Navigating to homepage...');
    
    try {
      await page.goto('/', { waitUntil: 'networkidle' });
      console.log('Navigation successful');
      await expect(page.locator('body')).toBeVisible();
    } catch (error) {
      console.error('Navigation failed:', error);
      throw error;
    }
  });

  test('can navigate to full URL', async ({ page }) => {
    console.log('Navigating to full URL...');
    
    try {
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
      console.log('Full URL navigation successful');
      await expect(page.locator('body')).toBeVisible();
    } catch (error) {
      console.error('Full URL navigation failed:', error);
      throw error;
    }
  });
});
