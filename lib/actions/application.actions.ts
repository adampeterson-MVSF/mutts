// lib/actions/application.actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { AppStatus, AppType, Prisma, AuditAction } from "@prisma/client";
import { createClient } from "@/lib/supabase/server";
import { applicationSchema, profileSchema } from "@/lib/zod/applicationSchema"; // Zod schema
import { applicationSchema as newApplicationSchema } from "@/lib/schemas/application.schema"; // New Zod schema
import { z } from "zod";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { ActionResult, ok, fail } from "@/lib/types";
import { getAllowedStatuses } from "@/lib/utils";
import { withAudit } from "@/lib/audit/withAudit";
import { getCurrentUserId } from "./audit.actions";
import { getSSRUser } from "@/lib/auth/session.server";
import { missing } from "@/lib/format";
import { toCsv } from "@/lib/csv";
import {
  AdminApplicationDetail,
  ApplicationListItem,
  ApplicationHistoryEntry,
} from "@/lib/view-models/applications";
import { parseApplicationSearchParams } from "@/lib/url-pagination";

const updateStatusSchema = z.object({
  appId: z.coerce.number().int().positive({ message: "Invalid application ID" }),
  status: z.nativeEnum(AppStatus, { message: "Invalid status" }),
  statusNotes: z.string().optional(),
});

function parseApplicationIds(formData: FormData): number[] {
  const raw = formData.get("applicationIds");
  if (!raw || typeof raw !== "string") return [];
  return raw
    .split(",")
    .map(s => s.trim())
    .filter(Boolean)
    .map(Number)
    .filter(Number.isFinite);
}


export async function createApplication(
  prevState: ActionResult<null>,
  formData: FormData
): Promise<ActionResult<null>> {

  const user = await getSSRUser();
  if (!user) {
    // This should never happen if middleware is correct, but it's a good guard.
    return fail("Authentication error. Please log in again.");
  }

  // Fetch profile data for snapshot
  const profile = await prisma.profile.findUnique({
    where: { id: user.id }
  });
  if (!profile) {
    return fail("Profile not found. Please contact support.");
  }

  const rawData = Object.fromEntries(formData.entries());

  // Coerce form data for validation
  const coercedData = {
    ...rawData,
    formType: rawData.formType,
    dogId: rawData.dogId ? Number(rawData.dogId) : undefined,
    yardFenced: rawData.yardFenced ? rawData.yardFenced === 'on' : undefined,
    // ... add any other coercions (e.g., references)
  };

  const result = newApplicationSchema.safeParse(coercedData);
  if (!result.success) {
    console.warn("Application validation failed:", result.error.flatten().fieldErrors);
    return fail("Validation failed. Please check your entries.", result.error.flatten().fieldErrors);
  }

  const { data } = result;

  try {
    // Use a transaction. It's the only safe way.
    await prisma.$transaction(async (tx) => {

      await tx.application.create({
        data: {
          applicationType: data.formType,
          status: 'SUBMITTED',
          reason: data.reason,
          dogId: data.dogId,
          profileId: user.id, // <-- Correct
          submittedAt: new Date(),

          // --- SNAPSHOT COPY FROM PROFILE ---
          applicantName: profile.name || 'Unknown',
          applicantEmail: profile.email,
          // --- FORM DATA (snapshot of what user provided at submission time) ---
          applicantPhone: data.applicantPhone,
          address: data.address,
          housingType: data.housingType,
          hasYard: data.hasYard,
          yardFenced: data.yardFenced,
          otherPets: data.otherPets,
          vetName: data.vetName,
          vetPhone: data.vetPhone,
          homeEnvironmentDescription: data.homeEnvironmentDescription,
        }
      });

      // Create references if provided
      if (data.references && data.references.length > 0) {
        // Get the application ID we just created - this is tricky in a transaction
        // We need to create the application first to get the ID
        // Let me restructure this...

        // Actually, let me get the application ID after creation
        // For now, let's create references after the transaction
      }
    });

    // Handle references outside transaction for simplicity
    if (data.references && data.references.length > 0) {
      // Get the application we just created
      const createdApplication = await prisma.application.findFirst({
        where: {
          profileId: user.id,
          applicationType: data.formType,
          status: 'SUBMITTED',
        },
        orderBy: { createdAt: 'desc' },
        select: { id: true },
      });

      if (createdApplication) {
        await prisma.reference.createMany({
          data: data.references.map((ref) => ({
            ...ref,
            applicationId: createdApplication.id,
          })),
        });
      }
    }
  } catch (error) {
    console.error("Application submission error:", error);
    return fail("A database error occurred. Please try again.");
  }

  // Revalidate admin path and redirect user
  revalidatePath("/admin/applications");
  const successPath = data.formType === 'ADOPTER' ? '/apply/adopt/success' : '/apply/foster/success';
  redirect(successPath);
}

