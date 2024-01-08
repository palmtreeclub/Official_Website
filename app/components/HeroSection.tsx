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
export default function HeroSection() {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex w-4/5  h-4/5 max-md:flex-col justify-center items-center">
        <motion.div
          initial={{ translateX: "-100px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" flex flex-col sm:w-1/2"
        >
          <motion.div className="bg-gdsccode-logo sm:w-[6vw] sm:h-[6vw] max-sm:w-[12vw] max-sm:h-[12vw] bg-cover"></motion.div>
          <h1 className="sm:text-[1.7vw] max-sm:text-md font-medium text-slate-600">
            <span className="sm:text-[2.2vw] max-md:text-[1.4rem]">
              <span>Google</span>&nbsp;<span>Developer</span>&nbsp;
              <span>Student</span> &nbsp;<span>Club</span>
            </span>
            <motion.div
              initial={{ translateX: "-100px", opacity: 0 }}
              whileInView={{ translateX: "0px", opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="uppercase max-md:text-xl font-google-sans font-bold text-transparent bgGradientAnim"
            >
              Silver Oak University
            </motion.div>
            A technical club focused on building a community of student
            developers interested in solving real-world problems.
          </h1>
        </motion.div>
        <motion.div
          initial={{ translateX: "100px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative sm:w-[40vw] sm:h-[40vw] max-sm:w-[90vw] max-sm:h-[90vw] "
        >
          <Image
            src="/Svg/Hero_Section.svg"
            layout="fill"
            className="max-md:h-fit max-md:w-96 upDown"
            alt="hackathon"
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
          className="bg-gradient-to-r from-red-600 to-indigo-600 scale-90 hover:scale-100 transition-all duration-300 absolute w-max max-sm:px-5 max-sm:-top-10 sm:-top-[2vw] max-sm:text-xl sm:text-[1.2vw] text-white p-[1vw] rounded-xl"
        >
          Become Member
        </button>
        <div className="flex shadow-inner sm:px-[4vw] sm:py-[1.5vw] max-sm:px-10 max-sm:py-5 rounded-full dark:bg-slate-900 bg-slate-200 max-sm:text-4xl sm:text-[3vw] max-sm:gap-5 sm:gap-[2vw]">
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
