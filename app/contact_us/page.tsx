"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  return (
    <>
      <div className="flex flex-col relative w-full h-max sm:justify-cente sm:items-center">
        <div className="flex px-[6vmax] justify-end w-full h-full absolute sm:-mt-[22vw] max-sm:-mt-[20rem] -z-10 small:w-5/12 small:-mt-[20rem] small:-right-[1vmax] max-sm:pb-[15rem]">
          <div className="mr-5 w-[7vmax] relative springish-G">
            <Image src={"/Svg/G.svg"} layout="fill" alt="G" />
          </div>
          <div className="mr-5 w-[6.1vmax] relative springish-D">
            <Image src={"/Svg/D.svg"} layout="fill" alt="D" />
          </div>
          <div className="mr-5 w-[6.2vmax] relative springish-S">
            <Image src={"/Svg/S.svg"} layout="fill" alt="S" />
          </div>
          <div className="mr-5 w-[9.1vmax] relative springish-C">
            <Image src={"/Svg/C.svg"} layout="fill" alt="C" />
          </div>
        </div>
        <div className="flex sm:w-4/5 w-full  h-full justify-center flex-col sm:mt-[5vw] shadow-inner sm:px-[4vw] sm:py-[1.5vw] max-sm:px-10 max-sm:py-0 rounded-full   max-sm:text-5xl sm:text-[3vw] max-sm:gap-5 sm:gap-[2vw]">
          <div className="flex h-[300px] sm:hidden" />
          <motion.h1
            initial={{ translateX: "-70px", opacity: 0 }}
            whileInView={{ translateX: "0px", opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            className="font-bold max-sm:text-4xl text-gray-600"
          >
            Find us on
          </motion.h1>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="box flex max-sm:gap-5 sm:gap-[1vw] w-max  cursor-pointer p-[.5vw] text-red-500 transition-all duration-300  justify-center items-center rounded-lg  "
          >
            <BiLogoInstagramAlt className="" />{" "}
            <Link
              href={"#"}
              className="text-gray-600 font-medium hover:text-red-600 hover:scale-105 transition-all duration-300 max-sm:text-2xl sm:text-[1.7vw]"
            >
              Instagram
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="box flex max-sm:gap-5 sm:gap-[1vw] justify-center items-center w-max cursor-pointer p-[.5vw] text-blue-500 transition-all duration-300  rounded-lg  "
          >
            <BiLogoLinkedin className="" />
            <Link
              href={"#"}
              className="text-gray-600 font-medium hover:text-blue-600 hover:scale-105 transition-all duration-300 max-sm:text-2xl sm:text-[1.7vw]"
            >
              Linkedin
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
            className="box flex max-sm:gap-5 sm:gap-[1vw] justify-center items-center w-max cursor-pointer p-[.5vw] text-green-500 transition-all duration-300  rounded-lg  "
          >
            <FcGoogle className="" />
            <Link
              href={"#"}
              className="text-gray-600 font-medium hover:text-green-600 hover:scale-105 transition-all duration-300 max-sm:text-2xl sm:text-[1.7vw]"
            >
              Google
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            className="box flex max-sm:gap-5 sm:gap-[1vw] justify-center items-center w-max cursor-pointer p-[.5vw] text-yellow-500 transition-all duration-300  "
          >
            <BiLogoFacebookCircle className="" />
            <Link
              href={"#"}
              className="text-gray-600 font-medium hover:text-yellow-600 hover:scale-105 transition-all duration-300 max-sm:text-2xl sm:text-[1.7vw]"
            >
              Facebook
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: false }}
            className="box flex max-sm:gap-5 sm:gap-[1vw] justify-center items-center w-max cursor-pointer p-[.5vw] text-sky-500 transition-all duration-300  "
          >
            <AiOutlineTwitter className="" />
            <Link
              href={"#"}
              className="text-gray-600 font-medium hover:text-sky-600 hover:scale-105 transition-all duration-300 max-sm:text-2xl sm:text-[1.7vw]"
            >
              Twitter
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.1 }}
            viewport={{ once: false }}
            className="box flex max-sm:gap-5 sm:gap-[1vw] justify-center items-center w-max cursor-pointer p-[.5vw] text-slate-800 transition-all duration-300  rounded-lg  "
          >
            <BiLogoGithub className="" />
            <Link
              href={"#"}
              className="text-gray-600 font-medium hover:text-gray-900 hover:scale-105 transition-all duration-300 max-sm:text-2xl sm:text-[1.7vw]"
            >
              Github
            </Link>
          </motion.div>
        </div>

        <motion.div className="w-full max-sm:py-20 sm:py-[5vw] flex max-sm:gap-5 sm:gap-[1vw] justify-center items-center flex-col">
          <motion.h1
            initial={{ translateY: "70px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-blue-600 font-bold max-sm:text-xl sm:text-[3vw]"
          >
            Stay Updated
          </motion.h1>
          <motion.h3
            initial={{ translateY: "70px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
            className="text-center text-gray-600 font-medium max-sm:text-md sm:text-[1.5vw]"
          >
            Stay connected to stay updated about the upcoming <br /> events and
            the latest news.
          </motion.h3>
          <motion.button
            initial={{ translateY: "70px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            onClick={() =>
              window.open(
                "https://gdsc.community.dev/silver-oak-university-ahmedabad/",
                "_blank"
              )
            }
            type="button"
            className="hover:bg-green-600 hover:text-white text-black bg-slate-400  py-[.5vw] px-[5vw] rounded-full  font-medium max-sm:text-xl sm:text-[1.5vw]"
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
