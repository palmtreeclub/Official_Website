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
import { useTheme } from "next-themes";
import HeroSection from "./components/HeroSection.v2";
import D3Section from "./components/D3Section.v2.";
import JoinCommunityv2 from "./components/JoinCommunity.v2";
import UpcomingEvents from "./components/UpcomingEvents";
import UpcomingEventsv2 from "./components/UpcomingEvents.v2";

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const firebase: any = useFirebase();
  const { theme } = useTheme();
  useEffect(() => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
    firebase.isLoggedIn && router.push("/team/dashboard");
    console.log(firebase.isLoggedIn);
  }, [firebase.isLoggedIn]);

  return (
    <>
      <Cursor />
      <HeroSection />
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
              a hub of innovation at Silver Oak University, organizes workshops,
              seminars, and showcases to build a dynamic and collaborative
              community. Our goal is to empower students to apply skills, solve
              local challenges, and contribute to the community. With a belief
              in continuous learning, we offer a structured approach to emerging
              technologies through Google Developers$apos; resources. Engaging
              in talks, events, and Dev Fests ensures a well-rounded learning
              experience.
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
      {/*Design, Develop, Deliver. */}
      <D3Section />

      {/* Upcoming Events */}
      <UpcomingEventsv2 />

      {/* Join Our Community */}
      <JoinCommunityv2 />

      {/* Partners */}
      <section
        className={`flex relative justify-center bg-white dark:bg-slate-900 items-center w-full h-full ${
          theme === "dark" && "invert"
        }`}
      >
        <div className="flex  w-full flex-col   justify-center items-center  light:bg-white/50  h-4/5 max-sm:p-5   sm:p-[2vw]">
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
