import Image from "next/image";
import Skeleton from "react-loading-skeleton";

export const Speakers = ({
  speaker,
  odd = false,
  currentNumber = 1,
}: {
  speaker: {
    logo: string;
    name: string;
    designation: string;
    about: string;
    link: string;
  };
  odd?: boolean;
  currentNumber: number;
}) => {
  const currentColor = (isText: boolean, currentNumber: number) => {
    switch (currentNumber) {
      case 1:
        return isText ? "text-red-500" : "bg-red-500";
      case 2:
        return isText ? "text-yellow-500" : "bg-yellow-500";
      case 3:
        return isText ? "text-green-500" : "bg-green-500";
      case 4:
        return isText ? "text-blue-500" : "bg-blue-500";
      default:
        return isText ? "text-pink-500" : "bg-pink-500";
    }
  };
  const currentTextColor = currentColor(true, currentNumber);
  const currentBgColor = currentColor(false, currentNumber);
  return (
    <>
      <div
        className={`w-4/5 justify-between flex ${
          odd && "flex-row-reverse"
        }  h-full`}
      >
        <div className="w-2/3 h-full text-left">
          <h1 className={`text-[2vw] ${currentTextColor} font-semibold`}>
            {speaker.name || <Skeleton width={"50%"} />}
          </h1>
          <h1 className="text-[1.5vw] text-slate-800 font-semibold">
            {speaker.designation || <Skeleton width={"40%"} />}
          </h1>
          <h1 className="text-[1vw] font-semibold text-slate-600">
            {speaker.about || (
              <>
                <Skeleton width={"100%"} count={7} />
                <Skeleton width={"25%"} />
              </>
            )}
          </h1>
        </div>
        <div className="w-3/2 ">
          <div
            className={`w-[18vw] relative flex  items-center ${
              odd ? "justify-start" : "justify-end"
            } h-[18vw]`}
          >
            <div
              className={`${currentBgColor} w-[10vw] rounded-[1vw] h-[25vw]`}
            ></div>
            {speaker?.logo ? (
              <Image
                src={speaker?.logo}
                alt="logo"
                layout="fill"
                objectFit="contain"
                className="dark:invert rounded-[1vw] shadow-2xl"
              />
            ) : (
              <Skeleton width={"18vw"} height={"18vw"} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
