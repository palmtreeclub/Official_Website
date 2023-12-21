import React from "react";

interface MemberTypeOptionProps {
  type: string;
  color: string;
  selected: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const MemberTypeOption: React.FC<MemberTypeOptionProps> = ({
  type,
  color,
  selected,
  onClick,
}) => {
  return (
    <label
      onClick={onClick}
      className="inline-flex text-blue-700 font-bold cursor-pointer items-center mb-2"
    >
      <input
        type="radio"
        className="hidden"
        name="color"
        value={color}
        checked={selected}
        onClick={onClick}
      />
      <div
        className={`w-6 h-6 rounded-full ${color} ${
          selected && "border-4 border-white"
        } mr-2 border-2 border-slate-600/50 cursor-pointer`}
      ></div>
      {type}
    </label>
  );
};

export default MemberTypeOption;
