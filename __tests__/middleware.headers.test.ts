/** @vitest-environment jsdom */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextResponse } from "next/server";
import { applySecurityHeaders, createServiceUnavailableResponse, withSecurityHeaders } from "@/lib/middleware/security";
import { tinyHash, getClientIP, createRateLimitResponse, shouldBypassRateLimit, isRateLimitShadowMode } from "@/lib/middleware/rate-limit";
import { handleAuthorization } from "@/lib/middleware/authorization";
import { getSecurityHeaders } from "@/lib/security-headers";

// Mock dependencies
vi.mock("@/lib/security-headers", () => ({
  getSecurityHeaders: vi.fn(() => ({
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  })),
}));

vi.mock("@/lib/rate-limiter", () => ({
  rateLimiter: {
    check: vi.fn(),
  },
}));

vi.mock("@/lib/log", () => ({
  metrics: {
    rateLimitRejection: vi.fn(),
    authRedirect: vi.fn(),
  },
}));

vi.mock("@/lib/monitoring/sentry", () => ({
  tagRequest: vi.fn(),
}));

vi.mock("@/lib/middleware/session", () => ({
  getSession: vi.fn(),
}));

vi.mock("@/lib/middleware/router", () => ({
  checkAccess: vi.fn(),
  getRequiredRole: vi.fn(),
}));

describe("middleware security headers", () => {
  describe("applySecurityHeaders", () => {
    it("should apply security headers to a response", () => {
      const response = new NextResponse("test");
      const result = applySecurityHeaders(response);

      expect(getSecurityHeaders).toHaveBeenCalled();
      expect(result.headers.get("X-Frame-Options")).toBe("DENY");
      expect(result.headers.get("X-Content-Type-Options")).toBe("nosniff");
      expect(result.headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    });
  });

  describe("withSecurityHeaders", () => {
    it("should return response with security headers applied", () => {
      const response = new NextResponse("test");
      const result = withSecurityHeaders(response);

      expect(result.headers.get("X-Frame-Options")).toBe("DENY");
      expect(result.headers.get("X-Content-Type-Options")).toBe("nosniff");
    });
  });

  describe("createServiceUnavailableResponse", () => {
    it("should create 503 response with security headers", () => {
      const response = createServiceUnavailableResponse();

      expect(response.status).toBe(503);
      expect(response.headers.get("Content-Type")).toBe("text/plain");
      expect(response.headers.get("X-Frame-Options")).toBe("DENY");
    });
  });
});

describe("middleware rate limiting", () => {
  describe("tinyHash", () => {
    it("should generate consistent hash for same input", () => {
      const hash1 = tinyHash("test-input");
      const hash2 = tinyHash("test-input");
      expect(hash1).toBe(hash2);
    });

    it("should generate different hashes for different inputs", () => {
      const hash1 = tinyHash("input1");
      const hash2 = tinyHash("input2");
      expect(hash1).not.toBe(hash2);
    });

    it("should return hex string", () => {
      const hash = tinyHash("test");
      expect(hash).toMatch(/^[0-9a-f]+$/);
    });
  });

  describe("getClientIP", () => {
    it("should extract IP from x-forwarded-for header", () => {
      const request = new Request("http://test.com", {
        headers: { "x-forwarded-for": "192.168.1.1, 10.0.0.1" },
      }) as unknown as Parameters<typeof getClientIP>[0];
      expect(getClientIP(request)).toBe("192.168.1.1");
    });

    it("should extract IP from x-real-ip header", () => {
      const request = new Request("http://test.com", {
        headers: { "x-real-ip": "192.168.1.1" },
      }) as unknown as Parameters<typeof getClientIP>[0];
      expect(getClientIP(request)).toBe("192.168.1.1");
    });

    it("should extract IP from x-client-ip header", () => {
      const request = new Request("http://test.com", {
        headers: { "x-client-ip": "192.168.1.1" },
      }) as unknown as Parameters<typeof getClientIP>[0];
      expect(getClientIP(request)).toBe("192.168.1.1");
    });

    it("should return 'unknown' when no IP headers present", () => {
      const request = new Request("http://test.com") as unknown as Parameters<typeof getClientIP>[0];
      expect(getClientIP(request)).toBe("unknown");
    });
  });

  describe("shouldBypassRateLimit", () => {
    it("should bypass when hasTestSecret is true and DISABLE_RATE_LIMITING_FOR_TESTS is set", () => {
      process.env.DISABLE_RATE_LIMITING_FOR_TESTS = 'true';
      expect(shouldBypassRateLimit(true)).toBe(true);
      delete process.env.DISABLE_RATE_LIMITING_FOR_TESTS;
    });

    it("should not bypass when hasTestSecret is false", () => {
      expect(shouldBypassRateLimit(false)).toBe(false);
    });

    it("should not bypass when DISABLE_RATE_LIMITING_FOR_TESTS is not set", () => {
      expect(shouldBypassRateLimit(true)).toBe(false);
    });
  });

  describe("isRateLimitShadowMode", () => {
    it("should return true when RL_SHADOW_MODE is set to true", () => {
      process.env.RL_SHADOW_MODE = 'true';
      expect(isRateLimitShadowMode()).toBe(true);
      delete process.env.RL_SHADOW_MODE;
    });

    it("should return false when RL_SHADOW_MODE is not set", () => {
      expect(isRateLimitShadowMode()).toBe(false);
    });
  });

  describe("createRateLimitResponse", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("should create 429 response with retry-after header", async () => {
      const resetTime = Date.now() + 60000; // 1 minute from now
      const response = await createRateLimitResponse(resetTime, "192.168.1.1", "/test", "user123");

      expect(response.status).toBe(429);
      expect(response.headers.get("Content-Type")).toBe("text/plain");
      expect(response.headers.get("Retry-After")).toBeDefined();
      expect(response.headers.get("X-RateLimit-Reset")).toBeDefined();
      expect(response.headers.get("X-Frame-Options")).toBe("DENY"); // Security headers applied
    });
  });
});

