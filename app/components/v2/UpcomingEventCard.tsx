import Image from "next/image";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function UpcomingEventCard({
  onClick,
  event,
}: {
  onClick?: () => void;
  event?: any;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-slate-900  px-[3vw] cursor-pointer flex w-[70vw] h-[35vw] justify-center items-center mt-[5vw] rounded-[4vw]"
    >
      <div className="flex flex-col">
        <h1 className="text-[5vw] text-white w-1/2">Upcoming Event</h1>
        <h2 className="text-[1.5vw] text-yellow-500 font-semibold">
          {event?.eventName}
        </h2>
        <button
          type="button"
          className="bg-blue-500 text-[1.5vw] w-max px-[2vw] py-[.5vw] rounded-full text-white font-semibold mt-[2vw] hover:bg-blue-500/80 transition-all duration-300"
        >
          RSVP
        </button>
      </div>
      <div className="flex relative overflow-hidden w-[27vw] h-[27vw] bg-white rounded-full">
        {event?.eventLogo ? (
          <Image
            src={event?.eventLogo}
            objectFit="contain"
            layout="fill"
            className="self-start left-0 "
            alt=""
          />
        ) : (
          <Skeleton width={"27vw"} circle height={"27vw"} baseColor="gray" />
        )}
      </div>
    </div>
  );
}
