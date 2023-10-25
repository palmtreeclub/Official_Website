import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="flex px-[6vmax] justify-end w-full h-full absolute -mt-[15rem] -z-10 small:w-5/12 small:-mt-[20rem] small:-right-[1vmax]">
          <div className="mr-5 w-[7vmax] relative springish-G">
            <Image src={"/Svg/G.svg"} layout="fill" alt="G" />
          </div>
          <div className="mr-5 w-[6.1vmax] relative springish-D">
            <Image src={"/Svg/D.svg"} layout="fill" alt="D" />
          </div>
          <div className="mr-5 w-[6.2vmax] relative springish-S">
            <Image src={"/Svg/S.svg"} layout="fill" alt="S" />
          </div>
          <div className="mr-5 w-[9.1vmax] relative springish-C">
            <Image src={"/Svg/C.svg"} layout="fill" alt="C" />
          </div>
        </div>
      </div>
    </>
  );
}
