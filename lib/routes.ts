// lib/routes.ts - Single source of truth for route definitions and access control
// This file consolidates route definitions from middleware.ts, lib/utils.ts, and e2e/access-matrix.ts
// Import this file instead of defining routes in multiple places.

/**
 * Route patterns organized by required role level.
 * Routes are patterns that support wildcards (e.g., "/auth/*").
 */
export const ROUTES = {
  // Public routes - no authentication required
  public: [
    "/",
    "/adopt",
    "/adopt/*",
    "/happy-tails",
    "/auth/*",
    "/test/whoami",
    "/favicon.ico",
    "/opengraph-image.png",
    "/twitter-image.png",
  ] as const,

  // Volunteer routes - VOLUNTEER role or higher required
  volunteer: [
    "/volunteer",
    "/volunteer/my-shifts",
    "/apply",
    "/apply/*",
  ] as const,

  // Staff routes - STAFF or ADMIN role required
  staff: [
    "/admin",
    "/admin/applications",
    "/admin/dog",
    "/admin/edit-dog",
    "/admin/add-dog",
    "/admin/fosters",
    "/admin/shifts",
    "/admin/events",
    "/admin/dog/*?tab=medical",
    "/staff/medical/*",
    "/api/applications",
    "/api/dogs",
    "/api/events",
    "/api/fosters",
    "/api/shifts",
    "/api/log",
    "/api/medical-documents/*",
  ] as const,

  // Admin routes - ADMIN role required
  admin: [
    "/admin/users",
    "/api/medical-documents",
    "/api/admin/shifts/cancel",
  ] as const,
} as const;

/**
 * Check if path matches a pattern (supports wildcards).
 * Patterns ending with "/*" match the base path and all subpaths.
 */
export function matchesRoute(pathname: string, pattern: string): boolean {
  if (pattern.endsWith("/*")) {
    const basePattern = pattern.slice(0, -2);
    return pathname === basePattern || pathname.startsWith(basePattern + "/");
  }
  return pathname === pattern;
}

/**
 * Check if a pathname is a public route (no auth required).
 */
export function isPublicRoute(pathname: string): boolean {
  return ROUTES.public.some(pattern => matchesRoute(pathname, pattern));
}

/**
 * Public paths allowlist for early exit checks.
 * This is a flattened list for efficient middleware checks.
 */
export const PUBLIC_PATHS = [
  "/",
  "/adopt",
  "/events",
  "/happy-tails",
  "/auth",
  "/auth/login",
  "/auth/sign-up",
  "/auth/confirm",
  "/auth/error",
  "/auth/forgot-password",
  "/auth/update-password",
  "/auth/sign-up-success",
  "/api/test-api",
  "/api/test-api/*",
  "/test/whoami",
  "/favicon.ico",
  "/opengraph-image.png",
  "/twitter-image.png",
] as const;

/**
 * Generate ACCESS_MATRIX format for E2E tests.
 * This converts the ROUTES structure into the format expected by tests.
 * Removes duplicates and ensures accurate route arrays.
 */
export function generateAccessMatrix() {
  // Helper to deduplicate arrays
  const dedupe = <T>(arr: T[]): T[] => Array.from(new Set(arr));

  // Get all non-wildcard routes from each category
  const publicRoutes = ROUTES.public.filter((r) => !r.includes("*"));
  const volunteerRoutes = ROUTES.volunteer.filter((r) => !r.includes("*"));
  const staffRoutes = ROUTES.staff.filter((r) => !r.includes("*"));
  const adminRoutes = ROUTES.admin.filter((r) => !r.includes("*"));

  return {
    public: {
      allowed: dedupe([
        ...publicRoutes,
        "/auth/login",
        "/auth/sign-up",
      ]),
      denied: dedupe([
        ...volunteerRoutes,
        ...staffRoutes,
        ...adminRoutes,
        "/volunteer",
        "/volunteer/my-shifts",
        "/admin",
        "/admin/applications",
        "/apply/adopt",
        "/apply/foster",
        "/protected",
      ]),
    },
    volunteer: {
      allowed: dedupe([
        ...publicRoutes,
        ...volunteerRoutes,
        "/apply/adopt",
        "/apply/foster",
      ]),
      denied: dedupe([
        ...staffRoutes.filter((r) => !r.startsWith("/api/")),
        ...adminRoutes.filter((r) => !r.startsWith("/api/")),
        "/admin",
        "/admin/applications",
        "/admin/users",
      ]),
    },
    staff: {
      allowed: dedupe([
        ...publicRoutes,
        ...volunteerRoutes,
        ...staffRoutes,
        "/admin/users",
        "/apply/adopt",
        "/apply/foster",
      ]),
      denied: [],
    },
    admin: {
      allowed: dedupe([
        ...publicRoutes,
        ...volunteerRoutes,
        ...staffRoutes,
        ...adminRoutes,
        "/volunteer",
        "/volunteer/my-shifts",
        "/admin",
        "/admin/applications",
        "/admin/dog",
        "/admin/edit-dog",
        "/admin/add-dog",
        "/admin/fosters",
        "/admin/shifts",
        "/admin/users",
        "/apply/adopt",
        "/apply/foster",
      ]),
      denied: [],
    },
  } as const;
}
