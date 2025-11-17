// app/admin/events/page.tsx

import { getEvents } from "@/lib/actions/event.actions";
import EventsClient from "./EventsClient";

export default async function AdminEventsPage() {
  // Fetch data ON THE SERVER.
  const events = await getEvents();

  // Pass data as props.
  return <EventsClient initialEvents={events} />;
}
