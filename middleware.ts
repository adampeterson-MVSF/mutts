import { NextResponse, NextRequest } from "next/server";

// Import helper functions
import { createMiddlewareContext } from "@/lib/middleware/context";

// Import coordinators
import { handlePublicPaths } from "./lib/middleware/public-paths";
import { handleRateLimiting } from "./lib/middleware/rate-limiting";
import { handleEnvironmentCheck } from "./lib/middleware/environment-check";
import { handleAuthorization } from "./lib/middleware/authorization";
import { finalizeResponse } from "./lib/middleware/finalize";

// Force Node.js runtime for middleware (not edge runtime)
// This is needed because our environment validation doesn't work in edge runtime
export const runtime = 'nodejs';

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const ctx = createMiddlewareContext(request);

  // Phase 1: Handle public paths (early exit)
  const publicResponse = await handlePublicPaths(request, ctx.pathname);
  if (publicResponse) return publicResponse;

  // Phase 2: Rate limiting (before auth)
  const rateLimitResponse = await handleRateLimiting(request, ctx.clientIP, ctx.pathname);
  if (rateLimitResponse) return rateLimitResponse;

  // Phase 3: Environment validation
  const envResponse = await handleEnvironmentCheck(ctx.pathname, ctx.logger);
  if (envResponse) return envResponse;

  // Phase 4: Authorization & access control
  const authResponse = await handleAuthorization(request, ctx.pathname, ctx.logger);
  if (authResponse) return authResponse;

  // Phase 5: Finalize successful request
  return await finalizeResponse(request, ctx.pathname, ctx.logger);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
