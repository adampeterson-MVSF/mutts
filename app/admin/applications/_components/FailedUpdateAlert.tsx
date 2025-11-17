"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadCsv } from "@/lib/csv";

interface FailedUpdate {
  id: number;
  reason: string;
}

interface FailedUpdateAlertProps {
  failedUpdates: FailedUpdate[];
}

export function FailedUpdateAlert({ failedUpdates }: FailedUpdateAlertProps) {
  const downloadFailedUpdatesCSV = () => {
    if (failedUpdates.length === 0) return;

    const csvContent = [
      "Application ID,Failure Reason",
      ...failedUpdates.map(
        (failure) =>
          `${failure.id},"${failure.reason.replace(/"/g, '""')}"`,
      ),
    ].join("\n");

    const filename = `failed-application-updates-${new Date().toISOString().split("T")[0]}`;
    downloadCsv(filename, csvContent);
  };

  if (failedUpdates.length === 0) return null;

  return (
    <div className="flex items-center justify-between bg-destructive/10 border border-destructive/20 rounded p-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-destructive font-medium">
          {failedUpdates.length} update{failedUpdates.length !== 1 ? 's' : ''} failed
        </span>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={downloadFailedUpdatesCSV}
        className="flex items-center gap-2"
      >
        <Download className="h-3 w-3" />
        Download CSV
      </Button>
    </div>
  );
}
