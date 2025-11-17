// lib/url.ts
// URL building utilities

/**
 * Build URL query string from search parameters object
 */
export function buildQueryString(params: Record<string, string | undefined>): string {
  const filteredParams = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== '')
    .reduce((acc, [key, value]) => {
      acc[key] = value!;
      return acc;
    }, {} as Record<string, string>);

  return new URLSearchParams(filteredParams).toString();
}

/**
 * Build full URL with query parameters
 */
export function buildUrl(baseUrl: string, params: Record<string, string | undefined>): string {
  const queryString = buildQueryString(params);
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * Set or delete a parameter in URLSearchParams
 */
export const setParam = (
  searchParams: URLSearchParams,
  key: string,
  value?: string | null,
) => {
  if (value && value.length > 0) {
    searchParams.set(key, value);
  } else {
    searchParams.delete(key);
  }
};
