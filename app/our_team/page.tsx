"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import TeamCard from "../components/TeamCard";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function Page() {
  const [members, setMembers] = useState([
    {
      img: "",
      gender: "male",
      color: "red",
      name: "Abhay Mandli",
      designation: "Management Lead",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "blue",
      name: "Shwetkamal Gaud",
      designation: "Cybersecurity Lead",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "yellow",
      name: "Dhritiman Bharadwaj",
      designation: "Technical Lead",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "teal",
      name: "Aayush Parikh",
      designation: "Media Strategist & Designer",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "green",
      color: "red",
      name: "Het Limbachiya",
      designation: "Marketing Strategist",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "blue",
      name: "Ansh Vachheta",
      designation: "UX Designer",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "red",
      name: "Vimarsh Tiwari",
      designation: "Graphic Designer",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "female",
      color: "purple",
      name: "Gunja Shah",
      designation: "Content Editor",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "yellow",
      name: "Jaival Suthat",
      designation: "Content Manager",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);

  const refAnimationInstance: any = useRef(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  useEffect(() => fire(), [isVisible]);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
    setIsVisible(false);
  }, [makeShot]);

  return (
    <div className="w-full h-max flex justify-center items-center">
      <div className="flex w-full h-full flex-col justify-center items-center">
        <div className="flex max-sm:py-16 sm:pb-[3vw] sm:pt-[7vw] bg-slate-500 dark:bg-none dark:bg-slate-900 bg-team-header bg-cover bg-fixed h-max flex-col max-sm:text-center sm:text-center w-full justify-center items-center">
          <div className="w-4/5 flex font-medium max-sm:gap-3 justify-center flex-col items-center">
            <h1 className="sm:text-[3vw] max-sm:text-3xl dark:text-white text-slate-800">
              Meet The Team
            </h1>
            <h4 className="dark:text-white text-slate-700 max-sm:text-md sm:text-[1.5vw] sm:w-11/12">
              Every member of the society has always been passionate and hard
              working towards their goal, creating a positive work environment.
              Their support and will to help each other out in every way
              possible is what makes DSC-SOU a &ldquo;team&rdquo;.
            </h4>
          </div>
        </div>
        <div className="flex  flex-col pb-10 items-center w-full h-full ">
          <h1 className="max-sm:text-2xl font-medium text-slate-600 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-full">
            GDSC Lead 2023
          </h1>

          {true && (
            <ReactCanvasConfetti
              refConfetti={getInstance}
              style={{
                position: "fixed",
                pointerEvents: "none",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            />
          )}

          <TeamCard
            onClick={() => {
              setIsVisible(true);
              console.log("object");
            }}
            member={{
              name: "Dev Shinde",
              designation: "GDSC Lead (2023)",
              color: "green",
              github: "",
              twitter: "",
              linkedin: "",
            }}
          />
        </div>
        <div className="border-t-2 pb-10 flex flex-col justify-center items-center  dark:border-t-slate-700 border-t-slate-400/40  w-4/5">
          <h1 className="max-sm:text-2xl font-medium text-slate-600 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-full">
            Core Team Members
          </h1>
          <div className="flex flex-wrap w-full justify-center items-center sm:gap-[3vw] max-sm:gap-10">
            {members.map((member) => (
              <TeamCard key={member} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
