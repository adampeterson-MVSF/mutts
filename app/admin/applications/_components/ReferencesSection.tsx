import type { Reference } from "@prisma/client";

export function ReferencesSection({ references }: { references: Reference[] }) {
  return (
    <div className="border-t pt-4">
      <h3 className="font-semibold mb-2">References</h3>
      {references.length === 0 ? (
        <p className="text-muted-foreground">No references provided.</p>
      ) : (
        <div className="space-y-3">
          {references.map((ref, index) => (
            <div key={ref.id} className="p-3 border rounded-md bg-muted/50">
              <p><strong>Ref {index + 1}:</strong> {ref.name}</p>
              {ref.phone && <p><strong>Phone:</strong> {ref.phone}</p>}
              {ref.relationship && <p><strong>Relationship:</strong> {ref.relationship}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
