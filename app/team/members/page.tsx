"use client";
import { useFirebase } from "@/app/context/firebase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Page() {
  const firebase: any = useFirebase();
  const [isMemberDialog, setIsMemberDialog] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const router = useRouter();
  useEffect(() => {
    firebase.isLoggedIn ? null : router.push("/login");
    console.log(firebase.isLoggedIn, "team");
  }, [firebase?.isLoggedIn]);

  const colors = [
    { name: "Blue", value: "bg-blue-600" },
    { name: "Red", value: "bg-red-600" },
    { name: "Yellow", value: "bg-yellow-600" },
    { name: "Green", value: "bg-green-600" },
    { name: "Purple", value: "bg-purple-600" },
  ];

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <div className="flex relative w-full h-full justify-center items-center">
      <div className="flex max-sm:w-4/5 sm:w-[50vw] sm:gap-[.4vw] max-sm:gap-5 flex-col sm:p-[2vw] bg-slate-300 max-sm:p-10 max-sm:rounded-xl sm:rounded-[1vw]">
        <h1 className="max-sm:text-2xl text-center w-full text-[2vw] font-medium text-red-500">
          Add New Member
        </h1>
        <input
          // value={cradentials.email}
          // onChange={(e: any) =>
          //   setCradentials({ ...cradentials, email: e.target.value })
          // }
          type="text"
          name="email"
          title="email"
          placeholder="example@mail.com "
          className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
        />
        <input
          // value={cradentials.email}
          // onChange={(e: any) =>
          //   setCradentials({ ...cradentials, email: e.target.value })
          // }
          type="text"
          name="password"
          title="password"
          placeholder="******** "
          className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
        />
        <input
          // value={cradentials.email}
          // onChange={(e: any) =>
          //   setCradentials({ ...cradentials, email: e.target.value })
          // }
          type="text"
          name="Name"
          title="Name"
          placeholder="Name "
          className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
        />
        <input
          // value={cradentials.email}
          // onChange={(e: any) =>
          //   setCradentials({ ...cradentials, email: e.target.value })
          // }
          type="text"
          name="Name"
          title="Name"
          placeholder="Designation "
          className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
        />
        <input
          // value={cradentials.email}
          // onChange={(e: any) =>
          //   setCradentials({ ...cradentials, email: e.target.value })
          // }
          type="text"
          name="Name"
          title="Name"
          placeholder="https://github.com/ "
          className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
        />
        <input
          // value={cradentials.email}
          // onChange={(e: any) =>
          //   setCradentials({ ...cradentials, email: e.target.value })
          // }
          type="text"
          name="Name"
          title="Name"
          placeholder="https://linkedin.com/ "
          className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
        />
        <input
          // value={cradentials.email}
          // onChange={(e: any) =>
          //   setCradentials({ ...cradentials, email: e.target.value })
          // }
          type="text"
          name="Name"
          title="Name"
          placeholder="https://twitter.com/ "
          className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
        />
        <div className="flex max-sm:py-5 sm:py-[1vw] gap-5">
          <label className="text-red-600 font-medium mb-2">
            Choose a color:
          </label>

          {colors.map((color: any) => (
            <label
              onClick={() => setSelectedColor(color.value)}
              key={color.value}
              className="inline-flex cursor-pointer items-center mb-2"
            >
              <input
                type="radio"
                className="hidden"
                name="color"
                value={color.value}
                onChange={handleColorChange}
              />
              <div
                className={`w-6 h-6 rounded-full ${color.value} ${
                  color.value === selectedColor && "border-2 border-white"
                } mr-2 border-2 border-slate-600/50 cursor-pointer`}
              ></div>
              {color.name}
            </label>
          ))}
        </div>
        <button
          //   onClick={() => Login()}
          type="button"
          className="bg-red-600 hover:bg-red-600/75 text-white placeholder:text-center text-center shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
        >
          Submit
        </button>
      </div>
      <AiFillPlusCircle
        onClick={() => setIsMemberDialog(!isMemberDialog)}
        className={`cursor-pointer ${
          isMemberDialog && "rotate-[135deg]"
        } text-red-600 hover:text-red-600/75 transition-all duration-300 absolute sm:bottom-[3vw] max-sm:bottom-10 sm:right-[3vw] max-sm:text-7xl max-sm:right-5 sm:text-[5vw]`}
      />
    </div>
  );
}
