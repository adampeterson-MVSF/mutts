import ApplicationForm from "../_components/ApplicationForm";
import { AppType } from "@prisma/client";
import { RouteReady } from "@/components/testing/RouteReady";

export const dynamic = 'force-dynamic';

export default async function FosterApplicationPage() {
  return (
    <>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="apply/foster" />
      )}
      <ApplicationForm formType={AppType.FOSTER} />
    </>
  );
}
