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
