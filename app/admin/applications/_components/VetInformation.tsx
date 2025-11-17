import type { AdminApplicationDetail } from "@/lib/view-models/applications";

export function VetInformation({ application }: { application: AdminApplicationDetail }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
      <h3 className="font-semibold mb-2 col-span-full">Veterinarian Information</h3>
      <p><strong>Vet Name:</strong> {application.vetName || 'Not provided'}</p>
      <p><strong>Vet Phone:</strong> {application.vetPhone || 'Not provided'}</p>
    </div>
  );
}
