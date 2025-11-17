"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RouteReady } from "@/components/testing/RouteReady";
import { Users, FileText, Heart, UserCheck, Calendar, PartyPopper } from "lucide-react";
import Link from "next/link";

interface DashboardCounts {
  applications: Record<string, number>;
  users: Record<string, number>;
  dogs: number;
  fosters: number;
  shifts: number;
  events: number;
}

interface AdminDashboardClientProps {
  counts: DashboardCounts;
}

export default function AdminDashboardClient({ counts }: AdminDashboardClientProps) {
  return (
    <div className="flex-1 w-full flex flex-col items-center p-8" data-testid="admin-dashboard">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold" data-testid="page-title">Admin Dashboard</h1>
        </div>
        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="admin" />
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Applications */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Object.values(counts.applications).reduce((a, b) => a + b, 0)}</div>
              <p className="text-xs text-muted-foreground">
                Submitted: {counts.applications.SUBMITTED || 0} |
                In Review: {counts.applications.IN_REVIEW || 0} |
                Approved: {counts.applications.APPROVED || 0} |
                Rejected: {counts.applications.REJECTED || 0}
              </p>
              <Link href="/admin/applications" className="text-sm text-blue-600 hover:underline">
                Manage Applications →
              </Link>
            </CardContent>
          </Card>

          {/* Users */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Object.values(counts.users).reduce((a, b) => a + b, 0)}</div>
              <p className="text-xs text-muted-foreground">
                Admin: {counts.users.ADMIN || 0} |
                Staff: {counts.users.STAFF || 0} |
                Volunteer: {counts.users.VOLUNTEER || 0}
              </p>
              <Link href="/admin/users" className="text-sm text-blue-600 hover:underline">
                Manage Users →
              </Link>
            </CardContent>
          </Card>

          {/* Dogs */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dogs</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts.dogs}</div>
              <p className="text-xs text-muted-foreground">
                Total dogs in the system
              </p>
              <Link href="/admin/dogs" className="text-sm text-blue-600 hover:underline">
                Manage Dogs →
              </Link>
            </CardContent>
          </Card>

          {/* Fosters */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fosters</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts.fosters}</div>
              <p className="text-xs text-muted-foreground">
                Available foster homes
              </p>
              <Link href="/admin/fosters" className="text-sm text-blue-600 hover:underline">
                Manage Fosters →
              </Link>
            </CardContent>
          </Card>

          {/* Shifts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shifts</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts.shifts}</div>
              <p className="text-xs text-muted-foreground">
                Active volunteer shifts
              </p>
              <Link href="/admin/shifts" className="text-sm text-blue-600 hover:underline">
                Manage Shifts →
              </Link>
            </CardContent>
          </Card>

          {/* Events */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events</CardTitle>
              <PartyPopper className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts.events}</div>
              <p className="text-xs text-muted-foreground">
                Upcoming events
              </p>
              <Link href="/admin/events" className="text-sm text-blue-600 hover:underline">
                Manage Events →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
