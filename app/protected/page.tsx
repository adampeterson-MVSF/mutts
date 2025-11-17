import { RouteReady } from "@/components/testing/RouteReady";

export default async function ProtectedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="protected" />
        )}
        <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
        <p>This is a protected page that requires authentication.</p>
      </div>
    </div>
  );
}
