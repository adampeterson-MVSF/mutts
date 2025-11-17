"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { humanizeEnum } from "@/lib/utils";
import { DogStatus, Gender, DogSize } from "@prisma/client";
import {
  parseAdminDogFilters,
  updateAdminDogFiltersInUrl,
  FOSTER_FILTER_VALUES
} from "@/lib/dog-filters";

type FosterProfile = {
  id: string;
  name: string | null;
  email: string;
};

interface DogFiltersProps {
  fosters: FosterProfile[];
  uniqueGenders: Gender[];
  uniqueSizes: DogSize[];
  uniqueBreeds: string[];
  uniqueStatuses: DogStatus[];
}

export function DogFilters({
  fosters,
  uniqueGenders,
  uniqueSizes,
  uniqueBreeds,
  uniqueStatuses,
}: DogFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get filter values from URL using helpers
  const filters = parseAdminDogFilters(searchParams);

  // Use the complete list of fosters passed from server
  const uniqueFosters = fosters;

  /**
   * Updates URL search parameters for filtering the admin dogs page using helpers.
   */
  const updateFilters = (patch: Partial<typeof filters>) => {
    updateAdminDogFiltersInUrl(router, pathname, filters, patch);
  };

  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
      <div className="space-y-2">
        <Label htmlFor="status-filter">Status</Label>
        <select
          value={filters.status}
          onChange={(e) => updateFilters({ status: e.target.value as DogStatus | "all" })}
          data-testid="status-filter"
          className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
        >
          <option value="all">All Statuses</option>
          {uniqueStatuses.map((status) => (
            <option key={status} value={status}>
              {humanizeEnum(status)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="foster-filter">Foster</Label>
        <select
          value={filters.fosterProfileId}
          onChange={(e) => updateFilters({ fosterProfileId: e.target.value })}
          data-testid="foster-filter"
          className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
        >
          <option value={FOSTER_FILTER_VALUES.ALL}>All Fosters</option>
          <option value={FOSTER_FILTER_VALUES.NONE}>No Foster</option>
          {uniqueFosters.map((foster) => (
            <option key={foster.id} value={foster.id}>
              {foster.name || foster.email}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="breed-filter">Breed</Label>
        <select
          value={filters.breed}
          onChange={(e) => updateFilters({ breed: e.target.value })}
          data-testid="breed-filter"
          className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
        >
          <option value="all">All Breeds</option>
          {uniqueBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender-filter">Gender</Label>
        <select
          value={filters.gender}
          onChange={(e) => updateFilters({ gender: e.target.value as Gender | "all" })}
          data-testid="gender-filter"
          className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
        >
          <option value="all">All Genders</option>
          {uniqueGenders.map((gender) => (
            <option key={gender} value={gender}>
              {humanizeEnum(gender)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="size-filter">Size</Label>
        <select
          value={filters.size}
          onChange={(e) => updateFilters({ size: e.target.value as DogSize | "all" })}
          data-testid="size-filter"
          className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
        >
          <option value="all">All Sizes</option>
          {uniqueSizes.map((size) => (
            <option key={size} value={size}>
              {humanizeEnum(size)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="weight-min">Weight Min (lbs)</Label>
        <Input
          id="weight-min"
          type="number"
          placeholder="Min weight"
          value={filters.weightMin}
          onChange={(e) => updateFilters({ weightMin: e.target.value })}
          className="h-10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="weight-max">Weight Max (lbs)</Label>
        <Input
          id="weight-max"
          type="number"
          placeholder="Max weight"
          value={filters.weightMax}
          onChange={(e) => updateFilters({ weightMax: e.target.value })}
          className="h-10"
        />
      </div>
    </div>
  );
}
