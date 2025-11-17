"use client";

import { RouteReady } from "@/components/testing/RouteReady";
import QuickLogForm from "./_components/QuickLogForm";
import ShiftList from "./_components/ShiftList";
import ActivityList from "./_components/ActivityList";
import { useToast } from "@/components/ui/toast";
import { Dog, Shift } from "@prisma/client";

type ShiftWithCount = Shift & {
  signupCount: number;
};

type ActivityLogWithDog = {
  id: number;
  dogId: number;
  type: string;
  note: string;
  createdByUserId: string;
  createdAt: Date;
  dog: {
    name: string;
  };
  createdByUser: {
    name: string | null;
  };
};

interface VolunteerDashboardClientProps {
  userId: string;
  userName: string;
  shelterDogs: Pick<Dog, 'id' | 'name' | 'status'>[];
  initialShifts: ShiftWithCount[];
  initialUserSignupIds: number[];
  initialLogs: ActivityLogWithDog[];
}

export default function VolunteerDashboardClient({
  userName,
  shelterDogs,
  initialShifts,
  initialUserSignupIds,
  initialLogs,
}: VolunteerDashboardClientProps) {
  const { ToastComponent } = useToast();

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="sr-only" data-testid="page-title">Volunteer Shifts</h1>
        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="volunteer/dashboard" />
        )}
        <div data-testid="welcome-banner">
          <h1 className="text-3xl font-bold mb-2">Welcome, {userName}!</h1>
          <p className="text-muted-foreground">
            This is your volunteer dashboard. Thank you for your help! Find available shifts below.
          </p>
        </div>

        {/* Quick Task Logging */}
        <QuickLogForm dogs={shelterDogs} />

        {/* Recent Activity */}
        <ActivityList initialLogs={initialLogs} />

        {/* Pass initial data directly */}
        <ShiftList
          shifts={initialShifts}
          userSignupIds={initialUserSignupIds}
        />

      </div>
      <ToastComponent />
    </div>
  );
}
