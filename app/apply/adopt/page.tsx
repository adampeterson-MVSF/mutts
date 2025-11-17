import ApplicationForm from "../_components/ApplicationForm";
import { AppType } from "@prisma/client";
import { RouteReady } from "@/components/testing/RouteReady";

export const dynamic = 'force-dynamic';

export default async function AdoptionApplicationPage({ searchParams }: { searchParams: Promise<{ dogId?: string }> }) {
  // Await searchParams first
  const params = await searchParams;

  const dogId = params.dogId ? parseInt(params.dogId) : undefined;

  return (
    <>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="apply/adopt" />
      )}
      <ApplicationForm formType={AppType.ADOPTER} dogId={dogId} />
    </>
  );
}
