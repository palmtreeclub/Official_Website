import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CounterCard from "./CounterCard";
import { useTheme } from "next-themes";
import StatisticSectionSvgs from "./StatisticSectionSvgs";

export default function StatisticSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`flex flex-col relative justify-center bg-white dark:bg-slate-900 items-center w-full h-4/5 ${
        theme === "dark" && "invert"
      }`}
    >
      <div className="flex absolute w-screen justify-between top-[8vw] z-10">
        <StatisticSectionSvgs />
      </div>
      <div className="flex relative z-30 flex-wrap gap-[4vw]">
        <CounterCard
          hoverColor="hover:bg-yellow-500"
          bgColor="bg-yellow-50"
          onClick={() =>
            window.open(
              "https://gdsc.community.dev/silver-oak-university-ahmedabad/"
            )
          }
          title="Members"
          total={650}
        />
        <CounterCard
          hoverColor="hover:bg-blue-500"
          bgColor="bg-blue-50"
          redirect="/our_team/volunteer"
          title="Volunteers"
          total={30}
        />
        <CounterCard
          hoverColor="hover:bg-green-500"
          bgColor="bg-green-50"
          redirect="/our_team/core_team"
          title="Leads"
          total={10}
        />
      </div>

      <div className="flex relative z-30 w-full flex-col   justify-center items-center  light:bg-white/50   max-sm:p-5   sm:p-[2vw]">
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
