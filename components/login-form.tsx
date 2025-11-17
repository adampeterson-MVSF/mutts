"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams?.get?.('returnTo') ?? '/';

  // Mark form as ready for E2E tests once mounted
  useEffect(() => {
    // This data-testid signals to E2E that the form is ready
    // It's a no-op in production but helps prevent hydration timing issues
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      // Get user data to determine appropriate redirect
      const { data: { user } } = await supabase.auth.getUser();
      const userRole = user?.app_metadata?.role;
      console.log('User after login:', { email: user?.email, role: userRole, app_metadata: user?.app_metadata });

      // Determine redirect destination based on user role
      let redirectPath = returnTo;
      if (returnTo === '/' && userRole) {
        // Default dashboard based on role
        if (userRole === 'ADMIN') {
          redirectPath = '/admin';
        } else if (userRole === 'STAFF') {
          redirectPath = '/admin/applications'; // Staff default to applications
        } else if (userRole === 'VOLUNTEER') {
          redirectPath = '/volunteer';
        }
      }
      // Redirect to intended destination
      router.push(redirectPath);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props} data-testid="auth-ready">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            {returnTo !== '/' ? 'You need to login to access this page. ' : ''}
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="input-login-email"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="input-login-password"
                />
              </div>
              {error && <p className="text-sm text-red-500" data-testid="message-error">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading} data-testid="btn-submit">
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
