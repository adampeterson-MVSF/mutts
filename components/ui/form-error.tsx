// components/ui/form-error.tsx
export function FormError({ error }: { error: string | string[] | undefined }) {
  if (!error) return null;
  const errorMessage = Array.isArray(error) ? error.join(", ") : error;
  return (
    <p
      className="text-red-500 text-sm mt-1 motion-reduce:animate-none animate-shake"
      role="alert"
      aria-live="assertive"
    >
      {errorMessage}
    </p>
  );
}
