import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Confettin from "./Confettin";
import EventCard from "./EventCard";
import { useRouter } from "next/navigation";
import { useFirebase } from "../../context/firebase";
export default function UpcomingEvents() {
  const globalStore = useFirebase();
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <section
      className={`flex ${
        theme === "dark" && "invert"
      } relative  dark:bg-event-b dark:invert bg-event-bg bg-contain justify-center items-center w-full sm:h-full`}
    >
      <div className="flex  flex-col max-sm:scale-90 max-sm:overflow-y-scroll sm:overflow-auto max-sm:py-28 sm:h-full max-md:flex-col scrollbar-none justify-center  items-center">
        <motion.h1
          initial={{ translateY: "-100px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-sm:text-2xl max-sm:top-16 sm:top-[3vw] z-20 absolute sm:pb-[2vw] max-sm:pb-5 sm:text-[2vw] font-medium text-blue-500"
        >
          Upcoming Events
        </motion.h1>
        <Confettin onClose={setIsVisible} onFire={isVisible} />
        <div className="flex max-sm:flex-col dark:invert max-sm:h-4/5 max-sm:overflow-y-scroll sm:gap-[2vw] max-sm:gap-5 overflow-x-scroll  scrollbar-none ">
          {/* <div className="flex sm:gap-[2vw] max-sm:gap-5 overflow-x-scroll pl-[100vw] pr-[5vw]  scrollbar-none "> */}
          <EventCard
            mirror={true}
            onClick={setIsVisible}
            onEventClick={() => {
              router.push("/event/cloudreadynessprogramm");
            }}
          />
        </div>
      </div>
    </section>
  );
}
