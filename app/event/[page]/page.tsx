"use client";
import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import EventPage from "../components/EventPage";
import { usePathname } from "next/navigation";
import { formData } from "@/app/team/events/components/EventForm";
import { useFirebase } from "@/app/context/firebase";

export default function EventMainPage() {
  const firebase: any = useFirebase();
  const [eventId, setEventId] = useState<string>();
  const [eventData, setEventData] = useState<formData>();
  const path = usePathname();
  useEffect(() => {
    const id = path.replace("/event/", "");
    setEventId(id);
  }, [path]);

  useEffect(() => {
    firebase?.events?.map((event: any) => {
      return event?.id === eventId && setEventData(event);
    });
    console.log({ eventId, eventData, events: firebase?.events });
  }, [eventId, firebase?.events, eventData]);
  return (
    <>
      <EventPage data={eventData} key={eventId} />
    </>
  );
}
