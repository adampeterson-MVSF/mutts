import { notFound } from "next/navigation";
import ActivityLogForm from "@/components/admin/ActivityLogForm";
import ActivityLogList from "@/components/admin/ActivityLogList";
import { getDogById } from "@/lib/actions/dog.actions";
import { getActivityLogs } from "@/lib/actions/log.actions";
import { RouteReady } from "@/components/testing/RouteReady";

export default async function DogLogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dogId = parseInt(id, 10);
  if (isNaN(dogId)) {
    notFound();
  }

  const [dog, logs] = await Promise.all([
    getDogById(dogId),
    getActivityLogs(dogId)
  ]);

  if (!dog) {
    notFound();
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Activity Log for {dog.name}</h1>
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="admin/activity-log" />
      )}

        <div className="mt-12 border-t pt-8" data-testid="admin/activity-log">
          <h2 className="text-2xl font-bold mb-4">Activity Log</h2>
          <ActivityLogForm dogId={dog.id} />
          <ActivityLogList logs={logs} />
        </div>
      </div>
    </div>
  );
}
