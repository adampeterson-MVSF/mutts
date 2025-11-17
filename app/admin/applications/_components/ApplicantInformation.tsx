import type { AdminApplicationDetail } from "@/lib/view-models/applications";

export function ApplicantInformation({ application }: { application: AdminApplicationDetail }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
      <h3 className="font-semibold mb-2 col-span-full">Applicant Information</h3>
      <p><strong>Name:</strong> {application.applicantName}</p>
      <p><strong>Email:</strong> {application.applicantEmail}</p>
      <p><strong>Phone:</strong> {application.applicantPhone || 'Not provided'}</p>
      <p><strong>Address:</strong> {application.address || 'Not provided'}</p>
    </div>
  );
}
