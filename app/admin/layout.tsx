// app/admin/layout.tsx

import { redirect, notFound } from "next/navigation";
import { UserRole } from "@prisma/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSSRUser } from "@/lib/auth/session.server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSSRUser();
  if (!user) {
    redirect("/auth/login?reason=authentication_required&returnTo=" + encodeURIComponent("/admin"));
  }

  // Check for STAFF or ADMIN (as before for general admin access)
  if (user.role !== UserRole.ADMIN && user.role !== UserRole.STAFF) {
    notFound(); // Use 404 instead of redirect for insufficient role
  }

  // Check if the user is specifically an ADMIN for the Users link
  const isAdmin = user.role === UserRole.ADMIN;

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-6xl flex justify-between items-center p-3 px-8 text-sm">
          <div className="flex gap-6 items-center">
            <Link href="/" className="font-bold">
              Senior Dog Rescue
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/admin" data-testid="nav-dogs">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/admin/add-dog">Add Dog</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/admin/fosters" data-testid="nav-fosters">Fosters</Link>
            </Button>
            {/* --- NEW Applications Link --- */}
            <Button variant="ghost" asChild>
              <Link href="/admin/applications" data-testid="nav-applications">Applications</Link>
            </Button>
            {/* --- NEW Shifts Link --- */}
            <Button variant="ghost" asChild>
              <Link href="/admin/shifts" data-testid="nav-shifts">Manage Shifts</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/admin/events" data-testid="nav-events">Events</Link>
            </Button>

            {/* --- Conditionally Render Manage Users Link --- */}
            {isAdmin && (
                <Button variant="ghost" asChild>
                    <Link href="/admin/users" data-testid="nav-users">Manage Users</Link>
                </Button>
            )}
          </div>
          {/* We could put an AuthButton here too if needed */}
        </div>
      </nav>
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
}
