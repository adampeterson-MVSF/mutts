// components/volunteer/QuickLogForm.tsx
"use client";

import { useActionState, useEffect } from "react";
import { Dog, ActivityType } from "@prisma/client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createActivityLog } from "@/lib/actions/log.actions";
import { useToast } from "@/components/ui/toast";

interface QuickLogFormProps {
  dogs: Pick<Dog, 'id' | 'name' | 'status'>[];
}

export default function QuickLogForm({ dogs }: QuickLogFormProps) {
  const { showToast } = useToast();

  // Activity types for volunteer logging (subset of ActivityLog types)
  const activityTypes = Object.values(ActivityType);

  // Server action state
  const [state, formAction] = useActionState(createActivityLog, { message: "", success: false });

  // Handle action state changes
  useEffect(() => {
    if (state.message) {
      showToast(state.message, state.success ? "success" : "error");
    }
  }, [state, showToast]);

  return (
    <Card data-testid="card-quick-log">
      <CardHeader>
        <CardTitle>Quick Task Logging</CardTitle>
        <CardDescription>
          Record common care activities for dogs at the shelter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4" data-testid="form-quick-log">
          {(!dogs || dogs.length === 0) && (
            <p className="text-muted-foreground">No dogs available for logging activities.</p>
          )}
          {dogs && dogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dog-select">Select Dog</Label>
                <Select name="dogId" required>
                  <SelectTrigger data-testid="select-dog">
                    <SelectValue placeholder="Choose a dog..." />
                  </SelectTrigger>
                  <SelectContent>
                    {dogs.map((dog) => (
                      <SelectItem key={dog.id} value={dog.id.toString()}>
                        {dog.name} ({dog.status})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="log-type-select">Activity Type</Label>
                <Select name="type" required>
                  <SelectTrigger id="log-type-select">
                    <SelectValue placeholder="Choose activity..." />
                  </SelectTrigger>
                  <SelectContent>
                    {activityTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              name="note"
              placeholder="Enter activity details..."
              rows={3}
              data-testid="input-log-note"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            data-testid="submit-quicklog"
          >
            Log Activity
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
