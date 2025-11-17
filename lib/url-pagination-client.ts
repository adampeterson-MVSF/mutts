"use client";

/**
 * Client-side URL pagination utilities
 */

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export const PAGINATION_PARAMS = {
  PAGE: "page",
} as const;

/**
 * Hook for managing URL-based pagination
 * Provides consistent pagination behavior across the application
 */
export function useUrlPagination() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete(PAGINATION_PARAMS.PAGE);
    } else {
      params.set(PAGINATION_PARAMS.PAGE, page.toString());
    }

    const query = params.toString();
    startTransition(() => {
      router.push(query.length > 0 ? `${pathname}?${query}` : pathname);
    });
  };

  return {
    handlePageChange,
    isPending,
  };
}
