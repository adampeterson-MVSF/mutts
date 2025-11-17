"use client";

import { useCallback, useEffect, useRef, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setParam } from "@/lib/url";

type FosterFiltersClientProps = Record<string, never>;

export default function FosterFiltersClient({}: FosterFiltersClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const lastSearchParamsRef = useRef(searchParams.toString());
  const pendingQueryRef = useRef<string | null>(null);

  useEffect(() => {
    const currentQuery = searchParams.toString();
    lastSearchParamsRef.current = currentQuery;

    if (pendingQueryRef.current !== null && pendingQueryRef.current !== currentQuery) {
      const nextQuery = pendingQueryRef.current;
      startTransition(() => {
        router.push(nextQuery.length > 0 ? `${pathname}?${nextQuery}` : pathname);
      });
    } else {
      pendingQueryRef.current = null;
    }
  }, [pathname, router, searchParams, startTransition]);

  const handleParamChange = useCallback(
    (key: string, value?: string | null) => {
      const params = new URLSearchParams(lastSearchParamsRef.current);
      setParam(params, key, value);

      const query = params.toString();
      pendingQueryRef.current = query;
      lastSearchParamsRef.current = query;
      startTransition(() => {
        router.push(query.length > 0 ? `${pathname}?${query}` : pathname);
      });
    },
    [pathname, router, startTransition],
  );

  const getSelectValue = (value?: boolean) => {
    if (value === true) return "true";
    if (value === false) return "false";
    return "any";
  };

  const currentHasCats = searchParams.get("hasCats") === "true";
  const currentHasDogs = searchParams.get("hasDogs") === "true";
  const currentCanAdministerMeds = searchParams.get("canAdministerMeds") === "true";

  const clearFilters = () => {
    router.push(pathname);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg bg-muted/20">
      <div className="space-y-2">
        <Label htmlFor="hasCats" className="text-sm">Comfortable with Cats</Label>
        <Select
          value={getSelectValue(currentHasCats)}
          onValueChange={(value) =>
            handleParamChange("hasCats", value === "true" ? "true" : null)
          }
          disabled={isPending}
        >
          <SelectTrigger data-testid="filter-has-cats">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="true">Yes</SelectItem>
            <SelectItem value="false">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hasDogs" className="text-sm">Has Resident Dogs</Label>
        <Select
          value={getSelectValue(currentHasDogs)}
          onValueChange={(value) =>
            handleParamChange("hasDogs", value === "true" ? "true" : null)
          }
          disabled={isPending}
        >
          <SelectTrigger data-testid="filter-has-dogs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="true">Yes</SelectItem>
            <SelectItem value="false">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="canAdministerMeds" className="text-sm">Can Administer Meds</Label>
        <Select
          value={getSelectValue(currentCanAdministerMeds)}
          onValueChange={(value) =>
            handleParamChange("canAdministerMeds", value === "true" ? "true" : null)
          }
          disabled={isPending}
        >
          <SelectTrigger data-testid="filter-can-administer-meds">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="true">Yes</SelectItem>
            <SelectItem value="false">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-end justify-end gap-3">
        {isPending && (
          <span className="text-sm text-muted-foreground" role="status">
            Updating filters…
          </span>
        )}
        {(currentHasCats || currentHasDogs || currentCanAdministerMeds) && (
          <Button
            variant="ghost"
            type="button"
            onClick={clearFilters}
            disabled={isPending}
            aria-label="Clear selected filters"
          >
            Clear filters
          </Button>
        )}
      </div>
    </div>
  );
}
