"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export default function TeamCard({ member, onClick }: any) {
  console.log(member.color);
  const color = member.color;
  console.log(color);
  const CardContainer = `flex card p-5 dark:shadow-[0_0_10px_rgba(150,150,150,0.5)] hover:text-white flex-col shadow-2xl relative z-10 cursor-pointer  ${
    color === "blue"
      ? "before:bg-blue-600"
      : color === "red"
      ? "before:bg-red-600"
      : color === "green"
      ? "before:bg-green-600"
      : color === "yellow"
      ? "before:bg-yellow-500"
      : color === "purple"
      ? "before:bg-purple-600"
      : "before:bg-teal-600"
  }
  dark:text-gray-300 before:w-full before:absolute max-sm:before:h-2 sm:before:h-[.4vw] before:bottom-0 hover:before:h-full justify-between   items-center  max-sn:p-10 hover:p-0 sm:p-[2vw] overflow-hidden sm:w-[23vw] sm:h-[35vw] max-sm:w-[18rem] max-sm:h-[27rem] max-sm:rounded-lg sm:rounded-[1vw]`;

  const logoContainer = `logo overflow-hidden relative border-[4px] 
  ${
    color === "blue"
      ? "border-blue-600"
      : color === "red"
      ? "border-red-600"
      : color === "green"
      ? "border-green-600"
      : color === "yellow"
      ? "border-yellow-500"
      : color === "purple"
      ? "border-purple-600"
      : "border-teal-600"
  }
   z-20 flex sm:w-[20vw] sm:h-[20vw] max-sm:w-[14rem] max-sm:h-[14rem]  rounded-[50%]`;

  const socialLinkContainer = `box cursor-pointer max-sm:text-3xl sm:text-[2vw] max-sm:p-2 sm:p-[.5vw] hover:bg-white ${
    color === "blue"
      ? "hover:text-blue-600"
      : color === "red"
      ? "hover:text-red-600"
      : color === "green"
      ? "hover:text-green-600"
      : color === "yellow"
      ? "hover:text-yellow-500"
      : color === "purple"
      ? "hover:text-purple-600"
      : "hover:text-teal-600"
  } hover:scale-110 transition-all duration-300  rounded-[50%]`;

  return (
    <div className={CardContainer} onClick={onClick}>
      <div className={logoContainer}>
        <Image
          src={"/Assets/Lead.jpeg"}
          layout="fill"
          alt="GDSC-Lead"
          className="logo"
          objectFit="contain"
        />
      </div>
      <div className="w-[18rem] flex justify-center items-end">
        <div className="flex py-[1vw] absolute bottom-0 justify-center flex-col items-center  z-20">
          <h1 className="name font-bold max-sm:text-xl sm:text-[1.5vw]">
            {member?.name}
          </h1>
          <h1 className="designation font-medium text-slate-400 max-sm:text-xl sm:text-[1.5vw]">
            {member?.designation}
          </h1>
          <div className="flex py-2 max-sm:gap-5 sm:gap-[1vw]">
            <div className={socialLinkContainer}>
              <BiLogoLinkedin className="" />
            </div>
            <div className={socialLinkContainer}>
              <BiLogoGithub className="" />
            </div>
            <div className={socialLinkContainer}>
              <AiOutlineTwitter className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