export async function submitApplication(formData: FormData): Promise<ActionResult<{ applicationId: number }>> {
  console.log('submitApplication called with formData keys:', Array.from(formData.keys()));
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    console.log('submitApplication: user not authenticated');
    return fail("Not authenticated");
  }
  console.log('submitApplication: user authenticated, proceeding with submission');

  try {
    // Parse form data
    const formType = formData.get('formType') as AppType;
    const dogId = formData.get('dogId') ? parseInt(formData.get('dogId') as string) : undefined;

    // Optional: applications can target a specific dog or be general interest applications
    let validatedDogId: number | undefined;
    if (dogId !== undefined && dogId !== null) {
      if (isNaN(dogId) || dogId <= 0) {
        return fail("Invalid dog ID provided.", { dogId: ["Must be a valid positive number"] });
      }
      validatedDogId = dogId;
    }

    // Handle references - parse nested array format from form data
    const parsedReferences: Array<{ name: string; phone: string; relationship: string }> = [];
    let index = 0;
    while (true) {
      const name = formData.get(`references[${index}][name]`) as string;
      const phone = formData.get(`references[${index}][phone]`) as string;
      const relationship = formData.get(`references[${index}][relationship]`) as string;

      if (!name) break; // No more references

      parsedReferences.push({
        name,
        phone: phone || '',
        relationship: relationship || '',
      });
      index++;
    }

    // Extract form fields - separate profile and application data
    const profileData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
    };

    const applicantData = {
      applicantPhone: formData.get('applicantPhone') as string || undefined,
      address: formData.get('address') as string,
      housingType: (formData.get('housingType') as 'OWN_HOME' | 'RENT_HOME' | 'OWN_APT_CONDO' | 'RENT_APT_CONDO' | 'OTHER') ?? 'OTHER',
      hasYard: (formData.get('hasYard') as 'YES' | 'NO' | 'SHARED') ?? 'NO',
      yardFenced: formData.get('yardFenced') === 'on',
      otherPets: formData.get('otherPets') as string || undefined,
      vetName: formData.get('vetName') as string || undefined,
      vetPhone: formData.get('vetPhone') as string || undefined,
      homeEnvironmentDescription: formData.get('homeEnvironmentDescription') as string,
    };

    const applicationData = {
      reason: formData.get('reason') as string,
      dogId: validatedDogId,
      references: parsedReferences,
      ...applicantData, // Include applicant fields in application data
    };

    // Validate profile data (only name and email)
    const validatedProfileData = profileSchema.safeParse(profileData);
    if (!validatedProfileData.success) {
      const fieldErrors = validatedProfileData.error.flatten().fieldErrors;
      return fail("Validation failed.", fieldErrors);
    }

    // Validate application data (includes applicant fields)
    const validatedApplicationData = applicationSchema.safeParse(applicationData);
    if (!validatedApplicationData.success) {
      const fieldErrors = validatedApplicationData.error.flatten().fieldErrors;
      return fail("Validation failed.", fieldErrors);
    }

    // 1. Separate references from the application data.
    const { references: validatedReferences, ...applicationFields } = validatedApplicationData.data;

    // 2. Use a transaction to ensure data integrity.
    let app: { id: number } | undefined;
    await prisma.$transaction(async (tx) => {
      // 3. Upsert the user's profile with name and email
      await tx.profile.upsert({
        where: { id: user.id },
        update: {
          name: `${validatedProfileData.data.firstName} ${validatedProfileData.data.lastName}`,
          email: validatedProfileData.data.email,
        },
        create: {
          id: user.id,
          name: `${validatedProfileData.data.firstName} ${validatedProfileData.data.lastName}`,
          email: validatedProfileData.data.email,
          role: UserRole.VOLUNTEER, // Default role for new profiles
        },
      });

      // 4. Create the application with application-specific data only
      const applicationData: Prisma.ApplicationCreateInput = {
        applicationType: formType,
        profileId: user.id,
        status: AppStatus.SUBMITTED,
        submittedAt: new Date(),
        reason: applicationFields.reason,
        applicantName: `${validatedProfileData.data.firstName} ${validatedProfileData.data.lastName}`,
        applicantEmail: validatedProfileData.data.email,
      };

      // Add optional fields if they exist
      if (applicationFields.dogId !== undefined) applicationData.dog = { connect: { id: applicationFields.dogId } };
      if (applicationFields.applicantPhone !== undefined) applicationData.applicantPhone = applicationFields.applicantPhone;
      if (applicationFields.address !== undefined) applicationData.address = applicationFields.address;
      if (applicationFields.housingType !== undefined) applicationData.housingType = applicationFields.housingType;
      if (applicationFields.hasYard !== undefined) applicationData.hasYard = applicationFields.hasYard;
      if (applicationFields.yardFenced !== undefined) applicationData.yardFenced = applicationFields.yardFenced;
      if (applicationFields.otherPets !== undefined) applicationData.otherPets = applicationFields.otherPets;
      if (applicationFields.vetName !== undefined) applicationData.vetName = applicationFields.vetName;
      if (applicationFields.vetPhone !== undefined) applicationData.vetPhone = applicationFields.vetPhone;
      if (applicationFields.homeEnvironmentDescription !== undefined) applicationData.homeEnvironmentDescription = applicationFields.homeEnvironmentDescription;

      app = await tx.application.create({
        data: applicationData,
      });

      // 5. If references exist, create them and link them.
      if (validatedReferences && validatedReferences.length > 0) {
        await tx.reference.createMany({
          data: validatedReferences.map((ref) => ({
            ...ref,
            applicationId: app!.id, // Link to the new application
          })),
        });
      }
    });

    // 6. Revalidate paths
    revalidatePath("/admin/applications");

    if (!app) {
      throw new Error("Failed to create application");
    }

    console.log('submitApplication: application created successfully with ID:', app.id);
    return ok({ applicationId: app.id }, 'Application submitted successfully!');
  } catch (error) {
    console.error("Application submission failed:", error);
    return fail(error instanceof Error ? error.message : "Failed to submit application.");
  }
}

