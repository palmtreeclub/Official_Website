import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import { useTheme } from "next-themes";
export default function HeroSection() {
  const { theme } = useTheme();
  console.log({ theme });
  return (
    <section className="flex relative landningPageGradient flex-col w-full h-full justify-center items-center">
      <motion.div // Bottom left SVG element
        initial={{ translateY: "0px", opacity: 0, scale: 0.5 }}
        whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute max-sm:left-[0vw]  sm:left-[6vw] max-sm:bottom-[15vw] sm:bottom-[5vw] rotate-45 max-sm:w-[10rem] max-sm:h-[10rem] sm:w-[20vw] sm:h-[20vw]"
      >
        <Image
          src={"/Svg/blob.svg"}
          alt="Palm Tree Club"
          fill
          className="absolute rounded-full  light:block"
        />
      </motion.div>
      <motion.div // Bottom Right SVG element
        initial={{ translateY: "0px", opacity: 0, scale: 0.5 }}
        whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute right-[-10vw] bottom-[-7vw] rotate-45 max-sm:w-[10rem] max-sm:h-[10rem] sm:w-[25vw] sm:h-[25vw]"
      >
        <Image
          src={"/Svg/blob-1.svg"}
          alt="Palm Tree Club"
          fill
          className="absolute rounded-full  light:block"
        />
      </motion.div>
      <motion.div // Top Right SVG element
        initial={{ translateY: "0px", opacity: 0, scale: 0.5 }}
        whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute max-sm:right-[-5vw] sm:right-[10vw] max-sm:top-[25vw] sm:top-[5vw] rotate-45 max-sm:w-[7rem] max-sm:h-[7rem] sm:w-[10vw] sm:h-[10vw]"
      >
        <Image
          src={"/Svg/blob-2.svg"}
          alt="Palm Tree Club"
          fill
          className="absolute rounded-full  light:block"
        />
      </motion.div>
      <motion.div // Top Left SVG element
        initial={{ translateY: "0px", opacity: 0, scale: 0.5 }}
        whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute max-sm:left-[-10vw] sm:left-[-5vw] max-sm:top-[-5vw] sm:top-[-5vw]  rotate-45 max-sm:w-[15rem] max-sm:h-[15rem] sm:w-[20vw] sm:h-[20vw]"
      >
        <Image
          src={"/Svg/blob-3.svg"}
          alt="Palm Tree Club"
          fill
          className="absolute rounded-full  light:block"
        />
      </motion.div>

      <div className="flex w-4/5  h-4/5 max-md:flex-col justify-center items-center">
        <motion.div
          initial={{ translateY: "-300px", opacity: 0, scale: 2.5 }}
          whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative sm:w-[35vw] sm:h-[35vw] max-sm:w-[90vw] max-sm:h-[90vw] "
        >
          <Image
            src={"/Assets/ptc-trc.png"}
            alt="Palm Tree Club"
            fill
            className=" rounded-full upDown light:block"
          />
          <Image
            src={"/Assets/ptc-white.png"}
            alt="Palm Tree Club"
            fill
            className=" rounded-full upDown dark:hidden"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative  flex justify-center items-center py-[2vw] w-full h-max"
      >
        <button
          type="button"
          className="bg-orange-500 scale-90 hover:scale-100 transition-all duration-300 absolute w-max max-sm:px-5 max-sm:-top-10 sm:-top-[2vw] max-sm:text-xl sm:text-[1.2vw] text-white p-[1vw] rounded-xl"
        >
          Become Member
        </button>
        <div className="flex shadow-inner sm:px-[4vw] sm:py-[1.5vw] max-sm:px-10 max-sm:py-5 rounded-full dark:bg-slate-900 bg-green-200/50 max-sm:text-4xl sm:text-[3vw] max-sm:gap-5 sm:gap-[2vw]">
          <div className="box cursor-pointer p-[.5vw] text-red-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,0,0.6)] rounded-lg bg-white">
            <BiLogoInstagramAlt className="" />
          </div>
          <div className="box cursor-pointer p-[.5vw] text-blue-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,255,0.6)] rounded-lg bg-white">
            <BiLogoLinkedin className="" />
          </div>
          <div className="box cursor-pointer p-[.5vw] text-green-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.6)] rounded-lg bg-white">
            <FcGoogle className="" />
          </div>
          <div className="box cursor-pointer p-[.5vw] text-yellow-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_#EAB308] rounded-lg bg-white">
            <BiLogoFacebookCircle className="" />
          </div>
          <div className="box cursor-pointer p-[.5vw] text-sky-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_#0EA5E9] rounded-lg bg-white">
            <AiOutlineTwitter className="" />
          </div>
          <div className="box cursor-pointer p-[.5vw] text-slate-800 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.6)] rounded-lg bg-white">
            <BiLogoGithub className="" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
