// app/admin/applications/page.tsx

import { getAllApplications } from "@/lib/actions/application.actions";
import ApplicationsTableClient from "./ApplicationsTableClient";
import ExportCSVButton from "./ExportCSVButton";
import { RouteReady } from "@/components/testing/RouteReady";
import { parseApplicationSearchParams } from "@/lib/url-pagination";


export default async function AdminApplicationsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const resolvedSearchParams = await searchParams;
  const appData = await getAllApplications(resolvedSearchParams);
  const parsedSearchParams = parseApplicationSearchParams(resolvedSearchParams);
  const applications = appData.applications;

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold" data-testid="page-title">Manage Applications</h1>
          <ExportCSVButton searchParams={parsedSearchParams} />
        </div>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="admin/applications" />
      )}

        <ApplicationsTableClient initialApplications={applications} pagination={appData.pagination} />
      </div>
    </div>
  );
}
