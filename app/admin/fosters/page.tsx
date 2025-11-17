import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FosterFiltersClient from "./FosterFiltersClient";
import AdoptPagination from "@/app/adopt/_components/AdoptPagination";
import { getFosterProfiles } from "@/lib/actions/foster.actions";
import { missing } from "@/lib/format";
import FosterExportButton from "./FosterExportButton";
import { RouteReady } from "@/components/testing/RouteReady";
import { parsePageParam } from "@/lib/url-pagination";

const formatBoolean = (value: boolean) => (value ? "Yes" : "No");

function parseOptionalBoolean(raw?: string): boolean | undefined {
  if (raw === "true") return true;
  if (raw === "false") return false;
  return undefined;
}

interface FosterFilters {
  hasCats?: boolean;
  hasDogs?: boolean;
  canAdministerMeds?: boolean;
}

export default async function FosterManagementPage({
  searchParams,
}: {
  searchParams: Promise<{
    hasCats?: string;
    hasDogs?: string;
    canAdministerMeds?: string;
    page?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  // Parse page from search params
  const page = parsePageParam(resolvedSearchParams.page);

  // Parse filters from search params
  const filters: FosterFilters = {
    hasCats: parseOptionalBoolean(resolvedSearchParams.hasCats),
    hasDogs: parseOptionalBoolean(resolvedSearchParams.hasDogs),
    canAdministerMeds: parseOptionalBoolean(resolvedSearchParams.canAdministerMeds),
  };

  const { fosterProfiles, pagination } = await getFosterProfiles({
    page,
    ...filters,
  });

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold" data-testid="page-title">Foster Home Management</h1>
            <p className="text-muted-foreground">
              Track approved foster homes and their capabilities.
            </p>
          </div>
          <FosterExportButton filters={filters} />
        </div>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="admin/fosters" />
      )}

        {/* Filters */}
        <FosterFiltersClient />

        {/* Results count */}
        <div className="text-sm text-muted-foreground">
          Showing {fosterProfiles.length} of {pagination.totalCount} foster profiles (Page {pagination.currentPage} of {pagination.totalPages})
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableCaption>
              {Object.values(filters).some(f => f !== undefined)
                ? `Filtered foster homes (${pagination.totalCount} total).`
                : `All approved foster homes (${pagination.totalCount}).`
              }
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Has Cats</TableHead>
                <TableHead>Has Dogs</TableHead>
                <TableHead>Can Administer Meds</TableHead>
                <TableHead>Assigned Dogs</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fosterProfiles.map((profile) => (
                <TableRow key={profile.profileId}>
                  <TableCell>{missing(profile.profile?.name, "Unknown")}</TableCell>
                  <TableCell className="break-all">{profile.profile?.email ?? "—"}</TableCell>
                  <TableCell>
                    <Badge variant={profile.hasCats ? "default" : "outline"}>
                      {formatBoolean(profile.hasCats)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={profile.hasDogs ? "default" : "outline"}>
                      {formatBoolean(profile.hasDogs)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={profile.canAdministerMeds ? "default" : "outline"}
                    >
                      {formatBoolean(profile.canAdministerMeds)}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    {profile.dogs && profile.dogs.length > 0
                      ? profile.dogs.map((dog: { name: string }) => dog.name).join(", ")
                      : "—"
                    }
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    {profile.notes ?? "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" asChild data-testid="btn-edit-foster">
                      <Link href={`/admin/fosters/${profile.profileId}`}>
                        Edit
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {fosterProfiles.length === 0 && (
          <p className="text-center text-muted-foreground">
            {pagination.totalCount === 0
              ? "No foster profiles have been approved yet."
              : "No foster profiles match your current filters."
            }
          </p>
        )}

        <AdoptPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          hasNextPage={pagination.hasNextPage}
          hasPrevPage={pagination.hasPreviousPage}
        />
      </div>
    </div>
  );
}
