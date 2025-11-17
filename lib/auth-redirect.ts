import { NextRequest, NextResponse } from 'next/server';
import { applySecurityHeaders } from './middleware/security';

export function authRequiredRedirect(req: NextRequest, returnTo: string) {
  const url = new URL('/auth/login', req.url);
  url.searchParams.set('reason', 'authentication_required');
  url.searchParams.set('returnTo', returnTo);
  return applySecurityHeaders(NextResponse.redirect(url));
}

export function insufficientPermissionsRedirect(req: NextRequest, returnTo: string) {
  const url = new URL('/auth/login', req.url);
  url.searchParams.set('reason', 'forbidden');
  url.searchParams.set('returnTo', returnTo);
  return applySecurityHeaders(NextResponse.redirect(url));
}

/**
 * Builds a login redirect URL string for use in Next.js server components.
 * Use this with Next.js `redirect()` function.
 * 
 * @param reason - Either 'authentication_required' or 'insufficient_permissions'
 * @param returnTo - The path to redirect back to after login
 * @returns A relative URL string suitable for Next.js redirect()
 */
export function buildLoginRedirect(
  reason: 'authentication_required' | 'insufficient_permissions',
  returnTo: string
): string {
  const params = new URLSearchParams({
    reason,
    returnTo,
  });
  return `/auth/login?${params.toString()}`;
}
