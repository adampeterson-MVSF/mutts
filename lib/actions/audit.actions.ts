// lib/actions/audit.actions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { AuditAction, Prisma } from "@prisma/client";
import { createClient } from "@/lib/supabase/server";

export interface AuditContext {
  action: AuditAction;
  entityType: string;
  entityId: number;
  actorId: string;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
  note?: string;
}

// Audit wrapper for server actions with retry safety
export async function withAudit<T>(
  actionName: string,
  userId: string,
  operation: () => Promise<T>,
  auditContext?: Partial<AuditContext>
): Promise<T> {
  const startTime = Date.now();
  let attempts = 0;
  const maxRetries = 3;

  while (attempts < maxRetries) {
    try {
      const result = await operation();
      const duration = Date.now() - startTime;

      // Log successful operation
      if (auditContext) {
        try {
          await prisma.auditLog.create({
            data: {
              action: auditContext.action!,
              actorId: userId,
              entityType: auditContext.entityType!,
              entityId: auditContext.entityId!,
              before: auditContext.before ? (auditContext.before as Prisma.InputJsonValue) : Prisma.JsonNull,
              after: auditContext.after ? (auditContext.after as Prisma.InputJsonValue) : Prisma.JsonNull,
              note: auditContext.note || `${actionName} completed in ${duration}ms`,
            }
          });
        } catch {
          // Silently skip audit logging failures (e.g., in tests without audit table)
          // Don't log to console to avoid test noise
        }
      }

      return result;
    } catch (error: unknown) {
      attempts++;

      // Check if error is retryable (transient DB errors)
      const isRetryable = error && typeof error === 'object' && 'code' in error &&
                         (error.code === 'P2025' || // Record not found (might be race condition)
                          error.code === 'P2002' || // Unique constraint violation (might be race condition)
                          error.code === 'P2034' || // Transaction write conflict
                          (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string' && error.message.includes('connection')));

      if (!isRetryable || attempts >= maxRetries) {
        // Log failed operation
        if (auditContext) {
          try {
            await prisma.auditLog.create({
              data: {
                action: auditContext.action!,
                actorId: userId,
                entityType: auditContext.entityType!,
                entityId: auditContext.entityId!,
              before: Prisma.JsonNull,
              after: Prisma.JsonNull,
                note: `${actionName} failed after ${attempts} attempts: ${error instanceof Error ? error.message : 'Unknown error'}`,
              }
            });
          } catch {
            // Silently skip audit logging failures (e.g., in tests without audit table)
            // Don't log to console to avoid test noise
          }
        }

        throw error;
      }

      // Exponential backoff: wait 100ms * 2^attempt
      const backoffMs = 100 * Math.pow(2, attempts - 1);
      console.warn(`${actionName} failed (attempt ${attempts}/${maxRetries}), retrying in ${backoffMs}ms:`, error && typeof error === 'object' && 'message' in error ? error.message : error);
      await new Promise(resolve => setTimeout(resolve, backoffMs));
    }
  }

  throw new Error(`Operation ${actionName} failed after ${maxRetries} attempts`);
}

// Helper to get current user from session
export async function getCurrentUserId(): Promise<string> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const user = data?.user;

  if (error || !user) {
    throw new Error('User not authenticated');
  }

  return user.id;
}

// Type-safe audit logging helpers - use these instead of raw AuditLog inserts
export async function logDogAudit(
  dogId: number,
  action: AuditAction,
  actorId: string,
  options: {
    before?: Record<string, unknown>;
    after?: Record<string, unknown>;
    note?: string;
  } = {}
) {
  return prisma.auditLog.create({
    data: {
      action,
      actorId,
      entityType: 'dog',
      entityId: dogId,
      before: options.before ? (options.before as Prisma.InputJsonValue) : Prisma.JsonNull,
      after: options.after ? (options.after as Prisma.InputJsonValue) : Prisma.JsonNull,
      note: options.note,
    }
  });
}

export async function logApplicationAudit(
  applicationId: number,
  action: AuditAction,
  actorId: string,
  options: {
    before?: Record<string, unknown>;
    after?: Record<string, unknown>;
    note?: string;
  } = {}
) {
  return prisma.auditLog.create({
    data: {
      action,
      actorId,
      entityType: 'application',
      entityId: applicationId,
      before: options.before ? (options.before as Prisma.InputJsonValue) : Prisma.JsonNull,
      after: options.after ? (options.after as Prisma.InputJsonValue) : Prisma.JsonNull,
      note: options.note,
    }
  });
}

// Helper to capture before/after state for audit
export async function captureAuditState(entityType: string, entityId: number) {
  switch (entityType) {
    case 'dog':
      const dog = await prisma.dog.findUnique({
        where: { id: entityId },
        select: {
          id: true,
          name: true,
          status: true,
          breed: true,
          breedId: true, // Include new breedId field
          dateOfBirth: true,
          bioPublic: true,
          notesInternal: true,
          specialNeeds: true,
          primaryPhotoUrl: true,
          page_url: true,
          mutt_id: true,
          weight_lbs: true,
          gender: true,
          size: true,
          fosterProfileId: true,
        }
      });
      return dog;
    case 'application':
      const application = await prisma.application.findUnique({
        where: { id: entityId },
        select: {
          id: true,
          status: true,
          statusNotes: true,
          applicationType: true,
          reason: true,
          createdAt: true,
          updatedAt: true,
        }
      });
      return application;
    default:
      return null;
  }
}
