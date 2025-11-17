import { ClientTimestamp } from "@/components/ClientTimestamp";
import type { ApplicationHistoryEntry } from "@/lib/view-models/applications";

type HistoryEntry = Omit<ApplicationHistoryEntry, "createdAt"> & { createdAt: string };

interface ApplicationHistoryListProps {
  history: HistoryEntry[];
}

export default function ApplicationHistoryList({ history }: ApplicationHistoryListProps) {
  if (history.length === 0) {
    return <p className="text-muted-foreground">No status changes recorded yet.</p>;
  }

  return (
    <div className="space-y-3" data-testid="history-list">
      {history.map((entry) => (
        <div key={entry.id} className="flex items-start justify-between p-3 bg-muted/50 rounded-md">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">{entry.oldStatus}</span>
              <span className="text-muted-foreground">→</span>
              <span className="font-medium">{entry.newStatus}</span>
            </div>
            <p className="text-sm text-muted-foreground">{entry.note}</p>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <div><ClientTimestamp date={entry.createdAt} /></div>
            <div><ClientTimestamp date={entry.createdAt} options={{ hour: '2-digit', minute: '2-digit' }} /></div>
            {entry.actor && (
              <div className="mt-1">
                by {entry.actor.name || entry.actor.email}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
