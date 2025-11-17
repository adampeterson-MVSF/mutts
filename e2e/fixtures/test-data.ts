// e2e/fixtures/test-data.ts
// Test data seeding helpers for E2E tests

/**
 * Seed a shift for testing
 */
export async function seedShift({
  title,
  startTime,
  endTime,
  maxVolunteers = 1,
  description
}: {
  title: string;
  startTime: Date;
  endTime: Date;
  maxVolunteers?: number;
  description?: string;
}): Promise<{ id: number }> {
  const response = await fetch('/api/test/shifts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Test-Secret': process.env.TEST_SECRET || 'test-secret',
    },
    body: JSON.stringify({
      title,
      description,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      maxVolunteers,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to create shift: ${error.error}`);
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(`Shift creation failed: ${result.error}`);
  }

  return { id: result.shift.id };
}

/**
 * Seed a signup for a shift (uses the existing API we created)
 */
export async function seedSignup({
  shiftId,
  userEmail
}: {
  shiftId: number;
  userEmail: string;
}): Promise<void> {
  const response = await fetch('/api/test/signups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Test-Secret': process.env.TEST_SECRET || 'test-secret',
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
