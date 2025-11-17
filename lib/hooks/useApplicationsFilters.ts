import { useSearchParams, useRouter } from "next/navigation";

export function useApplicationsFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get filter values from URL
  const statusFilter = searchParams.get("status") || "all";
  const typeFilter = searchParams.get("type") || "all";
  const searchFilter = searchParams.get("search") || "";
  const sortOrder = searchParams.get("sortOrder") || "desc";

  const updateSearchParams = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === "all" || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    params.set("page", "1"); // Reset to first page when filtering
    router.push(`?${params.toString()}`);
  };

  return {
    filters: {
      status: statusFilter,
      type: typeFilter,
      search: searchFilter,
      sortOrder,
    },
    updateSearchParams,
  };
}
