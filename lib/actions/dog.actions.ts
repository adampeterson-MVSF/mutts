// lib/actions/dog.actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Dog, DogStatus, Gender, DogSize, Prisma, AuditAction } from "@prisma/client";
import { createClient } from "@/lib/supabase/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { ActionResult } from "@/lib/types";
import { calculateAge } from "@/lib/utils/dog-utils";
import { dogFormSchema } from "@/lib/schemas";
import { z } from "zod";
import { withAudit, getCurrentUserId, captureAuditState } from "./audit.actions";
import { getMedicalRecords, getMedicalDocuments } from "./medical.actions";
import { FOSTER_FILTER_VALUES } from "@/lib/dog-filters";

const deleteDogSchema = z.object({
  dogId: z.coerce.number().int().positive({ message: "Invalid dog ID" }),
  reason: z.string().min(10, { message: "Reason must be at least 10 characters long" }).max(1000, { message: "Reason must be less than 1000 characters" }),
});

const uploadImageSchema = z.object({
  dogId: z.coerce.number().int().positive({ message: "Invalid dog ID" }),
  // File validation will be handled separately after dogId validation
});

const getAllDogsSchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  status: z.enum(["all", ...Object.values(DogStatus)]).optional().default("all"),
  fosterProfileId: z.enum([FOSTER_FILTER_VALUES.ALL, FOSTER_FILTER_VALUES.NONE]).or(z.string()).optional().default(FOSTER_FILTER_VALUES.ALL), // Profile ID (string) or "none"
  breed: z.string().optional().default("all"),
  gender: z.enum(["all", ...Object.values(Gender)]).optional().default("all"),
  size: z.enum(["all", ...Object.values(DogSize)]).optional().default("all"),
  weightMin: z.string().regex(/^\d*$/, { message: "Weight must be a number" }).optional(),
  weightMax: z.string().regex(/^\d*$/, { message: "Weight must be a number" }).optional(),
  specialNeeds: z.string().optional().default("all"),
  hasPhotos: z.string().optional().default("all"),
  sortField: z.enum(["name", "status", "breed"]).optional().default("name"),
  sortDirection: z.enum(["asc", "desc"]).optional().default("asc"),
});

