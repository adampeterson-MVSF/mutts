/**
 * Shared URL pagination utilities for consistent pagination across the application
 * Server-side utilities only - client-side hooks are in url-pagination-client.ts
 */

import { buildQueryString } from "@/lib/url";

export const PAGINATION_PARAMS = {
  PAGE: "page",
} as const;

/**
 * Pagination data structure shared across the application
 */
export interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Utility function to parse page from search params with default value
 */
export function getCurrentPage(searchParams: URLSearchParams, defaultPage = 1): number {
  const pageParam = searchParams.get(PAGINATION_PARAMS.PAGE);
  if (!pageParam) return defaultPage;

  const parsed = parseInt(pageParam, 10);
  return isNaN(parsed) || parsed < 1 ? defaultPage : parsed;
}

/**
 * Generic helper for page parsing
 */
export function parsePageParam(raw: string | undefined, defaultPage = 1): number {
  if (!raw) return defaultPage;
  const parsed = parseInt(raw, 10);
  return isNaN(parsed) || parsed < 1 ? defaultPage : parsed;
}

/**
 * Validated parameters for application filtering and pagination
 */
export interface ApplicationSearchParams {
  page: number;
  limit: number;
  status?: string;
  type?: string;
  search?: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

/**
 * Parse and validate application search parameters from URL search params
 */
export function parseApplicationSearchParams(searchParams: { [key: string]: string | undefined }): ApplicationSearchParams {
  const validatedParams: ApplicationSearchParams = {
    page: Math.max(1, parseInt(searchParams?.page || "1")),
    limit: Math.min(100, Math.max(1, parseInt(searchParams?.limit || "10"))), // Max 100 per page
    status: searchParams?.status,
    type: searchParams?.type,
    search: searchParams?.search?.trim(),
    sortBy: searchParams?.sortBy || 'createdAt',
    sortOrder: (searchParams?.sortOrder === 'asc' ? 'asc' : 'desc') as 'asc' | 'desc',
  };

  // Validate search term length to prevent abuse
  if (validatedParams.search && validatedParams.search.length > 100) {
    throw new Error("Search term too long");
  }

  return validatedParams;
}

/**
 * Validated parameters for dog filtering and pagination
 */
export interface DogSearchParams {
  page: number;
  limit: number;
  status?: string;
  fosterProfileId?: string;
  breed?: string;
  gender?: string;
  size?: string;
  weightMin?: string;
  weightMax?: string;
  specialNeeds?: string;
  hasPhotos?: string;
  sortField: string;
  sortDirection: 'asc' | 'desc';
}

/**
 * Convert Next.js searchParams (Promise) to plain object for dog queries
 * Handles the Promise<{ [key: string]: string | string[] | undefined }> format
 */
export function parseDogSearchParams(searchParams: { [key: string]: string | string[] | undefined }): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === 'string') {
      result[key] = value;
    } else if (Array.isArray(value) && value.length > 0) {
      // Take the first value if it's an array (shouldn't happen for our use case)
      result[key] = value[0];
    }
    // Skip undefined values
  });

  return result;
}

/**
 * Build query string for application export with all current filters
 */
export function buildApplicationExportQuery(params: ApplicationSearchParams, minimal: boolean): string {
  const queryParams: Record<string, string | undefined> = {
    page: params.page.toString(),
    limit: params.limit.toString(),
    status: params.status,
    type: params.type,
    search: params.search,
    sortBy: params.sortBy,
    sortOrder: params.sortOrder,
  };

  if (minimal) {
    queryParams.minimal = 'true';
  }

  return buildQueryString(queryParams);
}
