// app/admin/add-dog/page.tsx
import { getPotentialFosters } from "@/lib/actions/dog.actions";
import { AddDogForm } from "./AddDogForm";

export default async function AddDogPage() {
  // No try...catch. If this fails, the page *should* fail.
  const potentialFosters = await getPotentialFosters();

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6" data-testid="page-title">
          Add New Dog
        </h1>
        <AddDogForm potentialFosters={potentialFosters} />
      </div>
    </div>
  );
}
