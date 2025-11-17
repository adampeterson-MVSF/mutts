import type { NextRequest, NextResponse } from "next/server";

const TEST_SECRET = process.env.TEST_SECRET || "test-secret-default";

// Check if test affordances are enabled (matches middleware logic)
const isTrue = (v?: string) => v === "1" || v?.toLowerCase() === "true";
function testAffordancesEnabled(): boolean {
  // Allow only in test environment WHEN explicitly enabled.
  const enabled =
    isTrue(process.env.EXPOSE_TEST_API) || isTrue(process.env.ALLOW_TEST_ENDPOINTS);
  const isTestEnv = process.env.NODE_ENV === "test";
  return enabled && isTestEnv;
}

export function isAllowedTestRequest(req: NextRequest) {
  const enabled = testAffordancesEnabled();
  const secret = req.headers.get("x-test-secret") || "";
  return enabled && secret === TEST_SECRET;
}

export function blockAs404(): NextResponse {
  return new Response("Not Found", { status: 404 }) as unknown as NextResponse;
}