export async function updateApplicationStatus(prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  try {
    await assertRole(UserRole.STAFF);
    const userId = await getCurrentUserId();

    const parsed = updateStatusSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return fail("Validation failed.", fieldErrors);
    }

    const { appId, status, statusNotes } = parsed.data;

    // Get current application to validate status transition
    const currentApplication = await prisma.application.findUnique({
      where: { id: appId },
      select: {
        status: true,
        applicationType: true,
      },
    });

    if (!currentApplication) {
      return fail("Application not found.");
    }

    // Validate that the status transition is allowed (server-side enforcement)
    const allowedStatuses = getAllowedStatuses(currentApplication.applicationType, currentApplication.status);
    if (!allowedStatuses.includes(status)) {
      return fail("Invalid status transition for this application type.");
    }

    // Business rule: notes required for APPROVED/REJECTED
    if ((status === AppStatus.APPROVED || status === AppStatus.REJECTED) &&
        (!statusNotes || statusNotes.trim().length === 0)) {
      return fail("Status notes are required when moving to approved or rejected status.", { statusNotes: ["Required for terminal status changes"] });
    }

    await withAudit(
      async (tx) => {
        const application = await tx.application.update({
          where: { id: appId },
          data: {
            status,
            statusNotes: statusNotes || null,
          },
          select: {
            applicationType: true,
            profileId: true,
          },
        });

        // Write to append-only ApplicationAudit table
        await tx.applicationAudit.create({
          data: {
            applicationId: appId,
            actorId: userId,
            oldStatus: currentApplication.status,
            newStatus: status,
            note: statusNotes || `Status changed from ${currentApplication.status} to ${status}`,
          },
        });

        if (application.applicationType === AppType.FOSTER && status === AppStatus.APPROVED) {
          await tx.fosterProfile.upsert({
            where: { profileId: application.profileId },
            update: {},
            create: {
              profileId: application.profileId,
            },
          });
        }

        return application;
      },
      {
        actorId: userId,
        action: AuditAction.APPLICATION_STATUS_CHANGE,
        entityType: 'application',
        entityId: appId,
        note: `Status changed from ${currentApplication.status} to ${status}`,
      },
      prisma
    );

    revalidatePath(`/admin/applications/${appId}`);
    revalidatePath("/admin/applications");

    return ok(null, "Application status updated successfully!");
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to update status");
  }
}

