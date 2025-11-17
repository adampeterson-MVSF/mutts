import { test, expect } from '@playwright/test';
import { waitForShiftsPageToLoad, findTestShiftBySignupCount } from '../utils/page-helpers';
import { createSignupForShift, resetNotifications, listNotifications, cancelShifts, getCancellationAudits, resetCancellationAudits, createShift } from '../utils/builders';
import { gotoWithStatusCheck } from '../utils/test-helpers';

test.describe('Admin - Shifts Cancel Propagation', () => {
  test('can delete shift with confirmation when no signups exist', async ({ page, request }) => {
    // Create a test shift with guaranteed zero signups
    const createResult = await createShift(request, {
      title: 'Test Delete Shift',
      startTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
      endTime: new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString(),   // Tomorrow +1hr
      maxVolunteers: 5
    });
    const shiftId = createResult.shift.id;

    // Set admin cookies for UI interaction
    await page.context().addCookies([
      {
        name: 'test_role',
        value: 'ADMIN',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      },
      {
        name: 'test_user_id',
        value: 'test-admin',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      }
    ]);

    await gotoWithStatusCheck(page, 'http://localhost:3000/admin/shifts');
    await waitForShiftsPageToLoad(page);

    // Find the row for our test shift
    const shiftRow = page.getByTestId(`shift-row-${shiftId}`);
    await expect(shiftRow).toBeVisible();

    // Click delete on the shift
    await shiftRow.getByTestId('delete-shift').click();

    // Should show confirmation dialog
    const confirmDialog = page.getByTestId('confirm-delete-shift');
    await expect(confirmDialog).toBeVisible();
    await expect(confirmDialog.getByRole('heading', { name: 'Delete Shift' })).toBeVisible();

    // Confirm deletion
    await confirmDialog.getByTestId('btn-confirm-delete-shift').click();

    // By default (show-deleted=false), the row should disappear from the active list
    await expect(shiftRow).not.toBeVisible();
  });

  test('prevents deletion when shift has volunteer signups', async ({ page }) => {
    // Seed a signup for a shift using test API
    const firstShiftId = 1;
    await createSignupForShift(firstShiftId, 'volunteer@example.com');

    // Go to admin and try to delete the shift
    await page.goto('/admin/shifts');

    // Find the shift that now has a signup
    const shiftWithSignup = page.getByTestId('cell-signups').filter({ hasText: /^[1-9]\d* \/ / }).first().locator('xpath=ancestor::tr');
    await expect(shiftWithSignup).toBeVisible();

    // Click delete on the shift with signups
    await shiftWithSignup.getByTestId('btn-delete-shift').click();

    // Should show guard dialog with warning
    const guardDialog = page.getByTestId('cannot-delete-with-signups');
    await expect(guardDialog).toBeVisible();
    await expect(guardDialog.getByText(/volunteer.*signed up|cannot delete/i)).toBeVisible();

    // Guard dialog only has OK button, no confirm button
    await guardDialog.getByRole('button', { name: 'OK' }).click();

    // Go to volunteer's my-shifts page - signup should still exist
    await page.goto('/volunteer/my-shifts');
    await expect(page.locator(`[data-testid="shift-card"][data-shift-id="${firstShiftId}"]`)).toBeVisible();
  });

  test('shows deleted shifts with badge when filter enabled', async ({ page }) => {
    await page.goto('/admin/shifts');

    // Wait for shifts page to load completely
    await waitForShiftsPageToLoad(page);

    // Find a shift with 0 signups to delete
    const emptyShiftRow = page.locator('tr').filter({ hasText: '0 /' }).first();
    await expect(emptyShiftRow).toBeVisible();

    // Get the shift title before deletion
    const shiftTitle = await emptyShiftRow.locator('td').first().textContent();
    await expect(shiftTitle).toBeTruthy();

    // Delete the empty shift
    await emptyShiftRow.getByTestId('btn-delete-shift').click();
    await page.getByTestId('btn-confirm-delete-shift').click();

    // Should show success
    await expect(page.getByTestId('toast-success')).toBeVisible();

    // Should not show deleted shifts by default (they're hidden)
    const deletedShift = page.getByText(shiftTitle!);
    await expect(deletedShift).not.toBeVisible();

    // Enable "Show deleted" filter
    await page.getByTestId('checkbox-show-deleted').check();

    // Should now show deleted shifts with badge
    await expect(deletedShift).toBeVisible();
    await expect(page.getByText('DELETED')).toBeVisible();
  });

  test('notifications sent to affected volunteers', async ({ page }) => {
    // Find shift with 3 signups
    const shiftId = await findTestShiftBySignupCount(page, 3);
    const reason = 'weather-cancellation';

    // Reset notifications before test
    await resetNotifications(page.request);

    // Cancel the shift
    await cancelShifts(page.request, [shiftId], reason);

    // Check that notifications were sent
    const notifications = await listNotifications(page.request);
    expect(notifications).toHaveLength(3); // 3 signups affected

    // Verify notification details
    for (const notification of notifications) {
      expect(notification.shiftId).toBe(shiftId);
      expect(notification.reason).toBe(reason);
      expect(notification.userId).toBeDefined();
      expect(notification.createdAt).toBeDefined();
    }
  });

  test('can bulk cancel multiple shifts', async ({ page }) => {
    // Find shifts with 3 and 5 signups
    const shiftId3 = await findTestShiftBySignupCount(page, 3);
    const shiftId5 = await findTestShiftBySignupCount(page, 5);
    const shiftIds = [shiftId3, shiftId5]; // 3 + 5 = 8 total signups

    // Set admin cookies
    await page.context().addCookies([
      {
        name: 'test_role',
        value: 'ADMIN',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      },
      {
        name: 'test_user_id',
        value: 'test-admin',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      }
    ]);

    await gotoWithStatusCheck(page, '/admin/shifts');

    // Select both shifts
    for (const shiftId of shiftIds) {
      const shiftCheckbox = page.getByTestId(`select-shift-${shiftId}`);
      await expect(shiftCheckbox).toBeVisible();
      await shiftCheckbox.check();
    }

    // Click the bulk cancel button
    const cancelButton = page.getByTestId('bulk-cancel-button');
    await expect(cancelButton).toBeVisible();
    await expect(cancelButton).toContainText('Cancel 2 Shifts');

    await cancelButton.click();

    // Dialog should open
    const cancelDialog = page.getByTestId('cancel-shifts-dialog');
    await expect(cancelDialog).toBeVisible();

    // Submit the cancellation
    const confirmButton = cancelDialog.getByTestId('confirm-cancel-shifts');
    await expect(confirmButton).toBeVisible();
    await confirmButton.click();

    // Success dialog should show total affected count (3 + 5 = 8)
    await expect(cancelDialog.getByText('Successfully cancelled shifts affecting 8 volunteers')).toBeVisible();
  });

  test('shift deletion audit log records cancellations', async ({ page }) => {
    // Find shifts with 3 and 5 signups
    const shiftId3 = await findTestShiftBySignupCount(page, 3);
    const shiftId5 = await findTestShiftBySignupCount(page, 5);
    const shiftIds = [shiftId3, shiftId5]; // 3 + 5 = 8 total signups
    const reason = 'facility-maintenance';

    // Reset audit logs before test
    await resetCancellationAudits(page.request);

    // Cancel the shifts
    await cancelShifts(page.request, shiftIds, reason);

    // Check that audit records were created
    const audits = await getCancellationAudits(page.request);
    expect(audits).toHaveLength(2); // One audit per shift

    // Verify audit details
    interface CancellationAudit {
      shiftId: number;
      affectedCount: number;
      reason: string;
    }
    const auditShiftIds = audits.map((a: CancellationAudit) => a.shiftId);

    // Check that both shifts were audited
    expect(auditShiftIds).toContain(shiftId3);
    expect(auditShiftIds).toContain(shiftId5);

    // Verify each audit has correct details
    const shift3Audit = audits.find((a: CancellationAudit) => a.shiftId === shiftId3);
    const shift5Audit = audits.find((a: CancellationAudit) => a.shiftId === shiftId5);

    expect(shift3Audit).toBeDefined();
    expect(shift3Audit!.affectedCount).toBe(3); // shiftId3 has 3 signups
    expect(shift3Audit!.reason).toBe(reason);
    expect(shift3Audit!.actorUserId).toBeDefined();

    expect(shift5Audit).toBeDefined();
    expect(shift5Audit!.affectedCount).toBe(5); // shiftId5 has 5 signups
    expect(shift5Audit!.reason).toBe(reason);
    expect(shift5Audit!.actorUserId).toBeDefined();
  });



  test('confirmation dialog shows affected volunteer count', async ({ page }) => {
    // Find shift with 3 signups
    const shiftId = await findTestShiftBySignupCount(page, 3);

    // Set admin cookies
    await page.context().addCookies([
      {
        name: 'test_role',
        value: 'ADMIN',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      },
      {
        name: 'test_user_id',
        value: 'test-admin',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      }
    ]);

    await gotoWithStatusCheck(page, '/admin/shifts');

    // Select the shift with 3 signups
    const shiftCheckbox = page.getByTestId(`select-shift-${shiftId}`);
    await expect(shiftCheckbox).toBeVisible();
    await shiftCheckbox.check();

    // Click the bulk cancel button
    const cancelButton = page.getByTestId('bulk-cancel-button');
    await expect(cancelButton).toBeVisible();
    await cancelButton.click();

    // Dialog should open
    const cancelDialog = page.getByTestId('cancel-shifts-dialog');
    await expect(cancelDialog).toBeVisible();

    // Submit the cancellation
    const confirmButton = cancelDialog.getByTestId('confirm-cancel-shifts');
    await expect(confirmButton).toBeVisible();
    await confirmButton.click();

    // Success dialog should show affected count
    await expect(cancelDialog.getByText('Successfully cancelled shifts affecting 3 volunteers')).toBeVisible();
  });

  test('can provide reason for cancellation', async ({ page }) => {
    // Find shift with 3 signups
    const shiftId = await findTestShiftBySignupCount(page, 3);
    const reason = 'admin-maintenance';

    // Set admin cookies
    await page.context().addCookies([
      {
        name: 'test_role',
        value: 'ADMIN',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      },
      {
        name: 'test_user_id',
        value: 'test-admin',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      }
    ]);

    await gotoWithStatusCheck(page, '/admin/shifts');

    // Select the shift
    const shiftCheckbox = page.getByTestId(`select-shift-${shiftId}`);
    await expect(shiftCheckbox).toBeVisible();
    await shiftCheckbox.check();

    // Click the bulk cancel button
    const cancelButton = page.getByTestId('bulk-cancel-button');
    await expect(cancelButton).toBeVisible();
    await cancelButton.click();

    // Dialog should open
    const cancelDialog = page.getByTestId('cancel-shifts-dialog');
    await expect(cancelDialog).toBeVisible();

    // Enter reason
    const reasonTextarea = cancelDialog.getByTestId('cancel-reason');
    await expect(reasonTextarea).toBeVisible();
    await reasonTextarea.fill(reason);

    // Submit the cancellation
    const confirmButton = cancelDialog.getByTestId('confirm-cancel-shifts');
    await expect(confirmButton).toBeVisible();
    await confirmButton.click();

    // Success dialog should show the reason
    await expect(cancelDialog.getByText(`Reason: ${reason}`)).toBeVisible();
  });

  test('cancelled signups show cancellation reason to volunteers', async ({ page }) => {
    // Find shift with 3 signups
    const shiftId = await findTestShiftBySignupCount(page, 3);
    const reason = 'admin-maintenance';

    // First, cancel the shift as admin
    await cancelShifts(page.request, [shiftId], reason);

    // Now check as volunteer - set volunteer cookies
    await page.context().clearCookies();
    await page.context().addCookies([
      {
        name: 'test_role',
        value: 'VOLUNTEER',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      },
      {
        name: 'test_user_id',
        value: 'test-volunteer',
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'Lax'
      }
    ]);

    // Go to volunteer's my-shifts page
    await gotoWithStatusCheck(page, '/volunteer/my-shifts');

    // Refresh the page to ensure latest data
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Should see the cancelled shift with reason
    const cancelledReason = page.getByTestId('signup-cancel-reason');
    await expect(cancelledReason).toBeVisible();
    await expect(cancelledReason).toContainText(reason);
  });
});
