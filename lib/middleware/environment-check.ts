import { NextResponse } from "next/server";
import { hasEnvVars } from "@/lib/utils";
import { createServiceUnavailableResponse } from "./security";

interface Logger {
  error(message: Record<string, unknown>, ...args: unknown[]): void;
}

export async function handleEnvironmentCheck(
  pathname: string,
  logger: Logger
): Promise<NextResponse | null> {
  // FAIL-CLOSED: If required env vars are missing, block all access
  // This prevents silent security failures - no redirects, just 503 Service Unavailable
  if (!hasEnvVars) {
    logger.error({
      pathname,
      nodeEnv: process.env.NODE_ENV,
    }, 'Fail-closed triggered: missing required env vars');
    return createServiceUnavailableResponse();
  }

  return null;
}
