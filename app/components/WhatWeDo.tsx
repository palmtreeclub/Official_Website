import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WhatWeDo() {
  return (
    <section className="flex relative justify-center items-center w-full h-full">
      <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
        <motion.div
          initial={{ translateX: "-100px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=" sm:w-[40vw]  sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[80vw] "
        >
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
              priority
              fetchPriority="high"
              quality={60}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ translateY: "100px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=" flex flex-col sm:w-1/2"
        >
          <h1 className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600">
            <br />
            <span className="uppercase  max-md:text-xl sm:text-[2.2vw] font-google-sans font-bold text-transparent bgGradientAnim">
              DSC SOU
            </span>{" "}
            a hub of innovation at Silver Oak University, organizes workshops,
            seminars, and showcases to build a dynamic and collaborative
            community. Our goal is to empower students to apply skills, solve
            local challenges, and contribute to the community. With a belief in
            continuous learning, we offer a structured approach to emerging
            technologies through Google Developers$apos; resources. Engaging in
            talks, events, and Dev Fests ensures a well-rounded learning
            experience.
          </h1>
        </motion.div>
        {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
      </div>
      <motion.div
        initial={{ translateX: "-300px", translateY: "200px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute w-full bg-wave bg-cover h-[15vw] max-sm:bottom-10 sm:-bottom-10 "
      />
    </section>
  );
}
