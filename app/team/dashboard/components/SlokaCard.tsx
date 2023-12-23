"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { MdArrowOutward } from "react-icons/md";
import { useTheme } from "next-themes";
import { CardHeader } from "./CardHeader";

export const SlokaCard = () => {
  const [sloka, setSloka] = useState<any>([]);
  const [slokData, setSlokData] = useState<any>();
  const { theme } = useTheme();

  const getSlok = useCallback(async () => {
    try {
      const response = await axios.get("/api/slok");
      setSloka(response.data.slok.split("\n"));
      setSlokData(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.log(error?.message);
    }
  }, []);

  useEffect(() => {
    getSlok();
  }, [getSlok]);

  const slokaLines = useMemo(() => {
    return sloka.map((line: any, index: any) => (
      <p key={index} className="text-center">
        {line}
      </p>
    ));
  }, [sloka]);

  return (
    <div className="w-[40vw]  h-[14vw] bg-cyan-500/10 shadow-[0_0_10px_1px_rgba(0,0,0,.2)] rounded-[1vw]">
      <div className="text-center">
        <CardHeader title="Today's Slok" />
      </div>
      <div
        onClick={() =>
          window.open(
            `https://vedabase.io/en/library/bg/${slokData?.chapter}/${slokData?.verse}/`
          )
        }
        className={`w-full flex  h-[11vw] transition-all duration-300 ${
          theme === "dark" ? "hover:text-cyan-500" : "hover:text-black"
        } text-slate-500 dark:invert  font-semibold  cursor-pointer justify-center gap-[3vw] items-center `}
      >
        <div className="flex flex-col pl-[5vw]">{slokaLines}</div>
        <MdArrowOutward className="text-[2vw]" />
      </div>
    </div>
  );
};
