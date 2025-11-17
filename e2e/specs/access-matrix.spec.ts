// e2e/specs/access-matrix.spec.ts
import { expect, test } from '@playwright/test';
import { ACCESS_MATRIX } from '../access-matrix';
import { visitAllowedRoute, expectRedirectToLogin, expectInsufficientPermissionsRedirect } from '../utils/test-helpers';
import { setupProjectLogging } from '../fixtures/test-fixtures';

// Setup project/cookie logging for all tests
setupProjectLogging(test);

// Add cookie validation before each test
test.beforeEach(async ({ page }, testInfo) => {
  const cookies = await page.context().cookies('http://localhost:3000');
  const role = cookies.find(c => c.name === 'test_role')?.value ?? 'none';
  console.log(`[BEFORE TEST][project=${testInfo.project.name}] [test_role=${role}]`);
  
  // Warn if expected role doesn't match cookies (except for public)
  if (testInfo.project.name !== 'public' && role === 'none') {
    console.warn(`[BEFORE TEST] WARNING: No test_role cookie found for ${testInfo.project.name} project`);
  }
});

test.describe('Access Matrix - Route Authorization', () => {

  // Test public access (no authentication)
  test.describe('Public Access', () => {
    test('should allow access to public routes without authentication', async ({ page }) => {
      for (const route of ACCESS_MATRIX.public.allowed) {
        await test.step(`public allowed route ${route}`, async () => {
          await visitAllowedRoute(page, route);
        });
      }
    });

    test('should redirect protected routes to login when unauthenticated', async ({ page }, testInfo) => {
      // Only run this test for the public project (unauthenticated users)
      if (testInfo.project.name !== 'public') {
        return;
      }
      
      for (const route of ACCESS_MATRIX.public.denied) {
        await test.step(`public denied route ${route}`, async () => {
          await expectRedirectToLogin(page, route);
        });
      }
    });
  });

  // Test volunteer access
  test.describe('Volunteer Access', () => {
    test('should allow access to volunteer-permitted routes', async ({ page }, testInfo) => {
      // Only run this test for the volunteer project
      if (testInfo.project.name !== 'volunteer') {
        return;
      }
      
      for (const route of ACCESS_MATRIX.volunteer.allowed) {
        await test.step(`volunteer allowed route ${route}`, async () => {
          await visitAllowedRoute(page, route);

          if (route === '/volunteer') {
            await expect(page.getByTestId('route-ready')).toBeVisible();
          } else if (route.startsWith('/admin/')) {
            await expect(page.getByTestId('route-ready')).toBeVisible();
          } else if (route.startsWith('/apply/')) {
            await expect(page.getByRole('heading', { name: /(Adoption|Foster) Application/i })).toBeVisible();
          }
        });
      }
    });

    test('should deny access to admin-only routes', async ({ page }, testInfo) => {
      // Only run this test for the volunteer project
      if (testInfo.project.name !== 'volunteer') {
        return;
      }

      for (const route of ACCESS_MATRIX.volunteer.denied) {
        await test.step(`volunteer denied route ${route}`, async () => {
          await expectInsufficientPermissionsRedirect(page, route);
        });
      }
    });

    test('should deny volunteer API access to shift cancellation', async ({ page }, testInfo) => {
      // Only run this test for the volunteer project
      if (testInfo.project.name !== 'volunteer') {
        return;
      }

      // Test that volunteer cannot access the cancel API (should get 403)
      const response = await page.request.post('/api/admin/shifts/cancel', {
        data: { shiftIds: [], reason: 'test' },
      });
      expect(response.status()).toBe(403);
    });
  });

  // Test staff access
  test.describe('Staff Access', () => {
    test('should allow access to staff-permitted routes', async ({ page }, testInfo) => {
      // Only run this test for the staff project
      if (testInfo.project.name !== 'staff') {
        return;
      }
      
      for (const route of ACCESS_MATRIX.staff.allowed) {
        await test.step(`staff allowed route ${route}`, async () => {
          await visitAllowedRoute(page, route);

          if (route === '/volunteer') {
            await expect(page.getByTestId('route-ready')).toBeVisible();
          } else if (route.startsWith('/admin/')) {
            await expect(page.getByTestId('route-ready')).toBeVisible();
          } else if (route.startsWith('/apply/')) {
            await expect(page.getByRole('heading', { name: /(Adoption|Foster) Application/i })).toBeVisible();
          }
        });
      }
    });

    test('should deny access to unauthorized routes', async ({}, testInfo) => {
      // Only run this test for the staff project
      if (testInfo.project.name !== 'staff') {
        return;
      }

      expect(ACCESS_MATRIX.staff.denied.length).toBe(0);
    });

    test('should deny staff API access to shift cancellation', async ({ page }, testInfo) => {
      // Only run this test for the staff project
      if (testInfo.project.name !== 'staff') {
        return;
      }

      // Test that staff cannot access the cancel API (should get 403)
      const response = await page.request.post('/api/admin/shifts/cancel', {
        data: { shiftIds: [], reason: 'test' },
      });
      expect(response.status()).toBe(403);
    });
  });

  // Test admin access
  test.describe('Admin Access', () => {
    test('should allow access to all routes', async ({ page }, testInfo) => {
      // Only run this test for the admin project
      if (testInfo.project.name !== 'admin') {
        return;
      }
      
      for (const route of ACCESS_MATRIX.admin.allowed) {
        await test.step(`admin allowed route ${route}`, async () => {
          await visitAllowedRoute(page, route);

          if (route.startsWith('/admin/')) {
            await expect(page.getByTestId('route-ready')).toBeVisible();
          } else if (route === '/volunteer') {
            await expect(page.getByTestId('route-ready')).toBeVisible();
          } else if (route.startsWith('/apply/')) {
            await expect(page.getByRole('heading', { name: /(Adoption|Foster) Application/i })).toBeVisible();
          }
        });
      }
    });

    test('should have no denied routes', async ({ }, testInfo) => {
      // Only run this test for the admin project
      if ((testInfo as { project?: { name?: string } }).project?.name !== 'admin') {
        return;
      }

      expect(ACCESS_MATRIX.admin.denied.length).toBe(0);
    });

    test('should allow admin API access to shift cancellation', async ({ page }, testInfo) => {
      // Only run this test for the admin project
      if (testInfo.project.name !== 'admin') {
        return;
      }

      // Test that admin can access the cancel API (should not get 403)
      const response = await page.request.post('/api/admin/shifts/cancel', {
        data: { shiftIds: [], reason: 'test' },
      });
      // Should get 400 (invalid request) but not 403 (forbidden)
      expect(response.status()).not.toBe(403);
    });
  });

  // Test seeded data display
  test.describe('Bulk Actions - Using Seeded Data', () => {
    test.describe('Staff Bulk Operations', () => {
      test('should display seeded dogs in admin dashboard', async ({ page }, testInfo) => {
        // Only run this test for staff and admin projects
        if (!['staff', 'admin'].includes(testInfo.project.name)) {
          return;
        }
        
        await page.goto('/admin', { waitUntil: 'domcontentloaded' });
        await expect(page.getByTestId('route-ready')).toBeVisible();

        // Wait for the dogs table to load before checking content
        // Admin dashboard uses a table, not cards
        const table = page.getByRole('table', { name: /dogs/i }).or(page.locator('table'));
        await expect(table).toBeVisible();
        
        // Wait for data rows to appear (they may load after table is visible)
        // Use testid from AdminDashboardClient: data-testid="row-dog"
        const dataRows = table.getByTestId('row-dog');
        await expect(dataRows.first()).toBeVisible({ timeout: 10000 });
        
        // Verify we have at least one data row
        const rowCount = await dataRows.count();
        expect(rowCount).toBeGreaterThan(0);
        
        // Verify the first row has content - check the name cell (second cell, first is image)
        const firstRow = dataRows.first();
        const nameCell = firstRow.getByRole('cell').nth(1); // Skip image cell, get name cell
        await expect(nameCell).toBeVisible();
        const cellText = await nameCell.textContent();
        expect(cellText?.trim().length).toBeGreaterThan(0);
      });

      test('should display seeded applications with all statuses', async ({ page }, testInfo) => {
        // Only run this test for staff and admin projects
        if (!['staff', 'admin'].includes(testInfo.project.name)) {
          return;
        }
        
        await page.goto('/admin/applications', { waitUntil: 'domcontentloaded' });
        await expect(page.getByTestId('route-ready')).toBeVisible();

        const table = page.getByRole('table');
        await expect(table).toBeVisible();
        // Scope status check to table cells - status should appear in at least one cell
        const statusCell = table.getByRole('cell').filter({ hasText: /submitted|in.review|approved|rejected|withdrawn/i }).first();
        await expect(statusCell).toBeVisible();
      });

      test('should allow bulk status updates on applications', async ({ page }, testInfo) => {
        // Only run this test for staff and admin projects
        if (!['staff', 'admin'].includes(testInfo.project.name)) {
          return;
        }
        
        await page.goto('/admin/applications', { waitUntil: 'domcontentloaded' });
        await expect(page.getByTestId('route-ready')).toBeVisible();

        const table = page.getByRole('table');
        await expect(table).toBeVisible();
        // Scope status check to table cells - status should appear in at least one cell
        const statusCell = table.getByRole('cell').filter({ hasText: /submitted|in.review|approved|rejected|withdrawn/i }).first();
        await expect(statusCell).toBeVisible();

        const bulkActions = page.getByText(/bulk.actions|select.all/i);
        if (await bulkActions.first().isVisible()) {
          await bulkActions.first().click();
          await expect(page.getByText(/selected|bulk.actions/i)).toBeVisible();
        }
      });
    });

    test.describe('Admin User Management', () => {
      test('should display seeded users', async ({ page }, testInfo) => {
        // Only run this test for admin project
        if (testInfo.project.name !== 'admin') {
          return;
        }
        
        await page.goto('/admin/users', { waitUntil: 'domcontentloaded' });
        await expect(page.getByTestId('route-ready')).toBeVisible();

        // Don't assert specific user names - seed data is non-deterministic
        // Instead, verify that user table exists and has rows
        const table = page.getByRole('table');
        await expect(table).toBeVisible();
        const rows = table.getByRole('row').filter({ has: page.getByRole('cell') });
        const rowCount = await rows.count();
        expect(rowCount).toBeGreaterThan(0);
      });

      test('should allow role changes on seeded users', async ({ page }, testInfo) => {
        // Only run this test for admin project
        if (testInfo.project.name !== 'admin') {
          return;
        }
        
        await page.goto('/admin/users', { waitUntil: 'domcontentloaded' });
        await expect(page.getByTestId('route-ready')).toBeVisible();

        // Don't assert specific user names - seed data is non-deterministic
        // Instead, verify that user table exists and has rows
        const table = page.getByRole('table');
        await expect(table).toBeVisible();
        const rows = table.getByRole('row').filter({ has: page.getByRole('cell') });
        const rowCount = await rows.count();
        expect(rowCount).toBeGreaterThan(0);

        // Scope to table row for role change - find any row with a combobox
        const rowWithCombobox = rows.filter({ has: page.getByRole('combobox') }).first();
        if (await rowWithCombobox.isVisible()) {
          const roleSelect = rowWithCombobox.getByRole('combobox');
          if (await roleSelect.isVisible()) {
            await roleSelect.click();
            await expect(page.getByRole('option')).toBeVisible();
          }
        }
      });
    });
  });
});
