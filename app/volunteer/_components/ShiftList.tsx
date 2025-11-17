// components/volunteer/ShiftList.tsx
"use client";

import { Shift } from "@prisma/client"; // Import types
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ShiftSignupButton from "./ShiftSignupButton";
import ShiftCancelButton from "./ShiftCancelButton";

// Define the shape of Shift data coming from the server (with count)
type ShiftWithCount = Shift & {
  signupCount: number;
};

interface ShiftListProps {
  // Receive state as props instead of initial...
  shifts: ShiftWithCount[];
  userSignupIds: number[];
}

export default function ShiftList({ shifts, userSignupIds }: ShiftListProps) {
  // Create a set for quick lookup of user's signups
  const userSignupSet = new Set(userSignupIds);

  // Filter to only future shifts and sort by start time ascending
  const futureShifts = shifts
    .filter(shift => new Date(shift.endsAt) > new Date())
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());

  // Group shifts by date for better display
  const groupedShifts: { [key: string]: { shifts: ShiftWithCount[]; displayDate: string; testId: string } } = futureShifts.reduce((acc, shift) => {
    const date = new Date(shift.startsAt);
    const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD format for grouping
    const displayDate = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    if (!acc[dateKey]) {
      acc[dateKey] = {
        shifts: [],
        displayDate,
        testId: `shift-group-${dateKey}`
      };
    }
    acc[dateKey].shifts.push(shift);
    return acc;
  }, {} as { [key: string]: { shifts: ShiftWithCount[]; displayDate: string; testId: string } });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Available Shifts</h2>

      {futureShifts.length === 0 && (
        <p className="text-muted-foreground text-center py-4">No upcoming shifts found.</p>
      )}

      {Object.entries(groupedShifts).map(([dateKey, groupData]) => (
        <div key={dateKey} data-testid={groupData.testId}>
          <h3 className="text-lg font-medium mb-3 border-b pb-1">{groupData.displayDate}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupData.shifts.map((shift) => {
              const isFull = shift.capacity ? shift.signupCount >= shift.capacity : false;
              const isSignedUp = userSignupSet.has(shift.id);

              return (
                <Card
                  key={shift.id}
                  className="flex flex-col"
                  data-testid="shift-card"
                  data-shift-id={shift.id}
                >
                  <CardHeader>
                    <CardTitle>{shift.title}</CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <div><strong>Date:</strong> {new Date(shift.startsAt).toLocaleDateString()}</div>
                        <div><strong>Time:</strong> {new Date(shift.startsAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} - {new Date(shift.endsAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</div>
                        <div><strong>Capacity:</strong> {shift.capacity || "Unlimited"}</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-2">
                    <Badge variant={isFull ? "outline" : "secondary"} data-testid={`capacity-${shift.id}`}>
                      Slots: {shift.signupCount} / {shift.capacity || "Unlimited"}
                    </Badge>
                  </CardContent>
                  <CardFooter>
                    {isSignedUp ? (
                      <ShiftCancelButton shiftId={shift.id} />
                    ) : (
                      <ShiftSignupButton shiftId={shift.id} isFull={isFull} />
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
