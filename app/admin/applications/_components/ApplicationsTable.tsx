import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { getAppStatusVariant } from "@/lib/utils";
import { formatDisplayDate } from "@/lib/format";
import { ApplicationListItem } from "@/lib/view-models/applications";
import { missing } from "@/lib/format";

interface ApplicationsTableProps {
  applications: ApplicationListItem[];
  selectedApplicationIds: number[];
  allSelected: boolean;
  indeterminate: boolean;
  onSelectAll: (checked: boolean) => void;
  onSelectApplication: (applicationId: number, checked: boolean) => void;
  totalCount: number;
}

export function ApplicationsTable({
  applications,
  selectedApplicationIds,
  allSelected,
  indeterminate,
  onSelectAll,
  onSelectApplication,
  totalCount,
}: ApplicationsTableProps) {
  return (
    <Table role="table" aria-label="Applications management table" data-testid="admin-applications-table">
      <TableCaption>
        A list of all submitted applications. Showing {applications.length} of {totalCount} applications.
      </TableCaption>
      <TableHeader>
        <TableRow role="row">
          <TableHead className="w-[50px]" role="columnheader" aria-sort="none">
            <Checkbox
              checked={allSelected ? true : indeterminate ? "indeterminate" : false}
              onCheckedChange={(checked) => onSelectAll(checked as boolean)}
              aria-label="Select all applications"
            />
          </TableHead>
          <TableHead role="columnheader" aria-sort="none">Submitted</TableHead>
          <TableHead role="columnheader" aria-sort="none">Name</TableHead>
          <TableHead role="columnheader" aria-sort="none">Email</TableHead>
          <TableHead role="columnheader" aria-sort="none">Type</TableHead>
          <TableHead role="columnheader" aria-sort="none">Status</TableHead>
          <TableHead className="text-right" role="columnheader" aria-sort="none">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app) => (
          <TableRow key={app.id} data-testid="admin-application-row">
            <TableCell>
              <Checkbox
                checked={selectedApplicationIds.includes(app.id)}
                onCheckedChange={(checked) => onSelectApplication(app.id, checked as boolean)}
                aria-label={`Select application from ${missing(app.applicantName, 'Unknown')}`}
              />
            </TableCell>
            <TableCell>
{formatDisplayDate(app.createdAt)}
            </TableCell>
            <TableCell className="font-medium">
              {missing(app.applicantName, 'Unknown')}
            </TableCell>
            <TableCell>{missing(app.applicantEmail, 'Unknown')}</TableCell>
            <TableCell>{app.applicationType}</TableCell>
            <TableCell>
              <Badge variant={getAppStatusVariant(app.status)}>
                {app.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/admin/applications/${app.id}`}>
                  View/Edit
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
