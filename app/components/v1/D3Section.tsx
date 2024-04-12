import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function D3Section() {
  const router = useRouter();
  return (
    <section className="flex justify-center  items-center w-full h-full">
      <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
        <div className=" flex flex-col sm:w-1/2">
          <div className="max-sm:text-2xl flex text-[3vw] font-medium text-red-500">
            <motion.div
              initial={{ translateX: "-100px", opacity: 0 }}
              whileInView={{ translateX: "0px", opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-red-500"
            >
              Design.&nbsp;
            </motion.div>{" "}
            <motion.div
              initial={{ translateX: "-110px", opacity: 0 }}
              whileInView={{ translateX: "0px", opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-blue-500"
            >
              Develop.&nbsp;
            </motion.div>{" "}
            <motion.div
              initial={{ translateX: "-120px", opacity: 0 }}
              whileInView={{ translateX: "0px", opacity: 1 }}
              transition={{ duration: 2.5 }}
              viewport={{ once: true }}
              className="text-yellow-500"
            >
              Deliver.&nbsp;
            </motion.div>
          </div>
          <motion.div
            initial={{ translateY: "100px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600"
          >
            <br />
            <span className="uppercase  max-md:text-xl sm:text-[2.2vw] font-google-sans font-bold text-transparent bgGradientAnim">
              DSC SOU
            </span>{" "}
            These are the amazing bunch of people who make the community what it
            is. Who are the Backbone of Google Developer Student Club, SOU and
            ensure that we can forge ahead{" "}
            <span className="text-blue-600">#WhateverItTakes</span>! <br />{" "}
            <br />
            They take the time out from their daily grind to give back to the
            members and empower them to become bigger (Metaphorically). And
            Better.
          </motion.div>
          <motion.button
            initial={{ translateY: "50px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            onClick={() => router.push("/our_team")}
            type="button"
            className="text-sky-600 flex justify-center items-center gap-5 py-10 sm:text-[2vw] transition-all duration-300 max-sm:text-2xl font-medium w-max  hover:text-sky-500"
          >
            Meet The Team <AiOutlineArrowRight className="horiAnim" />
          </motion.button>
        </div>
        <motion.div
          initial={{ translateX: "100px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className=" sm:w-[40vw] max-sm:justify-center max-sm:flex sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[30vw] "
        >
          <div className="relative sm:w-[50vw]  sm:h-[30vw] max-sm:w-[60vw] max-sm:h-[70vw] items-center ">
            <Image
              src="/Assets/grow.png"
              layout="fill"
              className="mt-[3vw]"
              alt="hackathon"
              objectFit="contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
