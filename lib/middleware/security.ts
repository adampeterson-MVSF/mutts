import { NextResponse } from "next/server";
import { getSecurityHeaders } from "@/lib/security-headers";

function getResponseSecurityHeaders(): Record<string, string> {
  return getSecurityHeaders() as unknown as Record<string, string>;
}

export function applySecurityHeaders(response: NextResponse): NextResponse {
  const headers = getResponseSecurityHeaders();
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

/**
 * Functional helper to apply security headers to a response
 * Returns the response with security headers applied
 */
export function withSecurityHeaders(response: NextResponse): NextResponse {
  return applySecurityHeaders(response);
}

export function createServiceUnavailableResponse(): NextResponse {
  const response = new NextResponse("Service Unavailable", {
    status: 503,
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return applySecurityHeaders(response);
}
