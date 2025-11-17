import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ApplicationsFiltersProps {
  filters: {
    status: string;
    type: string;
    search: string;
    sortOrder: string;
  };
  onFilterChange: (updates: Record<string, string>) => void;
}

export default function ApplicationsFilters({ filters, onFilterChange }: ApplicationsFiltersProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-2">
        <Label htmlFor="status-filter">Status</Label>
        <Select value={filters.status} onValueChange={(value) => onFilterChange({ status: value })} data-testid="filter-status">
          <SelectTrigger>
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any</SelectItem>
            <SelectItem value="SUBMITTED">Submitted</SelectItem>
            <SelectItem value="IN_REVIEW">In Review</SelectItem>
            <SelectItem value="APPROVED">Approved</SelectItem>
            <SelectItem value="REJECTED">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="type-filter">Type</Label>
        <Select value={filters.type} onValueChange={(value) => onFilterChange({ type: value })} data-testid="filter-type">
          <SelectTrigger>
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="ADOPTER">Adopter</SelectItem>
            <SelectItem value="FOSTER">Foster</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="search-filter">Search</Label>
        <Input
          id="search-filter"
          placeholder="Search by name or email..."
          value={filters.search}
          onChange={(e) => onFilterChange({ search: e.target.value })}
          onBlur={(e) => onFilterChange({ search: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onFilterChange({ search: e.currentTarget.value });
            }
          }}
          data-testid="filter-search"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sort-filter">Sort By</Label>
        <Select
          value={filters.sortOrder}
          onValueChange={(value) => {
            onFilterChange({ sortOrder: value });
          }}
          data-testid="sort-submittedAt"
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Newest First</SelectItem>
            <SelectItem value="asc">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
