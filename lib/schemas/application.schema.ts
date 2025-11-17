// lib/schemas/application.schema.ts

import { z } from 'zod';

import { AppType, HousingType, YardType } from '@prisma/client';

// This is the SINGLE source of truth for application validation.

export const applicationSchema = z.object({
  formType: z.nativeEnum(AppType),
  dogId: z.coerce.number().optional(),

  // ContactInfoSection
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  // email is on profile, not here
  applicantPhone: z.string().optional(),
  address: z.string().min(5, "Address is required"),
  vetName: z.string().optional(),
  vetPhone: z.string().optional(),
  // HousingInfoSection
  housingType: z.nativeEnum(HousingType, { message: "Housing type is required" }),
  hasYard: z.nativeEnum(YardType, { message: "Yard info is required" }),
  yardFenced: z.boolean().optional(),
  otherPets: z.string().optional(),
  homeEnvironmentDescription: z.string().min(10, "Description is required"),
  // ReasonSection
  reason: z.string().min(20, "Reason must be at least 20 characters"),
  // ReferencesSection (example, adjust as needed)
  references: z.array(z.object({
    name: z.string().min(2, "Reference name is required"),
    phone: z.string().optional(),
    relationship: z.string().optional(),
  })).optional(),
});
