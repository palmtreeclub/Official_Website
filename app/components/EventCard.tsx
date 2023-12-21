import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function EventCard({
  onClick,
  event,
  mirror,
  onEventClick,
}: {
  onClick?: (boolean: boolean) => void;
  event?: {
    eventLogo: string;
    eventName: string;
    eventDate: string;
    eventCaption?: string;
    id?: string;
  };
  mirror?: boolean;
  onEventClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: mirror ? false : true }}
      onClick={() => onClick && onClick(true)}
      className="flex relative h-max sm:pt-[3vw] max-sm:py-[10vw] shadow-xl flex-col w-full sm:w-[25vw] sm:p-[1vw] rounded-[5%] border-2 border-red-300 dark:bg-slate-900 bg-white cursor-pointer"
    >
      <h1 className="text-right absolute text-white max-sm:top-5 sm:top-[1vw] max-sm:right-3 sm:right-[1vw] sm:text-[1vw] font-medium rounded-full px-[1vw] py-[.5vw] bg-red-300 w-max ">
        {event?.eventDate || <Skeleton width={"5rem"} />}
      </h1>
      <div className="w-full dark:text-white flex flex-col justify-center items-center h-full">
        <div className="flex relative mb-[1vw] rounded-[50%] overflow-hidden max-sm:w-[20rem] max-sm:h-[20rem]  sm:w-[15vw] sm:h-[15vw]">
          {event?.eventLogo ? (
            <Image
              src={event?.eventLogo ? event?.eventLogo : "/Assets/grow.png"}
              alt="event"
              layout="fill"
              priority
              fetchPriority="high"
              quality={60}
            />
          ) : (
            <Skeleton
              circle
              width={"15vw"}
              height={"15vw"}
              className="max-sm:w-[20rem] max-sm:h-[20rem]  sm:w-[15vw] sm:h-[15vw]"
            />
          )}
        </div>
        <h1 className="sm:text-[1.5vw] max-sm:text-2xl font-bold pt-[1vw] w-4/5 sm:w-5/6 text-center">
          {event?.eventName || <Skeleton width={"50%"} />}
        </h1>
        <h1 className="sm:text-[1.2vw] max-sm:text-xl pt-3 w-4/5 sm:w-5/6 text-center">
          {event?.eventCaption || (
            <>
              <Skeleton count={2} width={"100%"} />
              <Skeleton count={1} width={"25%"} />
            </>
          )}
        </h1>
        <button
          onClick={onEventClick}
          type="button"
          className="bg-red-600 hover:shadow-[0_0_10px_#EAB308] mt-2 sm:mt-[.5vw] text-white sm:text-[1.3vw] px-[1vw] py-[.2vw] sm:rounded-[.4vw] max-sm:rounded-lg max-sm:px-10 max-sm:py-2 max-sm:text-2xl"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
