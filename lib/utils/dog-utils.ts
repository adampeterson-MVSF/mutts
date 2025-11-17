import { DogSize } from "@prisma/client";

export function calculateAge(dob: Date | null | undefined): number | null {
  if (!dob) return null;

  const diff = Date.now() - new Date(dob).getTime();
  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function isSenior(dob: Date | null | undefined): boolean {
  const age = calculateAge(dob);
  // Default to 'true' for seniors if age is unknown, as this is a senior dog rescue.
  return (age || 8) >= 8;
}

export function getSizeFromWeight(weight: number | null | undefined): DogSize {
  if (!weight) return DogSize.UNKNOWN;

  if (weight < 8) return DogSize.TOY;
  if (weight < 20) return DogSize.SMALL;
  if (weight < 45) return DogSize.MEDIUM;

  return DogSize.LARGE;
}
