import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/db";
import { Prisma, UserRole } from "@prisma/client";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { RouteReady } from "@/components/testing/RouteReady";

export default async function Home() {
  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();

  let userRole: UserRole | null = null;
  if (authData.user) {
    try {
      const profile = await prisma.profile.findUnique({
        where: { id: authData.user.id },
        select: { role: true },
      });
      if (profile) userRole = profile.role;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientInitializationError) {
        console.error("Failed to resolve profile role for navigation", error);
      } else {
        throw error;
      }
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="home" />
        )}
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Senior Dog Rescue</Link>
              <Link
                href={"/adopt"}
                className="text-sm font-normal text-foreground/80 hover:text-foreground"
              >
                Adopt
              </Link>
              <Link
                href={"/apply/foster"}
                className="text-sm font-normal text-foreground/80 hover:text-foreground"
              >
                Foster
              </Link>
              <Link
                href={"/happy-tails"}
                className="text-sm font-normal text-foreground/80 hover:text-foreground"
              >
                Happy Tails
              </Link>
              <Link
                href={"/events"}
                className="text-sm font-normal text-foreground/80 hover:text-foreground"
              >
                Events
              </Link>
              {authData.user && userRole === UserRole.ADMIN && (
                <Link
                  href={"/admin"}
                  className="text-sm font-normal text-foreground/80 hover:text-foreground"
                >
                  Admin
                </Link>
              )}
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to Senior Dog Rescue
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Giving senior dogs the loving homes they deserve. Every dog deserves a comfortable retirement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="/adopt">See Adoptable Dogs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link href="/apply/foster">Become a Foster</Link>
              </Button>
            </div>
          </div>
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
