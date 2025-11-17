-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'STAFF', 'VOLUNTEER');

-- CreateEnum
CREATE TYPE "DogStatus" AS ENUM ('INTAKE', 'MEDICAL_HOLD', 'AVAILABLE', 'PENDING', 'IN_FOSTER', 'ADOPTED', 'SANCTUARY');

-- CreateEnum
CREATE TYPE "LogType" AS ENUM ('WALK', 'BATHROOM', 'FEEDING', 'MEDICATION', 'NOTE');

-- CreateEnum
CREATE TYPE "AppType" AS ENUM ('ADOPTER', 'FOSTER');

-- CreateEnum
CREATE TYPE "AppStatus" AS ENUM ('SUBMITTED', 'IN_REVIEW', 'APPROVED', 'REJECTED', 'WITHDRAWN');

-- CreateEnum
CREATE TYPE "MedicalRecordType" AS ENUM ('VACCINATION', 'MEDICATION', 'VET_VISIT', 'NOTE');

-- CreateEnum
CREATE TYPE "HousingType" AS ENUM ('OWN_HOME', 'RENT_HOME', 'OWN_APT_CONDO', 'RENT_APT_CONDO', 'OTHER');

-- CreateEnum
CREATE TYPE "YardType" AS ENUM ('YES', 'NO', 'SHARED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "DogSize" AS ENUM ('TOY', 'SMALL', 'MEDIUM', 'LARGE', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('NOTE', 'CALL', 'EMAIL', 'VISIT');

-- CreateEnum
CREATE TYPE "AuditAction" AS ENUM ('APPLICATION_STATUS_CHANGE', 'DOG_EDIT', 'DOG_STATUS_CHANGE', 'FOSTER_ASSIGNMENT', 'MEDICAL_DOCUMENT_UPLOAD', 'MEDICAL_DOCUMENT_DELETE', 'USER_DATA_DELETE', 'USER_DATA_EXPORT');

-- CreateEnum
CREATE TYPE "ShiftStatus" AS ENUM ('ACTIVE', 'DELETED');

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'VOLUNTEER',
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shiftCapacity" INTEGER,
    "prefersWeekdays" BOOLEAN,
    "prefersMornings" BOOLEAN,
    "trainingCompleted" BOOLEAN NOT NULL DEFAULT false,
    "backgroundCheckCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dogs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "status" "DogStatus" NOT NULL DEFAULT 'INTAKE',
    "breed" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "bioPublic" TEXT,
    "notesInternal" TEXT,
    "specialNeeds" BOOLEAN NOT NULL DEFAULT false,
    "primaryPhotoUrl" TEXT,
    "gender" "Gender" NOT NULL DEFAULT 'UNKNOWN',
    "weight_lbs" DOUBLE PRECISION,
    "size" "DogSize" NOT NULL DEFAULT 'UNKNOWN',
    "mutt_id" TEXT,
    "page_url" TEXT,
    "foster_profile_id" TEXT,

    CONSTRAINT "dogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogEntry" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "LogType" NOT NULL,
    "notes" TEXT,
    "dogId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "LogEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medical_records" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" "MedicalRecordType" NOT NULL,
    "notes" TEXT,
    "dog_id" INTEGER NOT NULL,

    CONSTRAINT "medical_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "applicationType" "AppType" NOT NULL DEFAULT 'ADOPTER',
    "status" "AppStatus" NOT NULL DEFAULT 'SUBMITTED',
    "statusNotes" TEXT,
    "profileId" TEXT NOT NULL,
    "applicantName" TEXT NOT NULL,
    "applicantEmail" TEXT NOT NULL,
    "applicantPhone" TEXT,
    "address" TEXT,
    "housingType" "HousingType",
    "hasYard" "YardType",
    "yardFenced" BOOLEAN,
    "otherPets" TEXT,
    "vetName" TEXT,
    "vetPhone" TEXT,
    "homeEnvironmentDescription" TEXT,
    "assignedToUserId" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dogId" INTEGER,
    "reason" TEXT NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "application_audits" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "applicationId" INTEGER NOT NULL,
    "actorId" TEXT NOT NULL,
    "oldStatus" "AppStatus",
    "newStatus" "AppStatus" NOT NULL,
    "note" TEXT,

    CONSTRAINT "application_audits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reference" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "relationship" TEXT,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shifts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "starts_at" TIMESTAMP(3) NOT NULL,
    "ends_at" TIMESTAMP(3) NOT NULL,
    "capacity" INTEGER,
    "status" "ShiftStatus" NOT NULL DEFAULT 'ACTIVE',
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer_shift_signups" (
    "id" SERIAL NOT NULL,
    "signup_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancelled_at" TIMESTAMP(3),
    "cancellation_reason" TEXT,
    "shift_id" INTEGER NOT NULL,
    "volunteer_id" TEXT NOT NULL,

    CONSTRAINT "volunteer_shift_signups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vaccination_records" (
    "id" SERIAL NOT NULL,
    "medicalRecordId" INTEGER NOT NULL,
    "vaccineType" TEXT NOT NULL,
    "nextDueDate" TIMESTAMP(3),
    "lotNumber" TEXT,
    "vetName" TEXT,

    CONSTRAINT "vaccination_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medication_records" (
    "id" SERIAL NOT NULL,
    "medicalRecordId" INTEGER NOT NULL,
    "medicationName" TEXT NOT NULL,
    "dosage" TEXT,
    "frequency" TEXT,

    CONSTRAINT "medication_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vet_visit_records" (
    "id" SERIAL NOT NULL,
    "medicalRecordId" INTEGER NOT NULL,
    "vetName" TEXT,
    "visitReason" TEXT,

    CONSTRAINT "vet_visit_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foster_profiles" (
    "profileId" TEXT NOT NULL,
    "hasCats" BOOLEAN NOT NULL DEFAULT false,
    "hasDogs" BOOLEAN NOT NULL DEFAULT false,
    "canAdministerMeds" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,

    CONSTRAINT "foster_profiles_pkey" PRIMARY KEY ("profileId")
);

-- CreateTable
CREATE TABLE "medical_documents" (
    "id" SERIAL NOT NULL,
    "dogId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "uploadedByUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medical_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" SERIAL NOT NULL,
    "dogId" INTEGER NOT NULL,
    "type" "ActivityType" NOT NULL,
    "note" TEXT NOT NULL,
    "createdByUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "capacity" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" "AuditAction" NOT NULL,
    "actorId" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "before" JSONB,
    "after" JSONB,
    "note" TEXT,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shift_cancellation_audits" (
    "id" SERIAL NOT NULL,
    "shiftId" INTEGER NOT NULL,
    "actorUserId" TEXT NOT NULL,
    "affectedCount" INTEGER NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shift_cancellation_audits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE INDEX "Profile_role_idx" ON "Profile"("role");

-- CreateIndex
CREATE INDEX "dogs_status_idx" ON "dogs"("status");

-- CreateIndex
CREATE INDEX "dogs_breed_idx" ON "dogs"("breed");

-- CreateIndex
CREATE INDEX "dogs_createdAt_idx" ON "dogs"("createdAt");

-- CreateIndex
CREATE INDEX "dogs_updatedAt_idx" ON "dogs"("updatedAt");

-- CreateIndex
CREATE INDEX "dogs_status_updatedAt_idx" ON "dogs"("status", "updatedAt");

-- CreateIndex
CREATE INDEX "dogs_status_breed_idx" ON "dogs"("status", "breed");

-- CreateIndex
CREATE INDEX "dogs_mutt_id_idx" ON "dogs"("mutt_id");

-- CreateIndex
CREATE INDEX "dogs_gender_idx" ON "dogs"("gender");

-- CreateIndex
CREATE INDEX "dogs_size_idx" ON "dogs"("size");

-- CreateIndex
CREATE INDEX "dogs_weight_lbs_idx" ON "dogs"("weight_lbs");

-- CreateIndex
CREATE INDEX "dogs_page_url_idx" ON "dogs"("page_url");

-- CreateIndex
CREATE UNIQUE INDEX "dogs_page_url_key" ON "dogs"("page_url");

-- CreateIndex
CREATE INDEX "LogEntry_timestamp_idx" ON "LogEntry"("timestamp");

-- CreateIndex
CREATE INDEX "medical_records_date_idx" ON "medical_records"("date");

-- CreateIndex
CREATE INDEX "applications_status_idx" ON "applications"("status");

-- CreateIndex
CREATE INDEX "applications_applicationType_idx" ON "applications"("applicationType");

-- CreateIndex
CREATE INDEX "applications_createdAt_idx" ON "applications"("createdAt");

-- CreateIndex
CREATE INDEX "applications_updatedAt_idx" ON "applications"("updatedAt");

-- CreateIndex
CREATE INDEX "applications_status_createdAt_idx" ON "applications"("status", "createdAt");

-- CreateIndex
CREATE INDEX "applications_status_updatedAt_idx" ON "applications"("status", "updatedAt");

-- CreateIndex
CREATE INDEX "applications_assignedToUserId_idx" ON "applications"("assignedToUserId");

-- CreateIndex
CREATE INDEX "application_audits_applicationId_idx" ON "application_audits"("applicationId");

-- CreateIndex
CREATE INDEX "application_audits_createdAt_idx" ON "application_audits"("createdAt");

-- CreateIndex
CREATE INDEX "application_audits_actorId_idx" ON "application_audits"("actorId");

-- CreateIndex
CREATE INDEX "shifts_starts_at_idx" ON "shifts"("starts_at");

-- CreateIndex
CREATE INDEX "shifts_status_idx" ON "shifts"("status");

-- CreateIndex
CREATE INDEX "shifts_starts_at_status_idx" ON "shifts"("starts_at", "status");

-- CreateIndex
CREATE INDEX "volunteer_shift_signups_signup_time_idx" ON "volunteer_shift_signups"("signup_time");

-- CreateIndex
CREATE INDEX "volunteer_shift_signups_shift_id_cancelled_at_idx" ON "volunteer_shift_signups"("shift_id", "cancelled_at");

-- CreateIndex
CREATE UNIQUE INDEX "volunteer_shift_signups_shift_id_volunteer_id_key" ON "volunteer_shift_signups"("shift_id", "volunteer_id");

-- CreateIndex
CREATE UNIQUE INDEX "vaccination_records_medicalRecordId_key" ON "vaccination_records"("medicalRecordId");

-- CreateIndex
CREATE UNIQUE INDEX "medication_records_medicalRecordId_key" ON "medication_records"("medicalRecordId");

-- CreateIndex
CREATE UNIQUE INDEX "vet_visit_records_medicalRecordId_key" ON "vet_visit_records"("medicalRecordId");

-- CreateIndex
CREATE INDEX "medical_documents_dogId_createdAt_idx" ON "medical_documents"("dogId", "createdAt");

-- CreateIndex
CREATE INDEX "activity_logs_dogId_createdAt_idx" ON "activity_logs"("dogId", "createdAt");

-- CreateIndex
CREATE INDEX "events_startTime_idx" ON "events"("startTime");

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "audit_logs"("createdAt");

-- CreateIndex
CREATE INDEX "audit_logs_action_idx" ON "audit_logs"("action");

-- CreateIndex
CREATE INDEX "audit_logs_entityType_entityId_idx" ON "audit_logs"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "audit_logs_actorId_idx" ON "audit_logs"("actorId");

-- CreateIndex
CREATE INDEX "shift_cancellation_audits_shiftId_idx" ON "shift_cancellation_audits"("shiftId");

-- CreateIndex
CREATE INDEX "shift_cancellation_audits_createdAt_idx" ON "shift_cancellation_audits"("createdAt");

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_foster_profile_id_fkey" FOREIGN KEY ("foster_profile_id") REFERENCES "foster_profiles"("profileId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogEntry" ADD CONSTRAINT "LogEntry_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogEntry" ADD CONSTRAINT "LogEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medical_records" ADD CONSTRAINT "medical_records_dog_id_fkey" FOREIGN KEY ("dog_id") REFERENCES "dogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_assignedToUserId_fkey" FOREIGN KEY ("assignedToUserId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application_audits" ADD CONSTRAINT "application_audits_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "applications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application_audits" ADD CONSTRAINT "application_audits_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "applications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer_shift_signups" ADD CONSTRAINT "volunteer_shift_signups_shift_id_fkey" FOREIGN KEY ("shift_id") REFERENCES "shifts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer_shift_signups" ADD CONSTRAINT "volunteer_shift_signups_volunteer_id_fkey" FOREIGN KEY ("volunteer_id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vaccination_records" ADD CONSTRAINT "vaccination_records_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "medical_records"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medication_records" ADD CONSTRAINT "medication_records_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "medical_records"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vet_visit_records" ADD CONSTRAINT "vet_visit_records_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "medical_records"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foster_profiles" ADD CONSTRAINT "foster_profiles_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medical_documents" ADD CONSTRAINT "medical_documents_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medical_documents" ADD CONSTRAINT "medical_documents_uploadedByUserId_fkey" FOREIGN KEY ("uploadedByUserId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
