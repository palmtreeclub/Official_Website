import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Image {
  src: string;
  size: {
    width: string;
    height: string;
  };
}

export default function Partner({ src, size }: Image) {
  const [container, setContainer] = useState(
    "w-[25vw] h-[18rem] relative cursor-pointer grayscale opacity-70 hover:grayscale-0 duration-300 transition-all "
  );
  useEffect(() => {
    setContainer(
      `${
        size ? `${size.width} ${size.height}` : "w-[25vw] h-[18rem]"
      }  relative cursor-pointer grayscale opacity-70 hover:grayscale-0`
    );
  }, [size]);
  return (
    <>
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={container}
      >
        <Image src={src} fill layout="fill" alt="Partner" objectFit="contain" />
      </motion.div>
    </>
  );
}
