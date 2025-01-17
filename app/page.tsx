"use client";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { useFirebase } from "./context/firebase";
import Cursor from "./components/v1/Cursor";
import HeroSection from "./components/v1/HeroSection";
import D3Section from "./components/v2/D3Section.v2.";
import JoinCommunityv2 from "./components/v2/JoinCommunity.v2";
import UpcomingEventsv2 from "./components/v2/UpcomingEvents.v2";
import WhatWeDo from "./components/v2/WhatWeDo.v2";
import AboutUs from "./components/v1/AboutUsSection";
import StatisticSection from "./components/v1/StatisticSection";
import Loading from "./loading";

export default function Home() {
  const router = useRouter();
  const firebase: any = useFirebase();
  useEffect(() => {
    firebase.isLoggedIn && router.push("/team/dashboard");
  }, [firebase.isLoggedIn]);

  return (
    <>
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
