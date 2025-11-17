"use client";

import * as React from "react";
import type { getMedicalDocuments } from "@/lib/actions/medical.actions";
import { deleteMedicalDocument } from "@/lib/actions/medical.actions";
import { MedicalDocumentUploader } from "./MedicalDocumentUploader";
import { MedicalDocumentList } from "./MedicalDocumentList";
import { MedicalDocumentDeleteDialog } from "@/components/admin/MedicalDocumentDeleteDialog";

type MedicalDocuments = Awaited<ReturnType<typeof getMedicalDocuments>>;

type MedicalDocumentManagerProps = {
  dogId: number;
  documents: MedicalDocuments;
};

export function MedicalDocumentManager({ dogId, documents }: MedicalDocumentManagerProps) {
  const [pendingDeleteId, setPendingDeleteId] = React.useState<number | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = React.useState(false);
  const [documentToDelete, setDocumentToDelete] = React.useState<{ id: number; name: string; path: string } | null>(null);

  const handleDelete = async (documentId: number, path: string, name: string) => {
    setDocumentToDelete({ id: documentId, name, path });
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!documentToDelete) return;

    setDeleteConfirmOpen(false);
    setPendingDeleteId(documentToDelete.id);
    try {
      await deleteMedicalDocument(documentToDelete.id, documentToDelete.path);
      // Success - revalidation is handled by the server action
      setDocumentToDelete(null);
    } catch (error) {
      console.error("Failed to delete medical document", error);
      // Error handling could be added here in the future
    } finally {
      setPendingDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Medical Documents</h2>
        <p className="text-sm text-muted-foreground">
          Upload vet reports, X-rays, and supporting documents for this dog.
        </p>
      </div>

      <MedicalDocumentUploader
        dogId={dogId}
        documents={documents}
      />

      <MedicalDocumentList
        documents={documents}
        pendingDeleteId={pendingDeleteId}
        onDelete={handleDelete}
      />

      <MedicalDocumentDeleteDialog
        open={deleteConfirmOpen}
        onOpenChange={setDeleteConfirmOpen}
        documentToDelete={documentToDelete}
        onConfirmDelete={confirmDelete}
      />
    </div>
  );
}