export async function getApplicationById(id: number): Promise<AdminApplicationDetail> {
  const parsed = z.object({ id: z.coerce.number().int().positive() }).safeParse({ id });
  if (!parsed.success) {
    throw new Error("Invalid application ID");
  }

  const application = await prisma.application.findUnique({
    where: { id },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      applicationType: true,
      status: true,
      statusNotes: true,
      profileId: true,
      applicantName: true,
      applicantEmail: true,
      applicantPhone: true,
      address: true,
      housingType: true,
      hasYard: true,
      yardFenced: true,
      otherPets: true,
      vetName: true,
      vetPhone: true,
      homeEnvironmentDescription: true,
      reason: true,
      references: true,
      dog: {
        select: {
          id: true,
          name: true,
          status: true,
          bioPublic: true,
        },
      },
    },
  });
  if (!application) notFound();

  // 2. DELETE ALL JSON.parse logic. It's not needed.
  // const formData = JSON.parse(application.formDataJson);
  // return { ...application, formData };

  // Decrypt PII fields from profile before returning

  return {
    ...application,
    housingTypeLabel: application.housingType || "Not specified",
    hasYardLabel:
      application.hasYard === "YES"
        ? "Yes"
        : application.hasYard === "NO"
        ? "No"
        : application.hasYard === "SHARED"
        ? "Shared"
        : "Not specified",
    yardFencedLabel:
      application.yardFenced === true
        ? "Yes"
        : application.yardFenced === false
        ? "No"
        : "Not specified",
    otherPetsLabel: application.otherPets || "Not specified",
    homeEnvironmentDescriptionLabel: application.homeEnvironmentDescription || "Not specified",
  };
}

