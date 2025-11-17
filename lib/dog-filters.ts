/**
 * Dog filters DTO and URL helpers for consistent filtering across dog-related components
 */

import { DogSize, Gender, DogStatus } from "@prisma/client";

/**
 * Canonical parameter names for dog filter URL search parameters
 */
export const DOG_FILTER_PARAMS = {
  BREED: "breed",
  AGE_MIN: "ageMin",
  AGE_MAX: "ageMax",
  SPECIAL_NEEDS: "specialNeeds",
  SIZE: "size",
  GENDER: "gender",
  HAS_PHOTOS: "hasPhotos",
} as const;

/**
 * Canonical parameter names for admin dog filter URL search parameters
 */
export const ADMIN_DOG_FILTER_PARAMS = {
  STATUS: "status",
  FOSTER_PROFILE_ID: "fosterProfileId",
  BREED: "breed",
  GENDER: "gender",
  SIZE: "size",
  WEIGHT_MIN: "weightMin",
  WEIGHT_MAX: "weightMax",
  SPECIAL_NEEDS: "specialNeeds",
  HAS_PHOTOS: "hasPhotos",
} as const;

/**
 * Magic values for foster filtering (kept at edge layers)
 */
export const FOSTER_FILTER_VALUES = {
  ALL: "all",
  NONE: "none", // URL layer sentinel for "no foster assigned"
  NO_FOSTER_FORM: "", // Form layer sentinel for "no foster assigned" (empty string)
} as const;

/**
 * Dog filters DTO - data transfer object for dog filtering (adopt page)
 */
export type DogFilters = {
  breed?: string;
  gender?: Gender;
  size?: DogSize;
  specialNeeds?: "true";
  hasPhotos?: "true";
};

/**
 * Admin dog filters DTO - data transfer object for admin dog filtering
 */
export type AdminDogFilters = {
  status?: DogStatus | "all";
  fosterProfileId?: string;
  breed?: string;
  gender?: Gender | "all";
  size?: DogSize | "all";
  weightMin?: string;
  weightMax?: string;
  specialNeeds?: "all" | "true" | "false";
  hasPhotos?: "all" | "true" | "false";
};

/**
 * Type guard to check if a foster filter value means "no foster assigned"
 */
export function isNoFosterFilter(value: string): boolean {
  return value === FOSTER_FILTER_VALUES.NONE;
}

/**
 * Parse a foster filter value into a typed union or enum.
 * Returns the profile ID string if it's a specific foster, null if "no foster", or undefined if "all".
 */
export function parseFosterFilterValue(value: string): string | null | undefined {
  if (value === FOSTER_FILTER_VALUES.ALL) return undefined;
  if (value === FOSTER_FILTER_VALUES.NONE) return null;
  return value; // Specific foster profile ID
}

/**
 * Parse dog filters from URL search parameters
 */
export function parseDogFilters(searchParams: URLSearchParams): DogFilters {
  return {
    breed: searchParams.get(DOG_FILTER_PARAMS.BREED) || undefined,
    specialNeeds: searchParams.get(DOG_FILTER_PARAMS.SPECIAL_NEEDS) === "true" ? "true" : undefined,
    size: searchParams.get(DOG_FILTER_PARAMS.SIZE) as DogSize || undefined,
    gender: searchParams.get(DOG_FILTER_PARAMS.GENDER) as Gender || undefined,
    hasPhotos: searchParams.get(DOG_FILTER_PARAMS.HAS_PHOTOS) === "true" ? "true" : undefined,
  };
}

/**
 * Serialize dog filters to URL search parameters
 */
export function serializeDogFilters(filters: DogFilters): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.breed) params.set(DOG_FILTER_PARAMS.BREED, filters.breed);
  if (filters.specialNeeds) params.set(DOG_FILTER_PARAMS.SPECIAL_NEEDS, "true");
  if (filters.size) params.set(DOG_FILTER_PARAMS.SIZE, filters.size);
  if (filters.gender) params.set(DOG_FILTER_PARAMS.GENDER, filters.gender);
  if (filters.hasPhotos) params.set(DOG_FILTER_PARAMS.HAS_PHOTOS, "true");

  return params;
}

/**
 * Encode dog filters to URL search string
 */
export function encodeDogFilters(filters: DogFilters): string {
  return serializeDogFilters(filters).toString();
}

/**
 * Check if any filters are active
 */
export function hasActiveFilters(filters: DogFilters): boolean {
  return !!(
    filters.breed ||
    filters.specialNeeds ||
    filters.size ||
    filters.gender ||
    filters.hasPhotos
  );
}

/**
 * Create empty dog filters
 */
export function createEmptyDogFilters(): DogFilters {
  return {};
}

/**
 * Get dog filters from URL search parameters with Next.js router
 */
export function getDogFiltersFromSearchParams(searchParams: URLSearchParams): DogFilters {
  return parseDogFilters(searchParams);
}

