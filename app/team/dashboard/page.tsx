"use client";
import { useFirebase } from "@/app/context/firebase";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { SlokaCard } from "./components/SlokaCard";
import { WelcomMessageCard } from "./components/WelcomeMessageCard";
import { QuickLinksCard } from "./components/QuickLinksCard";
import { PagesCard } from "./components/PagesCard";
import { GDSCImageCard } from "./components/GDSC_SOU_ImageCard";

export default function Page() {
  const firebase: any = useFirebase();
  ("use server");

  return (
    <div className="flex flex-wrap transition-all duration-300 w-full dark:nvert h-[90%] p-[1vw] justify-center pt-[6%] gap-[1vw] items-center">
      <div className="flex justify-center items-center flex-wrap gap-[1vw]">
        <GDSCImageCard />
        <WelcomMessageCard name={firebase?.user?.displayName} />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-[1vw]">
        <SlokaCard />
        <PagesCard />
        <QuickLinksCard />
      </div>
    </div>
  );
}

export const PageItem = ({ title }: { title: string }) => (
  <h4 className="p-[.5vw] flex justify-between border-b-[1px] font-medium text-slate-500 pl-[2vw] cursor-pointer transition-all duration-300 text-[1vw] hover:text-cyan-500 border-b-cyan-500/30">
    <span>{title}</span>
    <MdArrowOutward />
  </h4>
);

export const CardHeader = ({ title }: { title: string }) => (
  <h1 className="bg-cyan-500/20 w-full text-slate-500 font-semibold rounded-t-[1vw] pl-[2vw] p-[.5vw] text-[1.2vw] shadow-md">
    {title}
  </h1>
);

export const IconCard = ({
  icon,
  bgColor,
  bgHover,
}: {
  icon: any;
  bgColor: string;
  bgHover: string;
}) => (
  <div
    className={`text-[2vw] p-[1vw] ${bgColor} ${bgHover}  cursor-pointer text-white w-max h-max rounded-[1vw]`}
  >
    {icon}
  </div>
);
