import { notFound } from 'next/navigation';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDogStatusVariant, humanizeEnum } from "@/lib/utils";
import { calculateAge } from "@/lib/utils/dog-utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MedicalRecordsManager from "../../dogs/_components/MedicalRecordsManager";
import { getDogMedicalBundle } from "@/lib/actions/dog.actions";
import { missing } from "@/lib/format";
import { MedicalDocumentManager } from "../../dogs/_components/MedicalDocumentManager";

export default async function AdminDogDetail({
  params,
  searchParams,
}: { params: Promise<{ id: string }>; searchParams: Promise<{ tab?: string }> }) {
  const { id } = await params;
  const { tab } = await searchParams;
  const dogId = Number(id);
  if (!Number.isFinite(dogId)) notFound();

  const { dog, medicalRecords, medicalDocuments } = await getDogMedicalBundle(dogId);
  if (!dog) notFound();

  const defaultTab = tab === 'medical' ? 'medical' : 'info';

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{dog.name}</h1>
          <Button asChild data-testid="btn-edit-dog">
            <Link href={`/admin/edit-dog/${dog.id}`}>
              Edit Dog
            </Link>
          </Button>
        </div>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="info">Information</TabsTrigger>
            <TabsTrigger value="medical" data-testid="tab-medical">Medical</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Dog Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium">Name:</label>
                    <p>{dog.name}</p>
                  </div>
                  <div>
                    <label className="font-medium">Status:</label>
                    <Badge variant={getDogStatusVariant(dog.status)} data-testid="select-status">
                      {humanizeEnum(dog.status)}
                    </Badge>
                  </div>
                  <div>
                    <label className="font-medium">Breed:</label>
                    <p>{missing(dog.breed)}</p>
                  </div>
                  <div>
                    <label className="font-medium">Age:</label>
                    <p>{calculateAge(dog.dateOfBirth) ? `${calculateAge(dog.dateOfBirth)} years` : missing(null)}</p>
                  </div>
                  <div>
                    <label className="font-medium">Gender:</label>
                    <p>{dog.gender ? humanizeEnum(dog.gender) : missing(null)}</p>
                  </div>
                  <div>
                    <label className="font-medium">Size:</label>
                    <p>{dog.size ? humanizeEnum(dog.size) : missing(null)}</p>
                  </div>
                  <div>
                    <label className="font-medium">Weight:</label>
                    <p>{dog.weight_lbs ? `${dog.weight_lbs} lbs` : missing(null)}</p>
                  </div>
                  <div>
                    <label className="font-medium">Foster:</label>
                    <p>{dog.fosterProfile?.profile ? (dog.fosterProfile.profile.name || dog.fosterProfile.profile.email) : missing(null)}</p>
                  </div>
                </div>

                {dog.bioPublic && (
                  <div>
                    <label className="font-medium">Bio:</label>
                    <p className="mt-1">{dog.bioPublic}</p>
                  </div>
                )}

                {dog.notesInternal && (
                  <div>
                    <label className="font-medium">Internal Notes:</label>
                    <p className="mt-1 text-muted-foreground">{dog.notesInternal}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medical" className="mt-6">
            <MedicalDocumentManager dogId={dog.id} documents={medicalDocuments} />
            <MedicalRecordsManager
              dogId={dog.id}
              medicalRecordsData={medicalRecords}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
