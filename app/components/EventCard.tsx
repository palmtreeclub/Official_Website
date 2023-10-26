import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export default function EventCard({ onClick, event, mirror }: any) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: mirror ? false : true }}
      onClick={() => onClick && onClick(true)}
      className="flex relative shadow-xl flex-col w-[25vw] sm:pb-0 sm:p-[1vw] h-[37vw] rounded-[5%] border-2 border-red-300 cursor-pointer"
    >
      <h1 className="text-right absolute text-white top-[1vw] right-[1vw] sm:text-[1vw] font-medium rounded-full px-[1vw] py-[.5vw] bg-red-300 w-max font-med">
        Oct 28, 2023
      </h1>
      <div className="w-full dark:text-white flex flex-col  justify-center items-center h-full">
        <div className="flex relative  mb-[.5vw] rounded-[50%] overflow-hidden w-4/5 h-[50%] ">
          <Image
            src={event?.photo ? event?.photo : "/Assets/grow.png"}
            alt="event"
            layout="fill"
          />
        </div>
        <h1 className="sm:text-[1.5vw] max-sm:text-2xl font-bold pt-[.4vw] w-4/5 text-center ">
          GDSC HackNMIMS
        </h1>
        <h1 className="sm:text-[1.2vw] max-sm:text-xl pt-3 w-4/5 text-center">
          Google Developer Student Club - NMIMS MPSTME, Mumbai brings to you,
          it&apos;s first ever hackathon, HackNMIMS!
        </h1>
        <button
          type="button"
          className="bg-red-600 hover:shadow-[0_0_10px_#EAB308] max-sm:mt-2 sm:mt-[.5vw] text-white sm:text-[1.3vw] px-[1vw] py-[.2vw] rounded-[.4vw] max-sm:text-2xl "
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
