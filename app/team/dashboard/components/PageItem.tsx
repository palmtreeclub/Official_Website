import { MdArrowOutward } from "react-icons/md";

export const PageItem = ({ title }: { title: string }) => (
  <h4 className="p-[.5vw] flex justify-between border-b-[1px] font-medium text-slate-500 pl-[2vw] cursor-pointer transition-all duration-300 text-[1vw] hover:text-cyan-500 border-b-cyan-500/30">
    <span>{title}</span>
    <MdArrowOutward />
  </h4>
);
