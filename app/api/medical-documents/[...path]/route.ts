// app/api/medical-documents/[...path]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";

// Shorter TTL for security (15 minutes instead of 1 hour)
const SIGNED_URL_TTL_SECONDS = 15 * 60; // 15 minutes

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    await assertRole(UserRole.STAFF);

    const supabase = await createClient();
    const resolvedParams = await params;
    const storagePath = resolvedParams.path.join("/");

    // Generate signed URL with shorter expiry
    const { data } = await supabase.storage
      .from("medical-documents")
      .createSignedUrl(storagePath, SIGNED_URL_TTL_SECONDS);

    if (!data?.signedUrl) {
      return NextResponse.json(
        { error: "Failed to generate signed URL" },
        { status: 500 }
      );
    }

    // Redirect to the signed URL
    return NextResponse.redirect(data.signedUrl, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Unauthorized or document not found" },
      { status: 403 }
    );
  }
}

// HEAD support for quick validity check without revealing content
export async function HEAD(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    await assertRole(UserRole.STAFF);

    const supabase = await createClient();
    const resolvedParams = await params;
    const storagePath = resolvedParams.path.join("/");

    // Check if file exists without generating signed URL
    const { data: fileData, error } = await supabase.storage
      .from("medical-documents")
      .list(storagePath.split('/').slice(0, -1).join('/'), {
        search: storagePath.split('/').pop(),
      });

    if (error || !fileData || fileData.length === 0) {
      return new NextResponse(null, { status: 404 });
    }

    // Return 200 with cache-control headers
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch {
    return new NextResponse(null, { status: 403 });
  }
}
