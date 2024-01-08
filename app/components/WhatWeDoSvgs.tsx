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
        className="absolute left-[20vw] -top-[8vw]"
      >
        <div className="relative -rotate-[25vw] overflow-hidden g-slate-300 w-[15vw] h-[15vw]  ">
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
        className="absolute left-[25vw] bottom-0"
      >
        <div className="relative -rotate-[25vw] overflow-hidden g-slate-300 w-[6vw] h-[6vw]  ">
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
        className="absolute left-0 -bottom-10"
      >
        <div className="relative -rotate-[25vw] overflow-hidden g-slate-300 w-[8vw] h-[8vw]  ">
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
