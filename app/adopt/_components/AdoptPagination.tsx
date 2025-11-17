"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useUrlPagination } from "@/lib/url-pagination-client";

interface AdoptPaginationProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default function AdoptPagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
}: AdoptPaginationProps) {
  const { handlePageChange, isPending } = useUrlPagination();

  return (
    <div className="flex items-center justify-center gap-4 mt-8" data-testid="pagination">
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPrevPage || isPending}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>

      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage || isPending}
        aria-label="Next page"
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
}
