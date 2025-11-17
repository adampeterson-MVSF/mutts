import { redirect, notFound } from "next/navigation";
import { getDogById, getPotentialFosters } from "@/lib/actions/dog.actions";
import EditDogPageClient from "./EditDogPageClient";

export default async function EditDogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dogId = parseInt(id, 10);
  if (isNaN(dogId)) {
    redirect("/admin");
  }

  // Fetch in parallel
  const [dog, potentialFosters] = await Promise.all([
    getDogById(dogId),
    getPotentialFosters(),
  ]);

  if (!dog) {
    notFound();
  }

  return (
    <EditDogPageClient
      dog={dog}
      potentialFosters={potentialFosters}
    />
  );
}
