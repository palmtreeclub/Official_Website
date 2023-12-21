import Skeleton from "react-loading-skeleton";

export const HeroBarItems = ({ icon, title }: any) => {
  return (
    <div className="w-max h-full flex flex-col gap-[.7vw] cursor-pointer justify-center items-center">
      {icon}
      <h2 className="text-[1.2vw] font-semibold">
        {title || <Skeleton width={"5rem"} />}
      </h2>
    </div>
  );
};
