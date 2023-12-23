"use client";
import React, { useState } from "react";
import EventCard from "../components/EventCard";
import { useTheme } from "next-themes";

export default function Page() {
  const [events, setEvents] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [upcomingEvents, setUpcomingEvents] = useState([
    1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  const { theme } = useTheme();
  return (
    <div className="flex  w-full h-max flex-col justify-center items-center">
      <div
        className={`event sm:pt-[4vw] invert max-sm:pt-14 justify-center items-center max-sm:gap-5 sm:gap-[1vw]  flex flex-wrap ${
          theme === "dark" && "invert"
        }`}
      >
        <h1 className="max-sm:text-2xl border-b-2 font-medium text-red-500 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-4/5">
          Events
        </h1>
        {upcomingEvents?.length > 0 ? (
          upcomingEvents.map((event) => {
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
