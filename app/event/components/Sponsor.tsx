import Image from "next/image";
import Skeleton from "react-loading-skeleton";

export const Sponsor = ({ title, src }: any) => {
  return (
    <>
      <div className="w-[22vw] cursor-pointer  p-[2vw] shadow-xl hover:shadow-[0_0_12px_10px_rgba(0,0,255,0.1)] rounded-2xl h-[12vw] bg-white">
        <div className="relative overflow-hidden w-full h-[5rem]">
          {src ? (
            <Image
              src={src?.includes("https://") && src}
              alt="logo"
              layout="fill"
              objectFit="contain"
              className="dark:invert"
            />
          ) : (
            <Skeleton width={"100%"} height={"5rem"} />
          )}
        </div>
        <h1 className={`text-[2vw] text-left font-semibold  text-green-500`}>
          {title || <Skeleton />}
        </h1>
      </div>
    </>
  );
};