// Shared photo upload function
async function uploadDogPhoto(file: File): Promise<string> {
  const supabase = await createClient();
  const timestamp = Date.now();
  const sanitizedFileName = file.name.replace(/\s+/g, "-");
  const storagePath = `dog-${timestamp}-${sanitizedFileName}`;

  const { error: uploadError } = await supabase.storage
    .from("dog-photos")
    .upload(storagePath, file, {
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Storage Error: ${uploadError.message}`);
  }

  const { data: urlData } = supabase.storage
    .from("dog-photos")
    .getPublicUrl(storagePath);

  const publicUrl = urlData.publicUrl;
  if (!publicUrl) {
    throw new Error("Unable to generate public URL for uploaded photo");
  }

  return publicUrl;
}

export async function createDog(formData: FormData): Promise<ActionResult<Dog> | never> {
  try {
    await assertRole(UserRole.STAFF);

    const parsed = dogFormSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors,
        data: null,
      };
    }

    const {
      name,
      status,
      breed,
      dateOfBirth,
      bioPublic,
      notesInternal,
      fosterProfileId,
      specialNeeds,
    } = parsed.data;

    const finalStatus = status ?? DogStatus.INTAKE;

    // Handle primary photo upload if provided
    let primaryPhotoUrl = "https://picsum.photos/300/200?random=1"; // Default placeholder
    const file = formData.get("file");

    if (file instanceof File && file.size > 0) {
      try {
        primaryPhotoUrl = await uploadDogPhoto(file);
      } catch (error) {
        // For now, we'll continue with the default placeholder if upload fails
        // In production, you might want to return an error instead
        console.error("Failed to upload dog photo:", error);
      }
    }

    await prisma.dog.create({
      data: {
        name,
        status: finalStatus,
        breed,
        dateOfBirth,
        bioPublic,
        notesInternal,
        specialNeeds,
        fosterProfileId: finalStatus === DogStatus.IN_FOSTER ? fosterProfileId : null,
        primaryPhotoUrl,
      },
    });

    revalidatePath("/admin/dogs");
    revalidatePath("/adopt");
    redirect("/admin/dogs");
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred.",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function updateDog(dogId: number, formData: FormData): Promise<ActionResult> {
  try {
    await assertRole(UserRole.STAFF);
    const userId = await getCurrentUserId();

    const file = formData.get('file') as File | null;
    let newPhotoUrl: string | undefined = undefined;

    if (file && file.size > 0) {
      try {
        newPhotoUrl = await uploadDogPhoto(file);
      } catch (error) {
        return {
          success: false,
          message: error instanceof Error ? error.message : "Failed to upload photo",
          fieldErrors: undefined,
          data: null,
        };
      }
    }

    const parsed = dogFormSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors,
        data: null,
      };
    }

    const {
      name,
      status,
      breed,
      dateOfBirth,
      bioPublic,
      notesInternal,
      fosterProfileId,
      specialNeeds,
    } = parsed.data;

    const finalStatus = status ?? DogStatus.INTAKE;

    // Capture before state for audit
    const beforeState = await captureAuditState('dog', dogId);

    const updateData: {
      name: string;
      status: DogStatus;
      breed: string | null;
      dateOfBirth: Date | null;
      bioPublic: string | null;
      notesInternal: string | null;
      specialNeeds: boolean;
      fosterProfileId: string | null;
      primaryPhotoUrl?: string;
    } = {
      name,
      status: finalStatus,
      breed,
      dateOfBirth,
      bioPublic,
      notesInternal,
      specialNeeds,
      fosterProfileId: finalStatus === DogStatus.IN_FOSTER ? fosterProfileId : null,
    };

    if (newPhotoUrl) {
      updateData.primaryPhotoUrl = newPhotoUrl;
    }

    await withAudit(
      "updateDog",
      userId,
      async () => {
        const updatedDog = await prisma.dog.update({
          where: { id: dogId },
          data: updateData,
        });

        revalidatePath("/admin");
        revalidatePath(`/admin/edit-dog/${dogId}`);
        revalidatePath("/adopt");
        revalidatePath(`/adopt/${dogId}`);

        return updatedDog;
      },
      {
        action: AuditAction.DOG_EDIT,
        entityType: 'dog',
        entityId: dogId,
        before: beforeState || undefined,
        after: beforeState ? { ...beforeState, ...updateData } : undefined,
        note: `Updated dog: ${name}`,
      }
    );

    return {
      success: true,
      message: "Dog updated successfully!",
      fieldErrors: undefined,
      data: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred.",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function uploadAndSetDogImage(prevState: { message: string | null; newImageUrl: string | null }, formData: FormData) {
  try {
    await assertRole(UserRole.STAFF);
  } catch (error) {
    return { message: error instanceof Error ? error.message : "Not authorized", newImageUrl: null };
  }

  const parsed = uploadImageSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) {
    return { message: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join(', '), newImageUrl: null };
  }

  const { dogId } = parsed.data;
  const file = formData.get("file") as File;
  if (!file || file.size === 0) {
    return { message: "No file provided.", newImageUrl: null };
  }

  const supabase = await createClient();
  const filePath = `dogs/${dogId}-${file.name}-${Date.now()}`;

  try {
    const { error: uploadError } = await supabase.storage
      .from("images") // BUCKET NAME - YOU MUST CREATE THIS IN SUPABASE
      .upload(filePath, file);

    if (uploadError) {
      throw new Error(`Storage Error: ${uploadError.message}`);
    }

    const { data: { publicUrl } } = supabase.storage
      .from("images")
      .getPublicUrl(filePath);

    if (!publicUrl) {
      throw new Error("Could not get public URL.");
    }

    await prisma.dog.update({
      where: { id: dogId },
      data: { primaryPhotoUrl: publicUrl },
    });

    revalidatePath("/admin");
    revalidatePath(`/admin/edit-dog/${dogId}`);
    revalidatePath("/adopt");
    revalidatePath(`/adopt/${dogId}`);

    return { message: null, newImageUrl: publicUrl };

  } catch (error) {
    console.error("Upload failed:", error);
    return { message: error instanceof Error ? error.message : "Upload failed.", newImageUrl: null };
  }
}

export async function deleteDog(dogId: number, reason: string): Promise<ActionResult> {
  try {
    await assertRole(UserRole.STAFF);
    const userId = await getCurrentUserId();

    const parsed = deleteDogSchema.safeParse({ dogId, reason });
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Validation failed.",
        fieldErrors,
        data: null,
      };
    }

    // Capture before state for audit
    const beforeState = await captureAuditState('dog', parsed.data.dogId);

    await withAudit(
      "deleteDog",
      userId,
      async () => {
        await prisma.dog.delete({ where: { id: parsed.data.dogId } });
        revalidatePath("/admin/dogs");
        revalidatePath("/adopt");
        return null;
      },
      {
        action: AuditAction.DOG_EDIT,
        entityType: 'dog',
        entityId: parsed.data.dogId,
        before: beforeState || undefined,
        after: undefined,
        note: `Deleted dog. Reason: ${parsed.data.reason}`,
      }
    );

    return {
      success: true,
      message: "Dog deleted successfully! Redirecting...",
      fieldErrors: undefined,
      data: null,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred.",
      fieldErrors: undefined,
      data: null,
    };
  }
}

export async function getDogById(id: number) {
  const parsed = z.object({ id: z.coerce.number().int().positive() }).safeParse({ id });
  if (!parsed.success) {
    throw new Error("Invalid dog ID");
  }

  const dog = await prisma.dog.findUnique({
    where: { id },
    include: {
      fosterProfile: {
        select: {
          profileId: true,
          profile: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      },
    },
  });

  if (!dog) {
    throw new Error("Dog not found");
  }

  // Compute derived values on the fly
  const isSenior = calculateAge(dog.dateOfBirth) ? calculateAge(dog.dateOfBirth)! >= 8 : false;
  const hasPhotos = dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false;

  return {
    ...dog,
    isSenior, // Runtime property
    hasPhotos, // Runtime property
  };
}

export async function getAllDogs(searchParams?: { [key: string]: string | undefined }) {
  await assertRole(UserRole.STAFF);

  const parsed = getAllDogsSchema.safeParse(searchParams || {});
  if (!parsed.success) {
    throw new Error("Invalid search parameters");
  }

  const { page, limit } = parsed.data;
  const offset = (page - 1) * limit;

  // Build where clause for filtering
  const where: Prisma.DogWhereInput = {};

  if (parsed.data.status && parsed.data.status !== "all") {
    where.status = parsed.data.status;
  }

  if (parsed.data.fosterProfileId && parsed.data.fosterProfileId !== FOSTER_FILTER_VALUES.ALL) {
    if (parsed.data.fosterProfileId === FOSTER_FILTER_VALUES.NONE) {
      // Filter for dogs with no foster assigned
      where.fosterProfileId = null;
    } else {
      // Filter for specific foster
      where.fosterProfileId = parsed.data.fosterProfileId;
    }
  }

  if (parsed.data.breed && parsed.data.breed !== "all" && parsed.data.breed !== "") {
    where.breed = {
      contains: parsed.data.breed,
      mode: 'insensitive' as const,
    };
  }

  if (parsed.data.gender && parsed.data.gender !== "all") {
    where.gender = parsed.data.gender;
  }

  if (parsed.data.size && parsed.data.size !== "all") {
    where.size = parsed.data.size;
  }

  if (parsed.data.weightMin && parsed.data.weightMin !== "") {
    const weightMin = parseInt(parsed.data.weightMin, 10);
    if (!Number.isNaN(weightMin)) {
      where.weight_lbs = { gte: weightMin };
    }
  }

  if (parsed.data.weightMax && parsed.data.weightMax !== "") {
    const weightMax = parseInt(parsed.data.weightMax, 10);
    if (!Number.isNaN(weightMax)) {
      where.weight_lbs = where.weight_lbs ? { ...(where.weight_lbs as object), lte: weightMax } : { lte: weightMax };
    }
  }


  if (parsed.data.specialNeeds && parsed.data.specialNeeds !== "all") {
    where.specialNeeds = parsed.data.specialNeeds === "true";
  }

  if (parsed.data.hasPhotos && parsed.data.hasPhotos !== "all") {
    if (parsed.data.hasPhotos === "true") {
      where.primaryPhotoUrl = { not: null };
    } else {
      where.primaryPhotoUrl = null;
    }
  }

  // Build orderBy clause for sorting
  const orderBy: Prisma.DogOrderByWithRelationInput = {};
  const sortField = parsed.data.sortField;
  const sortDirection = parsed.data.sortDirection;

  switch (sortField) {
    case "name":
      orderBy.name = sortDirection;
      break;
    case "status":
      orderBy.status = sortDirection;
      break;
    case "breed":
      orderBy.breed = sortDirection;
      break;
    default:
      orderBy.name = "asc";
  }

  const [dogs, totalCount] = await Promise.all([
    prisma.dog.findMany({
      where,
      orderBy,
      skip: offset,
      take: limit,
      select: {
        id: true,
        mutt_id: true,
        name: true,
        breed: true,
        dateOfBirth: true,
        status: true,
        primaryPhotoUrl: true,
        gender: true,
        weight_lbs: true,
        size: true,
        specialNeeds: true,
        bioPublic: true,
        createdAt: true,
        fosterProfile: {
          select: {
            profile: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    }),
    prisma.dog.count({ where }),
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  // Flatten foster profile data and compute derived fields
  const dogsWithFlattenedFoster = dogs.map(dog => ({
    ...dog,
    fosterProfile: dog.fosterProfile ? {
      ...dog.fosterProfile,
      name: dog.fosterProfile.profile?.name,
      email: dog.fosterProfile.profile?.email,
    } : null,
    // Compute derived values on the fly
    isSenior: calculateAge(dog.dateOfBirth) ? calculateAge(dog.dateOfBirth)! >= 8 : false,
    hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false,
  }));

  return {
    dogs: dogsWithFlattenedFoster,
    pagination: {
      currentPage: page,
      totalPages,
      totalCount,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

export type DogFilters = {
  breed?: string;
  specialNeeds?: string;
  size?: string;
  gender?: string;
  hasPhotos?: string;
};

const coerceBoolean = (value?: string) => {
  if (value === undefined) return undefined;
  if (value === "true") return true;
  if (value === "false") return false;
  return undefined;
};

export async function getDogs({ page = 1, pageSize = 12 }: { page?: number; pageSize?: number } = {}) {
  const take = pageSize;
  const skip = (Math.max(1, page) - 1) * take;

  const where: Prisma.DogWhereInput = {
    status: DogStatus.AVAILABLE,
  };

  const [dogs, total] = await Promise.all([
    prisma.dog.findMany({
      where,
      orderBy: [
        { primaryPhotoUrl: 'desc' }, // Photos first
        { createdAt: 'desc' }, // Then by recency
      ],
      take,
      skip,
      select: {
        id: true,
        name: true,
        breed: true,
        dateOfBirth: true,
        bioPublic: true,
        specialNeeds: true,
        primaryPhotoUrl: true,
        gender: true,
        weight_lbs: true,
        size: true,
        mutt_id: true,
        status: true,
        createdAt: true,
      },
    }),
    prisma.dog.count({ where }),
  ]);

  // Compute derived values on the fly
  const dogsWithDerived = dogs.map(dog => ({
    ...dog,
    isSenior: calculateAge(dog.dateOfBirth) ? calculateAge(dog.dateOfBirth)! >= 8 : false,
    hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false,
  }));

  return { dogs: dogsWithDerived, total };
}

export async function getAvailableDogs({ page = 1, filters = {} }: { page?: number; filters?: DogFilters } = {}) {
  const take = 12;
  const skip = (Math.max(1, page) - 1) * take;

  const where: Prisma.DogWhereInput = {
    status: DogStatus.AVAILABLE,
  };

  if (filters.breed) {
    where.breed = {
      contains: filters.breed,
      mode: "insensitive",
    };
  }

  if (filters.size) {
    where.size = filters.size as DogSize;
  }

  if (filters.gender) {
    where.gender = filters.gender as Gender;
  }


  const specialNeedsFilter = coerceBoolean(filters.specialNeeds);
  if (specialNeedsFilter !== undefined) {
    where.specialNeeds = specialNeedsFilter;
  }


  const [dogs, totalCount] = await Promise.all([
    prisma.dog.findMany({
      where,
      orderBy: [
        { primaryPhotoUrl: 'desc' }, // Photos first
        { createdAt: 'desc' }, // Then by recency
      ],
      take,
      skip,
      select: {
        id: true,
        name: true,
        breed: true,
        dateOfBirth: true,
        bioPublic: true,
        specialNeeds: true,
        primaryPhotoUrl: true,
        gender: true,
        weight_lbs: true,
        size: true,
        mutt_id: true,
        status: true,
        createdAt: true,
      },
    }),
    prisma.dog.count({ where }),
  ]);

  // Compute derived values on the fly
  const dogsWithDerived = dogs.map(dog => ({
    ...dog,
    isSenior: calculateAge(dog.dateOfBirth) ? calculateAge(dog.dateOfBirth)! >= 8 : false,
    hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false,
  }));

  const totalPages = Math.ceil(totalCount / take);

  return {
    dogs: dogsWithDerived,
    pagination: {
      page,
      limit: take,
      totalCount,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
}

export async function getShelterDogs() {
  const dogs = await prisma.dog.findMany({
    where: {
      status: {
        not: "ADOPTED",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      breed: true,
      dateOfBirth: true,
      status: true,
      primaryPhotoUrl: true,
      createdAt: true,
    },
  });

  // Compute derived values on the fly
  return dogs.map(dog => ({
    ...dog,
    isSenior: calculateAge(dog.dateOfBirth) ? calculateAge(dog.dateOfBirth)! >= 8 : false,
    hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false,
  }));
}

export async function getPotentialFosters() {
  const fosterProfiles = await prisma.fosterProfile.findMany({
    select: {
      profileId: true,
      profile: {
        select: {
          name: true,
          email: true,
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
  });

  return fosterProfiles
    .filter((fp) => fp.profile)
    .map((fp) => ({
      id: fp.profileId,
      name: fp.profile?.name ?? null,
      email: fp.profile?.email ?? "",
    }));
}

export async function getUniqueBreeds() {
  const breeds = await prisma.dog.findMany({
    where: { breed: { not: null } },
    select: { breed: true },
    distinct: ['breed'],
    orderBy: { breed: 'asc' },
  });
  return [...new Set(breeds.map((b) => b.breed!).filter(Boolean))];
}

export async function getUniqueStatuses() {
  const statuses = await prisma.dog.findMany({
    select: { status: true },
    distinct: ['status'],
  });
  return [...new Set(statuses.map((s) => s.status))];
}

export async function getUniqueGenders() {
  const genders = await prisma.dog.findMany({
    select: {
      gender: true,
    },
    distinct: ["gender"],
    orderBy: {
      gender: "asc",
    },
  });

  return genders
    .map((entry) => entry.gender)
    .filter((gender): gender is Gender => gender !== null);
}

export async function getUniqueSizes() {
  const sizes = await prisma.dog.findMany({
    select: {
      size: true,
    },
    distinct: ["size"],
    orderBy: {
      size: "asc",
    },
  });

  return sizes
    .map((entry) => entry.size)
    .filter((size): size is DogSize => size !== null);
}

export async function getRelatedDogs(dogId: number, limit = 4) {
  // First get the current dog's size and dateOfBirth
  const currentDog = await prisma.dog.findUnique({
    where: { id: dogId },
    select: { size: true, dateOfBirth: true },
  });

  if (!currentDog) {
    return [];
  }

  // Calculate current dog's age
  const currentAge = currentDog.dateOfBirth ? calculateAge(currentDog.dateOfBirth) : null;

  // Get dogs with same size and similar age (±2 years), excluding current dog
  // Convert age range to date range: if current dog is X years old, find dogs born within ±2 years of that age
  const now = new Date();
  const ageMin = Math.max(0, (currentAge || 0) - 2);
  const ageMax = (currentAge || 0) + 2;

  // Convert age range to date range (older dogs have earlier birth dates)
  const dateMax = new Date(now.getTime() - ageMin * 365 * 24 * 60 * 60 * 1000);
  const dateMin = new Date(now.getTime() - ageMax * 365 * 24 * 60 * 60 * 1000);

  const dogs = await prisma.dog.findMany({
    where: {
      AND: [
        { id: { not: dogId } },
        { status: DogStatus.AVAILABLE },
        { size: currentDog.size },
        {
          dateOfBirth: {
            gte: dateMin,
            lte: dateMax,
          },
        },
      ],
    },
    orderBy: [
      { primaryPhotoUrl: 'desc' }, // Photos first
      { createdAt: 'desc' }, // Then by recency
    ],
    take: limit,
    select: {
      id: true,
      name: true,
      breed: true,
      dateOfBirth: true,
      bioPublic: true,
      specialNeeds: true,
      primaryPhotoUrl: true,
      gender: true,
      size: true,
      status: true,
      createdAt: true,
    },
  });

  // Compute derived values on the fly
  return dogs.map(dog => ({
    ...dog,
    isSenior: calculateAge(dog.dateOfBirth) ? calculateAge(dog.dateOfBirth)! >= 8 : false,
    hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false,
  }));
}

export async function getAdoptedDogs() {
  const dogs = await prisma.dog.findMany({
    where: {
      status: DogStatus.ADOPTED,
    },
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      id: true,
      name: true,
      breed: true,
      dateOfBirth: true,
      bioPublic: true,
      specialNeeds: true,
      primaryPhotoUrl: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // Compute derived values on the fly
  return dogs.map(dog => ({
    ...dog,
    isSenior: calculateAge(dog.dateOfBirth) ? calculateAge(dog.dateOfBirth)! >= 8 : false,
    hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false,
  }));
}

/**
 * Canonical function for fetching a dog with all its medical context.
 * Returns a consistent shape for both dog detail pages and medical-specific pages.
 */
export async function getDogMedicalBundle(dogId: number, page: number = 1) {
  await assertRole(UserRole.STAFF);

  const parsed = z.object({
    dogId: z.coerce.number().int().positive(),
    page: z.coerce.number().int().min(1)
  }).safeParse({ dogId, page });
  if (!parsed.success) {
    throw new Error("Invalid dog ID");
  }

  const [dogDetails, medicalRecords, medicalDocuments] = await Promise.all([
    prisma.dog.findUnique({
      where: { id: dogId },
      include: {
        fosterProfile: {
          include: {
            profile: true,
          },
        },
      },
    }),
    getMedicalRecords(dogId, page),
    getMedicalDocuments(dogId),
  ]);

  if (!dogDetails) {
    throw new Error("Dog not found");
  }

  // Compute derived values on the fly
  const isSenior = calculateAge(dogDetails.dateOfBirth) ? calculateAge(dogDetails.dateOfBirth)! >= 8 : false;
  const hasPhotos = dogDetails.primaryPhotoUrl ? !dogDetails.primaryPhotoUrl.includes('placeholder') : false;

  return {
    dog: {
      ...dogDetails,
      isSenior, // Runtime property
      hasPhotos, // Runtime property
    },
    medicalRecords,
    medicalDocuments,
  };
}

/**
 * @deprecated Use getDogMedicalBundle instead for consistent medical data fetching
 * Fetches a single dog and its related data for the admin detail page.
 */
export async function getDogDetailsById(dogId: number) {
  const bundle = await getDogMedicalBundle(dogId, 1);
  return { dog: bundle.dog, medicalRecords: bundle.medicalRecords };
}
