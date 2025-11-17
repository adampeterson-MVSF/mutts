"use client";

import { Button } from "@/components/ui/button";
import { ClientTimestamp } from "@/components/ClientTimestamp";
import { MedicalDocumentSummary } from "@/lib/actions/medical.actions";

interface MedicalDocumentListProps {
  documents: MedicalDocumentSummary[];
  pendingDeleteId: number | null;
  onDelete: (documentId: number, path: string, name: string) => void;
}

export function MedicalDocumentList({ documents, pendingDeleteId, onDelete }: MedicalDocumentListProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold">Uploaded documents</h3>
      {documents.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No documents uploaded yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {documents.map((document) => {
            const isDeleting = pendingDeleteId === document.id;
            return (
              <li
                key={document.id}
                className="flex flex-col gap-2 rounded-md border border-border p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  {document.signedUrl ? (
                    <a
                      href={document.signedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      {document.name}
                    </a>
                  ) : (
                    <span className="font-medium text-muted-foreground">
                      {document.name} (URL unavailable)
                    </span>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Uploaded <ClientTimestamp date={document.createdAt.toISOString()} />
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  disabled={isDeleting}
                  aria-busy={isDeleting}
                  onClick={() =>
                    onDelete(document.id, document.path, document.name)
                  }
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
