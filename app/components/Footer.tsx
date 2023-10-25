import Link from "next/link";
import React from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="flex bg-slate-50 w-full shadow-[0_0_10px_rgba(0,0,255,0.2)]">
        <div className="flex flex-col w-full">
          <div className="flex max-sm:flex-col ">
            <div className="px-[4vw] py-[2vw] max-sm:gap-5 flex flex-col justify-center max-sm:items-center">
              <div className="bg-gdsc-footer-logo bg-cover max-sm:w-[70vw] max-sm:h-[30vw]  sm:w-[20vw] sm:h-[7vw]"></div>
              <h1 className="sm:text-[2vw] max-sm:text-2xl font-medium  text-slate-800">
                Join Our Community
              </h1>
              <h3 className="sm:text-[1.2vw] max-sm:text-center  max-sm:text-sm">
                {" "}
                Helping students to bridge the gap between theory and practice.{" "}
                <br className="max-sm:hidden" />
                By joining a GDSC, students grow their knowledge in a
                peer-to-peer <br className="max-sm:hidden" />
                learning environment and build solutions for local businesses
                and <br className="max-sm:hidden" />
                their community.
              </h3>
              <div className="cursor-pointer  transition-all duration-150 flex hover:shadow-[0_2px_10px_rgba(255,212,10,1)] sm:mt-[.5vw] justify-center items-center gap-[.5rem] w-max h-max rounded-full bg-[#6F6BFA] max-sm:text-xl sm:text-[1.2vw] text-white px-6 py-2">
                <BiLogoDiscordAlt className="sm:text-[2vw] max-sm:text-3xl" />
                JOIN US
              </div>
            </div>
            <div className="flex max-sm:w-full max-sm:justify-center ">
              <div className="flex flex-col text-slate-600  font-normal px-[4vw] py-[2vw] max-sm:text-xl sm:text-[1.4vw] gap-[.5rem]">
                <h1 className="sm:text-[1.8vw] max-sm:text-xl text-slate-800 font-medium border-b-2 border-b-slate-300/50] pb-[.6vw] mb-[.6rem]">
                  Quick Links
                </h1>
                <Link
                  className="hover:text-blue-600 font-medium "
                  href={"/about"}
                >
                  Home
                </Link>
                <Link
                  className="hover:text-blue-600 font-medium "
                  href={"/about"}
                >
                  Events
                </Link>
                <Link
                  className="hover:text-blue-600 font-medium "
                  href={"/about"}
                >
                  Teams
                </Link>
                <Link
                  className="hover:text-blue-600 font-medium "
                  href={"/about"}
                >
                  Contact
                </Link>
                <Link
                  className="hover:text-blue-600 font-medium "
                  href={"/about"}
                >
                  About
                </Link>
              </div>
              <div className="flex flex-col text-slate-800  font-normal px-[4vw] py-[2vw] max-sm:text-md sm:text-[1.4vw] gap-[.5rem]">
                <h1 className="sm:text-[1.8vw] max-sm:text-xl text-slate-800 font-medium border-b-2 border-b-slate-300/50] pb-[.6vw] mb-[.6rem]">
                  Contact Us
                </h1>
                <Link
                  href={"mailto:gdsc@silveroakuni.ac.in"}
                  className="flex hover:text-slate-500 justify-ceter items-center gap-[1vw]"
                >
                  <GrMail /> gdsc@silveroakuni.ac.in
                </Link>
                <Link
                  href={"/about"}
                  className="flex  hover:text-slate-500 items-start gap-[1vw] "
                >
                  <FaLocationDot className="mt-[.7vw]" /> Opp. Bhagwat
                  Vidyapith,
                  <br /> S. G. Road, Gota, Ahmedabad
                </Link>
              </div>
            </div>
          </div>
          <div className="flex border-t-2 max-sm:text-md sm:text-[1.5vw] border-t-slate-600/10 justify-center items-center text-center font-medium w-full text-slate-700 p-[1vw]">
            All rights reserved By &copy;{" "}
            <span className="uppercase flex cursor-pointer justify-center items-center max-md:text-md font-google-sans font-bold text-transparent bgGradientAnim ">
              GDSC SOU
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
