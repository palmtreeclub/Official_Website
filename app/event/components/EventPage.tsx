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

export default function EventPage({
  data,
}: {
  data?:
    | {
        eventName: string;
        eventType: string;
        eventCaption: string;
        eventLogo: string;
        eventTheme: number;
        rsvpLink: string;
        driveLink: string;
        eventDate: string;
        eventTime: string;
        eventLocation: string;
        moreDetails: string;
        sponsors: Sponsor[];
        speakers: Speaker[];
      }
    | any;
}) {
  const [eventData, setEventData] = useState(data);

  useEffect(() => {
    setEventData(data);
  }, [data]);

  const pageTheme = Number(eventData?.eventTheme);
  const getPageThemeColor = (pageTheme: any, isLightColor: any) => {
    switch (pageTheme) {
      case 1:
        return isLightColor ? "bg-green-600/30" : "bg-green-600 text-white";
      case 2:
        return isLightColor ? "bg-red-600/30" : "bg-red-600 text-white";
      case 3:
        return isLightColor ? "bg-yellow-600/30" : "bg-yellow-600 text-white";
      case 4:
        return isLightColor ? "bg-purple-600/30" : "bg-purple-600 text-white";
      case 5:
        return isLightColor ? "bg-orange-600/30" : "bg-orange-600 text-white";
      case 6:
        return isLightColor ? "bg-cyan-600/30" : "bg-cyan-600 text-white";
      case 7:
        return isLightColor ? "bg-indigo-600/30" : "bg-indigo-600 text-white";
      default:
        return isLightColor ? "bg-pink-600/30" : "bg-pink-600 text-white";
    }
  };
  const getPageThemeMainColor = getPageThemeColor(pageTheme, false);
  const getPageThemeLightColor = getPageThemeColor(pageTheme, true);

  return (
    <>
      <SkeletonTheme baseColor="#DBEAFE" highlightColor="#60A5FA">
        <div className="w-full h-full  dark:invert">
          <div
            className={`w-full h-[90%]  relative flex justify-center items-center ${getPageThemeMainColor}`}
          >
            <FloatingSvgs />

            <EventHeroCard
              eventName={eventData?.eventName}
              eventType={eventData?.eventType}
              eventLogo={eventData?.eventLogo}
              eventCaption={eventData?.eventCaption}
              rsvpLink={eventData?.rsvpLink}
              driveLink={eventData?.driveLink}
              isMaterials
            />

            <div className="bg-white text-slate-700 flex justify-between px-[10vw] w-4/5 h-[20%] rounded-[1vw] shadow-[0_6px_10px_rgba(0,0,0,0.2)] absolute -bottom-[10%]">
              <div className="w-[4vw] h-[4vw] -left-[2vw] rounded-full top-[2.5vw] absolute">
                <Image
                  src={"/Assets/circle-eb.png"}
                  alt="logo"
                  layout="fill"
                  className="dark:invert"
                  objectFit="contain"
                />
              </div>
              <HeroBarItems
                title={eventData?.eventDate}
                icon={<IoMdCalendar className="text-[3vw]" />}
              />
              <HeroBarItems
                title={eventData?.eventTime}
                icon={<IoMdTime className="text-[3vw]" />}
              />
              <HeroBarItems
                title={eventData?.eventLocation}
                icon={<FaLocationDot className="text-[3vw]" />}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="w-[85%] pl-[15vw] py-[5vw] dark:text-white text-[3vw]">
            <h1 className="font-semibold">
              More <span className="text-blue-600">About</span>{" "}
              {eventData?.eventName || <Skeleton width={"20rem"} />}
            </h1>
            <div className=" flex w-full">
              <h5 className="text-[1vw] w-[80%] text-jstify">
                {eventData?.moreDetails || (
                  <>
                    <Skeleton width={"40vw"} count={7} />
                    <Skeleton width={"15vw"} count={1} />
                  </>
                )}
              </h5>
              <div className="image relative w-[10vw] h-[15vw] ml-[5vw]">
                <Image
                  src={"/Assets/earth-box.png"}
                  alt="event"
                  layout="fill"
                  priority
                  objectFit="contain"
                  fetchPriority="high"
                  quality={60}
                />
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 200"
            className={` dark:invert ${getPageThemeLightColor}`}
          >
            <path
              className="fill dark:invert"
              fill="#ffffff"
              fill-opacity="1"
              d="M0,192L1440,0L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div
          className={`flex flex-col  w-full ${getPageThemeLightColor}  dark:invert`}
        >
          <div className="w-full pl-[15vw] flex flex-col gap-[2vw]  py-[5vw] dark:text-white text-[3vw]">
            <h1 className="font-semibold dark:invert">
              Meet <span className="text-blue-600">Our</span> Sponsors{" "}
              <span className="text-blue-600">&</span> Partners
            </h1>

            <div className="flex pl-[1vw] text-center flex-wrap  gap-x-[5vw]  gap-y-[2vw]">
              {eventData?.sponsors?.map((elem: any, index: number) => {
                return (
                  <SponsorCard key={index} src={elem.logo} title={elem.name} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-red- dark:invert">
          <div className="w-full pl-[15vw] flex flex-col gap-[2vw]  py-[5vw] dark:text-white text-[3vw]">
            <h1 className="font-semibold dark:invert">
              Meet <span className="text-blue-600">Our</span> Speakers
            </h1>

            <div className="flex pl-[1vw] w-full text-center flex-wrap  gap-x-[5vw]  gap-y-[10vw]">
              {eventData?.speakers?.map((elem: any, index: number) => {
                const currentNumber = index + 1;
                return (
                  <Speakers
                    speaker={elem}
                    key={index}
                    odd={currentNumber % 2 === 0 && true}
                    currentNumber={currentNumber}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}
