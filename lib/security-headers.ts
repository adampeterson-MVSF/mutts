// lib/security-headers.ts - Centralized security headers configuration
export type SecurityHeaders = Record<string, string>;

// Content Security Policy directives - mirrors allowed domains from next.config.ts
function buildCSPDirectives(): string {
  const baseImageDomains = [
    'via.placeholder.com',
    'picsum.photos',
    'scontent.xx.fbcdn.net',
    'external.xx.fbcdn.net',
    'dl5zpyw5k3jeb.cloudfront.net',
    'assets.adoptapet.com',
    'muttville.org'
  ];

  // Add Supabase domain if available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const connectSrcDomains: string[] = ['self'];
  if (supabaseUrl) {
    try {
      const u = new URL(supabaseUrl);
      baseImageDomains.push(u.hostname);
      // Use the full origin to preserve scheme and port (e.g., http://localhost:54321)
      connectSrcDomains.push(u.origin);
    } catch {
      // Invalid URL, skip
    }
  }

  const imgSrc = `'self' data: blob: https://${baseImageDomains.join(' https://')}`;
  // Allow Next.js HMR websocket and RSC requests in development
  if (process.env.NODE_ENV === 'development') {
    connectSrcDomains.push('ws://localhost:3000', 'ws://127.0.0.1:3000', 'http://localhost:3000');
  }
  const connectSrc = connectSrcDomains.join(' ');

  // In development, allow unsafe-inline for scripts (needed for Next.js hot reload, Turbopack, etc.)
  const isDev = process.env.NODE_ENV === 'development';
  const scriptSrc = isDev ? "'self' 'unsafe-inline'" : "'self'";

  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'", // Next.js requires unsafe-inline for styles
    `img-src ${imgSrc}`,
    "font-src 'self'",
    `connect-src ${connectSrc}`,
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ');
}

const CSP_DIRECTIVES = buildCSPDirectives();

/**
 * Returns the complete set of security headers for the application.
 * This is the single source of truth for all security headers.
 */
export function getSecurityHeaders(): SecurityHeaders {
  return {
    'Content-Security-Policy': CSP_DIRECTIVES,
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };
}

/**
 * Applies security headers to a NextResponse object.
 * Mutates the response headers in place.
 */
export function applySecurityHeaders(response: Response): void {
  const headers = getSecurityHeaders();
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
}
