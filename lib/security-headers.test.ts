// lib/security-headers.test.ts
import { describe, it, expect } from 'vitest';
import { NextResponse } from 'next/server';
import { getSecurityHeaders, applySecurityHeaders } from './security-headers';

describe('Security Headers', () => {
  describe('getSecurityHeaders', () => {
    it('should return complete security headers object', () => {
      const headers = getSecurityHeaders();

      expect(headers).toMatchSnapshot();

      // Verify all expected headers are present
      expect(headers).toHaveProperty('Content-Security-Policy');
      expect(headers).toHaveProperty('X-Content-Type-Options', 'nosniff');
      expect(headers).toHaveProperty('X-Frame-Options', 'DENY');
      expect(headers).toHaveProperty('X-XSS-Protection', '1; mode=block');
      expect(headers).toHaveProperty('Referrer-Policy', 'strict-origin-when-cross-origin');
    });

    it('should include CSP with expected directives', () => {
      const headers = getSecurityHeaders();
      const csp = headers['Content-Security-Policy'];

      // Check for key CSP directives
      expect(csp).toContain("default-src 'self'");
      expect(csp).toContain("frame-src 'none'");
      expect(csp).toContain("object-src 'none'");
      expect(csp).toContain("frame-ancestors 'none'");

      // Check script-src is strict (no unsafe-eval, no unsafe-inline for scripts)
      expect(csp).toContain("script-src 'self'");
      expect(csp).not.toContain("script-src 'self' 'unsafe-inline'");
      expect(csp).not.toContain("script-src 'self' 'unsafe-eval'");

      // Check for specific allowed image domains (mirroring next.config.ts)
      expect(csp).toContain("via.placeholder.com");
      expect(csp).toContain("picsum.photos");
      expect(csp).toContain("muttville.org");
      expect(csp).toContain("assets.adoptapet.com");

      // Should include Supabase domain when available
      if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
        const supabaseHostname = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname;
        expect(csp).toContain(supabaseHostname);
      }
    });

    it('should not allow unsafe-inline or unsafe-eval in script-src', () => {
      const headers = getSecurityHeaders();
      const csp = headers['Content-Security-Policy'];

      // Extract script-src directive
      const scriptSrcMatch = csp.match(/script-src ([^;]+)/);
      expect(scriptSrcMatch).toBeTruthy();
      const scriptSrc = scriptSrcMatch![1];

      // Should not contain unsafe directives
      expect(scriptSrc).not.toContain("'unsafe-inline'");
      expect(scriptSrc).not.toContain("'unsafe-eval'");
    });
  });

  describe('applySecurityHeaders', () => {
    it('should apply all security headers to response', () => {
      const mockResponse = {
        headers: new Map<string, string>(),
      } as unknown as NextResponse;

      applySecurityHeaders(mockResponse);

      const expectedHeaders = getSecurityHeaders();
      Object.entries(expectedHeaders).forEach(([key, value]) => {
        expect(mockResponse.headers.get(key)).toBe(value);
      });
    });

    it('should not overwrite existing headers', () => {
      const mockResponse = {
        headers: new Map<string, string>([['X-Custom-Header', 'existing-value']]),
      } as unknown as NextResponse;

      applySecurityHeaders(mockResponse);

      // Custom header should remain
      expect(mockResponse.headers.get('X-Custom-Header')).toBe('existing-value');

      // Security headers should be added
      const expectedHeaders = getSecurityHeaders();
      Object.entries(expectedHeaders).forEach(([key, value]) => {
        expect(mockResponse.headers.get(key)).toBe(value);
      });
    });
  });
});
