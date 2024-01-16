import { useFirebase } from "@/app/context/firebase";
import Image from "next/image";
import React from "react";
import { MdContentCopy, MdLockReset } from "react-icons/md";
import { toast } from "react-toastify";

export default function MemberCard({ member }: any) {
  const firebase: any = useFirebase();
  const handleCopyToClipboard = async (textToCopy: string) => {
    try {
      // Use the navigator.clipboard.writeText method to copy text to the clipboard
      await navigator.clipboard.writeText(textToCopy);
      toast("Member Id successfully copied: " + textToCopy.slice(0, 5) + "...");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };
  const color = member?.color;

  const logoContainer = `logo overflow-hidden relative border-[4px] 
  ${
    color === "blue"
      ? "border-blue-600"
      : color === "red"
      ? "border-red-600"
      : color === "green"
      ? "border-green-600"
      : color === "yellow"
      ? "border-yellow-500"
      : color === "purple"
      ? "border-purple-600"
      : "border-teal-600"
  }
   z-20 flex sm:w-[4vw] sm:h-[4vw] max-sm:w-[4rem] max-sm:h-[4rem]  rounded-[50%]`;
  return (
    <div
      className={`flex justify-center rounded-[.5vw] px-2 items-center w-[30vw]  ${
        color === "blue"
          ? "bg-blue-600"
          : color === "red"
          ? "bg-red-600"
          : color === "green"
          ? "bg-green-600"
          : color === "yellow"
          ? "bg-yellow-500"
          : color === "purple"
          ? "bg-purple-600"
          : "bg-teal-600"
      }  ${
        color === "blue"
          ? "hover:bg-blue-600/80"
          : color === "red"
          ? "hover:bg-red-600/80"
          : color === "green"
          ? "hover:bg-green-600/80"
          : color === "yellow"
          ? "hover:bg-yellow-500/80"
          : color === "purple"
          ? "hover:bg-purple-600/80"
          : "hover:bg-teal-600/80"
      }  duration-300 transition-all cursor-pointer text-white`}
    >
      <div className="flex w-full justify-between items-center max-sm:p-[1rem] sm:p-[.5vw]">
        <div className="flex justify-center items-center sm:gap-[1vw] max-sm:gap-4 ">
          <div className={logoContainer}>
            <Image
              src={
                member?.avtar
                  ? member?.avtar
                  : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
              }
              layout="fill"
              alt="GDSC-Lead"
              className="logo"
              objectFit="contain"
              priority
              fetchPriority="high"
              quality={60}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="max-sm:text-xl sm:text-[1.2vw]  ">
              {" "}
              {member?.name}
            </h1>
            <h1 className="max-sm:text-xs sm:text-[.9vw]  ">
              {" "}
              {member?.email}
            </h1>
          </div>
        </div>
        <div
          className="flex"
          onClick={() => {
            member?.email && firebase?.resetPassword(member?.email);
          }}
        >
          {member?.type === "core_team" && (
            <div className="flex p-5 sm:p-[.5vw] max-sm:text-2xl transition-all duration-300 cursor-pointer hover:bg-white hover:text-blue-600 sm:text-[2vw] overflow-hidden rounded-full">
              <MdLockReset />
            </div>
          )}
          <div
            onClick={() => handleCopyToClipboard(member?.id)}
            className="flex p-5 sm:p-[.5vw] max-sm:text-2xl transition-all duration-300 cursor-pointer hover:bg-white hover:text-blue-600 sm:text-[2vw] overflow-hidden rounded-full"
          >
            <MdContentCopy />
          </div>
        </div>
      </div>
    </div>
  );
}
