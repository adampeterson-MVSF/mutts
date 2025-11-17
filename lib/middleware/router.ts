import { NextRequest } from "next/server";
import { UserRole } from "@prisma/client";
import { authRequiredRedirect, insufficientPermissionsRedirect } from "@/lib/auth-redirect";
import { ROUTES, matchesRoute } from "@/lib/routes";

export function getRequiredRole(pathname: string): UserRole | null {
  for (const pattern of ROUTES.admin) {
    if (matchesRoute(pathname, pattern)) {
      return UserRole.ADMIN;
    }
  }

  for (const pattern of ROUTES.staff) {
    if (matchesRoute(pathname, pattern)) {
      return UserRole.STAFF;
    }
  }

  for (const pattern of ROUTES.volunteer) {
    if (matchesRoute(pathname, pattern)) {
      return UserRole.VOLUNTEER;
    }
  }

  for (const pattern of ROUTES.public) {
    if (matchesRoute(pathname, pattern)) {
      return null;
    }
  }

  return UserRole.VOLUNTEER;
}

export function hasSufficientRole(requiredRole: UserRole, userRole: UserRole): boolean {
  const roleLevels = {
    [UserRole.ADMIN]: 3,
    [UserRole.STAFF]: 2,
    [UserRole.VOLUNTEER]: 1,
  };

  const requiredLevel = roleLevels[requiredRole] ?? 0;
  const userLevel = roleLevels[userRole] ?? 0;

  return userLevel >= requiredLevel;
}

export function checkAccess(
  request: NextRequest,
  pathname: string,
  userRole: UserRole | undefined | null,
) {
  const requiredRole = getRequiredRole(pathname);

  if (requiredRole === null) {
    return null;
  }

  if (!userRole) {
    return authRequiredRedirect(request, pathname);
  }

  if (!hasSufficientRole(requiredRole, userRole)) {
    return insufficientPermissionsRedirect(request, pathname);
  }

  return null;
}
