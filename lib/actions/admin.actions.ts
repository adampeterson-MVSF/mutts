// lib/actions/admin.actions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole, AppStatus } from "@prisma/client";

export async function getDashboardCounts() {
  await assertRole([UserRole.ADMIN, UserRole.STAFF]);

  const [
    applications,
    users,
    dogs,
    fosters,
    shifts,
    events,
  ] = await Promise.all([
    // Applications by status
    prisma.application.groupBy({
      by: ['status'],
      _count: { status: true },
    }),
    // Users by role
    prisma.profile.groupBy({
      by: ['role'],
      _count: { role: true },
    }),
    // Total dogs
    prisma.dog.count(),
    // Total fosters
    prisma.fosterProfile.count(),
    // Total shifts (active)
    prisma.shift.count({
      where: { status: "ACTIVE" },
    }),
    // Total events
    prisma.event.count(),
  ]);

  // Transform applications counts
  const applicationCounts = applications.reduce((acc: Record<AppStatus, number>, curr: { status: AppStatus; _count: { status: number } }) => {
    acc[curr.status] = curr._count.status;
    return acc;
  }, {} as Record<AppStatus, number>);

  // Transform user counts
  const userCounts = users.reduce((acc: Record<UserRole, number>, curr: { role: UserRole; _count: { role: number } }) => {
    acc[curr.role] = curr._count.role;
    return acc;
  }, {} as Record<UserRole, number>);

  return {
    applications: applicationCounts,
    users: userCounts,
    dogs,
    fosters,
    shifts,
    events,
  };
}
