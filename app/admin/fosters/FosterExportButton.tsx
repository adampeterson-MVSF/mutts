"use client";

import { Button } from "@/components/ui/button";
import { generateFosterProfilesCSV } from "@/lib/actions/foster.actions";
import { downloadCsv } from "@/lib/csv";
import { Download } from "lucide-react";

interface FosterFilters {
  hasCats?: boolean;
  hasDogs?: boolean;
  canAdministerMeds?: boolean;
}

interface FosterExportButtonProps {
  filters: FosterFilters;
}

export default function FosterExportButton({ filters }: FosterExportButtonProps) {
  const handleExport = async () => {
    try {
      const csvData = await generateFosterProfilesCSV(filters);
      downloadCsv('foster-profiles', csvData);
    } catch (error) {
      console.error('Failed to export CSV:', error);
    }
  };

  return (
    <Button variant="outline" onClick={handleExport} data-testid="btn-export-csv">
      <Download className="mr-2 h-4 w-4" />
      Export CSV
    </Button>
  );
}
