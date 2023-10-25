"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth) {
      window.innerWidth > 600 ? setIsMobile(true) : setIsMobile(false);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex max-sm:flex-col z-50 fixed top-0 w-full h-max bg-slate-50/80 shadow-md backdrop-blur-md justify-between px-[2vw] sm:py-[1vw]">
      <div
        onClick={() => router.push("/")}
        className="logo cursor-pointer h-full max-sm:py-5 px-5 justify-between text-3xl items-center flex"
      >
        <div className="logo bg-gdsc-sou-logo bg-cover sm:w-[18vw] sm:h-[3vw] max-sm:w-[45vw] max-sm:h-[8vw]" />
        <HiBars3BottomRight onClick={toggleMobileMenu} className="sm:hidden" />
      </div>
      <div
        className={`link relative transition-all duration-300 overflow-hidden z-40 max-sm:px-5 max-sm:backdrop-blur-xl max-sm:bg-slate-50 flex max-sm:flex-col max-sm:text-md sm:text-[1.4vw] sm:font-semibold gap-[1.5vw] text-slate-600 ${
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
          onClick={() =>
            window.open(
              "https://gdsc.community.dev/silver-oak-university-ahmedabad/",
              "_blank"
            )
          }
          className="flex transition-all duration-300 sm:text-white max-sm:text-blue-600 cursor-pointer sm:bg-blue-600 h-max py-[.3vw] sm:px-[1vw] rounded-full hover:shadow-[0_5px_10px_rgba(255,0,10,.4)] max-sm:text-md sm:text-[1.2vw]"
        >
          JOIN US
        </div>
      </div>
    </div>
  );
}
