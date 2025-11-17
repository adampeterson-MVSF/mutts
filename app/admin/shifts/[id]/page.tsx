// app/admin/shifts/[id]/page.tsx

import { getShiftWithSignups } from "@/lib/actions/shift.actions";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { formatShiftTime } from "@/lib/utils";
import { RouteReady } from "@/components/testing/RouteReady";
import { ClientTimestamp } from "@/components/ClientTimestamp";

interface ShiftDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ShiftDetailsPage({ params }: ShiftDetailsPageProps) {
  const { id } = await params;
  const shiftId = parseInt(id);
  if (isNaN(shiftId)) {
    redirect('/admin/shifts');
  }

  // Get the shift with signup information
  const shift = await getShiftWithSignups(shiftId);
  if (!shift) {
    redirect('/admin/shifts');
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8" data-testid="shift-details">
      <div className="w-full max-w-4xl space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/shifts">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shifts
            </Button>
          </Link>
          <h1 className="text-3xl font-bold" data-testid="page-title">Shift Details</h1>
        </div>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="admin/shifts/[id]" />
      )}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Title</h2>
              <p className="text-lg font-medium">{shift.title}</p>
            </div>

            {shift.description && (
              <div data-testid="shift-description">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground">{shift.description}</p>
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold mb-2">Time</h2>
              <p>{formatShiftTime(shift.startsAt, shift.endsAt)}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Capacity</h2>
              <p>{shift.capacity ? `${shift.capacity} volunteers maximum` : "Unlimited capacity"}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div data-testid="shift-volunteers">
              <h2 className="text-xl font-semibold mb-2">Volunteers</h2>
              {shift.signups && shift.signups.length > 0 ? (
                <ul className="space-y-2">
                  {shift.signups.map((signup) => (
                    <li key={signup.id} className="flex items-center justify-between p-2 border rounded">
                      <span>{signup.volunteer.name}</span>
                      <span className="text-sm text-muted-foreground">
                        Signed up <ClientTimestamp date={signup.signupTime.toISOString()} />
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No volunteers signed up yet.</p>
              )}
            </div>

            <div data-testid="shift-signups">
              <h2 className="text-xl font-semibold mb-2">Signups</h2>
              <p className="text-2xl font-bold" data-testid="shift-signups-count">
                {shift.signups?.length || 0} / {shift.capacity || '∞'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
