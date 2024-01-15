import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGreaterThan } from "react-icons/fa6";
export default function D3Section() {
  const router = useRouter();
  return (
    <section className="flex justify-center bg-yellow-500 py-[5vw]  items-center w-full ">
      <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
        <div className=" flex flex-col relative">
          <div className="max-sm:text-2xl flex text-[7vw] font-medium text-red-500">
            <motion.div
              initial={{ translateX: "-100px", opacity: 0 }}
              whileInView={{ translateX: "0px", opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-white"
            >
              Design.&nbsp;
            </motion.div>{" "}
            <motion.div
              initial={{ translateX: "-110px", opacity: 0 }}
              whileInView={{ translateX: "0px", opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white"
            >
              Develop.&nbsp;
            </motion.div>{" "}
            <motion.div
              initial={{ translateX: "-120px", opacity: 0 }}
              whileInView={{ translateX: "0px", opacity: 1 }}
              transition={{ duration: 2.5 }}
              viewport={{ once: true }}
              className="text-white"
            >
              Deliver.&nbsp;
            </motion.div>
          </div>
          <motion.div
            initial={{ translateY: "100px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-white/90"
          >
            <br />
            <h1 className="sm:text-[2.2vw] max-sm:text-md">
              Our Team believes in Designing the Vision, Development for
              Innovation, and Delivering for Your Success.
            </h1>
          </motion.div>
          <motion.button
            initial={{ translateY: "50px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            onClick={() => router.push("/our_team/leads")}
            type="button"
            className="text-white flex justify-center items-center gap-5 py-10 sm:text-[2vw] transition-all duration-300 max-sm:text-2xl relative self-end font-medium w-max  hover:text-red-500"
          >
            <FaGreaterThan className="horiAnim" />
            Meet The Team
          </motion.button>
        </div>
      </div>
    </section>
  );
}
