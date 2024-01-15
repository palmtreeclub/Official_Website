import React from "react";
import { motion } from "framer-motion";
import HeroSvgv2 from "./HeroSvg.v2";
export default function HeroSection() {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex w-4/5 text-center h-4/5 max-md:flex-col justify-center items-center">
        <motion.div
          initial={{ translateX: "10px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" flex flex-col pt-[5vw]"
        >
          <HeroSvgv2>
            <span className="sm:text-[5.2vw] font-google-sans relative max-md:text-[1.4rem]">
              <span>Google</span>&nbsp;<span>Developer</span>&nbsp;
              <span>Student</span>&nbsp;<span>Club</span>
            </span>
            <motion.div className=" max-md:text-xl text-[2.5vw] font-google-sans font-bold text-transparent bgGradientAnim">
              Silver Oak University
            </motion.div>
          </HeroSvgv2>
        </motion.div>
        <h1 className="text-yellow-500 w-max absolute cursor-pointer hover:text-yellow-700 font-semibold duration-300 transition-all right-[5vw] max-sm:text-xl sm:text-[1.5vw] bottom-[2vw]">
          <span className="text-black dark:invert">&gt;</span> Join Our
          Community
        </h1>
      </div>
    </section>
  );
}
