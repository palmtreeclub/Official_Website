export const IconCard = ({
  icon,
  bgColor,
  bgHover,
}: {
  icon: any;
  bgColor: string;
  bgHover: string;
}) => (
  <div
    className={`text-[2vw] p-[1vw] ${bgColor} ${bgHover}  cursor-pointer text-white w-max h-max rounded-[1vw]`}
  >
    {icon}
  </div>
);
