"use client";
import React, { useEffect, useState } from "react";
import EventCard from "../components/v1/EventCard";
import { useTheme } from "next-themes";
import { useFirebase } from "../context/firebase";
import { useRouter } from "next/navigation";

export default function Page() {
  const firebase: any = useFirebase();
  const router = useRouter();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  useEffect(() => {
    setUpcomingEvents(firebase?.events);
  }, []);

  const { theme } = useTheme();
  return (
    <div className="flex  w-full h-max flex-col justify-center items-center">
      <div
        className={`event sm:pt-[4vw]  max-sm:pt-14 justify-center items-center max-sm:gap-5 sm:gap-[1vw]  flex flex-wrap ${
          theme === "dark" && "invert"
        }`}
      >
        <h1 className="max-sm:text-2xl border-b-2 font-medium text-red-500 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-4/5">
          Events
        </h1>
        {upcomingEvents?.length > 0 ? (
          upcomingEvents.map((event: any) => {
            return (
              <div key={event} className="scale-90">
                <EventCard
                  event={event}
                  onEventClick={() => router.push("/event/" + event?.id)}
                />
              </div>
            );
          })
        ) : (
          <div className="flex">
            <div className="flex">No Past Events available </div>
          </div>
        )}
        {/* <h1 className="max-sm:text-2xl border-b-2 font-medium text-red-500 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-4/5">
          Past Events
        </h1>

        {events?.length > 0 ? (
          events.map((event) => {
            return (
              <div key={event} className="scale-90">
                <EventCard />
              </div>
            );
          })
        ) : (
          <div className="flex">
            <div className="flex">No Past Events available </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
