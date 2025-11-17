// app/admin/dogs/page.tsx

import {
  getPotentialFosters,
  getUniqueGenders,
  getUniqueSizes,
  getUniqueBreeds,  // ADD THIS
  getUniqueStatuses, // ADD THIS
  getAllDogs
} from "@/lib/actions/dog.actions";
import AdminDogsClient from "./AdminDogsClient";
import { parseDogSearchParams } from "@/lib/url-pagination";

export default async function AdminDogsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  // Delegate search params parsing to shared helper
  const searchParamsObj = parseDogSearchParams(resolvedSearchParams);

  const [fosters, uniqueGenders, uniqueSizes, uniqueBreeds, uniqueStatuses, dogsResult] = await Promise.all([
    getPotentialFosters(),
    getUniqueGenders(),
    getUniqueSizes(),
    getUniqueBreeds(),  // ADD THIS
    getUniqueStatuses(), // ADD THIS
    getAllDogs(searchParamsObj)
  ]);

  return (
    <AdminDogsClient
      fosters={fosters}
      uniqueGenders={uniqueGenders}
      uniqueSizes={uniqueSizes}
      uniqueBreeds={uniqueBreeds}   // ADD THIS
      uniqueStatuses={uniqueStatuses} // ADD THIS
      dogs={dogsResult.dogs}
      pagination={dogsResult.pagination}
    />
  );
}
