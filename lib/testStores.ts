// Simple in-memory stores used by E2E test helpers.
// Lives in server memory; safe for test env only.

export type ShiftCancellationAudit = {
  shiftId: number;
  affectedCount: number;
  reason: string;
  actorId: string;
  at: string;
};

export type TestNotification = {
  userId: string | number;
  shiftId: number;
  reason: string;
  type: 'SHIFT_CANCELLED';
  at: string;
};

export const audits: ShiftCancellationAudit[] = [];
export const notifications: TestNotification[] = [];
