"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { ActionResult } from "@/lib/types";
import { z } from "zod";
import { sendFosterInvite } from "@/lib/actions/notifications.actions";
import { sanitizeCell } from "@/lib/csv";

// Allow any non-empty string to support seed data IDs like 'volunteer-46'
const idParamSchema = z.string().min(1);

const fosterProfileSchema = z.object({
  profileId: z.string().min(1, { message: "Invalid profile ID" }),
  hasCats: z.boolean(),
  hasDogs: z.boolean(),
  canAdministerMeds: z.boolean(),
  notes: z.string().optional(),
});

const toBoolean = (value: FormDataEntryValue | null) => {
  if (value === null) return false;
  const stringValue = String(value).toLowerCase();
  return stringValue === "true" || stringValue === "on" || stringValue === "1";
};

export async function ensureFosterProfile(profileId: string) {
  // Allow any non-empty string to support seed data IDs like 'volunteer-46'
  const parsed = z.object({ profileId: z.string().min(1) }).safeParse({ profileId });
  if (!parsed.success) {
    throw new Error("Invalid profile ID");
  }

  // Try to find existing foster profile
  let fosterProfile = await prisma.fosterProfile.findUnique({
    where: { profileId: parsed.data.profileId },
    include: { profile: true },
  });

  // If it doesn't exist, create one with defaults
  if (!fosterProfile) {
    fosterProfile = await prisma.fosterProfile.create({
      data: {
        profileId: parsed.data.profileId,
        hasCats: false,
        hasDogs: false,
        canAdministerMeds: false,
        notes: null,
      },
      include: { profile: true },
    });
  }

  return fosterProfile;
}

interface FosterProfileWithDogs {
  id: number;
  profileId: string;
  hasCats: boolean;
  hasDogs: boolean;
  canAdministerMeds: boolean;
  notes: string | null;
  profile: {
    name: string;
    email: string;
  };
  dogs: {
    name: string;
  }[];
}

