import { SignUpForm } from "./SignUpForm";
import { RouteReady } from "@/components/testing/RouteReady";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h1 className="sr-only" data-testid="page-title">Create Account</h1>
        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="auth/sign-up" />
        )}
        <SignUpForm />
      </div>
    </div>
  );
}
