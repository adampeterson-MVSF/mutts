import type {
  AppStatus,
  AppType,
  Application,
  Dog,
  Reference,
} from "@prisma/client";

/**
 * Canonical DTO for an application row in admin tables.
 * Keeps the snapshot fields that staff care about when reviewing submissions.
 */
export interface ApplicationListItem {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  applicationType: AppType;
  status: AppStatus;
  applicantName: string;
  applicantEmail: string;
  reason: string;
  dog: Pick<Dog, "id" | "name" | "status"> | null;
}

// Legacy alias for backward compatibility
export type AdminApplicationRow = ApplicationListItem;

/**
 * Canonical DTO for the application detail view.
 * Uses the snapshot data that was stored at submission time.
 */
export interface AdminApplicationDetail
  extends Pick<
    Application,
    | "id"
    | "createdAt"
    | "updatedAt"
    | "applicationType"
    | "status"
    | "statusNotes"
    | "profileId"
    | "applicantName"
    | "applicantEmail"
    | "applicantPhone"
    | "address"
    | "housingType"
    | "hasYard"
    | "yardFenced"
    | "otherPets"
    | "vetName"
    | "vetPhone"
    | "homeEnvironmentDescription"
    | "reason"
  > {
  references: Reference[];
  dog: Pick<Dog, "id" | "name" | "status" | "bioPublic"> | null;

  // Computed labels for all optional fields
  housingTypeLabel: string;
  hasYardLabel: string;
  yardFencedLabel: string;
  otherPetsLabel: string;
  homeEnvironmentDescriptionLabel: string;
}

/**
 * Append-only audit history entry for applications.
 */
export interface ApplicationHistoryEntry {
  id: number;
  applicationId: number;
  oldStatus: AppStatus | null;
  newStatus: AppStatus;
  note: string | null;
  createdAt: Date;
  actor: {
    name: string | null;
    email: string;
  } | null;
}
