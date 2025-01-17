import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhatWeDoSvgs from "./WhatWeDoSvgs";
export default function WhatWeDo() {
  return (
    <section className="flex linearBlueGradient relative justify-center items-center w-full h-full">
      <div className="flex w-4/5 relative h-max max-md:flex-col justify-center  items-center">
        <WhatWeDoSvgs />
        <motion.div
          initial={{ translateX: "-100px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=" sm:w-[40vw]  sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[80vw] "
        >
          <motion.div
            initial={{ translateX: "-100px", opacity: 0 }}
            whileInView={{ translateX: "0px", opacity: 1 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
            className="relative sm:w-[30vw] sm:h-[25vw] max-sm:w-[60vw] max-sm:h-[60vw] "
          >
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
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ translateY: "100px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=" flex flex-col sm:w-1/2 text-center"
        >
          <motion.h1
            initial={{ translateX: "100px", opacity: 0 }}
            whileInView={{ translateX: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-sm:text-2xl dark:invert text-[3vw] font-bold text-slate-700"
          >
            What Do We Do?
          </motion.h1>
          <motion.div
            initial={{ translateX: "100px", opacity: 0 }}
            whileInView={{ translateX: "0px", opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="sm:text-[1.5vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600"
          >
            <br />
            <span className="uppercase  max-md:text-xl sm:text-[2vw] font-google-sans font-bold  dark:text-orange-600  text-orange-600">
              Palm Tree Club
            </span>{" "}
            a hub of innovation at Silver Oak University, organizes workshops,
            seminars, and showcases to build a dynamic and collaborative
            community. Our goal is to empower students to apply skills, solve
            local challenges, and contribute to the community. With a belief in
            continuous learning, we offer a structured approach to emerging
            technologies through Google Developers$apos; resources. Engaging in
            talks, events, and Dev Fests ensures a well-rounded learning
            experience.
          </motion.div>
          <motion.div
            initial={{ translateX: "200px", opacity: 0 }}
            whileInView={{ translateX: "0px", opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mt-[3vw] dark:invert hover:text-green-600/50 cursor-pointer transition-all duration-300 font-semibold max-sm:text-xl sm:text-[1.5vw] text-green-600"
          >
            <span className="text-black">&gt;</span> Events
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
