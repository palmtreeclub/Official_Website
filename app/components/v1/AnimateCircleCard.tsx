"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  link: string;
  border: string;
  animationName: string;
}

export default function AnimateCircleCard({
  title,
  link,
  border,
  animationName,
}: CardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
      className="flex relative justify-center max-sm:w-[10rem] max-sm:h-[10rem]   sm:w-[15vw] z sm:h-[15vw] items-center"
    >
      <div
        className={`flex absolute ${animationName} rotate-1 p-[0.5vw]  max-sm:w-[10rem] max-sm:h-[10rem]   sm:w-[15vw] z sm:h-[15vw] z-20 bg-slate-400/20 max-sm:border-8 sm:border-[0.5vw] border-r-white ${border} rounded-[50%]`}
      ></div>
      <div className="flex  absolute shadow-[0_0_10px_rgba(0,0,0,0.3)] rotate-none  cursor-pointer max-sm:w-[9rem] max-sm:h-[9rem] sm:w-[13vw] z-30 justify-center items-center sm:h-[13vw] bg-white rounded-[50%] ">
        <motion.div className="uppercase rotate-none max-md:text-xl sm:text-[1.3vw] font-google-sans font-bold text-transparent bgGradientAnim">
          {title}
        </motion.div>
      </div>
    </div>
  );
}
