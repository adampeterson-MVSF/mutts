// app/admin/users/page.tsx

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Edit } from "lucide-react";
import Link from "next/link";
import { getAllUsers } from "@/lib/actions/profile.actions";
import { RouteReady } from "@/components/testing/RouteReady";

export default async function AdminUsersPage() {
  // Fetch all user profiles
  const users = await getAllUsers();

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold" data-testid="page-title">Manage Users</h1>
          <Button asChild variant="outline">
            <Link href="/api/users/export">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Link>
          </Button>
        </div>
        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="admin/users" />
        )}

        <Table data-testid="users-table">
          <TableCaption>A list of all users in the system.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} data-testid={`user-${user.id}-row`}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.name || <span className="text-muted-foreground italic">No name</span>}</TableCell>
                <TableCell>
                  <span data-testid={`user-${user.id}-role-chip`}>{user.role}</span>
                </TableCell>
                <TableCell className="text-right" data-testid={`user-${user.id}-actions`}>
                  <Button data-testid="btn-change-role" variant="outline" size="sm" disabled>
                    <Edit className="h-4 w-4 mr-2" />
                    Change Role
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
