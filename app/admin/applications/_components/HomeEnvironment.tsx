import type { AdminApplicationDetail } from "@/lib/view-models/applications";

export function HomeEnvironment({ application }: { application: AdminApplicationDetail }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
      <h3 className="font-semibold mb-2 col-span-full">Home Environment</h3>
      <p><strong>Housing Type:</strong> {application.housingTypeLabel}</p>
      <p><strong>Has Yard:</strong> {application.hasYardLabel}</p>
      <p><strong>Yard Fenced:</strong> {application.yardFencedLabel}</p>
      <p><strong>Other Pets:</strong> {application.otherPetsLabel}</p>
      <p className="col-span-full"><strong>Description:</strong> {application.homeEnvironmentDescriptionLabel}</p>
    </div>
  );
}
