// app/volunteer/layout.tsx

import { redirect, notFound } from "next/navigation";
import { UserRole } from "@prisma/client";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming Button is needed for layout nav
import { AuthButton } from "@/components/auth-button"; // Reuse AuthButton for consistency
import { getSSRUser } from "@/lib/auth/session.server";

export default async function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSSRUser();
  if (!user) {
    redirect("/auth/login?reason=authentication_required&returnTo=" + encodeURIComponent("/volunteer"));
  }

  // Check if user has Volunteer, Staff, or Admin role
  const allowedRoles = [UserRole.VOLUNTEER, UserRole.STAFF, UserRole.ADMIN];
  if (!allowedRoles.includes(user.role)) {
    notFound(); // Use 404 instead of redirect for insufficient role
  }

  // Basic layout structure for volunteer pages
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-6xl flex justify-between items-center p-3 px-8 text-sm">
          <div className="flex gap-6 items-center">
            <Link href="/" className="font-bold">
              Senior Dog Rescue
            </Link>
            {/* Volunteer specific nav links can go here */}
            <Button variant="ghost" asChild>
               <Link href="/volunteer">Volunteer Dashboard</Link>
            </Button>
             {/* --- NEW My Shifts Link --- */}
             <Button variant="ghost" asChild>
               <Link href="/volunteer/my-shifts">My Shifts</Link>
            </Button>
            {/* Add more volunteer links later (e.g., /volunteer/schedule) */}
          </div>
          <AuthButton /> {/* Show login/logout status */}
        </div>
      </nav>
      <main className="flex-1 w-full">
        {children}
      </main>
      {/* Optional: Add a shared footer */}
    </div>
  );
}
