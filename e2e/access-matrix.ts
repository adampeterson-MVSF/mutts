// e2e/access-matrix.ts - Shared access matrix for unit and E2E tests
// Generated from single source of truth in lib/routes.ts

import { generateAccessMatrix } from "@/lib/routes";

// Generate ACCESS_MATRIX from canonical route definitions
export const ACCESS_MATRIX = generateAccessMatrix();

export type AccessMatrix = typeof ACCESS_MATRIX;
export type Role = keyof AccessMatrix;
