import Image from "next/image";

export const FloatingSvgs = () => {
  return (
    <>
      <div className="w-[7vw] h-[7vw] -left-[2vw] rounded-full top-[7vw] absolute">
        <Image
          src={"/Assets/book-eb.png"}
          alt="logo"
          layout="fill"
          className="dark:invert"
          objectFit="contain"
        />
      </div>
      <div className="w-[10vw] h-[10vw] right-[1vw] rounded-full top-[7vw] absolute">
        <Image
          src={"/Assets/globe-eb.png"}
          alt="logo"
          layout="fill"
          className="dark:invert"
          objectFit="contain"
        />
      </div>
      <div className="w-[7vw] h-[7vw] right-[5vw] rounded-full bottom-[2vw] absolute">
        <Image
          src={"/Assets/rural-eb.png"}
          alt="logo"
          layout="fill"
          className="dark:invert"
          objectFit="contain"
        />
      </div>
    </>
  );
};
