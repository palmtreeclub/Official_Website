import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CounterCard from "./CounterCard";
import { useTheme } from "next-themes";

export default function StatisticSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`flex flex-col relative justify-center bg-white dark:bg-slate-900 items-center w-full h-4/5 ${
        theme === "dark" && "invert"
      }`}
    >
      <motion.div
        initial={{ translateX: "-300px", translateY: "0px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        className="absolute left-0 top-[8vw]"
      >
        <div className="relative -rotate-[25vw] overflow-hidden g-slate-300 w-[15vw] h-[42vw]  ">
          <Image
            src="/Svg/yellow-star-half.svg"
            layout="fill"
            className=""
            alt="hackathon"
            objectFit="contain"
            priority
            fetchPriority="high"
            quality={60}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: "300px", translateY: "0px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        className="absolute right-0 top-[8vw]"
      >
        <div className="relative -rotate-[25vw] overflow-hidden g-slate-300 w-[15vw] h-[42vw]  ">
          <Image
            src="/Svg/red-star-half.svg"
            layout="fill"
            className=""
            alt="hackathon"
            objectFit="contain"
            priority
            fetchPriority="high"
            quality={60}
          />
        </div>
      </motion.div>
      <div className="flex flex-wrap gap-[4vw]">
        <CounterCard bgColor="bg-yellow-50" title="Members" total={650} />
        <CounterCard bgColor="bg-blue-50" title="Volunteers" total={30} />
        <CounterCard bgColor="bg-green-50" title="Leads" total={10} />
      </div>
      <div className="flex  w-full flex-col   justify-center items-center  light:bg-white/50   max-sm:p-5   sm:p-[2vw]">
        <motion.h1
          initial={{ translateY: "-100px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-sm:text-2xl sm:pb-[2vw] max-sm:pb-5  md:text-[5vw] font-bold text-slate-500"
        >
          We are GDSC <br /> Silver Oak University
        </motion.h1>
        <div className="flex  flex-wrap sm:gap-x-[15vw] max-sm:gap-5 gap-y-[3vw] w-4/5 justify-center items-center"></div>
      </div>
    </section>
  );
}
