"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { IoArrowUndo } from "react-icons/io5";
import { useFirebase } from "../context/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const firebase: any = useFirebase();
  const pathname = usePathname();
  useEffect(() => {
    if (window.innerWidth) {
      window.innerWidth > 600 ? setIsMobile(true) : setIsMobile(false);
    }
    firebase?.isLoggedIn === true ? setIsLoggedIn(true) : setIsLoggedIn(false);
    console.log(firebase?.isLoggedIn, isLoggedIn, "navbar");
  }, [firebase?.isLoggedIn]);

  const toggleMobileMenu = (e: any) => {
    e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {pathname === "/login" || pathname.includes("/team/") ? (
        <div
          className={`flex max-sm:flex-col z-50 fixed top-0 w-full h-max dark:bg-slate-800/50 bg-slate-50/80 shadow-md backdrop-blur-md ${
            isLoggedIn
              ? "sm:justify-between max-sm:justify-start"
              : "justify-center max-sm:justify-start"
          } sm:px-[2vw] sm:py-[1vw]`}
        >
          <div className="logo  cursor-pointer h-full max-sm:py-5 px-5 justify-center text-3xl items-center flex">
            {!isLoggedIn && (
              <IoArrowUndo
                className="absolute sm:left-[2vw]  hover:text-red-500 max-sm:left-5 text-red-300 transition-all duration-300"
                onClick={() => router.push("/")}
              />
            )}
            <ToastContainer />
            <div className="logo dark:-mt-3 dark:bg-gdsc-sou-bw-logo bg-gdsc-sou-logo bg-cover sm:dark:w-[20vw] sm:w-[18vw] max-sm:dark:w-[55vw]  sm:h-[3vw] max-sm:w-[45vw] max-sm:h-[8vw]" />
            {isLoggedIn && (
              <HiBars3BottomRight
                onClick={(e) => toggleMobileMenu(e)}
                className="sm:hidden dark:text-white absolute right-5 top-0"
              />
            )}
          </div>
          <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hover:text-blue-600 max-sm:pt-2 sm:pt-[.4vw] cursor-pointer"
          ></div>
          {isLoggedIn ? (
            <div
              className={`link relative transition-all duration-300 overflow-hidden z-40 max-sm:px-5 max-sm:backdrop-blur-xl max-sm:bg-slate-50 dark:max-sm:bg-slate-800 dark:text-white/50 flex max-sm:flex-col max-sm:text-md sm:text-[1.4vw] sm:font-semibold gap-[1.5vw] text-slate-600 ${
                isMobileMenuOpen ? "h-max max-sm:py-5" : "max-sm:h-0"
              }`}
            >
              <Link
                onClick={() =>
                  isMobile && setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                className="hover:text-red-600"
                href={"/team/dashboard"}
              >
                Home
              </Link>
              <Link
                onClick={() =>
                  isMobile && setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                className="hover:text-blue-600"
                href={"/team/events"}
              >
                Events
              </Link>
              <Link
                onClick={() =>
                  isMobile && setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                className="hover:text-green-600"
                href={"/team/materials"}
              >
                Materials
              </Link>
              {(firebase?.user?.email === "yashsoni48678@gmail.com" ||
                firebase?.user?.email === "devshinde@gmail.com") && (
                <Link
                  onClick={() =>
                    isMobile && setIsMobileMenuOpen(!isMobileMenuOpen)
                  }
                  className="hover:text-green-600"
                  href={"/team/members"}
                >
                  Team
                </Link>
              )}
              <div
                onClick={() => {
                  firebase
                    ?.signout()
                    .then(() => {
                      firebase.setIsLoggedIn(false);
                      router.push("/");
                      firebase.setUser(null);
                      toast.success("You are now logged out!!", {
                        className: "sm:text-[1vw] max-sm:text-xl",
                      });
                    })
                    .catch((err: any) => {
                      toast.error("Error: " + err.message);
                    });
                  router.push("/");
                }}
                className="flex transition-all duration-300 sm:text-white max-sm:text-blue-600 cursor-pointer sm:bg-blue-600 h-max py-[.3vw] sm:px-[1vw] rounded-full hover:shadow-[0_5px_10px_rgba(255,0,10,.4)] max-sm:text-md sm:text-[1.2vw]"
              >
                Logout
              </div>
              <div
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:text-blue-600 max-sm:pt-2 sm:pt-[.4vw] cursor-pointer"
              >
                {theme === "dark" ? <BsSunFill /> : <BsFillMoonStarsFill />}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex max-sm:flex-col z-50 fixed top-0 w-full h-max dark:bg-slate-800/50 bg-slate-50/80 shadow-md backdrop-blur-md justify-between sm:px-[2vw] sm:py-[1vw]">
          <div className="logo cursor-pointer h-full max-sm:py-5 px-5 justify-between text-3xl items-center flex">
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                router.push("/");
              }}
              className="logo dark:-mt-3 dark:bg-gdsc-sou-bw-logo bg-gdsc-sou-logo bg-cover sm:dark:w-[20vw] sm:w-[18vw] max-sm:dark:w-[55vw]  sm:h-[3vw] max-sm:w-[45vw] max-sm:h-[8vw]"
            />
            <HiBars3BottomRight
              onClick={(e) => toggleMobileMenu(e)}
              className="sm:hidden dark:text-white"
            />
          </div>
          <div
            className={`link relative transition-all duration-300 overflow-hidden z-40 max-sm:px-5 max-sm:backdrop-blur-xl max-sm:bg-slate-50 dark:max-sm:bg-slate-800 dark:text-white/50 flex max-sm:flex-col max-sm:text-md sm:text-[1.4vw] sm:font-semibold gap-[1.5vw] text-slate-600 ${
              isMobileMenuOpen ? "h-max max-sm:py-5" : "max-sm:h-0"
            }`}
          >
            <Link
              onClick={() => isMobile && setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-red-600"
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={() => isMobile && setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-blue-600"
              href={"/events"}
            >
              Events
            </Link>
            <Link
              onClick={() => isMobile && setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-green-600"
              href={"/our_team/leads"}
            >
              Our Teams
            </Link>
            <Link
              onClick={() => isMobile && setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-yellow-600"
              href={"/contact_us"}
            >
              Contact Us
            </Link>
            <div
              onClick={() => router.push("/login")}
              className="flex transition-all duration-300 sm:text-white max-sm:text-blue-600 cursor-pointer sm:bg-blue-600 h-max py-[.3vw] sm:px-[1vw] rounded-full hover:shadow-[0_5px_10px_rgba(255,0,10,.4)] max-sm:text-md sm:text-[1.2vw]"
            >
              Team Login
            </div>
          </div>
        </div>
      )}
    </>
  );
}
