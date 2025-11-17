// e2e/utils/test-api.ts

import { APIRequestContext, expect } from '@playwright/test';

export type Health = {
  dataset: string;
  summary: {
    dogs: {
      total: number;
      withPhotos: number;
      seniors: number;
      size: Record<'S'|'M'|'L', number>;
      breeds?: Record<string, number>;
      specialNeeds?: number;
      byAgeYears?: number[]; // histogram or similar if you exposed it
    };
  };
};

// Basic health fetch + guard
export async function getHealth(r: APIRequestContext): Promise<Health> {
  const res = await r.get('http://localhost:3000/api/test-api/health', {
    headers: { 'x-test-secret': process.env.TEST_SECRET || 'test-secret-default' }
  });
  expect(res.ok()).toBeTruthy();
  return await res.json();
}

// Pick a breed with at least N dogs
export async function pickBreedWithAtLeast(r: APIRequestContext, min = 2) {
  const h = await getHealth(r);
  const breeds = h.summary.dogs.breeds ?? {};
  const entry = Object.entries(breeds).find(([,count]) => count >= min);
  expect(entry, 'Need a breed with enough examples in seed').toBeTruthy();
  return entry![0];
}

// Find a special-needs dog id via a test endpoint or gallery scrape
export async function getSpecialNeedsDogId(r: APIRequestContext) {
  const res = await r.get('http://localhost:3000/api/test-api/one-dog?specialNeeds=1', {
    headers: { 'x-test-secret': process.env.TEST_SECRET || 'test-secret-default' }
  });
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json?.id).toBeTruthy();
  return json.id as string;
}

// Pick an age range with at least one hit. If your health returns a histogram, choose a bin with count>0.
export async function pickAgeRange() {
  // Use a very narrow range that should definitely filter results
  return { min: 15, max: 15 };
}

// Create a shift for testing
export async function apiCreateShift(r: APIRequestContext, shiftData?: Partial<{ title: string; description: string; startsAt: string; endsAt: string; capacity: number }>) {
  const defaultShift = {
    title: 'Test Shift',
    description: 'Test shift for E2E testing',
    startsAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
    endsAt: new Date(Date.now() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(), // Tomorrow + 2 hours
    capacity: 3,
    ...shiftData
  };

  const res = await r.post('http://localhost:3000/api/test-api/create-shift', {
    headers: { 'x-test-secret': process.env.TEST_SECRET || 'test-secret-default' },
    data: defaultShift
  });
  expect(res.ok()).toBeTruthy();
  return await res.json();
}

// Create a signup for a volunteer on a shift
export async function apiCreateSignup(r: APIRequestContext, shiftId: number, volunteerEmail: string = 'volunteer@test.example.com') {
  const res = await r.post('http://localhost:3000/api/test-api/create-signup', {
    headers: { 'x-test-secret': process.env.TEST_SECRET || 'test-secret-default' },
    data: { shiftId, volunteerEmail }
  });
  expect(res.ok()).toBeTruthy();
  return await res.json();
}
