// app/test/whoami/page.tsx

import { getSSRUser } from "@/lib/auth/session.server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function WhoAmIPage() {
  // This is the ONLY auth logic you need.
  const user = await getSSRUser();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Who Am I?</h1>
      <div data-testid="whoami-role">
        {user ? (
          <div>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>ID:</strong> {user.id}</p>
          </div>
        ) : (
          <p>No user found</p>
        )}
      </div>
    </div>
  );
}
