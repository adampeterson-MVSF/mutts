import { test, expect } from '@playwright/test';

test.describe('Public - Protected Route Redirects', () => {
  test('redirects to login when accessing apply/adopt unauthenticated', async ({ page }) => {
    await page.goto('http://localhost:3000/apply/adopt');
    // Global page load wait
    await expect(page.locator('body')).toBeVisible();

    // Explicit URL assertion for redirect
    await expect(page).toHaveURL(/http:\/\/localhost:3000\/auth\/login\?reason=authentication_required&returnTo=%2Fapply%2Fadopt/);

    // Should show login page content
    await expect(page.getByTestId('btn-submit')).toBeVisible();
  });

  test('redirects to login when accessing apply/foster unauthenticated', async ({ page }) => {
    await page.goto('http://localhost:3000/apply/foster');
    // Global page load wait
    await expect(page.locator('body')).toBeVisible();

    // Explicit URL assertion for redirect
    await expect(page).toHaveURL(/http:\/\/localhost:3000\/auth\/login\?reason=authentication_required&returnTo=%2Fapply%2Ffoster/);

    // Should show login page content
    await expect(page.getByTestId('btn-submit')).toBeVisible();

    // Should include return URL parameter
    await expect(page).toHaveURL(/returnTo=/);
  });

  test('redirects to login when accessing volunteer routes unauthenticated', async ({ page }) => {
    await page.goto('http://localhost:3000/volunteer');
    // Global page load wait
    await expect(page.locator('body')).toBeVisible();

    // Explicit URL assertion for redirect
    await expect(page).toHaveURL(/http:\/\/localhost:3000\/auth\/login\?reason=authentication_required&returnTo=%2Fvolunteer/);

    // Should show login page content
    await expect(page.getByTestId('btn-submit')).toBeVisible();
  });

  test('redirects to login when accessing admin routes unauthenticated', async ({ page }) => {
    await page.goto('http://localhost:3000/admin');
    // Global page load wait
    await expect(page.locator('body')).toBeVisible();

    // Explicit URL assertion for redirect
    await expect(page).toHaveURL(/http:\/\/localhost:3000\/auth\/login\?reason=authentication_required&returnTo=%2Fadmin/);

    // Should show login page content
    await expect(page.getByTestId('btn-submit')).toBeVisible();
  });

  test('redirects to login when accessing protected dashboard', async ({ page }) => {
    await page.goto('http://localhost:3000/protected');
    // Global page load wait
    await expect(page.locator('body')).toBeVisible();

    // Explicit URL assertion for redirect
    await expect(page).toHaveURL(/http:\/\/localhost:3000\/auth\/login\?reason=authentication_required&returnTo=%2Fprotected/);

    // Should show login page content
    await expect(page.getByTestId('btn-submit')).toBeVisible();
  });

  test('login page shows appropriate messaging for redirected users', async ({ page }) => {
    // Navigate to protected route
    await page.goto('http://localhost:3000/apply/adopt');
    // Global page load wait
    await expect(page.locator('body')).toBeVisible();

    // Explicit URL assertion for redirect
    await expect(page).toHaveURL(/\/auth\/login\?reason=authentication_required&returnTo=%2Fapply%2Fadopt/);

    // Should show login page content
    await expect(page.getByTestId('btn-submit')).toBeVisible();

    // Should show message about needing to log in
    await expect(page.getByText('Enter your email below to login to your account')).toBeVisible();
  });

  test('successful login after redirect goes to intended destination', async ({ page }) => {
    // TODO: Fix the login form to work properly in tests
    // The core authentication system has been fixed (removed fake test_role cookies)
    // But the login form has issues with cookie sharing between client and server in test environment
    const protectedRoute = '/apply/adopt';

    // Go to the protected route
    await page.goto('http://localhost:3000' + protectedRoute);
    await expect(page.locator('body')).toBeVisible();

    // Should redirect to login
    await expect(page).toHaveURL(/auth\/login/);

    // Fill in the login form with volunteer test credentials
    await page.fill('[data-testid="input-login-email"]', 'volunteer@test.example.com');
    await page.fill('[data-testid="input-login-password"]', 'testpassword123');
    await page.click('[data-testid="btn-submit"]');

    // Should redirect back to the intended destination
    await expect(page).toHaveURL(/apply\/adopt/);
  });
});
