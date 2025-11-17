import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ShiftCancelButton from "../_components/ShiftCancelButton";
import { getMyShifts } from "@/lib/actions/shift.actions";

interface MyShiftsContentProps {
  userId: string;
}

export async function MyShiftsContent({ userId }: MyShiftsContentProps) {
  const myShifts = await getMyShifts(userId);

  return (
    <>
      {myShifts.length === 0 && (
        <p className="text-muted-foreground text-center py-4">You are not signed up for any upcoming shifts.</p>
      )}

      {myShifts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-testid="my-shifts-list">
           {myShifts.map((shift, index) => {
               const isCancelled = shift.mySignup?.cancelledAt;
               return (
                 <Card key={shift.id} className={`flex flex-col ${isCancelled ? 'opacity-75 border-destructive/50' : ''}`} data-testid={`my-shift-${index+1}`}>
                     <CardHeader>
                     <CardTitle className={isCancelled ? 'line-through' : ''}>
                       {shift.title}
                       {isCancelled && (
                         <Badge variant="destructive" className="ml-2 text-xs">
                           Cancelled
                         </Badge>
                       )}
                     </CardTitle>
                     <CardDescription>
                          {shift.startsAt.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}, {shift.startsAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} - {shift.endsAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                     </CardDescription>
                     </CardHeader>
                     <CardContent className="flex-1 space-y-2">
                      <Badge variant="secondary">
                         Slots: {shift.signupCount} / {shift.capacity || '∞'}
                     </Badge>
                     {isCancelled && (
                       <div data-testid="signup-cancel-reason">
                         Cancelled: {shift.mySignup?.cancellationReason ?? 'No reason provided'}
                       </div>
                     )}
                     </CardContent>
                     <CardFooter>
                         <ShiftCancelButton shiftId={shift.id} />
                     </CardFooter>
                 </Card>
               );
             })}
        </div>
      )}
    </>
  );
}
