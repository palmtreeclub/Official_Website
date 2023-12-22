import Skeleton from "react-loading-skeleton";

export const WelcomMessageCard = ({ name }: { name: string }) => (
  <div className="w-[70vw] bg-cyan-500/10 shadow-[0_0_10px_1px_rgba(0,0,0,.2)] rounded-[1vw] text-white flex-wrap p-[2vw]">
    <h1 className="text-[2.5vw] font-bold">
      <span className="text-red-500">Hello</span>{" "}
      <span className="text-yellow-500">
        {(name || <Skeleton width={"10rem"} />) + ","}
      </span>
    </h1>
    <h3 className="text-[1.8vw] font-bold">
      <span className="text-blue-500">Welcome to</span>{" "}
      <span className="bgGradientAnim text-transparent">
        GDSC Silver Oak Univeristy
      </span>{" "}
      <span className="text-blue-500">community</span>{" "}
    </h3>
    <h4 className="text-[1.2vw] pt-[1vw] font-semibold text-slate-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere
      adipisci labore? Maxime excepturi, qui quisquam a earum ex beatae sapiente
      sint dicta dolor, quam laboriosam. Soluta recusandae tempora optio et, sit
      voluptate in! Omnis excepturi expedita dignissimos voluptatum deleniti!
    </h4>
    <button
      className="bg-indigo-500 mt-[2vw] rounded-xl hover:bg-indigo-500/80 duration-300 transition-all font-bold p-[.5vw] px-[2vw] text-[1.2vw]"
      type={"button"}
    >
      Learn More
    </button>
  </div>
);
