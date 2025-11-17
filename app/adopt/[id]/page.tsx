// app/adopt/[id]/page.tsx

import { notFound } from "next/navigation"; // Import notFound for handling missing dogs
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getDogById } from "@/lib/actions/dog.actions";
import { NO_PHOTO_DATA_URI } from "@/lib/constants/images";
import { calculateAge, isSenior } from "@/lib/utils/dog-utils";
import { RouteReady } from "@/components/testing/RouteReady";

// Cache is managed by revalidation tags in the getDogById action

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dogId = parseInt(id, 10);

  if (isNaN(dogId)) {
    return {
      title: 'Dog Not Found',
    };
  }

  try {
    const dog = await getDogById(dogId);

    if (dog.status !== "AVAILABLE") {
      return {
        title: 'Dog Not Available',
        robots: {
          index: false,
        },
      };
    }

    const title = `Adopt ${dog.name} - ${dog.breed || 'Senior Dog'} Available for Adoption`;
    const description = dog.bioPublic
      ? `${dog.bioPublic.substring(0, 155)}...`
      : `Meet ${dog.name}, a wonderful ${dog.breed || 'senior dog'} looking for a loving home. ${calculateAge(dog.dateOfBirth) ? `${calculateAge(dog.dateOfBirth)} years old.` : ''} ${dog.specialNeeds ? 'Has special needs.' : ''}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [dog.primaryPhotoUrl ?? ''],
      },
    };
  } catch {
    return {
      title: 'Dog Not Found',
    };
  }
}

export default async function DogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dogId = parseInt(id, 10);

  // Validate ID
  if (isNaN(dogId)) {
    notFound(); // Trigger Next.js 404 page
  }

  // Fetch the specific dog, ensuring it's available for adoption
  let dog;
  try {
    dog = await getDogById(dogId);
  } catch {
    notFound();
  }

  // Ensure dog is available for adoption
  if (dog.status !== "AVAILABLE") {
    notFound();
  }

  // Get donation URL from centralized config
  const { siteConfig } = await import("@/lib/site.config");
  const generalDonationUrl = siteConfig.donationUrl;

  return (
    <div className="flex-1 w-full flex flex-col items-center pt-24 px-4 md:px-8 pb-8">
      <div className="w-full max-w-4xl">
      {process.env.NEXT_PUBLIC_E2E === "true" && (
        <RouteReady route="public/adopt/detail" />
      )}
         {/* Optional: Add a "Back to Adopt" link */}
         <Link href="/adopt" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
            &larr; Back to all dogs
         </Link>

        <Card className="overflow-hidden">
           {/* Image Section */}
           <div className="relative w-full h-64 md:h-96 bg-muted" data-testid="dog-primary-photo">
             <Image
               src={dog.primaryPhotoUrl || NO_PHOTO_DATA_URI}
               alt={`Photo of ${dog.name}`}
               fill
               sizes="(max-width: 768px) 100vw, 50vw"
               style={{ objectFit: 'cover' }}
               priority
             />
           </div>

           {/* Details Section */}
          <CardHeader className="pt-6">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                 <div>
                    <CardTitle className="text-3xl md:text-4xl" data-testid="dog-name">{dog.name}</CardTitle>
                    <CardDescription className="text-lg mt-1" data-testid="dog-breed">
                        {dog.breed}
                        {calculateAge(dog.dateOfBirth) ? ` | Approx. ${calculateAge(dog.dateOfBirth)} years old` : ""}
                    </CardDescription>
                 </div>
                 {(dog.specialNeeds || isSenior(dog.dateOfBirth)) && (
                    <Badge variant="destructive" className="text-base px-3 py-1 mt-2 md:mt-0 self-start" data-testid="badge-special-needs">
                        Special Needs
                    </Badge>
                 )}
            </div>
          </CardHeader>
          <CardContent className="pt-4 pb-6 space-y-6">
            {/* Bio Section */}
            <div>
                <h2 className="text-xl font-semibold mb-2">About {dog.name}</h2>
                <p className="text-foreground whitespace-pre-wrap" data-testid="dog-bio-public">
                  {dog.bioPublic || "More details coming soon!"}
                </p>
            </div>

            {/* --- UPDATED Call to Action Section --- */}
            <div className="text-center border-t pt-6 space-y-4">
                 <div>
                     <h2 className="text-xl font-semibold mb-3">Ready to give {dog.name} a loving home?</h2>
                     <Button asChild size="lg" data-testid={`btn-adopt-${dog.name.toLowerCase()}`}>
                        <Link href={`/apply/adopt?dogId=${dog.id}`}>Apply to Adopt {dog.name}</Link>
                     </Button>
                 </div>
                 {/* --- NEW Sponsorship Section --- */}
                 <div>
                      <p className="text-sm text-muted-foreground mb-2">Can&apos;t adopt right now? Consider sponsoring {dog.name}&apos;s care!</p>
                      <Button asChild variant="outline" size="lg" data-testid="btn-sponsor">
                          {/* Link to the general donation URL */}
                          <a href={generalDonationUrl} target="_blank" rel="noopener noreferrer">
                              Sponsor {dog.name}
                          </a>
                      </Button>
                 </div>
            </div> {/* --- END Updated Section --- */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
