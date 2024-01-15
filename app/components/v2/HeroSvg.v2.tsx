import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFirebase } from "@/app/context/firebase";
export default function HeroSvgv2({ children }: any) {
  const firebase: any = useFirebase();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    }
  }, [isMobile]);
  return (
    <>
      {isMobile ? (
        <>
          <motion.div
            initial={{
              translateX: isMobile ? "-100px" : "-200px",
              translateY: isMobile ? "-300px" : "100px",
              opacity: 0,
            }}
            whileInView={{
              translateX: "0px",
              translateY: "0px",
              opacity: !isMobile ? 0 : 1,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute md:-right-[5vw]  md:-top-[1vw] max-md:-right-[2rem]  max-md:top-[20rem]"
          >
            <div className="relative max-md:-rotate-[245deg] overflow-hidden w-[30vw] h-[30vw]  ">
              <Image
                src="/Svg/red-hero.svg"
                layout="fill"
                className=" -rotate-[3vw]"
                alt="hackathon"
                objectFit="contain"
                priority
                fetchPriority="high"
                quality={60}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ translateX: "-100px", translateY: "300px", opacity: 0 }}
            whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute md:-right-[3vw] md:-top-[10vw] max-md:-top-[15rem] max-md:-right-[1rem] "
          >
            <div className="relative md:-rotate-[25vw]  max-md:-rotate-[200deg]  overflow-hidden g-slate-300 md:w-[10vw] md:h-[10vw] max-md:w-[8rem] max-md:h-[8rem]  ">
              <Image
                src="/Svg/yellow-hero.svg"
                layout="fill"
                className=""
                alt="hackathon"
                objectFit="contain"
                priority
                fetchPriority="high"
                quality={60}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              translateX: !isMobile ? "-200px" : "100px",
              translateY: !isMobile ? "100px" : "-200px",
              opacity: isMobile ? 1 : 0,
            }}
            whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute md:-left-[1vw] md:-bottom-[15vw] max-sm:-left-[2rem] max-sm:-bottom-[17rem]"
          >
            <div className="relative md:-rotate-[25vw] max-md:-rotate-[210deg]  overflow-hidden  md:w-[24vw] md:h-[24vw] max-md:w-[8rem] max-md:h-[8rem]  ">
              <Image
                src="/Svg/blue-hero.svg"
                layout="fill"
                className=""
                alt="hackathon"
                objectFit="contain"
                priority
                fetchPriority="high"
                quality={60}
              />
            </div>
          </motion.div>
        </>
      ) : (
        <></>
      )}
      <motion.div
        initial={{
          translateX: isMobile ? "-100px" : "-200px",
          translateY: isMobile ? "-300px" : "100px",
          opacity: 0,
        }}
        whileInView={{
          translateX: "0px",
          translateY: "0px",
          opacity: !isMobile ? 1 : 0,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute md:-right-[5vw]  md:-top-[1vw] max-md:-right-[2rem]  max-md:top-[20rem]"
      >
        <div className="relative max-md:-rotate-[245deg] overflow-hidden w-[30vw] h-[30vw]  ">
          <Image
            src="/Svg/red-hero.svg"
            layout="fill"
            className=" -rotate-[3vw]"
            alt="hackathon"
            objectFit="contain"
            priority
            fetchPriority="high"
            quality={60}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: "200px", translateY: "-100px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute md:-right-[3vw] md:-top-[10vw] max-md:-top-[15rem] max-md:-right-[1rem] "
      >
        <div className="relative md:-rotate-[25vw]  max-md:-rotate-[200deg]  overflow-hidden g-slate-300 md:w-[10vw] md:h-[10vw] max-md:w-[8rem] max-md:h-[8rem]  ">
          <Image
            src="/Svg/yellow-hero.svg"
            layout="fill"
            className=""
            alt="hackathon"
            objectFit="contain"
            priority
            fetchPriority="high"
            quality={60}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          translateX: !isMobile ? "-200px" : "100px",
          translateY: !isMobile ? "100px" : "-200px",
          opacity: isMobile ? 1 : 0,
        }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute md:-left-[1vw] md:-bottom-[15vw] max-sm:-left-[2rem] max-sm:-bottom-[17rem]"
      >
        <div className="relative md:-rotate-[25vw] max-md:-rotate-[210deg]  overflow-hidden  md:w-[24vw] md:h-[24vw] max-md:w-[8rem] max-md:h-[8rem]  ">
          <Image
            src="/Svg/blue-hero.svg"
            layout="fill"
            className=""
            alt="hackathon"
            objectFit="contain"
            priority
            fetchPriority="high"
            quality={60}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          translateX: isMobile ? "300px" : "100px",
          translateY: isMobile ? "300px" : "100px",
          opacity: 0,
        }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute md:-left-[12vw] md:-top-[14vw] max-md:-left-[2rem] max-md:-top-[20rem]"
      >
        <div className="relative md:-rotate-[25vw] max-md:rotate-[25deg]  overflow-hidden g-slate-300 w-[34vw] h-[34vw]  ">
          <Image
            src="/Svg/green-hero.svg"
            layout="fill"
            className=""
            alt="hackathon"
            objectFit="contain"
            priority
            fetchPriority="high"
            quality={60}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sm:text-[1.7vw] gap-[2vw] flex flex-col max-sm:text-md font-medium dark:invert text-black"
      >
        {children}
      </motion.div>
    </>
  );
}