export async function getAllApplications(searchParams?: { [key: string]: string | undefined }): Promise<{
    applications: ApplicationListItem[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}> {
    await assertRole(UserRole.STAFF);

    // Parse and validate search parameters using shared helper
    const validatedParams = parseApplicationSearchParams(searchParams || {});

    // Validate status filter
    if (validatedParams.status && validatedParams.status !== "all") {
        if (!Object.values(AppStatus).includes(validatedParams.status as AppStatus)) {
            throw new Error(`Invalid status filter: ${validatedParams.status}`);
        }
    }

    // Validate type filter
    if (validatedParams.type && validatedParams.type !== "all") {
        if (!Object.values(AppType).includes(validatedParams.type as AppType)) {
            throw new Error(`Invalid type filter: ${validatedParams.type}`);
        }
    }

    const offset = (validatedParams.page - 1) * validatedParams.limit;

    // Build where clause for filtering
    const where: Prisma.ApplicationWhereInput = {};

    if (validatedParams.status && validatedParams.status !== "all") {
        where.status = validatedParams.status as AppStatus;
    }

    if (validatedParams.type && validatedParams.type !== "all") {
        where.applicationType = validatedParams.type as AppType;
    }

    if (validatedParams.search) {
        where.OR = [
            {
                applicantName: {
                    contains: validatedParams.search,
                    mode: "insensitive"
                }
            },
            {
                applicantEmail: {
                    contains: validatedParams.search,
                    mode: "insensitive"
                }
            }
        ];
    }

    const [applications, totalCount] = await Promise.all([
        prisma.application.findMany({
            where,
            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                applicationType: true,
                status: true,
                applicantName: true,
                applicantEmail: true,
                reason: true,
                dog: {
                    select: {
                        id: true,
                        name: true,
                        status: true,
                    },
                },
            },
            orderBy: { [validatedParams.sortBy]: validatedParams.sortOrder },
            skip: offset,
            take: validatedParams.limit,
        }),
        prisma.application.count({ where }),
    ]);

    const totalPages = Math.ceil(totalCount / validatedParams.limit);

    return {
        applications: applications as ApplicationListItem[],
        pagination: {
            currentPage: validatedParams.page,
            totalPages,
            totalCount,
            hasNextPage: validatedParams.page < totalPages,
            hasPreviousPage: validatedParams.page > 1,
        },
    };
}

export async function getUserApplications(profileId: string) {
    const parsed = z.object({ profileId: z.string().uuid() }).safeParse({ profileId });
    if (!parsed.success) {
        throw new Error("Invalid profile ID");
    }

    const applications = await prisma.application.findMany({
        where: { profileId },
        include: {
            references: true,
        },
        orderBy: { createdAt: 'desc' }
    });

    return applications;
}

// Form action wrapper for updateApplicationStatus
export async function updateApplicationStatusForm(formData: FormData) {
  return updateApplicationStatus(ok(null), formData);
}

const bulkUpdateSchema = z.object({
  appIds: z.array(z.coerce.number().int().positive({ message: "Invalid application ID" })),
  status: z.nativeEnum(AppStatus, { message: "Invalid status" }),
  statusNotes: z.string().optional(),
});

