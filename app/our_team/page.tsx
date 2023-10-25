import React from "react";

export default function page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex w-full h-full flex-col justify-center items-center">
        <div className="flex pb-[3vw] pt-[7vw] bg-slate-500 bg-team-header bg-cover bg-fixed h-max flex-col text-center w-full justify-center items-center">
          <div className="w-4/5 flex font-medium  justify-center flex-col items-center">
            <h1 className="text-[3vw] dark:text-white text-slate-800">
              Meet The Team
            </h1>
            <h4 className="dark:text-white text-slate-700 sm:text-[1.5vw] w-11/12">
              Every member of the society has always been passionate and hard
              working towards their goal, creating a positive work environment.
              Their support and will to help each other out in every way
              possible is what makes DSC-SOU a &ldquo;team&rdquo;.
            </h4>
          </div>
        </div>
        <div className="flex w-full h-full shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <h1>GDSC Lead 2023</h1>
        </div>
      </div>
    </div>
  );
}
