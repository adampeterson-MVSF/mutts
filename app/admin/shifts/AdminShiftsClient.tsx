"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface AdminShiftsClientProps {
  showDeleted: boolean;
}

export function AdminShiftsClient({ showDeleted }: AdminShiftsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleShowDeletedChange = (checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.set("showDeleted", "true");
    } else {
      params.delete("showDeleted");
    }
    router.push(`/admin/shifts${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div className="flex items-center space-x-2 mb-6">
      <Checkbox
        id="showDeleted"
        checked={showDeleted}
        onCheckedChange={handleShowDeletedChange}
        data-testid="checkbox-show-deleted"
      />
      <Label htmlFor="showDeleted" className="text-sm">
        Show deleted shifts
      </Label>
    </div>
  );
}
