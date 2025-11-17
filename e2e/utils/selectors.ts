// e2e/utils/selectors.ts - Centralized test-id selectors (no visible text)

/**
 * Page-level selectors - used by waitForPage functions
 */
export const PAGE_SELECTORS = {
  // Admin pages
  'admin': '[data-route="admin"]',
  'admin/events': '[data-route="admin/events"]',
  'admin/shifts': '[data-route="admin/shifts"]',
  'admin/users': '[data-route="admin/users"]',
  'admin/applications': '[data-route="admin/applications"]',
  'admin/applications/': '[data-route="admin/application-detail"]',
  'admin/dogs': '[data-route="admin/dogs"]',
  'admin/dog/medical': '[data-route="admin/dog/*?tab=medical"]',
  'admin/activity-log': '[data-route="admin/activity-log"]',
  'admin/dog/log': '[data-route="admin/dog/log"]',

  // Staff pages
  'staff/applications': '[data-route="staff/applications"]',
  'staff/medical': '[data-testid="staff/medical"]',

  // Volunteer pages
  'volunteer/dashboard': '[data-route="volunteer/dashboard"]',

  // Public pages
  'public/adopt': '[data-route="public/adopt"]',
  'public/events': '[data-route="public/events"]',
} as const;

/**
 * Component-level selectors - used within pages
 */
export const COMPONENT_SELECTORS = {
  // Events
  'events-table': '[data-testid="events-table"]',
  'open-create-event': '[data-testid="open-create-event"]',
  'event-form': '[data-testid="event-form"]',
  'event-title': '[data-testid="event-title"]',
  'event-date': '[data-testid="event-date"]',
  'event-location': '[data-testid="event-location"]',
  'event-capacity': '[data-testid="event-capacity"]',
  'save-event': '[data-testid="save-event"]',
  'event-row-actions': (id: string) => `[data-testid="event-row-${id}-actions"]`,
  'delete-event': '[data-testid="delete-event"]',
  'confirm-delete-event': '[data-testid="confirm-delete-event"]',
  'duplicate-event': '[data-testid="duplicate-event"]',

  // Shifts
  'shifts-table': '[data-testid="shifts-table"]',
  'open-create-shift': '[data-testid="open-create-shift"]',
  'shift-form': '[data-testid="shift-form"]',
  'shift-title': '[data-testid="shift-title"]',
  'shift-start': '[data-testid="shift-start"]',
  'shift-end': '[data-testid="shift-end"]',
  'shift-capacity': '[data-testid="shift-capacity"]',
  'save-shift': '[data-testid="save-shift"]',
  'shift-details': '[data-testid="shift-details"]',
  'cannot-delete-with-signups': '[data-testid="cannot-delete-with-signups"]',
  'shift-deleted-badge': '[data-testid="shift-deleted-badge"]',
  'show-deleted': '[data-testid="show-deleted"]',

  // Users
  'users-table': '[data-testid="admin-users-table"]',
  'user-row': (id: string) => `[data-testid="admin-user-row"][data-user-id="${id}"]`,
  'user-actions': (id: string) => `[data-testid="user-${id}-actions"]`,
  'change-role': '[data-testid="change-role"]',
  'role-form': '[data-testid="role-form"]',
  'role-select': '[data-testid="role-select"]',
  'save-role': '[data-testid="save-role"]',
  'user-role-chip': (id: string) => `[data-testid="user-${id}-role-chip"]`,

  // Applications
  'applications-table': '[data-testid="applications-table"]',
  'filter-status': '[data-testid="filter-status"]',
  'filter-date-from': '[data-testid="filter-date-from"]',
  'filter-date-to': '[data-testid="filter-date-to"]',
  'apply-filters': '[data-testid="apply-filters"]',
  'sort-status': '[data-testid="sort-status"]',
  'sort-submittedAt': '[data-testid="sort-submittedAt"]',
  'select-row': (id: string) => `[data-testid="select-row-${id}"]`,
  'bulk-actions': '[data-testid="bulk-actions"]',
  'bulk-assign': '[data-testid="bulk-assign"]',
  'bulk-status': (status: string) => `[data-testid="bulk-status-${status}"]`,
  'export-csv': '[data-testid="export-csv"]',

  // Medical
  'input-file-upload': '[data-testid="input-file-upload"]',
  'upload-progress': '[data-testid="upload-progress"]',
  'medical-files-table': '[data-testid="medical-files-table"]',
  'delete-file': (id: string) => `[data-testid="delete-file-${id}"]`,

  // Activity Log
  'activity-log-empty': '[data-testid="activity-log-empty"]',
  'activity-log-list': '[data-testid="activity-log-list"]',
  'activity-log-form': '[data-testid="activity-log-form"]',
  'log-note': '[data-testid="log-note"]',
  'save-log': '[data-testid="save-log"]',

  // Volunteer
  'quick-log-form': '[data-testid="quick-log-form"]',

  // Form validation errors
  'error-start-in-past': '[data-testid="error-start-in-past"]',
  'error-required-title': '[data-testid="error-required-title"]',

  // Loading and ready states
  'route-ready': '[data-testid="route-ready"]',
} as const;

/**
 * Get a page selector by route name
 */
export function getPageSelector(route: keyof typeof PAGE_SELECTORS): string {
  return PAGE_SELECTORS[route];
}

/**
 * Get a component selector, with optional parameter substitution
 */
export function getSelector(
  key: keyof typeof COMPONENT_SELECTORS,
  ...params: (string | number)[]
): string {
  const selector = COMPONENT_SELECTORS[key];
  if (typeof selector === 'function') {
    return (selector as (...args: (string | number)[]) => string)(...params);
  }
  return selector;
}
