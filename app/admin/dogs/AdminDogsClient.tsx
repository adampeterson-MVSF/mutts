"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { RouteReady } from "@/components/testing/RouteReady";
import { DogFilters } from "./_components/DogFilters";
import { DogTableClient } from "./_components/DogTableClient";
import { DogStatus, Gender, DogSize } from "@prisma/client";
import { DogListItem, PaginationMeta } from "@/lib/types";

type FosterProfile = {
  id: string;
  name: string | null;
  email: string;
};

interface AdminDogsClientProps {
  fosters: FosterProfile[];
  uniqueGenders: Gender[];
  uniqueSizes: DogSize[];
  uniqueBreeds: string[];
  uniqueStatuses: DogStatus[];
  dogs: DogListItem[];
  pagination: PaginationMeta;
}

export default function AdminDogsClient({
  fosters,
  uniqueGenders,
  uniqueSizes,
  uniqueBreeds,
  uniqueStatuses,
  dogs,
  pagination,
}: AdminDogsClientProps) {
  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold" data-testid="page-title">Manage Dogs</h1>
          <Button asChild>
            <Link href="/admin/add-dog">
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Dog
            </Link>
          </Button>
        </div>

        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="admin/dogs" />
        )}

        <DogFilters
          fosters={fosters}
          uniqueGenders={uniqueGenders}
          uniqueSizes={uniqueSizes}
          uniqueBreeds={uniqueBreeds}
          uniqueStatuses={uniqueStatuses}
        />

        <DogTableClient dogs={dogs} pagination={pagination} />
      </div>
    </div>
  );
}
