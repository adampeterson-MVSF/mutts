"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DogSize, Gender } from "@prisma/client";
import {
  parseDogFilters,
  hasActiveFilters,
  updateDogFiltersInUrl,
  type DogFilters,
} from "@/lib/dog-filters";
import { missing } from "@/lib/format";

type DogFilterUIProps = {
  breeds: string[];
  sizes: DogSize[];
  genders: Gender[];
};

export default function DogFilterUI({ breeds, sizes, genders }: DogFilterUIProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleParamChange = (patch: Partial<DogFilters>) => {
    const current = parseDogFilters(searchParams); // always current
    updateDogFiltersInUrl(router, pathname, current, patch);
  };

  const currentFilters = parseDogFilters(searchParams);

  const clearFilters = () => {
    router.push(pathname);
  };

  return (
    <form
      className="relative z-20 mb-8 grid gap-4 rounded-lg border border-border bg-card/50 p-6 shadow-sm"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="breed">Breed</Label>
          <select
            id="breed"
            value={currentFilters.breed || ""}
            onChange={(e) =>
              handleParamChange({ breed: e.target.value || undefined })
            }
            data-testid="filter-breed"
            className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
          >
            <option value="">All breeds</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="size">Size</Label>
          <select
            id="size"
            value={currentFilters.size || ""}
            onChange={(e) =>
              handleParamChange({ size: e.target.value as DogSize || undefined })
            }
            data-testid="filter-size"
            className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
          >
            <option value="">All sizes</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size.charAt(0).toUpperCase() + size.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="gender">Gender</Label>
          <select
            id="gender"
            value={currentFilters.gender || ""}
            onChange={(e) =>
              handleParamChange({ gender: e.target.value as Gender || undefined })
            }
            className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
          >
            <option value="">All genders</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender === 'MALE' ? 'Male' : gender === 'FEMALE' ? 'Female' : missing(null, 'Unknown')}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col justify-end gap-2">
          <Label htmlFor="specialNeeds" className="text-sm font-medium">
            Special Needs
          </Label>
          <div className="flex items-center gap-2">
            <Checkbox
              id="specialNeeds"
              data-testid="filter-special-needs"
              checked={currentFilters.specialNeeds === "true"}
              onCheckedChange={(value) =>
                handleParamChange({ specialNeeds: value ? "true" : undefined })
              }
            />
            <span className="text-sm text-muted-foreground">
              Show only dogs with special needs
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-2">
          <Label htmlFor="hasPhotos" className="text-sm font-medium">
            Has Photos
          </Label>
          <div className="flex items-center gap-2">
            <Checkbox
              id="hasPhotos"
              checked={currentFilters.hasPhotos === "true"}
              onCheckedChange={(value) =>
                handleParamChange({ hasPhotos: value ? "true" : undefined })
              }
            />
            <span className="text-sm text-muted-foreground">
              Show only dogs with photos
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3">
        {hasActiveFilters(currentFilters) && (
          <Button
            variant="ghost"
            type="button"
            onClick={clearFilters}
            aria-label="Clear selected filters"
          >
            Clear filters
          </Button>
        )}
      </div>
    </form>
  );
}