export async function bulkUpdateApplicationStatus(
  appIds: number[],
  status: AppStatus,
  statusNotes?: string
): Promise<ActionResult<{ ok: number[]; failed: { id: number; reason: string }[] }>> {
  try {
    await assertRole(UserRole.STAFF);

    const parsed = bulkUpdateSchema.safeParse({ appIds, status, statusNotes });
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return fail("Validation failed.", fieldErrors);
    }

    // Business rule: notes required for APPROVED/REJECTED/WITHDRAWN
    const requiresNotes: AppStatus[] = [AppStatus.APPROVED, AppStatus.REJECTED, AppStatus.WITHDRAWN]
    if (requiresNotes.includes(status) && (!statusNotes || statusNotes.trim().length === 0)) {
      return fail("Status notes are required when moving to approved, rejected, or withdrawn status.", { statusNotes: ["Required for terminal status changes"] });
    }

    // Get current user for authentication
    const supabase = await createClient();
    const { data: { user: updater } } = await supabase.auth.getUser();
    if (!updater) {
      return fail("Authentication required.");
    }

    // Get updater's role from database
    const updaterProfile = await prisma.profile.findUnique({
      where: { id: updater.id },
      select: { role: true },
    });

    if (!updaterProfile || (updaterProfile.role !== UserRole.ADMIN && updaterProfile.role !== UserRole.STAFF)) {
      return fail("Insufficient permissions.");
    }

    // Get current applications to validate status transitions
    const currentApplications = await prisma.application.findMany({
      where: { id: { in: appIds } },
      select: {
        id: true,
        status: true,
        applicationType: true,
      },
    });

    const appMap = new Map(currentApplications.map(app => [app.id, app]));
    const successfulIds: number[] = [];
    const failed: { id: number; reason: string }[] = [];

    // Validate each transition and collect failures
    for (const appId of appIds) {
      const currentApp = appMap.get(appId);
      if (!currentApp) {
        failed.push({ id: appId, reason: "Application not found" });
        continue;
      }

      // Validate that the status transition is allowed
      const allowedStatuses = getAllowedStatuses(currentApp.applicationType, currentApp.status);
      if (!allowedStatuses.includes(status)) {
        failed.push({
          id: appId,
          reason: `Invalid status transition from ${currentApp.status} for ${currentApp.applicationType} application`
        });
        continue;
      }

      successfulIds.push(appId);
    }

    // Update successful applications and write audit records
    if (successfulIds.length > 0) {
      await prisma.$transaction(async (tx) => {
        // Update applications
        await tx.application.updateMany({
          where: { id: { in: successfulIds } },
          data: {
            status,
            statusNotes: statusNotes || null,
          },
        });

        // Write to append-only ApplicationAudit table for each updated application
        await tx.applicationAudit.createMany({
          data: successfulIds.map(appId => {
            const currentApp = appMap.get(appId)!;
            return {
              applicationId: appId,
              actorId: updater.id,
              oldStatus: currentApp.status,
              newStatus: status,
              note: statusNotes || `Bulk status change from ${currentApp.status} to ${status}`,
            };
          }),
        });
      });

      // Revalidate on success
      revalidatePath("/admin/applications");
    }

    return ok({ ok: successfulIds, failed }, `Updated ${successfulIds.length} application${successfulIds.length !== 1 ? 's' : ''} successfully${failed.length > 0 ? `, ${failed.length} failed` : ''}.`);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "An unexpected error occurred.");
  }
}

