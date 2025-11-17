import { Suspense } from "react";
import { DogGallery } from "./_components/DogGallery";
import AdoptPagination from "./_components/AdoptPagination";
import { getAvailableDogs } from "@/lib/actions/dog.actions";
import { getUniqueBreeds, getUniqueGenders, getUniqueSizes } from "@/lib/actions/dog.actions";
import DogFilterUI from "./_components/DogFilterUI";
import { RouteReady } from "@/components/testing/RouteReady";
import { parseDogFilters } from "@/lib/dog-filters";
import { getCurrentPage } from "@/lib/url-pagination";


export default async function AdoptPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const rawParams = await searchParams;
  const urlSearchParams = new URLSearchParams();
  Object.entries(rawParams).forEach(([key, value]) => {
    if (value) urlSearchParams.set(key, value);
  });
  const page = getCurrentPage(urlSearchParams);
  const filters = parseDogFilters(urlSearchParams);

  // Fetch data in parallel
  const [
    { dogs, pagination },
    breeds,
    sizes,
    genders
  ] = await Promise.all([
    getAvailableDogs({ page, filters }),
    getUniqueBreeds(),
    getUniqueSizes(),
    getUniqueGenders()
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4">
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="public/adopt" />
      )}
      <h1 className="text-2xl font-semibold mb-4">Meet Our Senior Dogs</h1>

      <Suspense fallback={<div>Loading filters...</div>}>
        <DogFilterUI breeds={breeds} sizes={sizes} genders={genders} />
      </Suspense>

      <DogGallery dogs={dogs} />
      <AdoptPagination
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
        hasNextPage={pagination.hasNextPage}
        hasPrevPage={pagination.hasPrevPage}
      />
    </div>
  );
}