describe("middleware authorization", () => {
  const mockLogger = {
    info: vi.fn(),
    warn: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should handle authorization for public routes", async () => {
    const { getSession } = await import("@/lib/middleware/session");
    const { checkAccess, getRequiredRole } = await import("@/lib/middleware/router");

    vi.mocked(getSession).mockResolvedValue({
      response: new NextResponse(),
      userClaims: null,
      userId: null,
    });
    vi.mocked(getRequiredRole).mockReturnValue(null);
    vi.mocked(checkAccess).mockReturnValue(null);

    const request = new Request("http://localhost:3000/public") as unknown as Parameters<typeof handleAuthorization>[0];
    const result = await handleAuthorization(request, "/public", mockLogger);

    expect(result).toBeNull(); // No redirect, access allowed
    expect(mockLogger.info).toHaveBeenCalled();
  });

  it("should redirect for insufficient permissions", async () => {
    const { getSession } = await import("@/lib/middleware/session");
    const { checkAccess, getRequiredRole } = await import("@/lib/middleware/router");

    vi.mocked(getSession).mockResolvedValue({
      response: new NextResponse(),
      userClaims: null,
      userId: null,
    });
    vi.mocked(getRequiredRole).mockReturnValue("ADMIN");
    vi.mocked(checkAccess).mockReturnValue(new NextResponse("Forbidden", { status: 403 }));

    const request = new Request("http://localhost:3000/admin") as unknown as Parameters<typeof handleAuthorization>[0];
    const result = await handleAuthorization(request, "/admin", mockLogger);

    expect(result).toBeInstanceOf(NextResponse);
    expect(result?.status).toBe(403);
    expect(mockLogger.warn).toHaveBeenCalled();
  });
});
