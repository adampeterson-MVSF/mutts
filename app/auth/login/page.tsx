import { LoginForm } from "@/components/login-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h1 data-testid="page-title" className="text-2xl font-bold text-center mb-6">Login</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}