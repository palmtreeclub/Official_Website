import React from "react";

interface ColorOptionProps {
  color: string;
  selected: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const ColorOption: React.FC<ColorOptionProps> = ({
  color,
  selected,
  onClick,
}) => {
  return (
    <label
      onClick={onClick}
      className="inline-flex cursor-pointer items-center mb-2"
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
          selected && "border-2 border-white"
        } mr-2 border-2 border-slate-600/50 cursor-pointer`}
      ></div>
      {color}
    </label>
  );
};

export default ColorOption;
