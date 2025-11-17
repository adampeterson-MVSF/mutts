import { NextRequest, NextResponse } from "next/server";
import { matchesRoute, PUBLIC_PATHS } from "@/lib/routes";
import { applySecurityHeaders } from "./security";

export async function handlePublicPaths(
  request: NextRequest,
  pathname: string
): Promise<NextResponse | null> {
  // EARLY EXIT for public paths - allow without authentication
  const isPublicPath = PUBLIC_PATHS.some(pattern => matchesRoute(pathname, pattern)) ||
    pathname.startsWith('/_next/') ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|webp)$/);

  if (isPublicPath) {
    const response = NextResponse.next({ request });
    return applySecurityHeaders(response);
  }

  return null;
}
