"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { Plus, Trash2 } from "lucide-react";


interface Reference {
  name: string;
  phone: string;
  relationship: string;
}

interface ReferencesSectionProps {
  errors?: Record<string, string[]> | null;
  savedData?: Record<string, unknown> | null;
  previousData?: Record<string, unknown> | null;
}

export default function ReferencesSection({ errors, savedData, previousData }: ReferencesSectionProps) {
  // Initialize references with priority: savedData > previousData > empty
  const getInitialReferences = () => {
    // First try savedData
    if (savedData?.references && Array.isArray(savedData.references) && savedData.references.length > 0) {
      return savedData.references.map((ref: unknown) => {
        const reference = ref as { name?: string; phone?: string; relationship?: string };
        return {
          name: reference.name || "",
          phone: reference.phone || "",
          relationship: reference.relationship || "",
        };
      });
    }

    // Then try previousData
    if (previousData?.references && Array.isArray(previousData.references) && previousData.references.length > 0) {
      return previousData.references.map((ref: unknown) => {
        const reference = ref as { name?: string; phone?: string; relationship?: string };
        return {
          name: reference.name || "",
          phone: reference.phone || "",
          relationship: reference.relationship || "",
        };
      });
    }

    // Default to empty reference
    return [{ name: "", phone: "", relationship: "" }];
  };

  const initialReferences = getInitialReferences();

  const [references, setReferences] = useState<Reference[]>(initialReferences);

  const addReference = () => {
    setReferences([...references, { name: "", phone: "", relationship: "" }]);
  };

  const removeReference = (index: number) => {
    if (references.length > 1) {
      setReferences(references.filter((_, i) => i !== index));
    }
  };

  const updateReference = (index: number, field: keyof Reference, value: string) => {
    const updatedReferences = references.map((ref, i) =>
      i === index ? { ...ref, [field]: value } : ref
    );
    setReferences(updatedReferences);
  };

  return (
    <div className="space-y-4 p-4 border rounded-md">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">References (Optional)</h3>
          <p className="text-sm text-muted-foreground">Please provide personal references (non-family members).</p>
        </div>
        <Button type="button" variant="outline" size="sm" onClick={addReference}>
          <Plus className="h-4 w-4 mr-2" />
          Add Reference
        </Button>
      </div>

      <div className="space-y-4">
        {references.map((reference, index) => (
          <div key={index} className="relative p-4 border rounded-md bg-muted/20">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-medium">Reference {index + 1}</h4>
              {references.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeReference(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor={`referenceName-${index}`}>Name</Label>
                <Input
                  id={`referenceName-${index}`}
                  name={`references[${index}][name]`}
                  value={reference.name}
                  onChange={(e) => updateReference(index, 'name', e.target.value)}
                  placeholder="Name"
                  required
                  data-testid={`input-reference-${index + 1}-name`}
                />
                <FormError error={errors?.[`references.${index}.name`]} />
              </div>
              <div>
                <Label htmlFor={`referencePhone-${index}`}>Phone</Label>
                <Input
                  id={`referencePhone-${index}`}
                  name={`references[${index}][phone]`}
                  type="tel"
                  value={reference.phone}
                  onChange={(e) => updateReference(index, 'phone', e.target.value)}
                  placeholder="Phone"
                  data-testid={`input-reference-${index + 1}-phone`}
                />
                <FormError error={errors?.[`references.${index}.phone`]} />
              </div>
              <div>
                <Label htmlFor={`referenceRelationship-${index}`}>Relationship</Label>
                <Input
                  id={`referenceRelationship-${index}`}
                  name={`references[${index}][relationship]`}
                  value={reference.relationship}
                  onChange={(e) => updateReference(index, 'relationship', e.target.value)}
                  placeholder="e.g., Friend"
                />
                <FormError error={errors?.[`references.${index}.relationship`]} />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
