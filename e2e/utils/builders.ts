// e2e/utils/builders.ts - API request builders for e2e tests
import { APIRequestContext } from '@playwright/test';

// Base URL for node-side test helpers (needed for fetch calls outside browser context)
const BASE =
  process.env.PLAYWRIGHT_BASE_URL ||
  process.env.BASE_URL ||
  "http://localhost:3000";

const api = (path: string) => new URL(path, BASE).toString();

/**
 * Create a shift via API (for deterministic testing)
 */
export async function createShift(req: APIRequestContext, data?: Partial<{
  title: string; startTime: string; endTime: string; maxVolunteers: number;
}>) {
  const body = {
    title: data?.title ?? `e2e-temp-${Date.now()}`,
    startTime: data?.startTime ?? new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    endTime: data?.endTime ?? new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    maxVolunteers: data?.maxVolunteers ?? 5,
  };

  const response = await req.post('/api/test/shifts', {
    data: body,
    headers: { 'x-test-secret': 'test-secret-default' }
  });
  if (!response.ok()) {
    throw new Error(`Failed to create shift: ${response.status()} ${await response.text()}`);
  }
  return response.json();
}

/**
 * Delete a shift via API (for deterministic testing)
 */
export async function deleteShift(req: APIRequestContext, shiftId: number) {
  const response = await req.delete('/api/test/shifts', {
    data: { shiftId },
    headers: { 'x-test-secret': 'test-secret-default' }
  });
  if (!response.ok()) {
    throw new Error(`Failed to delete shift: ${response.status()} ${await response.text()}`);
  }
  return response.json();
}

/**
 * Create a signup for a shift (test helper)
 */
export async function createSignupForShift(shiftId: number, userEmail: string): Promise<void> {
  const response = await fetch(api('/api/test/signups'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Test-Secret': process.env.TEST_SECRET || 'test-secret-default',
    },
    body: JSON.stringify({ shiftId, userEmail }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to create signup: ${error.error}`);
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(`Signup creation failed: ${result.error}`);
  }
}

/**
 * Reset test notifications store
 */
export async function resetNotifications(req: APIRequestContext) {
  const response = await req.post(api('/api/test-api/notifications/reset'), {
    headers: {
      'x-test-secret': 'test-secret-default',
      'x-test-user-id': 'test-admin-id',
      'x-test-user-role': 'ADMIN',
    },
  });
  if (!response.ok()) {
    throw new Error(`Failed to reset notifications: ${response.status()} ${await response.text()}`);
  }
  return response;
}

/**
 * Get all test notifications
 */
export async function listNotifications(req: APIRequestContext) {
  const response = await req.get(api('/api/test-api/notifications/list'), {
    headers: {
      'x-test-secret': 'test-secret-default',
      'x-test-user-id': 'test-admin-id',
      'x-test-user-role': 'ADMIN',
    },
  });
  if (!response.ok()) {
    throw new Error(`Failed to list notifications: ${response.status()} ${await response.text()}`);
  }
  const result = await response.json();
  return result.notifications;
}

/**
 * Cancel shifts via admin API
 */
export async function cancelShifts(req: APIRequestContext, shiftIds: number[], reason?: string) {
  const response = await req.post(api('/api/admin/shifts/cancel'), {
    headers: {
      'content-type': 'application/json',
      'x-test-user-id': 'test-admin-id',
      'x-test-user-role': 'ADMIN',
      'x-test-secret': 'test-secret-default',
    },
    data: {
      shiftIds,
      reason,
    },
  });
  if (!response.ok()) {
    throw new Error(`Failed to cancel shifts: ${response.status()} ${await response.text()}`);
  }
  const result = await response.json();
  return result;
}

/**
 * Get shift cancellation audit logs
 */
export async function getCancellationAudits(req: APIRequestContext, shiftId?: number) {
  const url = shiftId
    ? api(`/api/test-api/audit/shift-cancellations?shiftId=${shiftId}`)
    : api('/api/test-api/audit/shift-cancellations');

  const response = await req.get(url, {
    headers: {
      'x-test-secret': 'test-secret-default',
      'x-test-user-id': 'test-admin-id',
      'x-test-user-role': 'ADMIN',
    },
  });
  if (!response.ok()) {
    throw new Error(`Failed to get cancellation audits: ${response.status()} ${await response.text()}`);
  }
  const result = await response.json();
  return result.audits;
}

/**
 * Reset cancellation audit logs
 */
export async function resetCancellationAudits(req: APIRequestContext) {
  const response = await req.post(api('/api/test-api/audit/shift-cancellations'), {
    headers: {
      'x-test-secret': 'test-secret-default',
      'x-test-user-id': 'test-admin-id',
      'x-test-user-role': 'ADMIN',
    },
  });
  if (!response.ok()) {
    throw new Error(`Failed to reset cancellation audits: ${response.status()} ${await response.text()}`);
  }
  return response;
}
