import { test, expect } from "@playwright/test";

test.describe("Rate limiting and auth flows", () => {
  test("auth routes are rate limited with headers intact", async ({ request }) => {
    // Burst a few times to trigger rate limiting
    const promises = Array.from({ length: 30 }, () =>
      request.get("/auth/signin").catch(() => ({ status: 429 }))
    );

    await Promise.all(promises);

    // This request should be rate limited
    const response = await request.get("/auth/signin");
    expect(response.status()).toBe(429);

    const headers = await response.headers();
    expect(headers["content-security-policy"]).toBeTruthy();
    expect(headers["retry-after"]).toBeTruthy();
    expect(headers["x-frame-options"]).toBeTruthy();
    expect(headers["x-content-type-options"]).toBeTruthy();
  });

  test("API routes are rate limited for authenticated users", async ({ request }) => {
    // Use staff project authentication via headers (same as other tests)
    const headers = {
      'X-Test-Secret': 'test-secret-default',
      'Cookie': 'test_role=STAFF; test_user_id=test-staff-user',
    };

    // Burst API calls to trigger rate limiting
    const promises = Array.from({ length: 30 }, () =>
      request.get("/api/dogs", { headers }).catch(() => ({ status: 429 }))
    );

    await Promise.all(promises);

    // This request should be rate limited
    const response = await request.get("/api/dogs", { headers });
    expect(response.status()).toBe(429);

    const responseHeaders = response.headers();
    expect(responseHeaders["retry-after"]).toBeTruthy();
  });

  test("test endpoints are inert in production", async ({ request }) => {
    // This test should only run against staging/production
    // In test environment, endpoints should work
    const response = await request.get("/api/test-api/reset");
    if (process.env.NODE_ENV === "test") {
      expect([200, 404]).toContain(response.status()); // May be 404 if not permitted
    } else {
      expect(response.status()).toBe(404); // Should be inert in non-test env
    }
  });
});
