import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function HeroSvgv2() {
  return (
    <>
      <motion.div
        initial={{ translateX: "-200px", translateY: "100px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -right-[5vw]  -top-[1vw]"
      >
        <div className="relative overflow-hidden w-[30vw] h-[30vw]  ">
          <Image
            src="/Svg/red-hero.svg"
            layout="fill"
            className=" -rotate-[3vw]"
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
        viewport={{ once: true }}
        className="absolute -right-[3vw] -top-[10vw]"
      >
        <div className="relative -rotate-[25vw]  overflow-hidden g-slate-300 w-[10vw] h-[10vw]  ">
          <Image
            src="/Svg/yellow-hero.svg"
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
        viewport={{ once: true }}
        className="absolute -left-[1vw] -bottom-[15vw]"
      >
        <div className="relative -rotate-[25vw]  overflow-hidden g-slate-300 w-[24vw] h-[24vw]  ">
          <Image
            src="/Svg/blue-hero.svg"
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
        initial={{ translateX: "300px", translateY: "100px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -left-[12vw] -top-[14vw]"
      >
        <div className="relative -rotate-[25vw]  overflow-hidden g-slate-300 w-[34vw] h-[34vw]  ">
          <Image
            src="/Svg/green-hero.svg"
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
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sm:text-[1.7vw] gap-[2vw] flex flex-col max-sm:text-md font-medium dark:invert text-black"
      >
        <span className="sm:text-[5.2vw] font-google-sans relative max-md:text-[1.4rem]">
          <span>Google</span>&nbsp;<span>Developer</span>&nbsp;
          <span>Student</span>&nbsp;<span>Club</span>
        </span>
        <motion.div className=" max-md:text-xl text-[2.5vw] font-google-sans font-bold text-transparent bgGradientAnim">
          Silver Oak University
        </motion.div>
      </motion.div>
    </>
  );
}
