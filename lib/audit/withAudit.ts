// lib/audit/withAudit.ts
"use server";

import type { PrismaClient } from '@prisma/client';
import { prisma as defaultClient } from '@/lib/db';
import { AuditAction, Prisma } from "@prisma/client";

export interface WithAuditCtx {
  actorId: string;
  action: AuditAction;
  entityType: string;
  entityId: number;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
  note?: string;
}

export async function withAudit<T>(
  operation: (tx: Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$extends'>) => Promise<T>,
  ctx: WithAuditCtx,
  client: PrismaClient = defaultClient
): Promise<T> {
  return client.$transaction(async (tx) => {
    const result = await operation(tx);

    await tx.auditLog.create({
      data: {
        action: ctx.action,
        actorId: ctx.actorId,
        entityType: ctx.entityType,
        entityId: ctx.entityId,
        before: ctx.before ? (ctx.before as Prisma.InputJsonValue) : Prisma.JsonNull,
        after: ctx.after ? (ctx.after as Prisma.InputJsonValue) : Prisma.JsonNull,
        note: ctx.note || 'Operation completed',
      },
    });

    return result;
  });
}