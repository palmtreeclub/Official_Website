import { useRouter } from "next/navigation";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
export default function CounterCard({
  total,
  title,
  bgColor,
  redirect,
  onClick,
  hoverColor,
}: {
  total: number;
  title: string;
  bgColor?: string;
  redirect?: string;
  hoverColor?: string;
  onClick?: () => void;
}) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
      onClick={() => (onClick ? onClick() : router.push(`${redirect}`))}
      className={`border-2  transition-all duration-300 hover:text-white ${bgColor} ${hoverColor} font-semibold text-slate-700 cursor-pointer  border-slate-500 p-[2vw] text-center max-sm:text-2xl max-sm:py-[2rem] sm:text-[3vw] max-sm:w-[60vw] sm:w-[20vw] h-max rounded-[2vw]`}
    >
      <h1 className="">
        <CountUp end={total} duration={5} />+
      </h1>
      <h1>{title}</h1>
    </motion.div>
  );
}
