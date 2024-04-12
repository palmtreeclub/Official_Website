import React from "react";
import { motion } from "framer-motion";
import HeroSvgv2 from "./HeroSvg.v2";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="flex bg-orange-500 flex-col w-full h-full justify-center items-center">
      <div className="flex w-4/5 text-center h-4/5 max-md:flex-col justify-center items-center">
        <motion.div
          initial={{ translateX: "10px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" flex flex-col pt-[5vw] justify-center items-center"
        >
          <Image
            src={"/Assets/ptc-trc.png"}
            alt="Palm Tree Club"
            // fill
            className="shadow-2xl rounded-full bg-green-300"
            width={300}
            height={300}
          />
          {/* <HeroSvgv2> */}
          <span className="sm:text-[5.2vw] font-google-sans relative max-md:text-[1.4rem]">
            <span>Palm</span>&nbsp;<span>Tree</span>&nbsp;
            <span>Club</span>
          </span>
          <motion.div className=" max-md:text-xl text-[2.5vw] font-google-sans font-bold text-transparent bgGradientAnim">
            SOCCA
          </motion.div>
          {/* </HeroSvgv2> */}
        </motion.div>
        <h1 className="text-yellow-500 w-max absolute cursor-pointer hover:text-yellow-700 font-semibold duration-300 transition-all right-[5vw] max-sm:text-xl sm:text-[1.5vw] bottom-[2vw]">
          <span className="text-black dark:invert">&gt;</span> Join Our
          Community
        </h1>
      </div>
    </section>
  );
}
