// lib/auth.ts
"use server";

import { UserRole } from "@prisma/client";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

/**
 * Get the currently authenticated user from Supabase or test mode
 */
export async function getActingUser({ requireAuth = true }: { requireAuth?: boolean } = {}) {
  // Check for synthetic session headers first (set by middleware in test mode)
  const { headers } = await import('next/headers');
  const headerData = await headers();
  const testUserId = headerData.get('x-test-user-id');
  const testUserRole = headerData.get('x-test-user-role');

  if (testUserId && testUserRole) {
    // Return a mock/partial User object based on test headers
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
  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  if (requireAuth && !user) {
    redirect("/auth/login");
  }
  return user;
}

/**
 * Get the role of the currently authenticated user
 */
export async function getActingUserRole(): Promise<UserRole> {
  const user = await getActingUser();
  if (!user) {
    throw new Error("Not authenticated");
  }

  // For test mode users, role is already in app_metadata
  if (user.app_metadata?.role) {
    return user.app_metadata.role;
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

/**
 * Require that the current user has one of the specified roles
 * Throws an error if unauthorized
 */
export async function requireRole(requiredRoles: UserRole | UserRole[]): Promise<void> {
  const user = await getActingUser();
  if (!user) {
    throw new Error("Authentication required.");
  }

  const userRole = await getActingUserRole();
  const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

  // Role hierarchy: ADMIN can access everything
  if (userRole === UserRole.ADMIN) {
    return;
  }

  if (!roles.includes(userRole)) {
    throw new Error("Unauthorized.");
  }
}

/**
 * Require that the current user has ANY of the specified roles (alias for requireRole)
 * Throws an error if unauthorized
 */
export async function requireAnyRole(requiredRoles: UserRole | UserRole[]): Promise<void> {
  return requireRole(requiredRoles);
}

/**
 * Require that the current user is either an admin OR the owner of the resource
 * Throws an error if unauthorized
 */
export async function requireSelfOrRole(resourceOwnerId: string, requiredRoles: UserRole | UserRole[]): Promise<void> {
  const user = await getActingUser();
  if (!user) {
    throw new Error("Authentication required.");
  }

  // If user is the owner, allow access
  if (user.id === resourceOwnerId) {
    return;
  }

  // Otherwise, check role requirements
  const userRole = await getActingUserRole();
  const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

  // Role hierarchy: ADMIN can access everything
  if (userRole === UserRole.ADMIN) {
    return;
  }

  if (!roles.includes(userRole)) {
    throw new Error("Unauthorized.");
  }
}

/**
 * Defense-in-depth RBAC helper - throws on unauthorized access
 * @deprecated Use requireRole instead for consistency
 */
export async function assertRole(requiredRoles: UserRole | UserRole[]): Promise<void> {
  return requireRole(requiredRoles);
}