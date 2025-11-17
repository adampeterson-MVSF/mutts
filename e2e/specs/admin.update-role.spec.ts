import { test, expect } from '@playwright/test';

// Setup project/cookie logging
// setupProjectLogging(test);

// Serialize tests to avoid state conflicts
test.describe.configure({ mode: 'serial' });

test.describe('Admin - Update Role', () => {
  test('Volunteer → Staff (happy path)', async ({ page }) => {
    await page.goto('/admin/users');
    const routeReady = page.locator('[data-testid="route-ready"][data-route="admin/users"]');
    await expect(routeReady).toBeVisible({ timeout: 15000 });

    // Wait for page to be fully interactive
    await page.waitForLoadState('networkidle');

    // Find volunteer user by role chip
    const volunteerChip = page.getByTestId('user-volunteer-test-user-001-role-chip');
    await expect(volunteerChip).toHaveText('VOLUNTEER');

    // Click "Change Role" button in actions
    const changeRoleButton = page.getByTestId('user-volunteer-test-user-001-actions').getByText('Change Role');
    await changeRoleButton.click();

    // Modal should open
    const roleForm = page.getByTestId('role-form');
    await expect(roleForm).toBeVisible();

    // Select STAFF role
    await page.getByRole('combobox', { name: 'Role' }).click();
    await page.getByRole('option', { name: 'STAFF' }).click();

    // Click Save
    const saveButton = page.getByTestId('save-role');
    await saveButton.click();

    // Wait for success and modal to close
    await page.waitForTimeout(2000);

    // Check if there are any error messages
    const errorBanner = page.getByTestId('error-generic');
    const lastAdminError = page.getByTestId('error-last-admin');

    if (await errorBanner.isVisible()) {
      const errorText = await errorBanner.textContent();
      throw new Error(`Form submission failed with error: ${errorText}`);
    }

    if (await lastAdminError.isVisible()) {
      const errorText = await lastAdminError.textContent();
      throw new Error(`Last admin error: ${errorText}`);
    }

    // Verify role chip updated
    await expect(page.getByTestId('user-volunteer-test-user-001-role-chip')).toHaveText('STAFF');
  });

  test('Staff → Volunteer (happy path)', async ({ page }) => {
    await page.goto('/admin/users');
    const routeReady = page.locator('[data-testid="route-ready"][data-route="admin/users"]');
    await expect(routeReady).toBeVisible({ timeout: 15000 });

    // Find staff user by role chip
    const staffChip = page.getByTestId('user-staff-test-user-001-role-chip');
    await expect(staffChip).toHaveText('STAFF');

    // Click "Change Role" button in actions
    const changeRoleButton = page.getByTestId('user-staff-test-user-001-actions').getByText('Change Role');
    await changeRoleButton.click();

    // Modal should open
    const roleForm = page.getByTestId('role-form');
    await expect(roleForm).toBeVisible();

    // Select VOLUNTEER role
    await page.getByRole('combobox', { name: 'Role' }).click();
    await page.getByRole('option', { name: 'VOLUNTEER' }).click();

    // Click Save
    const saveButton = page.getByTestId('save-role');
    await saveButton.click();

    // Wait for success and modal to close
    await page.waitForTimeout(2000);

    // Verify role chip updated
    await expect(page.getByTestId('user-staff-test-user-001-role-chip')).toHaveText('VOLUNTEER');
  });

  test('Admin demotion with multiple admins (success)', async ({ page }) => {
    await page.goto('/admin/users');
    const routeReady = page.locator('[data-testid="route-ready"][data-route="admin/users"]');
    await expect(routeReady).toBeVisible({ timeout: 15000 });

    // Find a test admin user (when there are multiple admins, demotion should succeed)
    const adminChip = page.getByTestId('user-admin-test-user-001-role-chip');
    await expect(adminChip).toHaveText('ADMIN');

    // Click "Change Role" button in actions
    const changeRoleButton = page.getByTestId('user-admin-test-user-001-actions').getByText('Change Role');
    await changeRoleButton.click();

    // Modal should open
    const roleForm = page.getByTestId('role-form');
    await expect(roleForm).toBeVisible();

    // Select STAFF role (demoting from ADMIN)
    await page.getByRole('combobox', { name: 'Role' }).click();
    await page.getByRole('option', { name: 'STAFF' }).click();

    // Click Save
    const saveButton = page.getByTestId('save-role');
    await saveButton.click();

    // Wait for success and modal to close
    await page.waitForTimeout(2000);

    // Check if there are any error messages
    const errorBanner = page.getByTestId('error-generic');
    const lastAdminError = page.getByTestId('error-last-admin');

    if (await errorBanner.isVisible()) {
      const errorText = await errorBanner.textContent();
      throw new Error(`Form submission failed with error: ${errorText}`);
    }

    if (await lastAdminError.isVisible()) {
      const errorText = await lastAdminError.textContent();
      throw new Error(`Unexpected last admin error: ${errorText}`);
    }

    // Verify role chip updated (since there are multiple admins, demotion should succeed)
    await expect(page.getByTestId('user-admin-test-user-001-role-chip')).toHaveText('STAFF');
  });
});
