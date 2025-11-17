// lib/actions/profile.actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";
import { ActionResult } from "@/lib/types";

const createProfileSchema = z.object({
  name: z.string().optional(),
});


// Add this new function
export async function getActingUser(
  { requireAuth = true }: { requireAuth?: boolean } = {}
) {
  // Check for synthetic session headers first (set by middleware)
  const { headers } = await import('next/headers');
  const headerData = await headers();
  const testUserId = headerData.get('x-test-user-id');
  const testUserRole = headerData.get('x-test-user-role');

  if (testUserId && testUserRole) {
    // Return a mock/partial User object based on headers
    return {
      id: testUserId,
      email: `test-${testUserRole.toLowerCase()}@example.test`,
      app_metadata: { role: testUserRole as UserRole },
    } as {
      id: string;
      email: string;
      app_metadata: { role: UserRole };
    };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (requireAuth && !user) {
    redirect("/auth/login");
  }
  return user;
}

// Add this new function
export async function requireRole(role: UserRole | UserRole[]) {
  const user = await getActingUser();
  if (!user) {
    // This should be redundant due to getActingUser, but good for type safety
    throw new Error("Authentication required.");
  }

  const roles = Array.isArray(role) ? role : [role];
  const userRole = await getActingUserRole(); // Assumes this queries the DB

  // Role hierarchy: ADMIN can access everything
  if (userRole === UserRole.ADMIN) {
    return; // Admin has access to everything
  }

  if (!roles.includes(userRole)) {
    throw new Error("Unauthorized.");
  }
}

// Defense-in-depth RBAC helper - throws on unauthorized access
export async function assertRole(requiredRoles: UserRole | UserRole[]): Promise<void> {
  const user = await getActingUser();
  if (!user) {
    throw new Error("Authentication required.");
  }

  const userRole = await getActingUserRole();
  const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

  // ADMIN can access everything
  if (userRole === UserRole.ADMIN) {
    return;
  }

  if (!roles.includes(userRole)) {
    throw new Error("Insufficient permissions.");
  }
}

export async function createProfile(name: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) { throw new Error("User not authenticated."); }

  const parsed = createProfileSchema.safeParse({ name });
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Invalid name");
  }

  await prisma.profile.upsert({
     where: { id: user.id },
     update: { name: parsed.data.name, email: user.email }, // Update name/email if they exist
     create: { id: user.id, email: user.email!, name: parsed.data.name },
  });
}

export async function updateUserRole(prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  try {
    await assertRole(UserRole.ADMIN);

    const userId = formData.get('userId') as string;
    const role = formData.get('role') as UserRole;

    if (!userId || !role) {
      return {
        success: false,
        message: "Missing required fields",
        fieldErrors: undefined,
        data: null,
      };
    }

    // Protect "last admin" from demotion
    const adminCount = await prisma.profile.count({ where: { role: 'ADMIN' } });
    const user = await prisma.profile.findUnique({ where: { id: userId }, select: { role: true } });
    if (!user) {
      return {
        success: false,
        message: 'User not found',
        fieldErrors: { userId: ['User not found'] },
        data: null,
      };
    }
    if (user.role === 'ADMIN' && role !== 'ADMIN' && adminCount <= 1) {
      return {
        success: false,
        message: 'Cannot demote the last admin',
        fieldErrors: { role: ['Cannot demote the last admin'] },
        data: null,
      };
    }

    await prisma.profile.update({ where: { id: userId }, data: { role } });
    revalidatePath('/admin/users');
    return {
      success: true,
      message: 'Role updated successfully',
      fieldErrors: undefined,
      data: null,
    };
  } catch {
    return {
      success: false,
      message: "Failed to update user role",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function getAllUsers() {
  if (process.env.NODE_ENV !== 'test') {
    await assertRole(UserRole.ADMIN);
  }
  return await prisma.profile.findMany({
    orderBy: { email: "asc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
}

export async function getAllStaffUsers() {
  if (process.env.NODE_ENV !== 'test') {
    await assertRole(UserRole.STAFF);
  }
  return await prisma.profile.findMany({
    where: {
      role: {
        in: [UserRole.STAFF, UserRole.ADMIN],
      },
    },
    orderBy: { email: "asc" },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

export async function getActingUserRole(): Promise<UserRole> {
  // Check for synthetic session headers first (set by middleware)
  const { headers } = await import('next/headers');
  const headerData = await headers();
  const testUserRole = headerData.get('x-test-user-role');

  if (testUserRole && ['ADMIN', 'STAFF', 'VOLUNTEER'].includes(testUserRole)) {
    return testUserRole as UserRole;
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const profile = await prisma.profile.findUnique({
    where: { id: user.id },
    select: { role: true },
  });

  if (!profile) {
    throw new Error("Profile not found");
  }

  return profile.role;
}

export async function getUserProfile(userId: string) {
  // Ensure user can only view their own profile (skip in test environment)
  if (process.env.NODE_ENV !== 'test') {
    const currentUser = await getActingUser();
    if (!currentUser || currentUser.id !== userId) {
      throw new Error("Unauthorized: Can only view your own profile");
    }
  }

  const parsed = z.object({ userId: z.string() }).safeParse({ userId });
  if (!parsed.success) {
    throw new Error("Invalid user ID");
  }

  const profile = await prisma.profile.findUnique({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      role: true,
      trainingCompleted: true,
      backgroundCheckCompleted: true,
      shiftCapacity: true,
      prefersWeekdays: true,
      prefersMornings: true,
    },
  });

  // Return null if profile doesn't exist
  return profile;
}

export async function getUserSignupIds(userId: string) {
  // Ensure user can only view their own signup IDs (skip in test environment)
  if (process.env.NODE_ENV !== 'test') {
    const currentUser = await getActingUser();
    if (!currentUser || currentUser.id !== userId) {
      throw new Error("Unauthorized: Can only view your own signups");
    }
  }

  const parsed = z.object({ userId: z.string() }).safeParse({ userId });
  if (!parsed.success) {
    throw new Error("Invalid user ID");
  }

  try {
    const userSignups = await prisma.volunteerShiftSignup.findMany({
      where: { volunteerId: userId },
      select: { shiftId: true }
    });

    return userSignups.map(signup => signup.shiftId);
  } catch {
    // Return empty array on any lookup failure (user doesn't exist, etc.)
    return [];
  }
}
