"use server";

import { UserRole } from "@prisma/client";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

/**
 * Get SSR-safe user info for middleware/guards
 * Returns { id, role } | null without throwing redirects
 */
export async function getSSRUser(): Promise<{ id: string; role: UserRole } | null> {
  try {
    // Check real session
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    const user = data?.user;

    if (!user) {
      return null;
    }

    // Get role from profile
    const profile = await prisma.profile.findUnique({
      where: { id: user.id },
      select: { role: true },
    });

    if (!profile) {
      return null;
    }

    return {
      id: user.id,
      role: profile.role,
    };
  } catch {
    // Return null on any error to avoid SSR failures
    return null;
  }
}