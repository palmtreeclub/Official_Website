import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import EventForm, { Speaker, Sponsor, formData } from "./EventForm";
import EventPage from "@/app/event/components/EventPage";

export default function AddEventPage({
  toggleFormVisibility,
  onsubmit,
  setFormData,
  isFormVisible,
  formData,
}: {
  toggleFormVisibility: () => void;
  setFormData: React.Dispatch<React.SetStateAction<formData>>;
  onsubmit: () => void;
  isFormVisible: boolean;
  formData: formData;
}) {
  return (
    <div className="flex relative  flex-col w-full h-[90%] justify-center overflow-y-auto items-center">
      <div className="fixed top-0 z-30">
        <div
          className="flex  fixed z-40 top-0  right-0 h-full pt-[5vw] overflow-auto justify-center items-center bg-blue-500 shadow-2xl p-[.5vw]  cursor-pointer"
          onClick={toggleFormVisibility}
        >
          <div className="flex sticky top-0 w-max h-max bg-white shadow-2xl text-red-500  text-[1.5vw] p-[.5vw] rounded-full">
            <FaAngleLeft />
          </div>
        </div>

        <div
          className={`${
            isFormVisible
              ? "w-0 pr-[3vw] -z-50 opacity-0"
              : "pr-[7vw] opacity-100 w-[40%] z-30"
          } flex transition-all  duration-300 px-[2vw] fixed  right-0 h-full pt-[5vw] overflow-auto justify-center bg-white shadow-2xl p-[2vw] rounded-2xl`}
        >
          <EventForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={onsubmit}
          />
        </div>
      </div>
      <div className="flex   flex-col w-full scale-90">
        <div className="overflow-y-auto fixed  w-full -top-52 z-50 rounded-[5vw] shadow-[0_0_12px_10px_rgba(0,0,0,0.1)]">
          <h1 className="text-center text-slate-600 font-semibold text-[3vw] pb-[2vw]">
            Event Preview
          </h1>
          <EventPage data={formData} isPreview />
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}
