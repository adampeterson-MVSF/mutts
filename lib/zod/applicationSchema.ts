// lib/schemas/applicationSchema.ts

import { z } from "zod";

// Profile fields (user account data)
export const profileSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

// Applicant fields (application-specific data - moved from Profile to Application)
export const applicantSchema = z.object({
  // --- Contact Fields ---
  applicantPhone: z.string().optional(),

  // --- Housing Fields ---
  address: z.string().min(5, { message: "Please enter a valid address." }),
  housingType: z.enum(["OWN_HOME", "RENT_HOME", "OWN_APT_CONDO", "RENT_APT_CONDO", "OTHER"]),
  hasYard: z.enum(["YES", "NO", "SHARED"]),
  yardFenced: z.boolean(),
  otherPets: z.string().optional(), // Description of other pets
  vetName: z.string().optional(),
  vetPhone: z.string().optional(),

  // --- Home Environment Field ---
  homeEnvironmentDescription: z.string().min(1, { message: "Please describe your home environment." })
});

export const applicationSchema = z.object({
  // --- Application-specific Fields ---
  reason: z.string().min(10, { message: "Please provide a reason (min 10 characters)." }),

  // --- Relation IDs ---
  dogId: z.number().int().positive().optional(),

  // --- Reference Fields (relational data) ---
  references: z.array(z.object({
    name: z.string().min(1, "Reference name is required."),
    phone: z.string().optional(),
    relationship: z.string().optional()
  })).optional(),
}).merge(applicantSchema.partial()); // Merge applicant fields as optional into application schema

export type ProfileFormData = z.infer<typeof profileSchema>;
export type ApplicationFormData = z.infer<typeof applicationSchema>;
export type ApplicantFormData = z.infer<typeof applicantSchema>;
