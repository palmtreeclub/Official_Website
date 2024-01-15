import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WhatWeDoSvgs() {
  return (
    <>
      <motion.div
        initial={{ translateX: "-100px", translateY: "0px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="absolute sm:left-[20vw] sm:-top-[8vw] max-sm:right-0 max-sm:-top-[7rem]"
      >
        <div className="relative -rotate-[25vw] overflow-hidden g-slate-300 sm:w-[15vw] sm:h-[15vw] max-sm:w-[10rem] max-sm:h-[10rem]  ">
          <Image
            src="/Svg/blue-squre.svg"
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
        initial={{ translateX: "200px", translateY: "-100px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="absolute sm:left-[25vw] sm:bottom-0 max-sm:left-[0] max-sm:-bottom-[5rem]"
      >
        <div className="relative -rotate-[25vw] overflow-hidden g-slate-300 sm:w-[6vw] sm:h-[6vw] max-sm:w-[6rem] max-sm:h-[6rem]  ">
          <Image
            src="/Svg/red-small-circle.svg"
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
        initial={{ translateX: "-200px", translateY: "100px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="absolute max-sm:right-0 sm:left-0 max-sm:-bottom-[5rem] sm:-bottom-10"
      >
        <div className="relative -rotate-[25vw] overflow-hidden  sm:w-[8vw] sm:h-[8vw] max-sm:w-[7rem] max-sm:h-[7rem]  ">
          <Image
            src="/Svg/yellow-triangle.svg"
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
    </>
  );
}
