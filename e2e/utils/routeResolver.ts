// e2e/utils/routeResolver.ts
import type { Page } from '@playwright/test';

// Cache dog ID to avoid multiple navigations
let cachedDogId: string | null = null;

/**
 * Resolves placeholder routes to real routes that can be tested.
 * 
 * Some routes in the access matrix are patterns (e.g., `/admin/dog`, `/admin/edit-dog`) that don't
 * correspond to actual pages. This resolver converts them to real routes using
 * seeded data.
 */
export async function resolveAdminRoute(route: string, page: Page): Promise<string> {
  // Routes that need a dog ID to be resolved
  if (route === '/admin/dog' || route === '/admin/edit-dog') {
    // Use cached dog ID if available
    if (cachedDogId) {
      return `/admin/edit-dog/${cachedDogId}`;
    }
    
    // Scrape from /adopt page - more reliable than API call
    await page.goto('/adopt', { waitUntil: 'domcontentloaded', timeout: 10_000 });
    const firstLink = page.locator('[data-testid="dog-card"] a').first();
    const href = await firstLink.getAttribute('href', { timeout: 5_000 });
    
    if (!href) {
      throw new Error('Could not find dog card link on /adopt page');
    }
    
    // Extract dog ID from href like /adopt/123 or /adopt/123-some-name
    const match = href.match(/\/adopt\/(\d+)/);
    if (!match || !match[1]) {
      throw new Error(`Could not extract dog ID from href: ${href}`);
    }
    
    cachedDogId = match[1];
    return `/admin/edit-dog/${cachedDogId}`;
  }
  
  return route;
}

