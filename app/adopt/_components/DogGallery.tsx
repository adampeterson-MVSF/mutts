import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NO_PHOTO_DATA_URI } from "@/lib/constants/images";
import { calculateAge, isSenior } from "@/lib/utils/dog-utils";
import { missing } from "@/lib/format";
import type { PublicDogListItem } from "@/lib/types";

export function DogGallery({ dogs }: { dogs: PublicDogListItem[] }) {
  return (
    <section data-testid="dog-cards-container">
      {dogs.length === 0 ? (
        <p data-testid="dog-cards-empty" className="text-center text-muted-foreground">
          All our dogs are currently in foster or pending adoption. Please check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <Link key={dog.id} href={`/adopt/${dog.id}`} className="block">
              <Card data-dog-id={dog.mutt_id} data-testid="dog-card" className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{dog.name}</CardTitle>
                  <CardDescription>
                    {dog.breed}
                    {calculateAge(dog.dateOfBirth) ? ` | ${calculateAge(dog.dateOfBirth)} years old` : ""}
                    {(dog.gender || dog.size || dog.weight_lbs) && (
                      <div className="mt-1 text-sm">
                        {[
                          dog.gender && `${dog.gender === 'MALE' ? 'Male' : dog.gender === 'FEMALE' ? 'Female' : missing(null, 'Unknown')}`,
                          dog.size && `${dog.size.charAt(0).toUpperCase() + dog.size.slice(1).toLowerCase()}`,
                          dog.weight_lbs && `${dog.weight_lbs} lbs`
                        ].filter(Boolean).join(' • ')}
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-48 bg-muted rounded-md mb-4 overflow-hidden">
                      <Image
                        src={dog.primaryPhotoUrl || NO_PHOTO_DATA_URI}
                        alt={`Photo of ${dog.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        priority={dogs.indexOf(dog) < 3}
                      />
                    </div>

                     {(dog.specialNeeds || isSenior(dog.dateOfBirth)) && (
                      <Badge variant="destructive" className="mb-2">Special Needs</Badge>
                    )}
                     <p className="text-foreground mb-4 line-clamp-3">
                      {dog.bioPublic || "No bio yet. Check back soon!"}
                    </p>
                  </div>

                  <div className="text-primary font-semibold hover:underline mt-auto">
                    Learn more about {dog.name}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
