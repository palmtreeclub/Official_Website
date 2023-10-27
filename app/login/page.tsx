"use client";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cradentials, setCradentials] = useState({ email: "", password: "" });
  const firebase: any = useFirebase();
  const router = useRouter();

  useEffect(() => {
    if (firebase.isLoggedIn) router.push("/team/dashboard");
    console.log(firebase.isLoggedIn);
  }, [firebase.isLoggedIn]);

  const isValid = () => {
    if (!cradentials.email) {
      toast.error("Please enter Email address");
      return false;
    }
    if (!cradentials.password) {
      toast.error("Please enter Password");
      return false;
    }
    return true;
  };

  const Login = () => {
    if (isValid()) {
      firebase
        .signIn(cradentials.email, cradentials.password)
        .then((data: any) => {
          toast.success("You are logged in successfully", {
            className: "sm:text-[1vw] max-sm:text-xl",
          });
          router.push("/team/dashboard");
        })
        .catch((err: any) => {
          toast.error("Error: " + err.message);
        });
    }
  };

  return (
    <div className="flex flex-col dark:bg-event-bw bg-event-bg bg-cover w-full h-full justify-center items-center">
      <ToastContainer />
      <div className="flex flex-col sm:py-[1vw] max-sm:py-5 gap-5 shadow-xl dark:bg-slate-900/80 bg-white/80 w-max h-max sm:p-[5vw max-sm:p-10 rounded-[5%] justify-center items-center">
        <h1
          className={`max-sm:text-2xl text-blue-600 text-center cursor-pointer text-[2vw] font-medium `}
        >
          Login
        </h1>
        <div className="flex w-full">
          <h1
            onClick={() => setIsAdmin(false)}
            className={`max-sm:text-2xl w-1/2 sm:px-[7vw] max-sm:px-12 border-r-2 text-center   cursor-pointer text-[2vw] font-medium ${
              !isAdmin ? "text-red-500" : "text-red-300"
            } `}
          >
            Team
          </h1>
          <h1
            onClick={() => setIsAdmin(true)}
            className={`max-sm:text-2xl w-1/2 sm:px-[7vw] max-sm:px-12 cursor-pointer text-[2vw] font-medium ${
              isAdmin ? "text-red-500" : "text-red-300"
            } `}
          >
            Admin
          </h1>
        </div>
        <div className="flex w-full  sm:px-[2vw] max-sm:px-0 flex-col sm:gap-[1vw] max-sm:gap-5">
          <input
            value={cradentials.email}
            onChange={(e: any) =>
              setCradentials({ ...cradentials, email: e.target.value })
            }
            type="email"
            name="email"
            title="Email"
            placeholder="Enter your email "
            className="bg-slate-100 dark:text-white dark:bg-slate-800 placeholder:text-center text-center focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
          />
          <input
            value={cradentials.password}
            onChange={(e: any) =>
              setCradentials({ ...cradentials, password: e.target.value })
            }
            type="password"
            name="password"
            title="Password"
            placeholder="Enter your password "
            className="bg-slate-100 dark:text-white dark:bg-slate-800 placeholder:text-center text-center focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
          />
          <button
            onClick={() => Login()}
            type="button"
            className="bg-red-600 hover:bg-red-600/75 text-white placeholder:text-center text-center shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
