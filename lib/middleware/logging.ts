// lib/middleware/logging.ts

import { addBreadcrumb } from '@/lib/monitoring/sentry';

type LogLevel = 'log' | 'warn' | 'error';

export function createLogger(enabled: boolean) {
  const emit = (level: LogLevel, message: string, meta?: Record<string, unknown>) => {
    if (!enabled) return;
    const prefix = `[MIDDLEWARE][${new Date().toISOString()}] ${message}`;
    if (meta && Object.keys(meta).length > 0) {
      console[level](prefix, meta);
    } else {
      console[level](prefix);
    }
  };

  return {
    info: (message: string, meta?: Record<string, unknown>) => emit('log', message, meta),
    warn: (message: string, meta?: Record<string, unknown>) => {
      emit('warn', message, meta);
      // Add Sentry breadcrumb for warnings
      addBreadcrumb(message, 'middleware', meta).catch(() => {});
    },
    error: (message: string, meta?: Record<string, unknown>) => {
      emit('error', message, meta);
      // Add Sentry breadcrumb for errors
      addBreadcrumb(message, 'middleware', meta).catch(() => {});
    },
  };
}

// Metrics counters for monitoring access patterns
export function incrementMetric(metric: string, pathname: string) {
  if (process.env.NODE_ENV === 'development') {
    console.count(`[${metric}] ${pathname}`);
  }
  // In production, this could be extended to send to a metrics service
}

// Log access denied attempts for monitoring
export function logAccessDenied(pathname: string, userId: string | null, userRole: string | null, requiredRole: string | null) {
  incrementMetric('AccessDenied', pathname);
  console.warn(
    `[MIDDLEWARE][${new Date().toISOString()}] Access denied`,
    {
      pathname,
      userId: userId ?? 'anonymous',
      userRole: userRole ?? 'no role',
      requiredRole: requiredRole ?? 'authentication',
    },
  );
  
  // Add Sentry breadcrumb for access denials
  addBreadcrumb('Access denied', 'access_control', {
    pathname,
    userId: userId ?? 'anonymous',
    userRole: userRole ?? 'no role',
    requiredRole: requiredRole ?? 'authentication',
  }).catch(() => {});
}
