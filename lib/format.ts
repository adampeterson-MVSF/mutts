/**
 * Formatting utilities for consistent display of missing/null values and dog data formatting
 */

import { calculateAge } from "./utils/dog-utils";
import { humanizeEnum } from "./utils";
import { Gender, DogSize } from "@prisma/client";

/**
 * Returns the value if it's truthy and non-empty, otherwise returns the fallback
 */
export const missing = (value: string | null | undefined, fallback = 'N/A'): string =>
  value && value.trim() !== '' ? value : fallback;

/**
 * Format dog age for display
 */
export const formatDogAge = (dateOfBirth: Date | null): string => {
  if (!dateOfBirth) return missing(null);
  const age = calculateAge(dateOfBirth);
  return age ? `${age} years` : missing(null);
};

/**
 * Format dog gender for display
 */
export const formatDogGender = (gender: Gender | null): string => {
  return gender ? humanizeEnum(gender) : missing(null);
};

/**
 * Format dog size for display
 */
export const formatDogSize = (size: DogSize | null): string => {
  return size ? humanizeEnum(size) : missing(null);
};

/**
 * Format dog weight for display
 */
export const formatDogWeight = (weightLbs: number | null): string => {
  return weightLbs ? `${weightLbs} lbs` : missing(null);
};

/**
 * Format date for display (e.g., "Jan 15, 2024")
 */
export const formatDisplayDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
