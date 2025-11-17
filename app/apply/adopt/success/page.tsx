import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, MessageSquare } from "lucide-react";

interface AdoptionApplicationSuccessPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function AdoptionApplicationSuccessPage({ searchParams }: AdoptionApplicationSuccessPageProps) {
  const resolvedSearchParams = await searchParams;
  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Application Submitted Successfully!</CardTitle>
            <CardDescription className="text-lg">
              Thank you for your interest in adopting one of our senior dogs.
            </CardDescription>
            {resolvedSearchParams?.id && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-sm text-blue-700">
                  <strong>Application ID:</strong> {resolvedSearchParams.id}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Please save this ID for your records.
                </p>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-left space-y-4">
              <h3 className="font-semibold text-lg">What happens next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Our team will review your application within 3-5 business days</li>
                <li>• We&apos;ll contact you if we need any additional information</li>
                <li>• If approved, we&apos;ll schedule a meet-and-greet with the dog</li>
                <li>• Final approval depends on the dog&apos;s specific needs and your compatibility</li>
              </ul>
            </div>

            <div className="text-left space-y-4">
              <h3 className="font-semibold text-lg">While you wait</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Check out our other available dogs</li>
                <li>• Consider volunteering to meet the team</li>
                <li>• Follow us on social media for updates</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button asChild className="w-full">
                <Link href="/adopt">
                  <Home className="mr-2 h-4 w-4" />
                  Continue Browsing Dogs
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/volunteer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Volunteer With Us
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