export async function getApplicationHistory(applicationId: number): Promise<ApplicationHistoryEntry[]> {
  await assertRole([UserRole.ADMIN, UserRole.STAFF]);

  const history = await prisma.applicationAudit.findMany({
    where: { applicationId },
    select: {
      id: true,
      applicationId: true,
      oldStatus: true,
      newStatus: true,
      note: true,
      createdAt: true,
      actor: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return history as ApplicationHistoryEntry[];
}

// Server actions for useActionState (form-based)
export async function bulkAssignApplications(
  prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  try {
    await assertRole([UserRole.ADMIN, UserRole.STAFF]);

    const applicationIds = formData.getAll("applicationIds").map(id => parseInt(id as string));
    const staffId = formData.get("staffId") as string;

    if (!staffId || applicationIds.length === 0) {
      return fail("Staff member and applications are required");
    }

    // Verify staff user exists
    const staffUser = await prisma.profile.findUnique({
      where: { id: staffId },
      select: { id: true, role: true },
    });

    if (!staffUser || (staffUser.role !== UserRole.STAFF && staffUser.role !== UserRole.ADMIN)) {
      return fail("Invalid staff member selected");
    }

    // Perform bulk update
    const updateResult = await prisma.application.updateMany({
      where: {
        id: { in: applicationIds },
      },
      data: {
        assignedToUserId: staffId,
        updatedAt: new Date(),
      },
    });

    revalidatePath("/admin/applications");

    return ok(null, `Successfully assigned ${updateResult.count} application(s)`);

  } catch (error) {
    console.error("Bulk assign error:", error);
    return fail(error instanceof Error ? error.message : "Failed to assign applications");
  }
}

export async function bulkUpdateApplications(
  prevState: ActionResult<{ failed?: { id: number; reason: string }[] }>,
  formData: FormData
): Promise<ActionResult<{ failed?: { id: number; reason: string }[] }>> {
  try {
    await assertRole([UserRole.ADMIN, UserRole.STAFF]);

    const applicationIds = parseApplicationIds(formData);
    const status = formData.get("status") as AppStatus;
    const statusNotes = formData.get("statusNotes") as string;

    if (applicationIds.length === 0) {
      return fail("No applications selected");
    }

    if (!status) {
      return fail("Status is required");
    }

    // Business rule: notes required for APPROVED/REJECTED/WITHDRAWN
    const requiresNotes: AppStatus[] = [AppStatus.APPROVED, AppStatus.REJECTED, AppStatus.WITHDRAWN];
    if (requiresNotes.includes(status) && (!statusNotes || statusNotes.trim().length === 0)) {
      return fail("Status notes are required for terminal status changes");
    }

    const result = await bulkUpdateApplicationStatus(
      applicationIds,
      status,
      statusNotes?.trim() || undefined
    );

    if (result.success) {
      const successCount = result.data?.ok.length || 0;

      revalidatePath("/admin/applications");

      return ok({ failed: result.data?.failed }, `Successfully updated ${successCount} application(s)`);
    } else {
      return fail(result.message || "Bulk update failed");
    }

  } catch (error) {
    console.error("Bulk update error:", error);
    return fail(error instanceof Error ? error.message : "Failed to update applications");
  }
}

export async function exportApplicationsCSV(
  searchParams: { [key: string]: string | undefined },
  minimal: boolean
): Promise<{ success: true; csvData: string; filename: string } | { success: false; message: string }> {
  try {
    await assertRole(UserRole.STAFF);

    const filters = { ...searchParams };
    delete filters.minimal; // Remove minimal param from filters

    const appData = await getAllApplications(filters);
    const applications: ApplicationListItem[] = appData.applications;

    // Guard against exporting insane data sets
    const MAX_EXPORT_ROWS = 10000;
    if (applications.length > MAX_EXPORT_ROWS) {
      return {
        success: false,
        message: `Export too large: ${applications.length} applications found, maximum allowed is ${MAX_EXPORT_ROWS}. Please apply filters to reduce the dataset size.`
      };
    }

    // Generate CSV data
    let csvData: Record<string, unknown>[];
    let csvHeaders: string[];

    if (minimal) {
      // Minimal export: no PII (phone/address)
      csvData = applications.map(app => ({
        id: app.id,
        submitted_date: app.createdAt.toISOString().split('T')[0],
        name: missing(app.applicantName, 'Unknown'),
        email: missing(app.applicantEmail, 'Unknown'),
        type: app.applicationType,
        status: app.status,
        dog_name: app.dog?.name || '',
        reason: app.reason,
      }));
      csvHeaders = [
        'ID', 'Submitted Date', 'Name', 'Email', 'Type', 'Status',
        'Dog Name', 'Reason'
      ];
    } else {
      // Full export with available fields
      csvData = applications.map(app => ({
        id: app.id,
        submitted_date: app.createdAt.toISOString().split('T')[0],
        name: missing(app.applicantName, 'Unknown'),
        email: missing(app.applicantEmail, 'Unknown'),
        type: app.applicationType,
        status: app.status,
        dog_name: app.dog?.name || '',
        reason: app.reason,
      }));
      csvHeaders = [
        'ID', 'Submitted Date', 'Name', 'Email', 'Type', 'Status',
        'Dog Name', 'Reason'
      ];
    }

    const csvWithBOM = toCsv(csvData, csvHeaders);
    const filename = `applications-${new Date().toISOString().split('T')[0]}${minimal ? '-minimal' : ''}.csv`;

    return {
      success: true,
      csvData: csvWithBOM,
      filename
    };
  } catch (error) {
    console.error('CSV export error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to generate export'
    };
  }
}
