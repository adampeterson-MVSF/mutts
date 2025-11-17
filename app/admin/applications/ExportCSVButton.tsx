"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/toast";
import { exportApplicationsCSV } from "@/lib/actions/application.actions";
import { ApplicationSearchParams } from "@/lib/url-pagination";

interface ExportCSVButtonProps {
  searchParams: ApplicationSearchParams;
}

export default function ExportCSVButton({ searchParams }: ExportCSVButtonProps) {
  const { showToast } = useToast();

  const [, formAction] = useActionState(
    async (prevState: { message?: string; success?: boolean }, formData: FormData) => {
      const minimal = formData.get('minimal') === 'true';
      // Convert ApplicationSearchParams to generic search params object
      const genericSearchParams: { [key: string]: string | undefined } = {
        page: searchParams.page.toString(),
        limit: searchParams.limit.toString(),
        status: searchParams.status,
        type: searchParams.type,
        search: searchParams.search,
        sortBy: searchParams.sortBy,
        sortOrder: searchParams.sortOrder,
      };
      const result = await exportApplicationsCSV(genericSearchParams, minimal);

      if (result.success) {
        // Create blob and trigger download
        const blob = new Blob([result.csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = result.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);

        showToast('Export completed successfully', 'success');
        return { message: 'Export completed successfully', success: true };
      } else {
        showToast(result.message, 'error');
        return { message: result.message, success: false };
      }
    },
    { message: '', success: false }
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-testid="btn-export-csv">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <form action={formAction}>
          <input type="hidden" name="minimal" value="false" />
          <DropdownMenuItem asChild>
            <button type="submit" className="w-full text-left">
              <Download className="mr-2 h-4 w-4" />
              Full Export (with PII)
            </button>
          </DropdownMenuItem>
        </form>
        <form action={formAction}>
          <input type="hidden" name="minimal" value="true" />
          <DropdownMenuItem asChild>
            <button type="submit" className="w-full text-left">
              <Download className="mr-2 h-4 w-4" />
              Minimal Export (no phone/address)
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

