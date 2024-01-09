import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function StatisticSectionSvgs() {
  return (
    <>
      <motion.div
        initial={{ translateX: "-300px", translateY: "0px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        className=" left-0 top-[8vw] w-1/2"
        key={"yellow-star-half"}
      >
        <div className="relative w-[15vw] h-[42vw]  ">
          <Image
            src="/Svg/yellow-star-half.svg"
            layout="fill"
            className=""
            alt="yellow-star-half"
            objectFit="contain"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: "300px", translateY: "0px", opacity: 0 }}
        whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        className="w-1/2  justify-end flex"
        key={"red-star-half"}
      >
        <div className="relative w-[15vw] h-[42vw]  ">
          <Image
            src="/Svg/red-star-half.svg"
            layout="fill"
            className=""
            alt="red-star-half"
            objectFit="contain"
            priority
            fetchPriority="high"
            quality={60}
          />
        </div>
      </motion.div>
    </>
  );
}
