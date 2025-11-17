// app/admin/shifts/page.tsx

import { RouteReady } from "@/components/testing/RouteReady";
import { AdminShiftsClient } from "./AdminShiftsClient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateShiftDialog } from "./_components/CreateShiftDialog";
import { EditShiftDialog } from "./_components/EditShiftDialog";
import { DeleteShiftButton } from "./DeleteShiftButton";
import { formatShiftTime } from "@/lib/utils";
import { getAllShiftsWithSignups, getDeletedShifts } from "@/lib/actions/shift.actions";


export default async function AdminShiftsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsResolved = await searchParams;
  const showDeleted = searchParamsResolved.showDeleted === "true";

  const [activeShifts, deletedShifts] = await Promise.all([
    getAllShiftsWithSignups(),
    getDeletedShifts(),
  ]);

  const allShifts = [...activeShifts, ...deletedShifts];

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold" data-testid="page-title">Manage Shifts</h1>
        </div>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="admin/shifts" />
      )}

        <div className="flex gap-2">
          <a
            href="/api/shifts/export"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Export Shifts
          </a>
          <CreateShiftDialog />
        </div>

        <AdminShiftsClient showDeleted={showDeleted} />

        {allShifts.length === 0 && (
          <p className="text-center text-muted-foreground mt-8" data-testid="shifts-empty">
            {showDeleted ? "No shifts found." : "No shifts created yet."}
          </p>
        )}

        {allShifts.length > 0 && (
          <Table data-testid="shifts-table">
            <TableCaption>
              A list of {showDeleted ? "all" : "active"} volunteer shifts.
              {showDeleted && deletedShifts.length > 0 && (
                <span className="text-muted-foreground">
                  {" "}{deletedShifts.length} deleted shift{deletedShifts.length !== 1 ? "s" : ""} shown.
                </span>
              )}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Slots (Filled/Max)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allShifts.map((shift) => {
                const isDeleted = shift.status === "DELETED";
                return (
                  <TableRow
                    key={shift.id}
                    className={isDeleted ? "opacity-60" : ""}
                    data-testid={`shift-row-${shift.id}`}
                  >
                    <TableCell className="font-medium">
                      {shift.title}
                      {isDeleted && (
                        <Badge variant="destructive" className="ml-2 text-xs" data-testid="shift-deleted-badge">
                          Deleted
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{formatShiftTime(shift.startsAt, shift.endsAt)}</TableCell>
                    <TableCell data-testid="cell-signups">
                      {shift.signupCount} / {shift.capacity || '∞'}
                      {(shift.capacity && shift.signupCount >= shift.capacity) && (
                        <Badge variant="destructive" className="ml-2 text-xs" data-testid="capacity-warning">
                          Full
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {isDeleted ? (
                        <Badge variant="outline" className="text-muted-foreground">
                          Deleted {shift.deletedAt && new Date(shift.deletedAt).toLocaleDateString()}
                        </Badge>
                      ) : (
                        <Badge variant="default">
                          Active
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right space-x-1">
                      <div data-testid={`shift-row-${shift.id}-actions`}>
                        <a href={`/admin/shifts/${shift.id}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </a>
                        {!isDeleted && <EditShiftDialog shift={shift} />}
                        <DeleteShiftButton shiftId={shift.id} shiftTitle={shift.title} />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
