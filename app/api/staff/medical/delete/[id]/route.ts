// app/api/staff/medical/delete/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertRole } from "@/lib/actions/profile.actions";
import { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";

interface Params {
  id: string;
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    await assertRole(UserRole.STAFF);

    const { id } = await params;
    const documentId = parseInt(id);

    if (isNaN(documentId)) {
      return NextResponse.json({ error: 'Invalid document ID format', code: 'INVALID_ID' }, { status: 422 });
    }

    // Get document info before deletion
    const document = await prisma.medicalDocument.findUnique({
      where: { id: documentId },
      select: { id: true, path: true },
    });

    if (!document) {
      return NextResponse.json({ error: 'Medical document not found', code: 'NOT_FOUND' }, { status: 404 });
    }

    // Delete from Supabase storage first
    const supabase = await createClient();
    const { error: deleteError } = await supabase.storage
      .from('medical-documents')
      .remove([document.path]);

    if (deleteError) {
      console.error('Failed to delete file from Supabase storage:', deleteError);
      return NextResponse.json(
        { error: 'Failed to delete file from storage', code: 'STORAGE_DELETE_FAILED' },
        { status: 500 }
      );
    }

    // Delete from database
    await prisma.medicalDocument.delete({
      where: { id: documentId },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Staff medical delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete medical document', code: 'DELETE_FAILED' },
      { status: 500 }
    );
  }
}
