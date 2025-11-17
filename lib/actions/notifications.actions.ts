// lib/actions/notifications.actions.ts
"use server";

import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { ActionResult } from "@/lib/types";
import { prisma } from "@/lib/prisma";

/**
 * Sends a foster invitation email to the specified profile.
 * Currently a stub implementation that logs the invitation.
 * In production, this would integrate with an email service provider.
 */
export async function sendFosterInvite(profileId: string): Promise<ActionResult> {
  try {
    await assertRole(UserRole.STAFF);
    if (!profileId || typeof profileId !== 'string') {
      return { success: false, message: 'Profile not found', fieldErrors: undefined, data: null };
    }

    const profile = await prisma.profile.findUnique({ where: { id: profileId } });
    if (!profile) {
      return { success: false, message: 'Profile not found', fieldErrors: undefined, data: null };
    }

    // Stub "send invite"
    console.log('Foster invite sent', { profileId });

    return { success: true, message: `Foster invitation sent to ${profile.email}`, fieldErrors: undefined, data: null };
  } catch (err: unknown) {
    return { success: false, message: err instanceof Error ? err.message : 'Database connection failed', fieldErrors: undefined, data: null };
  }
}
