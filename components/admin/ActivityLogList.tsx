import { ClientTimestamp } from "@/components/ClientTimestamp";

type ActivityLog = {
  id: number;
  type: string;
  note: string;
  createdAt: Date;
  createdByUser: {
    id: string;
    name: string | null;
  };
};

interface ActivityLogListProps {
  logs: ActivityLog[];
}

export default function ActivityLogList({ logs }: ActivityLogListProps) {

  return (
    <div className="mt-6" data-testid="activity-log-list">
      {logs.length === 0 ? (
        <div data-testid="activity-log-empty" className="text-center py-8 text-gray-500">
          No activity logged yet.
        </div>
      ) : (
        <div className="space-y-4">
          {logs.map((log) => (
            <div key={log.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm bg-gray-100 px-2 py-1 rounded">
                    {log.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    <ClientTimestamp date={log.createdAt.toISOString()} />
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {log.createdByUser.name || 'Unknown User'}
                </span>
              </div>
              <p className="text-gray-700">{log.note}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
