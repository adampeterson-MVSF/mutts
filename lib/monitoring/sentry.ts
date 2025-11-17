// lib/monitoring/sentry.ts
/**
 * Sentry integration for error tracking and monitoring
 * 
 * Gracefully degrades if Sentry is not configured (no env vars or package not installed)
 * In production, install @sentry/nextjs and set SENTRY_DSN to enable error tracking
 * 
 * Usage:
 *   import { captureException, addBreadcrumb } from '@/lib/monitoring/sentry';
 *   await captureException(error, { userId, userRole, pathname });
 */

let sentryInitialized = false;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Sentry: any = null;

// Type for Sentry event (when available)
type SentryEvent = {
  message?: string;
  [key: string]: unknown;
};

// Initialize Sentry if DSN is provided
async function initSentry() {
  if (sentryInitialized) {
    return;
  }

  sentryInitialized = true;

  // Check if Sentry DSN is configured
  if (!process.env.SENTRY_DSN) {
    return; // Sentry not configured, skip initialization
  }

  try {
    // Dynamic import to avoid breaking if package isn't installed
    Sentry = await import('@sentry/nextjs');
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV || 'development',
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
      // Filter out sensitive data
      beforeSend(event: SentryEvent) {
        // Remove PII from error messages
        if (event.message) {
          event.message = event.message.replace(/email:[^\s]+/gi, 'email:[REDACTED]');
          event.message = event.message.replace(/phone:[^\s]+/gi, 'phone:[REDACTED]');
        }
        return event;
      },
    });
  } catch {
    // Sentry package not installed or initialization failed - silently continue
    if (process.env.NODE_ENV === 'development') {
      console.warn('Sentry not available (package not installed or initialization failed)');
    }
  }
}

// Enhanced request tagging for SLO monitoring
export async function tagRequest(route: string, role?: string, rateLimited?: boolean) {
  await initSentry();
  if (!Sentry) return;

  try {
    Sentry.setTag("route", route);
    if (role) Sentry.setTag("role", role);
    Sentry.setTag("rate_limited", String(!!rateLimited));
  } catch {
    // Silently fail if Sentry is unavailable
  }
}

// Capture exception with context
export async function captureException(
  error: Error,
  context?: {
    userId?: string | null;
    userRole?: string | null;
    pathname?: string;
    route?: string;
    rateLimited?: boolean;
    tags?: Record<string, string>;
  }
) {
  await initSentry();
  if (!Sentry) return;

  try {
    Sentry.withScope((scope: {
      setUser: (user: { id: string }) => void;
      setTag: (key: string, value: string) => void;
      [key: string]: unknown;
    }) => {
      if (context?.userId) {
        scope.setUser({ id: context.userId });
      }
      if (context?.userRole) {
        scope.setTag('role', context.userRole);
      }
      if (context?.pathname) {
        scope.setTag('pathname', context.pathname);
      }
      if (context?.route) {
        scope.setTag('route', context.route);
      }
      if (context?.rateLimited !== undefined) {
        scope.setTag('rate_limited', String(context.rateLimited));
      }
      if (context?.tags) {
        Object.entries(context.tags).forEach(([key, value]) => {
          scope.setTag(key, value);
        });
      }
      Sentry!.captureException(error);
    });
  } catch {
    // Silently fail if Sentry is unavailable
  }
}

// Add breadcrumb for middleware access denials
export async function addBreadcrumb(
  message: string,
  category: string,
  data?: Record<string, unknown>
) {
  await initSentry();
  if (!Sentry) return;

  try {
    Sentry.addBreadcrumb({
      message,
      category,
      data,
      level: 'warning',
    });
  } catch {
    // Silently fail if Sentry is unavailable
  }
}

// Capture message (non-exception)
export async function captureMessage(
  message: string,
  level: 'info' | 'warning' | 'error' = 'error',
  context?: Record<string, unknown>
) {
  await initSentry();
  if (!Sentry) return;

  try {
    Sentry.withScope((scope: {
      setContext: (key: string, value: Record<string, unknown>) => void;
      [key: string]: unknown;
    }) => {
      if (context) {
        Object.entries(context).forEach(([key, value]) => {
          scope.setContext(key, { value });
        });
      }
      Sentry!.captureMessage(message, level);
    });
  } catch {
    // Silently fail if Sentry is unavailable
  }
}

