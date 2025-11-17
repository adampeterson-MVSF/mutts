import ActivityLogForm from "./ActivityLogForm";
import ActivityLogList from "./ActivityLogList";
import { getActivityLogs } from "@/lib/actions/log.actions";

interface ActivityLogProps {
  dogId: number;
}

export default async function ActivityLog({ dogId }: ActivityLogProps) {
  const logs = await getActivityLogs(dogId);

  return (
    <div className="mt-12 border-t pt-8" data-testid="admin/activity-log">
      <h2 className="text-2xl font-bold mb-4">Activity Log</h2>

      <ActivityLogForm dogId={dogId} />
      <ActivityLogList logs={logs} />
    </div>
  );
}
