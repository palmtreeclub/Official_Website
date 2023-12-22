"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdCalendar, IoMdTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Speakers } from "../components/Speakers";
import { HeroBarItems } from "../components/HeroBarItems";
import { EventHeroCard } from "../components/EventHeroCard";
import { FloatingSvgs } from "../components/FloatingSvgs";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Speaker, Sponsor } from "@/app/team/events/components/EventForm";
import { Sponsor as SponsorCard } from "../components/Sponsor";
import EventPage from "../components/EventPage";

export default function EventMainPage() {
  return (
    <>
      <EventPage />
    </>
  );
}
