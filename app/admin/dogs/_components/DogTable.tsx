import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DogTableRow } from "./DogTableRow";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  SORT_FIELDS,
  SortField,
  SortDirection,
  getSortDirection
} from "@/lib/dog-table";
import { DogListItem, PaginationMeta } from "@/lib/types";

interface DogTableProps {
  dogs: DogListItem[];
  pagination: PaginationMeta;
  sortField?: SortField;
  sortDirection?: SortDirection;
  onSort: (field: SortField) => void;
}

export function DogTable({
  dogs,
  pagination,
  sortField,
  sortDirection,
  onSort
}: DogTableProps) {
  const getSortIcon = (field: SortField) => {
    const direction = getSortDirection(field, sortField, sortDirection);
    if (direction === null) return <ArrowUpDown className="h-4 w-4" />;
    return direction === "asc" ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  return (
    <>
      <Table>
        <TableCaption>
          A list of all dogs in your system. Showing {`${dogs.length} of ${pagination.totalCount} dogs`}.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]" data-testid="table-header-image">Image</TableHead>
            <TableHead data-testid="table-header-name">
              <Button
                variant="ghost"
                className="h-auto p-0 font-semibold hover:bg-transparent"
                onClick={() => onSort(SORT_FIELDS.NAME)}
              >
                Name {getSortIcon(SORT_FIELDS.NAME)}
              </Button>
            </TableHead>
            <TableHead data-testid="table-header-status">
              <Button
                variant="ghost"
                className="h-auto p-0 font-semibold hover:bg-transparent"
                onClick={() => onSort(SORT_FIELDS.STATUS)}
              >
                Status {getSortIcon(SORT_FIELDS.STATUS)}
              </Button>
            </TableHead>
            <TableHead data-testid="table-header-foster">Foster</TableHead>
            <TableHead data-testid="table-header-breed">
              <Button
                variant="ghost"
                className="h-auto p-0 font-semibold hover:bg-transparent"
                onClick={() => onSort(SORT_FIELDS.BREED)}
              >
                Breed {getSortIcon(SORT_FIELDS.BREED)}
              </Button>
            </TableHead>
            <TableHead data-testid="table-header-age">
              <Button
                variant="ghost"
                className="h-auto p-0 font-semibold hover:bg-transparent"
                onClick={() => onSort(SORT_FIELDS.AGE)}
              >
                Age {getSortIcon(SORT_FIELDS.AGE)}
              </Button>
            </TableHead>
            <TableHead data-testid="table-header-gender">Gender</TableHead>
            <TableHead data-testid="table-header-size">Size</TableHead>
            <TableHead data-testid="table-header-weight">Weight (lbs)</TableHead>
            <TableHead className="text-right" data-testid="table-header-actions">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dogs.map((dog) => (
            <DogTableRow key={dog.id} dog={dog} />
          ))}
        </TableBody>
      </Table>
        {dogs.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            {pagination.totalCount === 0
              ? "No dogs in the system. Get started by adding one!"
              : "No dogs match your current filters."}
          </p>
        )}
    </>
  );
}
