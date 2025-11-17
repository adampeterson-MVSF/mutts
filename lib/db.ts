import { PrismaClient } from '@prisma/client'
import { serverEnv } from './env-server'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: `${serverEnv.DATABASE_URL}?connection_limit=5&pool_timeout=20`,
      },
    },
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
