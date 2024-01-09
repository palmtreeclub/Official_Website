import React from "react";
import AnimateCircleCard from "./AnimateCircleCard";

export default function TeamBar() {
  return (
    <section className="flex justify-center items-center w-full h-max p-[5vw]">
      <div className="flex max-sm:flex-col dark:invert w-4/6 justify-between items-center max-sm:gap-10">
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
          link="/our_team/volunteer"
          border="border-yellow-500"
          animationName="rotate-3"
        />
      </div>
    </section>
  );
}
