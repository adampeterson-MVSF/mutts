// app/volunteer/page.tsx

// This is a Server Component by default

import { RouteReady } from "@/components/testing/RouteReady";
import { getShelterDogs } from "@/lib/actions/dog.actions";
import { getAllShiftsWithSignups } from "@/lib/actions/shift.actions";
import { getUserProfile, getUserSignupIds } from "@/lib/actions/profile.actions";
import { getCurrentUserId } from "@/lib/actions/audit.actions";
import { getUserActivityLogs } from "@/lib/actions/log.actions";
import { UserRole } from "@prisma/client";
import VolunteerDashboardClient from "./VolunteerDashboardClient";

export default async function VolunteerDashboard() {
  const userId = await getCurrentUserId();

  // Fetch user's profile to get role and name
  const profile = await getUserProfile(userId);
  const userRole = profile?.role;
  const userName = profile?.name || 'Volunteer';

  // If not a volunteer, show read-only view
  if (userRole !== UserRole.VOLUNTEER) {
    return (
      <div className="flex-1 w-full flex flex-col items-center p-8">
        <div className="w-full max-w-6xl space-y-8">
          <h1 className="sr-only" data-testid="page-title">Volunteer Shifts</h1>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="volunteer/dashboard" />
      )}
          <div data-testid="welcome-banner">
            <h1 className="text-3xl font-bold mb-2">Volunteer Tools - Read Only</h1>
            <p className="text-muted-foreground">
              As an admin/staff member, you can view volunteer tools but cannot sign up for shifts or log tasks.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fetch dogs currently at the shelter (not adopted)
  const shelterDogs = await getShelterDogs();

  // Fetch shifts with signup counts
  const shiftsWithCount = await getAllShiftsWithSignups();

  // Fetch user's shift signups
  const userSignupIds = await getUserSignupIds(userId);

  // Fetch user's recent activity logs
  const activityLogs = await getUserActivityLogs(userId);

  return (
    <VolunteerDashboardClient
      userId={userId}
      userName={userName}
      shelterDogs={shelterDogs}
      initialShifts={shiftsWithCount}
      initialUserSignupIds={userSignupIds}
      initialLogs={activityLogs}
    />
  );
}
