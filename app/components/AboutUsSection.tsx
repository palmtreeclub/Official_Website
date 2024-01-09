import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div className="w-full h-[90%] flex bg-green-500 dark:bg-slate-900">
      <div className="w-[60%] flex flex-col  justify-center items-center">
        <div className="px-[6vw] flex flex-col  justify-center items-center">
          <h1 className="max-sm:text-2xl text-[3vw] font-medium text-white">
            About Us
          </h1>
          <h3 className="text-[1.8vw] text-center text-white/80">
            At GDSC SOU, our mission is to cultivate a dynamic community of
            student developers who are not just interested in technology but are
            driven by a shared passion for solving real-world challenges. We
            believe in the transformative power of technology and aim to harness
            it to create positive impacts.
          </h3>
          <button
            type="button"
            className="bg-yellow-500 text-[1.5vw] w-max px-[2vw] py-[.5vw] rounded-full text-white font-semibold mt-[2vw] hover:bg-yellow-500/80 transition-all duration-300"
          >
            Lern More
          </button>
        </div>
        <div className="relative w-full h-[10vw]">
          <motion.div
            initial={{ translateX: "-300px", translateY: "200px", opacity: 0 }}
            whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute w-full bg-wave bg-cover h-[15vw] max-sm:bottom-10 sm:-bottom-10 "
          />
        </div>
      </div>
      <div className="relative w-[40%]  h-full">
        <Image
          src={"/Svg/aboutus-lead.svg"}
          alt="aboutus-lead"
          layout="fill"
          objectFit="contain"
          priority
          fetchPriority="high"
          quality={60}
        />
      </div>
    </div>
  );
}
