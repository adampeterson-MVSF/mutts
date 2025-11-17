import Link from "next/link";
import { RouteReady } from "@/components/testing/RouteReady";
import FosterProfileForm from "./FosterProfileForm";
import { ensureFosterProfile } from "@/lib/actions/foster.actions";
import { missing } from "@/lib/format";

export default async function FosterProfileDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fosterProfile = await ensureFosterProfile(id);

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="admin/fosters/[id]" />
      )}
      <div className="w-full max-w-2xl space-y-6">
        <nav className="text-sm text-muted-foreground">
          <Link
            href="/admin/fosters"
            className="font-medium text-primary hover:underline"
          >
            ← Back to foster list
          </Link>
        </nav>
        <div>
          <h1 className="text-3xl font-bold" data-testid="foster-name">
            {missing(fosterProfile.profile?.name, "Unknown Foster")}
          </h1>
          <p className="text-muted-foreground">
            Update capability flags and internal notes for this foster home.
          </p>
        </div>

        <FosterProfileForm fosterProfile={fosterProfile} />
      </div>
    </div>
  );
}
