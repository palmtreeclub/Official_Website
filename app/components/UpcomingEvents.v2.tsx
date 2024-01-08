import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Confettin from "./Confettin";
import EventCard from "./EventCard";
import { useRouter } from "next/navigation";
import Image from "next/image";
import UpcomingEventCard from "./UpcomingEventCard";
export default function UpcomingEventsv2() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <section
      className={`flex ${
        theme === "dark" && "invrt"
      } relative  dark:bg-event-b   justify-center items-center w-full sm:h-full`}
    >
      <Image
        src={"/Svg/haritage.svg"}
        fill
        objectFit="cover"
        layout="fill"
        className="self-start left-0 absolute -z-20"
        alt="Haritage svg"
      />
      <div className="flex  flex-col max-sm:scale-90 max-sm:overflow-y-scroll sm:overflow-auto max-sm:py-28 sm:h-full max-md:flex-col scrollbar-none justify-center  items-center">
        <div className="flex max-sm:flex-col max-sm:h-4/5 max-sm:overflow-y-scroll sm:gap-[2vw] max-sm:gap-5 overflow-x-scroll  scrollbar-none ">
          {/* <div className="flex sm:gap-[2vw] max-sm:gap-5 overflow-x-scroll pl-[100vw] pr-[5vw]  scrollbar-none "> */}
          <UpcomingEventCard onClick={() => setIsVisible(true)} />
        </div>
        <Confettin onClose={setIsVisible} onFire={isVisible} />
      </div>
    </section>
  );
}
