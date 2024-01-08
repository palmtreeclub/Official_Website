import { useRouter } from "next/navigation";
import React from "react";
import CountUp from "react-countup";

export default function CounterCard({
  total,
  title,
  bgColor,
  redirect,
  onClick,
}: {
  total: number;
  title: string;
  bgColor?: string;
  redirect?: string;
  onClick?: () => void;
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => (onClick ? onClick() : router.push(`${redirect}`))}
      className={`border-2 ${bgColor} font-semibold text-slate-700 cursor-pointer  border-slate-500 p-[2vw] text-center text-[3vw] w-[20vw] h-max rounded-[2vw]`}
    >
      <h1 className="">
        <CountUp end={total} duration={5} />+
      </h1>
      <h1>{title}</h1>
    </div>
  );
}
