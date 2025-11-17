// app/api/staff/medical/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  try {
    // Require staff role
    await requireRole(UserRole.STAFF);

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const dogIdStr = formData.get('dogId') as string;

    if (!file || !dogIdStr) {
      return NextResponse.json(
        { error: 'File and dogId are required' },
        { status: 400 }
      );
    }

    const dogId = parseInt(dogIdStr);
    if (isNaN(dogId)) {
      return NextResponse.json(
        { error: 'Invalid dogId' },
        { status: 400 }
      );
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const fileExtension = file.name.split('.').pop();
    const uniqueFilename = `${randomUUID()}.${fileExtension}`;

    // Upload to Supabase storage
    const supabase = await createClient();
    const uploadResult = await supabase.storage
      .from('medical-documents')
      .upload(uniqueFilename, file, {
        contentType: file.type,
        upsert: false
      });

    if (uploadResult.error) {
      console.error('Supabase upload error:', uploadResult.error);
      return NextResponse.json(
        { error: 'Failed to upload file to storage' },
        { status: 500 }
      );
    }

    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      // Clean up uploaded file
      await supabase.storage
        .from('medical-documents')
        .remove([uniqueFilename]);

      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Store document record in database
    const document = await prisma.medicalDocument.create({
      data: {
        dogId,
        name: file.name,
        path: uniqueFilename,
        mime: file.type,
        size: file.size,
        uploadedByUserId: user.id,
      },
      select: {
        id: true,
        name: true,
        mime: true,
        size: true,
        createdAt: true,
      },
    });

    return NextResponse.json(document);

  } catch (error) {
    console.error('Staff medical upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload medical document' },
      { status: 500 }
    );
  }
}
