import Image from "next/image";
import Skeleton from "react-loading-skeleton";

export function EventHeroCard({
  isMaterials,
  eventName,
  eventType,
  eventLogo,
  eventCaption,
  rsvpLink,
  driveLink,
}: any) {
  return (
    <div className=" w-max h-2/4 p-10 flex max-md:flex-col  justify-center items-center  rounded-2xl">
      <div className="w-[20vw] overflow-hidden h-[20vw] rounded-full bg-white shadow-md flex justify-center items-center relative">
        {eventLogo ? (
          <Image
            src={eventLogo}
            alt="logo"
            layout="fill"
            className="dark:invert"
            objectFit="contain"
          />
        ) : (
          <Skeleton circle width={"20vw"} height={"20vw"} />
        )}
      </div>
      <div className="flex pl-10 w-[45vw] flex-col gap-2 ">
        <h1 className="text-[4vw] font-bold">
          {eventName || <Skeleton width={"10rem"} />}
        </h1>
        <span className=" text-white font-semibold shadow-[0_6px_10px_rgba(255,255,255,0.3)] bg-slate-600 w-max py-1 px-3 my-1 rounded-full">
          {eventType || <Skeleton width={"5rem"} />}
        </span>
        <h1 className="text-[1vw] my-1 font-medium">
          {eventCaption || <Skeleton width={"25rem"} height={"3rem"} />}
        </h1>
        <div className="flex gap-[2vw]">
          <button
            onClick={() => rsvpLink && window.open(rsvpLink)}
            title="RSVP"
            type="button"
            className="w-1/2 text-[1vw] text-white bg-blue-500 py-[.2vw] rounded-md hover:bg-blue-500/50 duration-300 transition-all px-[2vw] "
          >
            RSVP
          </button>
          {isMaterials && driveLink && (
            <button
              title="Materials"
              type="button"
              className="w-1/2 text-[1vw] text-white bg-blue-500 py-[.2vw] rounded-md hover:bg-blue-500/50 duration-300 transition-all px-[2vw] "
            >
              Photos / Materials
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
