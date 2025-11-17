// components/volunteer/ActivityList.tsx

type LogWithDog = {
  id: number;
  dogId: number;
  type: string;
  note: string;
  createdByUserId: string;
  createdAt: Date;
  dog: {
    name: string;
  };
  createdByUser: {
    name: string | null;
  };
};

interface ActivityListProps {
  initialLogs: LogWithDog[];
}

export default function ActivityList({ initialLogs }: ActivityListProps) {
  return (
    <div data-testid="activity-list">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      {initialLogs.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No activity logged yet. Use the quick log form above to record your first activity!
        </div>
      ) : (
        <div className="space-y-3">
          {initialLogs.map((log) => (
            <div key={log.id} className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded-r">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {log.type}
                  </span>
                  <span className="text-sm text-gray-600">
                    {log.dog.name}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(log.createdAt).toLocaleString()}
                </span>
              </div>
              {log.note && (
                <p className="text-sm text-gray-700 mt-1">{log.note}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
