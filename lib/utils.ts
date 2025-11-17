import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppStatus, AppType, DogStatus } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
  !!(process.env.NEXT_PUBLIC_SUPABASE_URL &&
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);


export const getDogStatusVariant = (status: DogStatus) => {
  switch (status) {
    case "ADOPTED": return "default";
    case "AVAILABLE": return "secondary";
    case "MEDICAL_HOLD": return "destructive";
    case "PENDING": case "IN_FOSTER": return "outline";
    default: return "secondary";
  }
};

// Date formatting utilities
export const formatDateTime = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

export const formatDateRange = (start: Date, end: Date) => {
  const sameDay =
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate();

  if (sameDay) {
    return `${formatDateTime(start)} – ${new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(end)}`;
  }

  return `${formatDateTime(start)} → ${formatDateTime(end)}`;
};

export const formatShiftTime = (start: Date, end: Date): string => {
  const startDate = start.toLocaleDateString();
  const startTime = start.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const endTime = end.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  if (startDate === end.toLocaleDateString()) {
    return `${startDate}, ${startTime} - ${endTime}`;
  }
  return `${startDate}, ${startTime} - ${end.toLocaleDateString()}, ${endTime}`;
};

export const formatAdoptionDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

// Re-export shared utilities
export { humanizeEnum, getAppStatusVariant, getAllowedStatuses, areStatusNotesRequired } from './utils/index';

// Test endpoint validation - allow in test environment or with test secret header
export function validateTestEndpoint(request: Request): { isValid: boolean; response?: Response } {
  const isTestEnv = process.env.NODE_ENV === 'test' && process.env.EXPOSE_TEST_API === '1';

  const testSecret = request.headers.get('x-test-secret');
  const expectedSecret = process.env.TEST_SECRET || 'test-secret-default';
  const hasValidTestSecret = testSecret === expectedSecret;

  if (!isTestEnv || !hasValidTestSecret) {
    return {
      isValid: false,
      response: new Response(null, { status: 404 })
    };
  }

  return { isValid: true };
}

// Route definitions have been moved to lib/routes.ts
// Import route functions from @/lib/routes instead
