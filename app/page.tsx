"use client";
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  BiLogoLinkedin,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoGithub,
} from "react-icons/bi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Confettin from "./components/Confettin";
import EventCard from "./components/EventCard";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useFirebase } from "./context/firebase";
import Partner from "./components/Partner";
import Cursor from "./components/Cursor";
import AnimateCircleCard from "./components/AnimateCircleCard";

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const firebase: any = useFirebase();
  useEffect(() => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
    firebase.isLoggedIn && router.push("/team/dashboard");
    console.log(firebase.isLoggedIn);
  }, [firebase.isLoggedIn]);

  return (
    <>
      <Cursor />
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

      <section className="flex relative justify-center items-center w-full h-full">
        <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
          <motion.div
            initial={{ translateX: "-100px", opacity: 0 }}
            whileInView={{ translateX: "0px", opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className=" sm:w-[40vw]  sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[80vw] "
          >
            <h1 className="max-sm:text-2xl text-[2vw] font-medium text-red-500">
              About Us
            </h1>
            <h1 className="max-sm:text-2xl text-[3vw] font-medium text-blue-400">
              What Do We Do?
            </h1>
            <div className="relative sm:w-[30vw]  sm:h-[20vw] max-sm:w-[60vw] max-sm:h-[60vw] ">
              <Image
                src="/Assets/About.gif"
                layout="fill"
                className="mt-[3vw]"
                alt="hackathon"
                objectFit="contain"
                priority
                fetchPriority="high"
                quality={60}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: "100px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className=" flex flex-col sm:w-1/2"
          >
            <h1 className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600">
              <br />
              <span className="uppercase  max-md:text-xl sm:text-[2.2vw] font-google-sans font-bold text-transparent bgGradientAnim">
                DSC SOU
              </span>{" "}
              conducts workshops, seminars and technical showcases for Silveroak
              University as well as other colleges in Gujarat. In addition to
              workshops, Silveroak University also provides an opportunity for
              students to apply their newly gained skills to develop solutions
              for local organizations and then provide visibility via showcases.
              From learning about new technologies with materials provided by
              Google Developers to attending talks, events, DevFests and
              connecting with developers around the world, DSC will help the
              students get it.
            </h1>
          </motion.div>
          {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
        </div>
        <motion.div
          initial={{ translateX: "-300px", translateY: "200px", opacity: 0 }}
          whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute w-full bg-wave bg-cover h-[15vw] max-sm:bottom-10 sm:-bottom-10 "
        />
      </section>
      {/* Team */}
      <section className="flex justify-center items-center w-full h-full">
        <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
          <div className=" flex flex-col sm:w-1/2">
            <div className="max-sm:text-2xl flex text-[3vw] font-medium text-red-500">
              <motion.div
                initial={{ translateX: "-100px", opacity: 0 }}
                whileInView={{ translateX: "0px", opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-red-500"
              >
                Design.&nbsp;
              </motion.div>{" "}
              <motion.div
                initial={{ translateX: "-110px", opacity: 0 }}
                whileInView={{ translateX: "0px", opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-blue-500"
              >
                Develop.&nbsp;
              </motion.div>{" "}
              <motion.div
                initial={{ translateX: "-120px", opacity: 0 }}
                whileInView={{ translateX: "0px", opacity: 1 }}
                transition={{ duration: 2.5 }}
                viewport={{ once: true }}
                className="text-yellow-500"
              >
                Deliver.&nbsp;
              </motion.div>
            </div>
            <motion.div
              initial={{ translateY: "100px", opacity: 0 }}
              whileInView={{ translateY: "0px", opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600"
            >
              <br />
              <span className="uppercase  max-md:text-xl sm:text-[2.2vw] font-google-sans font-bold text-transparent bgGradientAnim">
                DSC SOU
              </span>{" "}
              These are the amazing bunch of people who make the community what
              it is. Who are the Backbone of Google Developer Student Club, SOU
              and ensure that we can forge ahead{" "}
              <span className="text-blue-600">#WhateverItTakes</span>! <br />{" "}
              <br />
              They take the time out from their daily grind to give back to the
              members and empower them to become bigger (Metaphorically). And
              Better.
            </motion.div>
            <motion.button
              initial={{ translateY: "50px", opacity: 0 }}
              whileInView={{ translateY: "0px", opacity: 1 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              onClick={() => router.push("/our_team")}
              type="button"
              className="text-sky-600 flex justify-center items-center gap-5 py-10 sm:text-[2vw] transition-all duration-300 max-sm:text-2xl font-medium w-max  hover:text-pink-500"
            >
              Meet The Team <AiOutlineArrowRight className="horiAnim" />
            </motion.button>
          </div>
          <motion.div
            initial={{ translateX: "100px", opacity: 0 }}
            whileInView={{ translateX: "0px", opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className=" sm:w-[40vw] max-sm:justify-center max-sm:flex sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[30vw] "
          >
            <div className="relative sm:w-[50vw]  sm:h-[30vw] max-sm:w-[60vw] max-sm:h-[70vw] items-center ">
              <Image
                src="/Assets/grow.png"
                layout="fill"
                className="mt-[3vw]"
                alt="hackathon"
                objectFit="contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="flex justify-center items-center w-full h-max p-[5vw]">
        <div className="flex max-sm:flex-col w-4/6 justify-between items-center max-sm:gap-10">
          <AnimateCircleCard
            title="Leads"
            link="/our_team/core_team"
            border="border-red-500"
            animationName="rotate-1"
          />
          <AnimateCircleCard
            title="Alumni"
            link="/our_team/alumni"
            border="border-blue-500"
            animationName="rotate-2"
          />
          <AnimateCircleCard
            title="Volunteers"
            link="/our_team/volunteers"
            border="border-yellow-500"
            animationName="rotate-3"
          />
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="flex relative  dark:bg-event-bw bg-event-bg bg-contain justify-center items-center w-full sm:h-full">
        <div className="flex  flex-col max-sm:scale-90 max-sm:overflow-y-scroll sm:overflow-auto max-sm:py-28 sm:h-full max-md:flex-col scrollbar-none justify-center  items-center">
          <motion.h1
            initial={{ translateY: "-100px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-sm:text-2xl max-sm:top-16 sm:top-[3vw] z-20 absolute sm:pb-[2vw] max-sm:pb-5 sm:text-[2vw] font-medium text-blue-500"
          >
            Upcoming Events
          </motion.h1>
          <Confettin onClose={setIsVisible} onFire={isVisible} />
          <div className="flex max-sm:flex-col max-sm:h-4/5 max-sm:overflow-y-scroll sm:gap-[2vw] max-sm:gap-5 overflow-x-scroll  scrollbar-none ">
            {/* <div className="flex sm:gap-[2vw] max-sm:gap-5 overflow-x-scroll pl-[100vw] pr-[5vw]  scrollbar-none "> */}
            <EventCard mirror={true} onClick={setIsVisible} />
            {/* <EventCard mirror={true} onClick={setIsVisible} /> */}
            {/* <EventCard mirror={true} onClick={setIsVisible} />
            <EventCard mirror={true} onClick={setIsVisible} />
            <EventCard mirror={true} onClick={setIsVisible} />
            <EventCard mirror={true} onClick={setIsVisible} />
            <EventCard mirror={true} onClick={setIsVisible} />
            <EventCard mirror={true} onClick={setIsVisible} />
            <EventCard mirror={true} onClick={setIsVisible} />
            <EventCard mirror={true} onClick={setIsVisible} />
            <EventCard mirror={true} onClick={setIsVisible} /> */}
          </div>
        </div>
      </section>
      {/* Partners */}
      <section className="flex relative justify-center bg-white items-center w-full h-full">
        <div className="flex  w-full flex-col   justify-center items-center  bg-white/50  h-4/5 max-sm:p-5   sm:p-[2vw]">
          <motion.h1
            initial={{ translateY: "-100px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-sm:text-2xl sm:pb-[2vw] max-sm:pb-5  md:text-[2.5vw] font-medium text-yellow-500"
          >
            Our Partners
          </motion.h1>
          <div className="flex  flex-wrap sm:gap-x-[15vw] max-sm:gap-5 gap-y-[3vw] w-4/5 justify-center items-center">
            <Partner
              src="/Assets/PALM_TREE_CLUB.png"
              size={{
                width: isMobile ? "w-[18rem]" : "w-[30vw]",
                height: isMobile ? "h-[10rem]" : "h-[10vw]",
              }}
            />
            <Partner
              src="/Assets/peepal_tree_club.png"
              size={{
                width: isMobile ? "w-[18rem]" : "w-[25vw]",
                height: isMobile ? "h-[10rem]" : "h-[10vw]",
              }}
            />
            <Partner
              src="/Assets/IEEE_SOU_SB_Logo.png"
              size={{
                width: isMobile ? "w-[18rem]" : "w-[25vw]",
                height: isMobile ? "h-[10rem]" : "h-[5vw]",
              }}
            />
            <Partner
              src="/Assets/IEEE_SOU_SB_Logo.png"
              size={{
                width: isMobile ? "w-[18rem]" : "w-[25vw]",
                height: isMobile ? "h-[10rem]" : "h-[5vw]",
              }}
            />
            <Partner
              src="/Assets/IEEE_SOU_SB_Logo.png"
              size={{
                width: isMobile ? "w-[18rem]" : "w-[25vw]",
                height: isMobile ? "h-[10rem]" : "h-[5vw]",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
