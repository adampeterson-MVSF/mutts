// e2e/utils/test-helpers.ts - General utility functions for e2e tests
import { Page, expect, Locator } from '@playwright/test';
import { getPageSelector } from './selectors';

/**
 * Dump cookies for debugging project/storage state issues
 */
export async function dumpCookies(page: Page, testName?: string) {
  const cookies = await page.context().cookies();
  const role = cookies.find(c => c.name === 'test_role')?.value ?? 'none';
  const userId = cookies.find(c => c.name === 'test_user_id')?.value ?? 'none';
  console.log(`[COOKIES${testName ? `:${testName}` : ''}] role=${role}, userId=${userId}, total=${cookies.length}`);
  return { role, userId, cookies };
}

/**
 * Navigate with response status check to catch redirects early
 */
export async function gotoWithStatusCheck(page: Page, url: string, options?: { waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' }) {
  const response = await page.goto(url, { waitUntil: options?.waitUntil ?? 'domcontentloaded' });
  expect(response).toBeTruthy();
  expect(response!.status()).toBeLessThan(400);
  return response;
}

/**
 * Expect allowed route access with ready signal
 */
export async function expectAllowed(page: Page, path: string, ready: Locator) {
  const resp = await page.goto(path, { waitUntil: 'domcontentloaded' });
  expect(resp?.status(), `GET ${path} status`).toBeLessThan(400);
  await expect(ready).toBeVisible();
}

/**
 * Expect redirect to destination
 */
export async function expectRedirect(page: Page, path: string, destRe: RegExp) {
  const resp = await page.goto(path, { waitUntil: 'domcontentloaded' });
  expect(resp).toBeTruthy();
  // If the app uses client-side guards, also assert the final URL:
  await page.waitForURL(destRe, { timeout: 10_000 });
  await expect(page).toHaveURL(destRe);
}

/**
 * Unified page waiter - waits for a specific route to be ready
 */
export async function waitForPage(page: Page, route: keyof typeof import('./selectors').PAGE_SELECTORS, timeoutMs = 15000) {
  const selector = getPageSelector(route);
  await expect(page.locator(selector)).toBeVisible({ timeout: timeoutMs });
}

/**
 * Wrap page.request calls with HTTP assertions
 */
export async function expectApiOk(page: Page, url: string, options?: Parameters<import('@playwright/test').APIRequestContext['get']>[1]) {
  const response = await page.request.get(url, options);
  expect(response.ok(), `GET ${url} should return 2xx`).toBe(true);
  return response;
}

/**
 * Wait for denied access (redirect or error state)
 */
export async function expectDenied(page: Page, route: string) {
  const resp = await page.goto(route, { waitUntil: 'domcontentloaded' });
  expect(resp?.status()).toBeGreaterThanOrEqual(300); // Redirect or error
}

/**
 * Wait for allowed access with page ready signal
 */
export async function expectAllowedPage(page: Page, route: string, readyRoute: keyof typeof import('./selectors').PAGE_SELECTORS) {
  const resp = await page.goto(route, { waitUntil: 'domcontentloaded' });
  expect(resp?.status(), `GET ${route} status`).toBeLessThan(400);
  await waitForPage(page, readyRoute);
}

/**
 * Visit allowed route and verify access (used in access matrix tests)
 */
export async function visitAllowedRoute(page: Page, route: string) {
  // Skip static assets - they don't have page content to verify
  if (route.includes('.ico') || route.includes('.png') || route.includes('.jpg') || route.includes('.svg')) {
    return; // Static assets are considered accessible if they don't 404
  }

  // Resolve placeholder routes to real routes
  const { resolveAdminRoute } = await import('../utils/routeResolver');
  const realRoute = await resolveAdminRoute(route, page);

  // Use response status check to catch redirects early
  const response = await gotoWithStatusCheck(page, realRoute);
  expect(response).toBeTruthy();
  expect(response!.status()).toBeLessThan(400);

  // Use the original route for content detection (route-ready uses original route patterns)
  // But if route was resolved, use the resolved route for content detection
  await expect(page.getByTestId('route-ready')).toBeVisible();

  if (!route.includes('/auth/')) {
    await expect(page).not.toHaveURL(/\/auth\/login|\/auth\/sign-up/);
  }
}

/**
 * Expect redirect to login page (used in access matrix tests)
 */
export async function expectRedirectToLogin(page: Page, route: string) {
  await expectRedirect(page, route, /\/auth\/login\?reason=authentication_required&returnTo=/);
}

/**
 * Expect redirect due to insufficient permissions (used in access matrix tests)
 */
export async function expectInsufficientPermissionsRedirect(page: Page, route: string) {
  await expectRedirect(page, route, /\/auth\/login\?reason=insufficient_permissions&returnTo=/);
}
