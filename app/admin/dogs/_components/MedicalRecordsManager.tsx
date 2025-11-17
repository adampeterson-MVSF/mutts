"use client";

// components/admin/MedicalRecordsManager.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import MedicalRecordDialog from "@/components/admin/MedicalRecordDialog";
import MedicalRecordTable from "./MedicalRecordTable";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MedicalRecordsManagerProps {
  dogId: number;
  medicalRecordsData: Awaited<ReturnType<typeof import("@/lib/actions/medical.actions").getMedicalRecords>>;
}

function Pagination({ currentPage, totalPages, baseUrl }: {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
      <div className="flex gap-2">
        {currentPage > 1 && (
          <Button variant="outline" size="sm" asChild>
            <Link href={`${baseUrl}?page=${currentPage - 1}`}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Link>
          </Button>
        )}
        {currentPage < totalPages && (
          <Button variant="outline" size="sm" asChild>
            <Link href={`${baseUrl}?page=${currentPage + 1}`}>
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export default function MedicalRecordsManager({ dogId, medicalRecordsData }: MedicalRecordsManagerProps) {
  const pathname = usePathname();

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-4">Medical Records</h2>

      <div className="mb-6">
        <MedicalRecordDialog dogId={dogId} />
      </div>

      <MedicalRecordTable medicalRecords={medicalRecordsData.records} />

      <Pagination
        currentPage={medicalRecordsData.page}
        totalPages={medicalRecordsData.totalPages}
        baseUrl={pathname}
      />
    </div>
  );
}