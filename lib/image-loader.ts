// lib/image-loader.ts
// Custom Next.js Image loader with telemetry for domain validation

import { metrics } from "@/lib/log";

// Allowed domains from next.config.ts for reference
const ALLOWED_DOMAINS = [
  'via.placeholder.com',
  'picsum.photos',
  'scontent.xx.fbcdn.net',
  'external.xx.fbcdn.net',
  'dl5zpyw5k3jeb.cloudfront.net',
  'assets.adoptapet.com',
  'muttville.org',
  // Supabase domain will be added dynamically below
];

export default function imageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Extract hostname from src URL for telemetry
  try {
    const url = new URL(src);
    const hostname = url.hostname;

    // Get Supabase hostname if available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    let supabaseHostname: string | null = null;
    if (supabaseUrl) {
      try {
        supabaseHostname = new URL(supabaseUrl).hostname;
      } catch {
        // Invalid Supabase URL
      }
    }

    const allAllowedDomains = supabaseHostname
      ? [...ALLOWED_DOMAINS, supabaseHostname]
      : ALLOWED_DOMAINS;

    // Check if domain is in allowlist
    const isAllowed = allAllowedDomains.some(allowed => {
      if (allowed.includes('xx')) {
        // Handle Facebook's region-specific domains
        return hostname.includes('fbcdn.net');
      }
      return hostname === allowed || hostname === 'localhost'; // Allow localhost for development
    });

    if (!isAllowed) {
      // Emit SLO metric for unknown image host rejections
      metrics.unknownImageHostRejection(hostname, 'image-loader');

      const errorMsg = `[ImageLoader] 🚫 Domain not allowed: ${hostname}. Add to next.config.ts remotePatterns if legitimate.`;
      console.error(errorMsg);
      console.error(`[ImageLoader] Allowed domains: ${allAllowedDomains.join(', ')}`);
      console.error(`[ImageLoader] Image source: ${src}`);

      // In development, this will help catch configuration issues early
      if (process.env.NODE_ENV === 'development') {
        console.error(`[ImageLoader] To fix: Add '${hostname}' to remotePatterns in next.config.ts`);
      }
    } else {
      // Log allowed domain usage for monitoring
      console.log(`[ImageLoader] ✅ Loading image from allowed domain: ${hostname}`);
    }

    // In development, warn about potentially problematic sources
    if (process.env.NODE_ENV === 'development') {
      const suspiciousPatterns = ['http:', 'localhost', '127.0.0.1', '0.0.0.0'];
      const isSuspicious = suspiciousPatterns.some(pattern => src.includes(pattern));

      if (isSuspicious) {
        console.warn(`[ImageLoader] ⚠️  Suspicious image source (allowed but review): ${src}`);
      }
    }
  } catch (error) {
    // If URL parsing fails, log the error for debugging
    console.error(`[ImageLoader] Failed to parse image URL: ${src}`, error);
  }

  // Use Next.js default loader behavior
  return `${src}?w=${width}&q=${quality || 75}`;
}
