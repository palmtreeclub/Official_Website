"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFirebase } from "./context/firebase";
import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection.v2";
import D3Section from "./components/D3Section.v2.";
import JoinCommunityv2 from "./components/JoinCommunity.v2";
import UpcomingEventsv2 from "./components/UpcomingEvents.v2";
import WhatWeDo from "./components/WhatWeDo.v2";
import AboutUs from "./components/AboutUsSection";
import StatisticSection from "./components/StatisticSection";

export default function Home() {
  const router = useRouter();
  const firebase: any = useFirebase();
  useEffect(() => {
    firebase.isLoggedIn && router.push("/team/dashboard");
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

      {/* Statistic Section */}
      <StatisticSection />
    </>
  );
}
