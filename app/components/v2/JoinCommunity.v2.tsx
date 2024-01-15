import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGreaterThan } from "react-icons/fa6";
export default function JoinCommunityv2() {
  const router = useRouter();
  return (
    <>
      <div className="w-full bg-[#0080FC] py-5"></div>
      <section className="flex relative justify-center  py-[5vw] sm:h-4/5  items-center w-full ">
        <motion.div
          initial={{
            translateX: "-100px",
            translateY: "100px",
            opacity: 0,
          }}
          whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex"
        >
          <div className="w-[40%]">
            <h1 className="text-white text-[5vw] leading-[7vw] w-full">
              Join Our Community of
              <span className="font-bold"> #Developers</span>
            </h1>
            <h1 className="mt-[6vw] max-sm:text-xs sm:text-[1.2vw] text-white cursor-pointer transition-all duration-300 hover:text-white/50">
              &gt; Become a Member
            </h1>
          </div>
          <div className="w-[60%] bg-red-">
            <motion.div
              initial={{
                translateX: "100px",
                translateY: "-100px",
                opacity: 0,
              }}
              whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="event-svg w-full h-[30vw] relative"
            >
              <Image
                src={"/Svg/Event3.svg"}
                objectFit="contain"
                layout="fill"
                className="self-start left-0 absolute -z-10"
                alt=""
              />
            </motion.div>
          </div>
        </motion.div>
        <Image
          src={"/Svg/GDSC-blue-bg.png"}
          objectFit="cover"
          layout="fill"
          className="self-start left-0 absolute -z-20"
          alt=""
        />
      </section>
    </>
  );
}