/**
 * Update dog filters in URL using Next.js router
 */
export function updateDogFiltersInUrl(
  router: { push: (url: string) => void }, // Next.js App Router useRouter
  pathname: string,
  currentFilters: DogFilters,
  patch: Partial<DogFilters>
): void {
  const newFilters = { ...currentFilters, ...patch };
  const params = serializeDogFilters(newFilters);
  router.push(`${pathname}?${params.toString()}`);
}

/**
 * Parse admin dog filters from URL search parameters
 */
export function parseAdminDogFilters(searchParams: URLSearchParams): AdminDogFilters {
  return {
    status: searchParams.get(ADMIN_DOG_FILTER_PARAMS.STATUS) as DogStatus || "all",
    fosterProfileId: searchParams.get(ADMIN_DOG_FILTER_PARAMS.FOSTER_PROFILE_ID) || "all",
    breed: searchParams.get(ADMIN_DOG_FILTER_PARAMS.BREED) || "all",
    gender: searchParams.get(ADMIN_DOG_FILTER_PARAMS.GENDER) as Gender || "all",
    size: searchParams.get(ADMIN_DOG_FILTER_PARAMS.SIZE) as DogSize || "all",
    weightMin: searchParams.get(ADMIN_DOG_FILTER_PARAMS.WEIGHT_MIN) || "",
    weightMax: searchParams.get(ADMIN_DOG_FILTER_PARAMS.WEIGHT_MAX) || "",
    specialNeeds: searchParams.get(ADMIN_DOG_FILTER_PARAMS.SPECIAL_NEEDS) as "all" | "true" | "false" || "all",
    hasPhotos: searchParams.get(ADMIN_DOG_FILTER_PARAMS.HAS_PHOTOS) as "all" | "true" | "false" || "all",
  };
}

/**
 * Serialize admin dog filters to URL search parameters
 */
export function serializeAdminDogFilters(filters: AdminDogFilters): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.status && filters.status !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.STATUS, filters.status);
  if (filters.fosterProfileId && filters.fosterProfileId !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.FOSTER_PROFILE_ID, filters.fosterProfileId);
  if (filters.breed && filters.breed !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.BREED, filters.breed);
  if (filters.gender && filters.gender !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.GENDER, filters.gender);
  if (filters.size && filters.size !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.SIZE, filters.size);
  if (filters.weightMin && filters.weightMin !== "") params.set(ADMIN_DOG_FILTER_PARAMS.WEIGHT_MIN, filters.weightMin);
  if (filters.weightMax && filters.weightMax !== "") params.set(ADMIN_DOG_FILTER_PARAMS.WEIGHT_MAX, filters.weightMax);
  if (filters.specialNeeds && filters.specialNeeds !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.SPECIAL_NEEDS, filters.specialNeeds);
  if (filters.hasPhotos && filters.hasPhotos !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.HAS_PHOTOS, filters.hasPhotos);

  return params;
}

/**
 * Encode admin dog filters to URL search string
 */
export function encodeAdminDogFilters(filters: AdminDogFilters): string {
  return serializeAdminDogFilters(filters).toString();
}

/**
 * Check if any admin dog filters are active
 */
export function hasActiveAdminDogFilters(filters: AdminDogFilters): boolean {
  return !!(
    (filters.status && filters.status !== "all") ||
    (filters.fosterProfileId && filters.fosterProfileId !== "all") ||
    (filters.breed && filters.breed !== "all") ||
    (filters.gender && filters.gender !== "all") ||
    (filters.size && filters.size !== "all") ||
    (filters.weightMin && filters.weightMin !== "") ||
    (filters.weightMax && filters.weightMax !== "") ||
    (filters.specialNeeds && filters.specialNeeds !== "all") ||
    (filters.hasPhotos && filters.hasPhotos !== "all")
  );
}

/**
 * Create empty admin dog filters
 */
export function createEmptyAdminDogFilters(): AdminDogFilters {
  return {
    status: "all",
    fosterProfileId: "all",
    breed: "all",
    gender: "all",
    size: "all",
    weightMin: "",
    weightMax: "",
    specialNeeds: "all",
    hasPhotos: "all",
  };
}

/**
 * Get admin dog filters from URL search parameters with Next.js router
 */
export function getAdminDogFiltersFromSearchParams(searchParams: URLSearchParams): AdminDogFilters {
  return parseAdminDogFilters(searchParams);
}

/**
 * Update admin dog filters in URL using Next.js router
 */
export function updateAdminDogFiltersInUrl(
  router: { push: (url: string) => void }, // Next.js App Router useRouter
  pathname: string,
  currentFilters: AdminDogFilters,
  patch: Partial<AdminDogFilters>
): void {
  const newFilters = { ...currentFilters, ...patch };
  const params = serializeAdminDogFilters(newFilters);
  // Reset to page 1 when filtering
  params.set("page", "1");
  router.push(`${pathname}?${params.toString()}`);
}

