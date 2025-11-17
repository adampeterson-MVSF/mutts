// app/admin/applications/[id]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ApplicationStatusEditor from "./ApplicationStatusEditor";
import { getApplicationById } from "@/lib/actions/application.actions";
import { getAppStatusVariant } from "@/lib/utils";
import { ApplicantInformation } from "../_components/ApplicantInformation";
import { VetInformation } from "../_components/VetInformation";
import { HomeEnvironment } from "../_components/HomeEnvironment";
import { ReferencesSection } from "../_components/ReferencesSection";
import ApplicationHistoryList from "./ApplicationHistoryList";
import { getApplicationHistory } from "@/lib/actions/application.actions";
import { ClientTimestamp } from "@/components/ClientTimestamp";
import { RouteReady } from "@/components/testing/RouteReady";
import { missing } from "@/lib/format";

export default async function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Fetch application data
  const { id } = await params;
  const appIdNum = parseInt(id, 10);
  if (isNaN(appIdNum)) {
    notFound();
  }

  const application = await getApplicationById(appIdNum);
  const history = (await getApplicationHistory(appIdNum)).map((audit) => ({
    ...audit,
    createdAt: audit.createdAt.toISOString(),
  }));

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="admin/application-detail" />
      )}
      <div className="w-full max-w-4xl">
        <Button variant="outline" asChild className="mb-4" data-testid="link-back">
             <Link href="/admin/applications">Back to Applications</Link>
         </Button>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{missing(application.applicantName, 'Unknown Applicant')}</CardTitle>
                <CardDescription>
                  {missing(application.applicantEmail, 'Unknown Email')} - Submitted on <ClientTimestamp date={application.createdAt.toISOString()} />
                </CardDescription>
              </div>
              <Badge variant={getAppStatusVariant(application.status)} data-testid="status-badge">{application.status}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ApplicantInformation application={application} />
            <VetInformation application={application} />
            <HomeEnvironment application={application} />
            <ReferencesSection references={application.references} />

            {/* Display Dog Information if specified */}
            {application.dog && (
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Dog of Interest</h3>
                <div className="bg-muted p-3 rounded-md">
                  <p className="font-medium">{application.dog.name}</p>
                  <p className="text-sm text-muted-foreground">Status: {application.dog.status}</p>
                  {application.dog.bioPublic && <p className="text-sm mt-2">{application.dog.bioPublic}</p>}
                </div>
              </div>
            )}

             {/* Display Reason */}
             {application.reason && (
                <div className="border-t pt-4">
                    <h3 className="font-semibold mb-2">Reason for {application.applicationType === 'FOSTER' ? 'Fostering' : 'Adopting'}</h3>
                   <p className="whitespace-pre-wrap bg-muted p-3 rounded-md">{application.reason}</p>
                </div>
             )}

            {/* Status Update Section */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-2">Update Status</h3>
              <ApplicationStatusEditor application={application} />
            </div>

            {/* History Section */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-2">Status History</h3>
              <ApplicationHistoryList history={history} />
            </div>


          </CardContent>
        </Card>
      </div>
    </div>
  );
}
