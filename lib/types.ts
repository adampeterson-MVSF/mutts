// lib/types.ts

/**
 * Result type for server actions - follows Railway-oriented programming pattern
 */
export type Result<T, E = Error> = { success: true; data: T } | { success: false; error: E };

/**
 * Canonical action result type for server actions
 */
export type ActionResult<T = null> = {
  data: T | null;
  success: boolean;
  message: string | null;
  fieldErrors?: Record<string, string[]>;
};

/**
 * Helper constructor for successful ActionResult
 */
export function ok<T = null>(data: T, message: string | null = null): ActionResult<T> {
  return {
    success: true,
    message,
    data,
    fieldErrors: undefined,
  };
}

/**
 * Helper constructor for failed ActionResult
 */
export function fail<T = null>(message: string, fieldErrors?: Record<string, string[]>): ActionResult<T> {
  return {
    success: false,
    message,
    data: null,
    fieldErrors,
  } as ActionResult<T>;
}

/**
 * Helper constructor for ActionResult with default values
 */
export function makeActionResult<T>(overrides?: Partial<ActionResult<T>>): ActionResult<T> {
  return {
    success: false,
    message: null,
    data: null,
    fieldErrors: undefined,
    ...overrides,
  };
}

/**
 * Canonical dog list item for admin tables and listings
 */
export interface DogListItem {
  id: number;
  mutt_id: string | null;
  name: string;
  breed: string | null;
  dateOfBirth: Date | null;
  gender: import("@prisma/client").Gender | null;
  size: import("@prisma/client").DogSize | null;
  weight_lbs: number | null;
  primaryPhotoUrl: string | null;
  specialNeeds: boolean;
  bioPublic: string | null;
  status: import("@prisma/client").DogStatus;
  fosterProfile?: {
    name: string | null;
    email: string;
  } | null;
}

/**
 * Public dog list item for adopt page with derived fields
 */
export interface PublicDogListItem extends Omit<DogListItem, 'gender' | 'mutt_id'> {
  gender: import("@prisma/client").Gender;
  mutt_id: string | null;
  isSenior: boolean;
  hasPhotos: boolean;
}

/**
 * Canonical pagination metadata
 */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
