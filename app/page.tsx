import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <section className="flex w-full h-full justify-center items-center">
        <div className="flex w-4/5 h-4/5 max-md:flex-col justify-center items-center">
          <div className=" flex flex-col sm:w-1/2">
            <div className="bg-gdsccode-logo sm:w-[6vw] sm:h-[6vw] max-sm:w-[12vw] max-sm:h-[12vw] bg-cover"></div>
            <h1 className="sm:text-[1.7vw] max-sm:text-md font-medium text-slate-600">
              <span className="sm:text-[2.2vw] max-md:text-2xl">
                <span>Google</span>&nbsp;<span>Developer</span>&nbsp;{" "}
                <span>Student</span> &nbsp;<span>Club</span> &nbsp; <br />
              </span>
              <span className="uppercase max-md:text-xl font-google-sans font-bold text-transparent bgGradientAnim">
                Silver Oak University
              </span>
              <br />A technical club focused on building a community of student
              developers interested in solving real-world problems.
            </h1>
          </div>
          {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
          <div className="relative sm:w-[40vw]  sm:h-[40vw] max-sm:w-[90vw] max-sm:h-[90vw] ">
            <Image
              src="/Svg/Hero_Section.svg"
              layout="fill"
              className="max-md:h-fit max-md:w-96"
              alt="hackathon"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center w-full h-full">
        <div className="flex w-4/5 h-max max-md:flex-col justify-center  items-center">
          <div className=" sm:w-[40vw]  sm:h-[35vw] max-sm:w-[80vw] max-sm:h-[80vw] ">
            <h1 className="max-sm:text-2xl text-[2vw] font-medium text-red-500">
              About Us
            </h1>
            <h1 className="max-sm:text-2xl text-[3vw] font-medium text-blue-400">
              What Do We Do?
            </h1>
            <div className="relative sm:w-[30vw]  sm:h-[20vw] max-sm:w-[60vw] max-sm:h-[60vw] ">
              <Image
                src="/Assets/About.gif"
                layout="fill"
                className="mt-[3vw]"
                alt="hackathon"
                objectFit="contain"
              />
            </div>
          </div>
          <div className=" flex flex-col sm:w-1/2">
            <h1 className="sm:text-[1.3vw] max-sm:text-justify max-sm:text-md font-medium text-slate-600">
              <br />
              <span className="uppercase  max-md:text-xl sm:text-3xl font-google-sans font-bold text-transparent bgGradientAnim">
                DSC SOU
              </span>{" "}
              conducts workshops, seminars and technical showcases for Silveroak
              University as well as other colleges in Gujarat. In addition to
              workshops, Silveroak University also provides an opportunity for
              students to apply their newly gained skills to develop solutions
              for local organizations and then provide visibility via showcases.
              From learning about new technologies with materials provided by
              Google Developers to attending talks, events, DevFests and
              connecting with developers around the world, DSC will help the
              students get it.
            </h1>
          </div>
          {/* <Image alt="Hero SVG" layout="fill" src={"/Hero_Section.svg"} /> */}
        </div>
      </section>
    </>
  );
}
