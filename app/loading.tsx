import React from "react";

export default function Loading() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="loader">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
        <div className="dot dot4"></div>
        <div className="dot dot5"></div>
        <div className="dot dot6"></div>
        <div className="dot dot7"></div>
      </div>
    </div>
  );
}
