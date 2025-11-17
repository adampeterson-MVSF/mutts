// e2e/utils/page-helpers.ts - UI interaction helpers for e2e tests
import { Page, Locator, expect } from '@playwright/test';

/**
 * Find an adopted dog dynamically from admin dogs table
 */
export async function gotoFirstAdoptedDog(page: Page): Promise<boolean> {
  await page.goto('/admin');
  const table = page.getByRole('table');
  await table.waitFor({ state: 'visible' });

  const adoptedRow = table.getByRole('row').filter({ hasText: /\bADOPTED\b/ }).first();
  const isVisible = await adoptedRow.isVisible({ timeout: 10_000 }).catch(() => false);

  if (!isVisible) {
    return false;
  }

  // Try to find a details link in the row (usually Edit button or dog name link)
  const editLink = adoptedRow.getByTestId('btn-edit-dog').or(adoptedRow.getByRole('link').first());
  const href = await editLink.getAttribute('href');

  if (!href || !href.match(/\/admin\/(dog|edit-dog)\/\d+/)) {
    // Fallback: extract ID from any link
    const allLinks = adoptedRow.locator('a');
    const linkCount = await allLinks.count();
    if (linkCount === 0) {
      return false;
    }
    const fallbackHref = await allLinks.first().getAttribute('href');
    if (!fallbackHref) {
      return false;
    }
    // Extract ID from edit-dog or dog route
    const match = fallbackHref.match(/\/admin\/(edit-)?dog\/(\d+)/);
    if (!match) {
      return false;
    }
    await page.goto(`/admin/dog/${match[2]}`);
    return true;
  }

  // Navigate to dog detail page (convert edit-dog to dog if needed)
  const dogIdMatch = href.match(/\/admin\/edit-dog\/(\d+)/);
  if (dogIdMatch) {
    await page.goto(`/admin/dog/${dogIdMatch[1]}`);
  } else {
    await page.goto(href);
  }
  return true;
}

/**
 * Enhanced click helper that detects if a click causes navigation (form submit) instead of dialog opening
 */
export async function clickAndWaitForDialog(page: Page, button: Locator, dialogSelector: string, timeoutMs = 15000) {
  // Assert button is clickable before clicking
  await button.waitFor({ state: 'visible' });
  await expect(button).toBeEnabled();

  // Set up console error detection
  const consoleMessages: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleMessages.push(msg.text());
    }
  });

  // Race between dialog opening and navigation/blocking events
  const racePromise = Promise.race([
    // Wait for dialog to appear
    page.locator(dialogSelector).waitFor({ state: 'visible', timeout: timeoutMs }),
    // Detect if we navigated away (form submit, link click, etc.)
    page.waitForEvent('framenavigated', { timeout: timeoutMs }).then(() => {
      throw new Error('Click caused navigation instead of opening dialog - check for missing type="button" or stopPropagation');
    }),
    // Detect console errors that might indicate DOM issues
    new Promise((_, reject) => {
      const checkConsole = () => {
        const errorMsgs = consoleMessages.filter(msg =>
          msg.includes('cannot appear as a descendant') ||
          msg.includes('validateDOMNesting')
        );
        if (errorMsgs.length > 0) {
          reject(new Error(`DOM validation error: ${errorMsgs.join(', ')}`));
        } else {
          setTimeout(checkConsole, 100);
        }
      };
      checkConsole();
    })
  ]);

  // Click the button
  await button.click();

  // Wait for the race to complete
  await racePromise;
}

/**
 * Wait for shifts page to finish loading (server-rendered, so just wait for content)
 */
export async function waitForShiftsPageToLoad(page: Page) {
  // Attach console listener early to capture all messages
  const consoleMessages: string[] = [];
  page.on('console', msg => {
    consoleMessages.push(`${msg.type()}: ${msg.text()}`);
  });

  // Wait for document to be ready
  await page.waitForLoadState('domcontentloaded');

  // Wait for the RouteReady sentinel rendered on this page
  await page.locator('[data-testid="route-ready"][data-route="admin/shifts"]').waitFor({ state: 'visible' });

  // For server-rendered page, just wait for table or empty state to be visible
  // No loading state since data is fetched server-side
  const startTime = Date.now();
  while (Date.now() - startTime < 10000) { // 10 second timeout
    const errorVisible = await page.getByTestId('shifts-error').isVisible({ timeout: 1000 }).catch(() => false);
    const tableVisible = await page.getByTestId('shifts-table').isVisible({ timeout: 1000 }).catch(() => false);
    const emptyVisible = await page.getByTestId('shifts-empty').isVisible({ timeout: 1000 }).catch(() => false);

    // Check for error first
    if (errorVisible) {
      const errorText = await page.getByTestId('shifts-error').textContent();
      throw new Error(`Shifts page failed to load with error: ${errorText}`);
    }

    // Check for success states
    if (tableVisible || emptyVisible) {
      // Success - table or empty state is visible
      return;
    }

    await page.waitForTimeout(500);
  }

  // Timeout reached - include debugging info
  const errorVisible = await page.getByTestId('shifts-error').isVisible().catch(() => false);
  const tableVisible = await page.getByTestId('shifts-table').isVisible().catch(() => false);
  const emptyVisible = await page.getByTestId('shifts-empty').isVisible().catch(() => false);

  throw new Error(`Page content never appeared after 10 seconds.
Current state: error=${errorVisible}, table=${tableVisible}, empty=${emptyVisible}
Console messages: ${consoleMessages.slice(-5).join(', ')}`);
}

/**
 * Select an option from a dropdown by visible text
 */
export async function selectOption(page: Page, selectLocator: Locator, optionText: string) {
  await selectLocator.selectOption({ label: optionText });
}

/**
 * Find test shifts by signup count
 */
export async function findTestShiftBySignupCount(page: Page, signupCount: number) {
  // Navigate to admin shifts page
  await page.goto('/admin/shifts');
  await page.waitForLoadState('networkidle');

  // Wait for the table to be visible
  await page.waitForSelector('tbody tr', { timeout: 10000 });

  // Find all shift rows
  const shiftRows = page.locator('tbody tr');

  // Look for a row with the expected signup count (format: "X / Y")
  const targetPattern = new RegExp(`^${signupCount} / `);

  const count = await shiftRows.count();

  for (let i = 0; i < count; i++) {
    const row = shiftRows.nth(i);
    const cells = row.locator('td');
    const cellCount = await cells.count();

    for (let j = 0; j < cellCount; j++) {
      const cellText = await cells.nth(j).textContent();

      if (cellText && targetPattern.test(cellText.trim())) {
        // Get the checkbox test ID to extract the shift ID
        const checkbox = row.locator('[data-testid^="select-shift-"]');
        const testId = await checkbox.getAttribute('data-testid');
        if (testId) {
          const shiftId = parseInt(testId.replace('select-shift-', ''));
          return shiftId;
        }
      }
    }
  }

  throw new Error(`No shift found with ${signupCount} signups`);
}
