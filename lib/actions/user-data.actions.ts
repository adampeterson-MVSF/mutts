// lib/actions/user-data.actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole, AuditAction } from "@prisma/client";
import { ActionResult } from "@/lib/types";
import { z } from "zod";
import { getCurrentUserId } from "./audit.actions";

interface UserDataExport {
  user: {
    id: string;
    name: string | null;
    email: string;
    role: UserRole;
    updatedAt: Date;
  };
  assignedApplications: unknown[];
  fosterProfile: unknown;
  shiftSignups: unknown[];
  recentActivity: unknown[];
}

const deleteUserDataSchema = z.object({
  userId: z.string().uuid({ message: "Invalid user ID" }),
  reason: z.string().min(10, { message: "Reason must be at least 10 characters long" }).max(1000, { message: "Reason must be less than 1000 characters" }),
  confirmation: z.literal("DELETE_ALL_DATA", { message: "Must confirm deletion with exact text" }),
});

/**
 * Delete all user data with comprehensive audit logging
 * This is a destructive operation that removes all user-linked records
 */
export async function deleteUserData(formData: FormData): Promise<ActionResult> {
  try {
    // Only admins can delete user data
    await assertRole(UserRole.ADMIN);

    const input = deleteUserDataSchema.parse({
      userId: formData.get("userId"),
      reason: formData.get("reason"),
      confirmation: formData.get("confirmation"),
    });

    const currentUserId = await getCurrentUserId();
    if (!currentUserId) {
      return { success: false, message: "Authentication required", fieldErrors: undefined, data: null };
    }

    // Verify the user exists before deletion
    const userToDelete = await prisma.profile.findUnique({
      where: { id: input.userId },
      select: { id: true, email: true, role: true },
    });

    if (!userToDelete) {
      return { success: false, message: "User not found", fieldErrors: undefined, data: null };
    }

    // Prevent deletion of the last admin
    if (userToDelete.role === UserRole.ADMIN) {
      const adminCount = await prisma.profile.count({
        where: { role: UserRole.ADMIN },
      });

      if (adminCount <= 1) {
        return { success: false, message: "Cannot delete the last admin user", fieldErrors: undefined, data: null };
      }
    }

    // Execute deletion within a transaction for consistency
    await prisma.$transaction(async (tx) => {
      // 1. Delete dependent records in correct order (reverse of dependencies)

      // Delete medical documents (Supabase storage handled separately)
      await tx.medicalDocument.deleteMany({
        where: { dog: { applications: { some: { profileId: input.userId } } } },
      });

      // Delete medical records
      await tx.medicalRecord.deleteMany({
        where: { dog: { applications: { some: { profileId: input.userId } } } },
      });

      // Delete application references
      await tx.reference.deleteMany({
        where: { application: { profileId: input.userId } },
      });

      // Delete applications
      await tx.application.deleteMany({
        where: { profileId: input.userId },
      });

      // Delete volunteer shift signups
      await tx.volunteerShiftSignup.deleteMany({
        where: { volunteerId: input.userId },
      });

      // Delete foster profiles
      await tx.fosterProfile.deleteMany({
        where: { profileId: input.userId },
      });

      // Delete audit logs for this user (as actor)
      await tx.auditLog.deleteMany({
        where: { actorId: input.userId },
      });

      // 2. Anonymize the user profile (don't delete completely to maintain referential integrity)
      await tx.profile.update({
        where: { id: input.userId },
        data: {
          email: `deleted-${input.userId}@local`,
          name: "[DELETED USER]",
          role: UserRole.VOLUNTEER, // Downgrade to lowest privilege
        },
      });

      // 3. Create comprehensive audit log
      await tx.auditLog.create({
        data: {
          actorId: currentUserId,
          action: AuditAction.USER_DATA_DELETE,
          entityType: "profile",
          entityId: 0, // Placeholder since entityId is for applications/dogs (Int), but we need to audit user deletion
          note: `User data deleted. Reason: ${input.reason}. Original role: ${userToDelete.role}`,
        },
      });
    });

    // Revalidate admin pages
    revalidatePath("/admin/users");
    revalidatePath("/admin");

    return {
      success: true,
      message: `User data deleted successfully. User profile anonymized.`,
      fieldErrors: undefined,
      data: null,
    };

  } catch (error) {
    console.error("User data deletion failed:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to delete user data",
      fieldErrors: undefined,
      data: null,
    };
  }
}

/**
 * Export user data for GDPR compliance (data portability)
 */
export async function exportUserData(userId: string): Promise<ActionResult<UserDataExport>> {
  try {
    await assertRole(UserRole.ADMIN);

    const user = await prisma.profile.findUnique({
      where: { id: userId },
      include: {
        assignedApplications: {
          include: {
            references: true,
            dog: true,
          },
        },
        fosterProfile: true,
        shiftSignups: {
          include: {
            shift: true,
          },
        },
        auditLogs: {
          where: { actorId: userId },
          take: 100,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!user) {
      return { success: false, message: "User not found", fieldErrors: undefined, data: null };
    }

    // Create audit log for data export
    await prisma.auditLog.create({
      data: {
        actorId: await getCurrentUserId(),
        action: AuditAction.USER_DATA_EXPORT,
        entityType: "profile",
        entityId: 0, // Placeholder since entityId is for applications/dogs (Int), but we need to audit user export
        note: `User data export requested for user ${userId}`,
      },
    });

    // Return structured data (sensitive fields are already encrypted in DB)
    return {
      success: true,
      message: "User data exported successfully",
      fieldErrors: undefined,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          updatedAt: user.updatedAt,
        },
        assignedApplications: user.assignedApplications,
        fosterProfile: user.fosterProfile,
        shiftSignups: user.shiftSignups,
        recentActivity: user.auditLogs,
      },
    };

  } catch (error) {
    console.error("User data export failed:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to export user data",
      fieldErrors: undefined,
      data: null,
    };
  }
}
