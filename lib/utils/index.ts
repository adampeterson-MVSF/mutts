// lib/utils/index.ts
// Shared utility functions for the application

import { AppStatus, AppType } from "@prisma/client";

/**
 * Humanize enum values by replacing underscores with spaces and capitalizing words
 */
export const humanizeEnum = (value: string): string => {
  return value
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
};

/**
 * Status variant functions for consistent badge styling
 */
export const getAppStatusVariant = (status: AppStatus) => {
  switch (status) {
    case "APPROVED": return "default";
    case "SUBMITTED": case "IN_REVIEW": return "secondary";
    case "REJECTED": return "destructive";
    default: return "outline";
  }
};

/**
 * Get allowed status transitions for applications
 */
export const getAllowedStatuses = (applicationType: AppType, currentStatus?: AppStatus): AppStatus[] => {
  const allStatuses = Object.values(AppStatus);

  // For foster applications, restrict some status transitions
  if (applicationType === AppType.FOSTER) {
    // Fosters can be approved (creates foster profile) or rejected
    // Can't be marked as "IN_REVIEW" inappropriately
    return allStatuses.filter(status =>
      status !== AppStatus.IN_REVIEW || currentStatus === AppStatus.IN_REVIEW
    );
  }

  // For adoption applications, all statuses are allowed
  return allStatuses;
};

/**
 * Check if status change notes are required for a given status
 */
export const areStatusNotesRequired = (status: AppStatus): boolean => {
  return status === AppStatus.APPROVED || status === AppStatus.REJECTED;
};
