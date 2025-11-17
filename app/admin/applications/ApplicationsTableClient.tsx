"use client";

import AdoptPagination from "@/app/adopt/_components/AdoptPagination";
import { useApplicationsFilters } from "@/lib/hooks/useApplicationsFilters";
import { useApplicationsSelection } from "@/lib/hooks/useApplicationsSelection";
import ApplicationsFilters from "./_components/ApplicationsFilters";
import { ApplicationsTable } from "./_components/ApplicationsTable";
import BulkActionsBar from "./_components/BulkActionsBar";
import { ApplicationListItem } from "@/lib/view-models/applications";

interface ApplicationsTableClientProps {
  initialApplications: ApplicationListItem[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export default function ApplicationsTableClient({
  initialApplications,
  pagination,
}: ApplicationsTableClientProps) {
  const { filters, updateSearchParams } = useApplicationsFilters();
  const {
    selectedApplicationIds,
    handleSelectAll,
    handleSelectApplication,
    isAllSelected,
    isIndeterminate,
  } = useApplicationsSelection();

  // Applications are now pre-filtered from server
  const filteredApplications = initialApplications;

  // Calculate selection state based on data and hook state
  const allSelected = isAllSelected(filteredApplications.length);
  const indeterminate = isIndeterminate(filteredApplications.length);


  return (
    <div className="space-y-6">
      {/* Filters */}
      <ApplicationsFilters filters={filters} onFilterChange={updateSearchParams} />

      {/* Bulk Actions Bar */}
      {selectedApplicationIds.length > 0 && (
        <BulkActionsBar selectedApplicationIds={selectedApplicationIds} />
      )}


      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredApplications.length} of {pagination.totalCount} applications (Page {pagination.currentPage} of {pagination.totalPages})
      </div>

      <ApplicationsTable
        applications={filteredApplications}
        selectedApplicationIds={selectedApplicationIds}
        allSelected={allSelected}
        indeterminate={indeterminate}
        onSelectAll={(checked) => handleSelectAll(checked, filteredApplications)}
        onSelectApplication={handleSelectApplication}
        totalCount={pagination.totalCount}
      />
      {filteredApplications.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          {pagination.totalCount === 0
            ? "No applications submitted yet."
            : "No applications match your current filters."}
        </p>
      )}

      <AdoptPagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        hasNextPage={pagination.hasNextPage}
        hasPrevPage={pagination.hasPreviousPage}
      />
    </div>
  );
}
