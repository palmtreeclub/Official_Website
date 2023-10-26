"use client";
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  BiLogoLinkedin,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoGithub,
} from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex w-4/5  h-4/5 max-md:flex-col justify-center items-center">
          <div className=" flex flex-col sm:w-1/2">
            <div className="bg-gdsccode-logo sm:w-[6vw] sm:h-[6vw] max-sm:w-[12vw] max-sm:h-[12vw] bg-cover"></div>
            <h1 className="sm:text-[1.7vw] max-sm:text-md font-medium text-slate-600">
              <span className="sm:text-[2.2vw] max-md:text-[1.4rem]">
                <span>Google</span>&nbsp;<span>Developer</span>&nbsp;
                <span>Student</span> &nbsp;<span>Club</span>
                <br />
              </span>
              <span className="uppercase max-md:text-xl font-google-sans font-bold text-transparent bgGradientAnim">
                Silver Oak University
              </span>
              <br />A technical club focused on building a community of student
              developers interested in solving real-world problems.
            </h1>
          </div>
          {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
          <div className="relative sm:w-[40vw] sm:h-[40vw] max-sm:w-[90vw] max-sm:h-[90vw] ">
            <Image
              src="/Svg/Hero_Section.svg"
              layout="fill"
              className="max-md:h-fit max-md:w-96 upDown"
              alt="hackathon"
            />
          </div>
        </div>
        <div className="relative  flex justify-center items-center py-[2vw] w-full h-max">
          <button
            type="button"
            className="bg-gradient-to-r from-red-600 to-indigo-600 scale-90 hover:scale-100 transition-all duration-300 absolute w-max max-sm:px-5 max-sm:-top-10 sm:-top-[2vw] max-sm:text-xl sm:text-[1.2vw] text-white p-[1vw] rounded-xl"
          >
            Become Member
          </button>
          <div className="flex shadow-inner sm:px-[4vw] sm:py-[1.5vw] max-sm:px-10 max-sm:py-5 rounded-full dark:bg-slate-900 bg-slate-200 max-sm:text-4xl sm:text-[3vw] max-sm:gap-5 sm:gap-[2vw]">
            <div className="box cursor-pointer p-[.5vw] text-red-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,0,0.6)] rounded-lg bg-white">
              <BiLogoInstagramAlt className="" />
            </div>
            <div className="box cursor-pointer p-[.5vw] text-blue-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,255,0.6)] rounded-lg bg-white">
              <BiLogoLinkedin className="" />
            </div>
            <div className="box cursor-pointer p-[.5vw] text-green-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.6)] rounded-lg bg-white">
              <FcGoogle className="" />
            </div>
            <div className="box cursor-pointer p-[.5vw] text-yellow-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_#EAB308] rounded-lg bg-white">
              <BiLogoFacebookCircle className="" />
            </div>
            <div className="box cursor-pointer p-[.5vw] text-sky-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_#0EA5E9] rounded-lg bg-white">
              <AiOutlineTwitter className="" />
            </div>
            <div className="box cursor-pointer p-[.5vw] text-slate-800 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.6)] rounded-lg bg-white">
              <BiLogoGithub className="" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center w-full h-full">
        <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
          <div className=" sm:w-[40vw]  sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[80vw] ">
            <h1 className="max-sm:text-2xl text-[2vw] font-medium text-red-500">
              About Us
            </h1>
            <h1 className="max-sm:text-2xl text-[3vw] font-medium text-blue-400">
              What Do We Do?
            </h1>
            <div className="relative sm:w-[30vw]  sm:h-[20vw] max-sm:w-[60vw] max-sm:h-[60vw] ">
              <Image
                src="/Assets/About.gif"
                layout="fill"
                className="mt-[3vw]"
                alt="hackathon"
                objectFit="contain"
              />
            </div>
          </div>
          <div className=" flex flex-col sm:w-1/2">
            <h1 className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600">
              <br />
              <span className="uppercase  max-md:text-xl sm:text-3xl font-google-sans font-bold text-transparent bgGradientAnim">
                DSC SOU
              </span>{" "}
              conducts workshops, seminars and technical showcases for Silveroak
              University as well as other colleges in Gujarat. In addition to
              workshops, Silveroak University also provides an opportunity for
              students to apply their newly gained skills to develop solutions
              for local organizations and then provide visibility via showcases.
              From learning about new technologies with materials provided by
              Google Developers to attending talks, events, DevFests and
              connecting with developers around the world, DSC will help the
              students get it.
            </h1>
          </div>
          {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
        </div>
      </section>
      {/* Team */}
      <section className="flex justify-center items-center w-full h-full">
        <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
          <div className=" flex flex-col sm:w-1/2">
            <h1 className="max-sm:text-2xl text-[3vw] font-medium text-red-500">
              <span className="text-red-500">Design.</span>{" "}
              <span className="text-blue-500">Develop.</span>{" "}
              <span className="text-yellow-500">Deliver.</span>
            </h1>
            <h1 className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600">
              <br />
              <span className="uppercase  max-md:text-xl sm:text-3xl font-google-sans font-bold text-transparent bgGradientAnim">
                DSC SOU
              </span>{" "}
              These are the amazing bunch of people who make the community what
              it is. Who are the Backbone of Google Developer Student Club, SOU
              and ensure that we can forge ahead{" "}
              <span className="text-blue-600">#WhateverItTakes</span>! <br />{" "}
              <br />
              They take the time out from their daily grind to give back to the
              members and empower them to become bigger (Metaphorically). And
              Better.
            </h1>
            <button
              onClick={() => router.push("/our_team")}
              type="button"
              className="text-sky-600 flex justify-center items-center gap-5 py-10 sm:text-[2vw] transition-all duration-300 max-sm:text-2xl font-medium w-max  hover:text-pink-500"
            >
              Meet The Team <AiOutlineArrowRight className="horiAnim" />
            </button>
          </div>
          <div className=" sm:w-[40vw]  sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[80vw] ">
            {/* <h1 className="max-sm:text-2xl text-[3vw] font-medium text-blue-400">
              What Do We Do?
            </h1> */}
            <div className="relative sm:w-[50vw]  sm:h-[30vw] max-sm:w-[60vw] max-sm:h-[60vw] ">
              <Image
                src="/Assets/grow.png"
                layout="fill"
                className="mt-[3vw]"
                alt="hackathon"
                objectFit="contain"
              />
            </div>
          </div>
          {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="flex justify-center items-center w-full h-full">
        <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
          <div className=" sm:w-[40vw]  sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[80vw] ">
            <h1 className="max-sm:text-2xl text-[2vw] font-medium text-red-500">
              About Us
            </h1>
            <h1 className="max-sm:text-2xl text-[3vw] font-medium text-blue-400">
              What Do We Do?
            </h1>
            <div className="relative sm:w-[30vw]  sm:h-[20vw] max-sm:w-[60vw] max-sm:h-[60vw] ">
              <Image
                src="/Assets/About.gif"
                layout="fill"
                className="mt-[3vw]"
                alt="hackathon"
                objectFit="contain"
              />
            </div>
          </div>
          <div className=" flex flex-col sm:w-1/2">
            <h1 className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600">
              <br />
              <span className="uppercase  max-md:text-xl sm:text-3xl font-google-sans font-bold text-transparent bgGradientAnim">
                DSC SOU
              </span>{" "}
              conducts workshops, seminars and technical showcases for Silveroak
              University as well as other colleges in Gujarat. In addition to
              workshops, Silveroak University also provides an opportunity for
              students to apply their newly gained skills to develop solutions
              for local organizations and then provide visibility via showcases.
              From learning about new technologies with materials provided by
              Google Developers to attending talks, events, DevFests and
              connecting with developers around the world, DSC will help the
              students get it.
            </h1>
          </div>
          {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
        </div>
      </section>
      {/* Partners */}
      <section className="flex justify-center items-center w-full h-full">
        <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
          <div className=" sm:w-[40vw]  sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[80vw] ">
            <h1 className="max-sm:text-2xl text-[2vw] font-medium text-red-500">
              About Us
            </h1>
            <h1 className="max-sm:text-2xl text-[3vw] font-medium text-blue-400">
              What Do We Do?
            </h1>
            <div className="relative sm:w-[30vw]  sm:h-[20vw] max-sm:w-[60vw] max-sm:h-[60vw] ">
              <Image
                src="/Assets/About.gif"
                layout="fill"
                className="mt-[3vw]"
                alt="hackathon"
                objectFit="contain"
              />
            </div>
          </div>
          <div className=" flex flex-col sm:w-1/2">
            <h1 className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600">
              <br />
              <span className="uppercase  max-md:text-xl sm:text-3xl font-google-sans font-bold text-transparent bgGradientAnim">
                DSC SOU
              </span>{" "}
              conducts workshops, seminars and technical showcases for Silveroak
              University as well as other colleges in Gujarat. In addition to
              workshops, Silveroak University also provides an opportunity for
              students to apply their newly gained skills to develop solutions
              for local organizations and then provide visibility via showcases.
              From learning about new technologies with materials provided by
              Google Developers to attending talks, events, DevFests and
              connecting with developers around the world, DSC will help the
              students get it.
            </h1>
          </div>
          {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
        </div>
      </section>
    </>
  );
}
