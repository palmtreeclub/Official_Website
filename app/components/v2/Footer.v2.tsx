"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  BiLogoDiscordAlt,
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Partner from "../v1/Partner";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  const pathname: any = usePathname();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <>
      <div
        className={`flex ${
          theme === "dark" && "invert"
        } dark:bg-slate-800 w-full shadow-[0_0_10px_rgba(0,0,255,0.2)]`}
      >
        <div className="flex flex-col w-full">
          {pathname === "/login" ||
            (pathname?.includes("/team/") ? null : (
              <div className="flex max-sm:flex-col ">
                <div className="flex w-full justify-center ">
                  <div className="flex flex-col text-slate-800  font-normal px-[4vw] py-[2vw] max-sm:text-md sm:text-[1.4vw] gap-[.5rem]">
                    <h1 className="sm:text-[1.8vw] max-sm:text-xl text-slate-800 dark:text-white/60 font-medium border-b-2 border-b-slate-300/50] pb-[.6vw] mb-[.6rem]">
                      Contact Us
                    </h1>
                    <Link
                      href={"mailto:gdsc@silveroakuni.ac.in"}
                      className="flex  dark:text-white/60 hover:text-slate-500 justify-ceter items-center gap-[1vw]"
                    >
                      <GrMail /> gdsc@silveroakuni.ac.in
                    </Link>
                    <Link
                      href={"/about"}
                      className="flex dark:text-white/60 hover:text-slate-500 items-start gap-[1vw] "
                    >
                      <FaLocationDot className="mt-[.7vw]" /> Opp. Bhagwat
                      Vidyapith, S. G. Road,
                      <br /> Gota, Ahmedabad
                    </Link>
                    <h1 className="sm:text-[1.8vw] mt-[3vw] max-sm:text-xl text-slate-800 dark:text-white/60 font-medium border-b-2 border-b-slate-300/50] pb-[.6vw] mb-[.6rem]">
                      Follow us
                    </h1>
                    <div className="flex text-[3vw] gap-[1vw]">
                      <div className="box cursor-pointer text-red-500 hover:scale-110 transition-all duration-300 hover:text-red-500/50 rounded-lg ">
                        <BiLogoInstagramAlt className="" />
                      </div>
                      <div className="box cursor-pointer text-blue-500 hover:scale-110 transition-all duration-300 hover:text-blue-500/50 rounded-lg ">
                        <BiLogoLinkedin className="" />
                      </div>
                      <div className="box cursor-pointer text-green-500 hover:scale-110 transition-all duration-300 hover:text-green-500/50 rounded-lg ">
                        <FcGoogle className="" />
                      </div>
                      <div className="box cursor-pointer text-yellow-500 hover:scale-110 transition-all duration-300 hover:text-yellow-500/50 ">
                        <BiLogoFacebookCircle className="" />
                      </div>
                      <div className="box cursor-pointer text-sky-500 hover:scale-110 transition-all duration-300 hover:text-sky-500/50 ">
                        <AiOutlineTwitter className="" />
                      </div>
                      <div className="box cursor-pointer text-black dark:text-white dark:hover:text-white/75 hover:scale-110 transition-all duration-300 hover:text-slate-800/50 rounded-lg ">
                        <BiLogoGithub className="" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col text-slate-600 dark:text-white/60  font-normal px-[4vw] py-[2vw] max-sm:text-xl sm:text-[1.4vw] gap-[.5rem]">
                    <h1 className="sm:text-[1.8vw] max-sm:text-xl dark:text-white/60 text-slate-800 font-medium border-b-2 border-b-slate-300/50] pb-[.6vw] mb-[.6rem]">
                      Our Partners
                    </h1>
                    <Partner
                      src="/Assets/IEEE_SOU_SB_Logo.png"
                      size={{
                        width: isMobile ? "w-[18rem]" : "w-[35vw]",
                        height: isMobile ? "h-[10rem]" : "h-[10vw]",
                      }}
                    />
                    <div className="flex w-full justify-between">
                      <Partner
                        src="/Assets/PALM_TREE_CLUB.png"
                        size={{
                          width: isMobile ? "w-[18rem]" : "w-[20vw]",
                          height: isMobile ? "h-[10rem]" : "h-[10vw]",
                        }}
                      />
                      <Partner
                        src="/Assets/peepal_tree_club.png"
                        size={{
                          width: isMobile ? "w-[18rem]" : "w-[20vw]",
                          height: isMobile ? "h-[10rem]" : "h-[10vw]",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="flex border-t-2 max-sm:text-md sm:text-[1.5vw] dark:border-t-white/10 border-t-slate-600/10 justify-center items-center text-center font-medium w-full dark:text-white text-slate-700 p-[1vw]">
            All rights reserved By &copy;{" "}
            <span className="uppercase flex cursor-pointer justify-center items-center max-md:text-md font-google-sans font-bold text-transparent bgGradientAnim ">
              GDSC SOU 2023
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
