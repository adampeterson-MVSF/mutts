// lib/rate-limiter.ts - Abstract rate limiting with Redis/Upstash support
import { Redis } from '@upstash/redis'

// Rate limit configuration
export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  resetTime?: number;
  remaining?: number;
}

// Abstract rate limiter interface
export interface RateLimiter {
  check(key: string, config: RateLimitConfig): Promise<RateLimitResult>;
}

// In-memory rate limiter for development and testing
export class MemoryRateLimiter implements RateLimiter {
  private store = new Map<string, { count: number; resetTime: number }>();

  async check(key: string, config: RateLimitConfig): Promise<RateLimitResult> {
    const now = Date.now();
    const current = this.store.get(key);

    if (!current || now > current.resetTime) {
      // First request or window expired
      this.store.set(key, { count: 1, resetTime: now + config.windowMs });
      return {
        allowed: true,
        resetTime: now + config.windowMs,
        remaining: config.maxRequests - 1
      };
    }

    if (current.count >= config.maxRequests) {
      return {
        allowed: false,
        resetTime: current.resetTime,
        remaining: 0
      };
    }

    current.count++;
    return {
      allowed: true,
      resetTime: current.resetTime,
      remaining: config.maxRequests - current.count
    };
  }
}

// Redis-based rate limiter for production
export class RedisRateLimiter implements RateLimiter {
  constructor(private redis: Redis) {}

  async check(key: string, config: RateLimitConfig): Promise<RateLimitResult> {
    const now = Date.now();
    const windowStart = Math.floor(now / config.windowMs) * config.windowMs;
    const windowKey = `${key}:${windowStart}`;

    // Use Redis pipeline for atomic operations
    const pipeline = this.redis.pipeline();
    pipeline.incr(windowKey);
    pipeline.expire(windowKey, Math.ceil(config.windowMs / 1000));

    const results = await pipeline.exec();
    const count = results[0] as number;

    const allowed = count <= config.maxRequests;
    const resetTime = windowStart + config.windowMs;

    return {
      allowed,
      resetTime,
      remaining: allowed ? config.maxRequests - count : 0
    };
  }
}

// Factory function to create appropriate rate limiter
export function createRateLimiter(): RateLimiter {
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      console.warn('Redis environment variables not found, falling back to memory rate limiter');
      return new MemoryRateLimiter();
    }

    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    return new RedisRateLimiter(redis);
  }

  // Development and test environments use memory
  return new MemoryRateLimiter();
}

// Global rate limiter instance
export const rateLimiter = createRateLimiter();
