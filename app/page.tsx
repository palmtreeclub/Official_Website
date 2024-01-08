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
import WhatWeDo from "./components/WhatWeDo.v2";
import AboutUs from "./components/AboutUsSection";

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
      {/*Hero section */}
      <HeroSection />

      {/*About section */}
      <AboutUs />

      {/*What we do */}
      <WhatWeDo />

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
