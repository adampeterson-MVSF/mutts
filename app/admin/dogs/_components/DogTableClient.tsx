"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { DogTable } from "./DogTable";
import AdoptPagination from "@/app/adopt/_components/AdoptPagination";
import {
  SortField,
  getNextSortDirection,
  parseDogTableSort,
  updateDogTableSortInUrl
} from "@/lib/dog-table";
import { DogListItem, PaginationMeta } from "@/lib/types";

interface DogTableClientProps {
  dogs: DogListItem[];
  pagination: PaginationMeta;
}

export function DogTableClient({ dogs, pagination }: DogTableClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get sort values from URL using typed helper
  const { sortField, sortDirection } = parseDogTableSort(searchParams);

  const handleSort = (field: SortField) => {
    const newSortDirection = getNextSortDirection(sortField, sortDirection, field);
    updateDogTableSortInUrl(router, "", searchParams, {
      sortField: field,
      sortDirection: newSortDirection
    });
  };

  return (
    <>
      <DogTable
        dogs={dogs}
        pagination={pagination}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={handleSort}
      />
      <AdoptPagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        hasNextPage={pagination.hasNextPage}
        hasPrevPage={pagination.hasPreviousPage}
      />
    </>
  );
}
