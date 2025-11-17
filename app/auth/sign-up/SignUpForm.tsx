"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { createProfile } from "@/lib/actions/profile.actions";
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
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

type SignUpState = {
  success: boolean;
  message: string | null;
};

const initialState: SignUpState = {
  success: false,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending} data-testid="btn-submit">
      {pending ? "Creating an account..." : "Sign up"}
    </Button>
  );
}

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const signUpAction = async (_prevState: SignUpState, formData: FormData) => {
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const repeatPassword = String(formData.get("repeat-password") ?? "");
    const name = String(formData.get("name") ?? "").trim();

    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    if (password !== repeatPassword) {
      return { success: false, message: "Passwords do not match." };
    }

    const supabase = createClient();

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        try {
          await createProfile(name);
        } catch (profileError) {
          console.warn(
            "Failed to create profile, but signup succeeded:",
            profileError,
          );
        }
      }

      router.push("/auth/sign-up-success");
      return { success: true, message: null };
    } catch (error: unknown) {
      return {
        success: false,
        message:
          error instanceof Error ? error.message : "An unexpected error occurred.",
      };
    }
  };

  const [state, formAction] = useActionState(signUpAction, initialState);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                data-testid="input-signup-name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                autoComplete="email"
                data-testid="input-signup-email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                data-testid="input-signup-password"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repeat-password">Repeat Password</Label>
              <Input
                id="repeat-password"
                name="repeat-password"
                type="password"
                required
                autoComplete="new-password"
              />
            </div>
            {state.message && !state.success && (
              <p className="text-sm text-red-500" data-testid="message-error">{state.message}</p>
            )}
            <SubmitButton />
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
