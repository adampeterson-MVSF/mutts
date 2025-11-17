/**
 * Dog table sorting and filtering constants and utilities
 */

export const SORT_FIELDS = {
  NAME: "name",
  STATUS: "status",
  BREED: "breed",
  AGE: "age",
} as const;

export type SortField = typeof SORT_FIELDS[keyof typeof SORT_FIELDS];

export const SORT_DIRECTIONS = {
  ASC: "asc",
  DESC: "desc",
} as const;

export type SortDirection = typeof SORT_DIRECTIONS[keyof typeof SORT_DIRECTIONS];

/**
 * Canonical parameter names for dog table URL search parameters
 */
export const DOG_TABLE_PARAMS = {
  SORT_FIELD: "sortField",
  SORT_DIRECTION: "sortDirection",
  PAGE: "page",
} as const;

/**
 * Default sort configuration for dog table
 */
export const DEFAULT_SORT = {
  field: SORT_FIELDS.NAME,
  direction: SORT_DIRECTIONS.ASC,
} as const;

/**
 * Toggles sort direction for a given field
 * If sorting by the same field, toggle direction; otherwise default to ascending
 */
export function getNextSortDirection(
  currentField: SortField | undefined,
  currentDirection: SortDirection | undefined,
  newField: SortField
): SortDirection {
  if (currentField === newField && currentDirection === SORT_DIRECTIONS.ASC) {
    return SORT_DIRECTIONS.DESC;
  }
  return SORT_DIRECTIONS.ASC;
}

/**
 * Gets sort icon direction based on current sort state
 */
export function getSortDirection(
  field: SortField,
  currentField: SortField | undefined,
  currentDirection: SortDirection | undefined
): SortDirection | null {
  if (currentField !== field) {
    return null; // No sort icon
  }
  return currentDirection || DEFAULT_SORT.direction;
}

/**
 * Parse dog table sort from URL search parameters
 */
export function parseDogTableSort(searchParams: URLSearchParams): {
  sortField: SortField;
  sortDirection: SortDirection;
} {
  const sortField = (searchParams.get(DOG_TABLE_PARAMS.SORT_FIELD) || DEFAULT_SORT.field) as SortField;
  const sortDirection = (searchParams.get(DOG_TABLE_PARAMS.SORT_DIRECTION) || DEFAULT_SORT.direction) as SortDirection;
  return { sortField, sortDirection };
}

/**
 * Build URL search parameters for dog table sort
 */
export function buildDogTableUrl(
  searchParams: URLSearchParams,
  sortConfig: { sortField: SortField; sortDirection: SortDirection }
): URLSearchParams {
  const params = new URLSearchParams(searchParams);
  params.set(DOG_TABLE_PARAMS.SORT_FIELD, sortConfig.sortField);
  params.set(DOG_TABLE_PARAMS.SORT_DIRECTION, sortConfig.sortDirection);
  return params;
}

/**
 * Update dog table sort in URL using Next.js router
 */
export function updateDogTableSortInUrl(
  router: { push: (url: string) => void }, // Next.js App Router useRouter
  pathname: string,
  searchParams: URLSearchParams,
  sortConfig: { sortField: SortField; sortDirection: SortDirection }
): void {
  const params = buildDogTableUrl(searchParams, sortConfig);
  router.push(`${pathname}?${params.toString()}`);
}
