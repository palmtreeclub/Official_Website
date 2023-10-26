"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const authorised = false;
  useEffect(() => {
    if (window.innerWidth) {
      window.innerWidth > 600 ? setIsMobile(true) : setIsMobile(false);
    }
    console.log({ pathname }, "Mobile");
  }, []);

  const toggleMobileMenu = (e: any) => {
    e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {pathname === "/login" ? (
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
          {authorised && (
            <div
              className={`link relative transition-all duration-300 overflow-hidden z-40 max-sm:px-5 max-sm:backdrop-blur-xl max-sm:bg-slate-50 dark:max-sm:bg-slate-800 dark:text-white/50 flex max-sm:flex-col max-sm:text-md sm:text-[1.4vw] sm:font-semibold gap-[1.5vw] text-slate-600 ${
                isMobileMenuOpen ? "h-max max-sm:py-5" : "max-sm:h-0"
              }`}
            >
              <Link className="hover:text-red-600" href={"/"}>
                Home
              </Link>
              <Link className="hover:text-blue-600" href={"/events"}>
                Events
              </Link>
              <Link className="hover:text-green-600" href={"/our_team"}>
                Our Teams
              </Link>
              <Link className="hover:text-yellow-600" href={"/contact_us"}>
                Contact Us
              </Link>
              <div
                onClick={() => router.push("/login")}
                className="flex transition-all duration-300 sm:text-white max-sm:text-blue-600 cursor-pointer sm:bg-blue-600 h-max py-[.3vw] sm:px-[1vw] rounded-full hover:shadow-[0_5px_10px_rgba(255,0,10,.4)] max-sm:text-md sm:text-[1.2vw]"
              >
                Team Login
              </div>
            </div>
          )}
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
            <Link className="hover:text-red-600" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-blue-600" href={"/events"}>
              Events
            </Link>
            <Link className="hover:text-green-600" href={"/our_team"}>
              Our Teams
            </Link>
            <Link className="hover:text-yellow-600" href={"/contact_us"}>
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
