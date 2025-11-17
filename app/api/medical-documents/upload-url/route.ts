// app/api/medical-documents/upload-url/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";

// File validation constants
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_CONTENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/tiff',
  'image/bmp',
];
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.gif', '.webp', '.tiff', '.bmp'];

function validateFile(filename: string, contentType?: string, size?: number): { valid: boolean; error?: string } {
  // Validate file extension
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    return { valid: false, error: `File type not allowed. Allowed types: ${ALLOWED_EXTENSIONS.join(', ')}` };
  }

  // Validate content type if provided
  if (contentType && !ALLOWED_CONTENT_TYPES.includes(contentType)) {
    return { valid: false, error: `Content type not allowed. Allowed types: ${ALLOWED_CONTENT_TYPES.join(', ')}` };
  }

  // Validate file size if provided
  if (size && size > MAX_FILE_SIZE) {
    return { valid: false, error: `File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB` };
  }

  return { valid: true };
}

export async function GET(request: NextRequest) {
  try {
    await assertRole(UserRole.STAFF);

    const { searchParams } = new URL(request.url);
    const dogId = searchParams.get("dogId");
    const filename = searchParams.get("filename");
    const contentType = searchParams.get("contentType");
    const size = searchParams.get("size");

    if (!dogId || !filename) {
      return NextResponse.json(
        { error: "dogId and filename are required" },
        { status: 400 }
      );
    }

    // Validate file
    const fileSize = size ? parseInt(size) : undefined;
    const validation = validateFile(filename, contentType || undefined, fileSize);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const timestamp = Date.now();
    const sanitizedFileName = filename.replace(/\s+/g, "-");
    const storagePath = `${dogId}/${timestamp}-${sanitizedFileName}`;

    // Generate signed upload URL with short TTL (15 minutes instead of 1 hour)
    const { data, error } = await supabase.storage
      .from("medical-documents")
      .createSignedUploadUrl(storagePath, { upsert: false });

    if (error || !data?.signedUrl) {
      return NextResponse.json(
        { error: "Failed to generate upload URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      uploadUrl: data.signedUrl,
      storagePath,
    });
  } catch (error) {
    console.error("Error generating upload URL:", error);
    return NextResponse.json(
      { error: "Unauthorized or failed to generate upload URL" },
      { status: 403 }
    );
  }
}
