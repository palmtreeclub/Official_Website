import Image from "next/image";

export const GDSCImageCard = () => (
  <div className="shadow-[0_0_10px_1px_rgba(0,0,0,.2)] p-[1vw] bg-white  rounded-[1vw] overflow-hidden">
    <div className="logo relative  w-[20vw] h-[20vw]  max-sm:w-[45vw] max-sm:h-[8vw]">
      <Image
        src={"/Assets/GDSC_SOU_DB.png"}
        alt="event"
        layout="fill"
        priority
        objectFit="contain"
        fetchPriority="high"
        quality={60}
      />
    </div>
  </div>
);
