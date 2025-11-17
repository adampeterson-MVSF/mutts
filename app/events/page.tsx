import Link from "next/link";
import { getEvents } from "@/lib/actions/event.actions";
import { formatDateRange } from "@/lib/utils";
import { RouteReady } from "@/components/testing/RouteReady";

// Force revalidation in development/E2E tests for deterministic behavior
export const revalidate = 0;

type EventsSearchParams = {
  view?: string;
};

export default async function EventsPage({
  searchParams,
}: {
  searchParams?: Promise<EventsSearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const events = await getEvents();
  const now = new Date();
  const upcoming = events.filter((event) => event.endTime >= now);
  const past = events
    .filter((event) => event.endTime < now)
    .sort((a, b) => b.endTime.getTime() - a.endTime.getTime());

  const view = resolvedSearchParams?.view === "past" ? "past" : "upcoming";
  const displayEvents = view === "past" ? past : upcoming;

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-4xl space-y-6">
        {process.env.NEXT_PUBLIC_E2E === "true" && (
          <RouteReady route="public/events" />
        )}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">
            {view === "past" ? "Past Events" : "Upcoming Events"}
          </h1>
          <p className="text-muted-foreground">
            Join us for adoption fairs, fundraisers, and community gatherings.
          </p>
        </div>

        <div className="flex justify-center gap-2">
          <Link
            href="/events"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${view === "upcoming" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}
            prefetch={false}
          >
            Upcoming
          </Link>
          <Link
            href="/events?view=past"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${view === "past" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}
            prefetch={false}
          >
            Past
          </Link>
        </div>

        {displayEvents.length === 0 ? (
          <p className="text-center text-muted-foreground">
            {view === "past"
              ? "No events recorded yet."
              : "No events scheduled right now. Check back soon!"}
          </p>
        ) : (
          <ul className="space-y-4">
            {displayEvents.map((event) => (
              <li
                key={event.id}
                className="rounded-lg border border-border bg-card/50 p-5 shadow-sm"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {formatDateRange(event.startTime, event.endTime)}
                  </p>
                  {event.location && (
                    <p className="text-sm text-muted-foreground">
                      Location: {event.location}
                    </p>
                  )}
                  {event.description && (
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
