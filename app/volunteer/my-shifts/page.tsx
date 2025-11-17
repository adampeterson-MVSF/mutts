// app/volunteer/my-shifts/page.tsx

import { Suspense } from "react";
import { RouteReady } from "@/components/testing/RouteReady";
import { MyShiftsContent } from "./MyShiftsContent";
import { getCurrentUserId } from "@/lib/actions/audit.actions";

export default async function MyShiftsPage() {
  const userId = await getCurrentUserId();

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6" data-testid="page-title">My Upcoming Shifts</h1>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="volunteer/my-shifts" />
      )}
        <Suspense fallback={<div className="text-center text-muted-foreground py-4">Loading your shifts...</div>}>
          <MyShiftsContent userId={userId} />
        </Suspense>
      </div>
    </div>
  );
}
