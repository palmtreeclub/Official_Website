import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div className="w-full sm:h-[90%] max-sm:h-[93%]  flex sm:flex-row max-sm:flex-col-reverse  bg-green-500 dark:bg-slate-900">
      <div className="sm:w-[60%] max-sm:h-[80%] max-sm:w-full flex flex-col  justify-center items-center">
        <div className="px-[6vw] flex flex-col  justify-center items-center">
          <motion.h1
            initial={{ translateX: "0", translateY: "100px", opacity: 0 }}
            whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-sm:text-2xl max-sm:mt-[2rem] sm:text-[3vw] font-medium text-white"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ translateX: "0", translateY: "100px", opacity: 0 }}
            whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="sm:text-[1.8vw] max-sm:text-md text-center text-white/80"
          >
            At GDSC SOU, our mission is to cultivate a dynamic community of
            student developers who are not just interested in technology but are
            driven by a shared passion for solving real-world challenges. We
            believe in the transformative power of technology and aim to harness
            it to create positive impacts.
          </motion.div>
          <motion.div
            initial={{ translateX: "0", translateY: "100px", opacity: 0 }}
            whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-yellow-500 max-sm:text-xl sm:text-[1.5vw] w-max px-[2vw] py-[.5vw] rounded-full text-white font-semibold mt-[2vw] hover:bg-yellow-500/80 transition-all duration-300"
          >
            Lern More
          </motion.div>
        </div>
        <div className="relative max-sm:pt-[10rem] w-full h-[10vw]">
          <motion.div
            initial={{ translateX: "-300px", translateY: "200px", opacity: 0 }}
            whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute w-full bg-wave bg-cover h-[15vw] max-sm:bottom-10 sm:-bottom-10 "
          />
        </div>
      </div>
      <motion.div
        initial={{ translateX: "0", scale: 0.5, opacity: 0 }}
        whileInView={{ translateX: "0px", scale: 1, opacity: 1 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className="relative sm:w-[40%] max-sm:w-full  max-sm:h-[35rem] max-sm:rounded-2xl max-sm:mt-[5rem] max-sm:overflow-hidden  sm:h-full"
      >
        <Image
          src={"/Svg/aboutus-lead.svg"}
          alt="aboutus-lead"
          layout="fill"
          objectFit="contain"
          priority
          className="max-sm:rounded-2xl"
          fetchPriority="high"
          quality={60}
        />
      </motion.div>
    </div>
  );
}
