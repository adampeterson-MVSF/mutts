import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { calculateAge } from "@/lib/utils/dog-utils";
import { getAdoptedDogs } from "@/lib/actions/dog.actions";
import { ClientTimestamp } from "@/components/ClientTimestamp";
import { RouteReady } from "@/components/testing/RouteReady";

export default async function HappyTailsPage() {
  const adoptedDogs = await getAdoptedDogs();

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-6xl space-y-8">
        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="happy-tails" />
        )}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Happy Tails</h1>
          <p className="text-muted-foreground">
            Celebrate the senior dogs who have found their forever homes.
          </p>
          <p className="text-sm text-muted-foreground">
            Do you have an update to share?{" "}
            <a
              href="mailto:adoptions@seniordogrescue.org"
              className="font-semibold text-primary hover:underline"
            >
              Email the adoption team
            </a>
            .
          </p>
        </div>

        {adoptedDogs.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No adoption stories yet—check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adoptedDogs.map((dog) => {
              const photoSrc =
                dog.primaryPhotoUrl ||
                "https://images.unsplash.com/photo-1558944351-c13e5d03267b?auto=format&fit=crop&w=800&q=80";

              return (
                <Card key={dog.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">{dog.name}</CardTitle>
                    <CardDescription>
                      {dog.breed ?? "Senior Dog"}
                      {calculateAge(dog.dateOfBirth) ? ` · ${calculateAge(dog.dateOfBirth)} years old` : ""}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground">
                      Adopted on <ClientTimestamp date={dog.updatedAt.toISOString()} />
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <div className="relative h-48 w-full overflow-hidden rounded-md bg-muted">
                      <Image
                        src={photoSrc}
                        alt={`Photo of ${dog.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        priority={false}
                      />
                    </div>
                    {dog.specialNeeds && (
                      <Badge variant="secondary">Special Needs Graduate</Badge>
                    )}
                    <p className="text-sm text-muted-foreground line-clamp-4">
                      {dog.bioPublic
                        ? dog.bioPublic
                        : "This senior pup is enjoying a cozy retirement with their family."}
                    </p>
                    <Link
                      href={`/adopt/${dog.id}`}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      View adoption story
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