export async function getFosterProfiles(searchParams?: {
  page?: number;
  limit?: number;
  hasCats?: boolean;
  hasDogs?: boolean;
  canAdministerMeds?: boolean;
}): Promise<{ fosterProfiles: FosterProfileWithDogs[]; pagination: { currentPage: number; totalPages: number; totalCount: number; hasNextPage: boolean; hasPreviousPage: boolean; } }> {
  await assertRole(UserRole.STAFF);

  const page = searchParams?.page ?? 1;
  const limit = searchParams?.limit ?? 50;
  const skip = (page - 1) * limit;

  const where = {
    ...(searchParams?.hasCats !== undefined && { hasCats: searchParams.hasCats }),
    ...(searchParams?.hasDogs !== undefined && { hasDogs: searchParams.hasDogs }),
    ...(searchParams?.canAdministerMeds !== undefined && { canAdministerMeds: searchParams.canAdministerMeds }),
  };

  const [fosterProfilesRaw, totalCount] = await Promise.all([
    prisma.fosterProfile.findMany({
      where,
      select: {
        profileId: true,
        hasCats: true,
        hasDogs: true,
        canAdministerMeds: true,
        notes: true,
        profile: {
          select: {
            name: true,
            email: true,
          }
        },
        dogs: {
          select: {
            name: true,
          }
        }
      },
      orderBy: [
        {
          profile: {
            name: "asc",
          },
        },
        {
          profile: {
            email: "asc",
          },
        },
      ],
      skip,
      take: limit,
    }),
    prisma.fosterProfile.count({ where }),
  ]);

  const totalPages = Math.ceil(totalCount / limit);
  const fosterProfiles = fosterProfilesRaw as unknown as FosterProfileWithDogs[];

  return {
    fosterProfiles,
    pagination: {
      currentPage: page,
      totalPages,
      totalCount,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

export async function getFosterProfileById(profileId: string) {
  await assertRole(UserRole.STAFF);

  // Allow any non-empty string to support seed data IDs like 'volunteer-46'
  const parsed = z.object({ profileId: z.string().min(1) }).safeParse({ profileId });
  if (!parsed.success) {
    throw new Error("Invalid profile ID");
  }

  return prisma.fosterProfile.findUnique({
    where: { profileId },
    include: {
      profile: true,
    },
  });
}

export async function getFosterProfileByParam(param: string) {
  await assertRole(UserRole.STAFF);

  const parsed = idParamSchema.safeParse(param);
  if (!parsed.success) {
    throw new Error('Invalid profile identifier');
  }

  return prisma.fosterProfile.findUnique({
    where: { profileId: parsed.data },
    include: { profile: true },
  });
}

export async function updateFosterProfile(
  _prevState: ActionResult | undefined,
  formData: FormData,
): Promise<ActionResult> {
  try {
    await assertRole(UserRole.STAFF);

    const intent = formData.get("intent") as string;
    const shouldSendInvite = intent === "invite";

    const data = {
      profileId: formData.get("profileId"),
      hasCats: toBoolean(formData.get("hasCats")),
      hasDogs: toBoolean(formData.get("hasDogs")),
      canAdministerMeds: toBoolean(formData.get("canAdministerMeds")),
      notes: (() => {
        const value = formData.get("notes");
        if (typeof value !== "string") return undefined;
        return value.trim() === "" ? undefined : value.trim();
      })(),
    };

    const parsed = fosterProfileSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors,
        data: null,
      };
    }

    await prisma.fosterProfile.upsert({
      where: { profileId: parsed.data.profileId },
      create: parsed.data,
      update: {
        hasCats: parsed.data.hasCats,
        hasDogs: parsed.data.hasDogs,
        canAdministerMeds: parsed.data.canAdministerMeds,
        notes: parsed.data.notes,
      },
    });

    // Send invitation if requested
    if (shouldSendInvite) {
      try {
        await sendFosterInvite(parsed.data.profileId);
      } catch (inviteError) {
        console.error("Failed to send foster invite:", inviteError);
        // Don't fail the entire operation if invite fails
      }
    }

    revalidatePath("/admin/fosters");
    revalidatePath(`/admin/fosters/${parsed.data.profileId}`);

    return {
      success: true,
      message: shouldSendInvite
        ? "Foster profile updated and invitation sent successfully!"
        : "Foster profile updated successfully!",
      fieldErrors: undefined,
      data: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to update foster profile",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function getFosterProfilesForExport(searchParams?: {
  hasCats?: boolean;
  hasDogs?: boolean;
  canAdministerMeds?: boolean;
}) {
  await assertRole(UserRole.STAFF);

  const where = {
    ...(searchParams?.hasCats !== undefined && { hasCats: searchParams.hasCats }),
    ...(searchParams?.hasDogs !== undefined && { hasDogs: searchParams.hasDogs }),
    ...(searchParams?.canAdministerMeds !== undefined && { canAdministerMeds: searchParams.canAdministerMeds }),
  };

  const fosterProfiles = await prisma.fosterProfile.findMany({
    where,
    include: {
      profile: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: [
      {
        profile: {
          name: "asc",
        },
      },
      {
        profile: {
          email: "asc",
        },
      },
    ],
  });

  return fosterProfiles;
}

export async function generateFosterProfilesCSV(searchParams?: {
  hasCats?: boolean;
  hasDogs?: boolean;
  canAdministerMeds?: boolean;
}): Promise<string> {
  const fosterProfiles = await getFosterProfilesForExport(searchParams);

  const headers = [
    "Name",
    "Email",
    "Capabilities",
    "Notes",
  ];

  const rows = fosterProfiles.map(fp => {
    const capabilities = [
      fp.hasCats ? "Cats" : null,
      fp.hasDogs ? "Dogs" : null,
      fp.canAdministerMeds ? "Medications" : null,
    ].filter(Boolean).join(", ") || "None";

    return [
      fp.profile?.name || "",
      fp.profile?.email || "",
      capabilities,
      fp.notes || "",
    ];
  });

  // Create CSV content with BOM for Excel compatibility
  const BOM = "\uFEFF";
  const csvContent = [
    headers.map(header => sanitizeCell(header)).join(","),
    ...rows.map(row => row.map(field => sanitizeCell(field)).join(",")),
  ].join("\n");

  return BOM + csvContent;
}

export type FosterProfileWithProfile = Awaited<
  ReturnType<typeof getFosterProfileById>
>;
