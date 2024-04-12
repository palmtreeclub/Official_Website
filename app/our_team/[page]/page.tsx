"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import TeamCard from "../../components/v1/TeamCard";
import ReactCanvasConfetti from "react-canvas-confetti";
import Confettin from "../../components/v1/Confettin";
import { useFirebase } from "../../context/firebase";
import { useTheme } from "next-themes";
import { useParams, useRouter } from "next/navigation";

interface Member {
  img: string;
  gender: string;
  color: string;
  name: string;
  designation: string;
  linkedin: string;
  github: string;
  twitter: string;
}

export default function Page() {
  const [GdscLead, setGdscLead] = useState({});
  const [members, setMembers] = useState([
    {
      img: "",
      gender: "male",
      color: "red",
      name: "Abhay Mandli",
      designation: "Management Lead",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "blue",
      name: "Shwetkamal Gaud",
      designation: "Cybersecurity Lead",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "yellow",
      name: "Dhritiman Bharadwaj",
      designation: "Technical Lead",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "teal",
      name: "Aayush Parikh",
      designation: "Media Strategist & Designer",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "green",
      color: "red",
      name: "Het Limbachiya",
      designation: "Marketing Strategist",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "blue",
      name: "Ansh Vachheta",
      designation: "UX Designer",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "red",
      name: "Vimarsh Tiwari",
      designation: "Graphic Designer",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "female",
      color: "purple",
      name: "Gunja Shah",
      designation: "Content Editor",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    {
      img: "",
      gender: "male",
      color: "yellow",
      name: "Jaival Suthat",
      designation: "Content Manager",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
  ]);
  const [facultyAdvisors, setFacultyAdvisors] = useState([]);
  const firebase: any = useFirebase();
  const [isVisible, setIsVisible] = useState(false);
  const { theme, setTheme } = useTheme();
  const { page } = useParams();

  useEffect(() => {
    const pageName = page === "leads" ? "core_team" : page;
    setMembers(
      firebase.members.filter((member: any) => member.type === pageName)
    );

    const lead: any = firebase.members.filter(
      (member: any) => member.type === "lead"
    );
    const FacultyAdvisors: any = firebase.members.filter(
      (member: any) => member.type === "facultyAdvisors"
    );
    setFacultyAdvisors(FacultyAdvisors);
    setGdscLead(lead[0]);
  }, [firebase.members, page]);
  return (
    <div className="w-full h-max flex justify-center items-center">
      <div className="flex w-full h-full flex-col justify-center items-center">
        <div
          className={`flex overflow-hidden relative max-sm:py-24 sm:pb-[3vw] sm:pt-[7vw] h-max flex-col max-sm:text-center sm:text-center w-full justify-center items-center ${
            theme === "dark" && "invert"
          }`}
        >
          <Image
            src={"/Assets/TEAM_HEADER_BG.png"}
            layout="fill"
            objectFit="cover"
            className="-z-10 dark:invert"
            priority
            fetchPriority="high"
            alt="Team-Cover-Photo"
          />
          <div className="w-4/5 flex font-medium max-sm:gap-3 justify-center flex-col items-center">
            <h1 className="sm:text-[3vw] max-sm:text-3xl dark:text-white text-slate-800">
              Meet The Team
            </h1>
            <h4 className="dark:text-white text-slate-700 max-sm:text-md sm:text-[1.5vw] sm:w-11/12">
              Every member of the society has always been passionate and hard
              working towards their goal, creating a positive work environment.
              Their support and will to help each other out in every way
              possible is what makes Palm Tree Club a &ldquo;team&rdquo;.
            </h4>
          </div>
        </div>
        {(page === "leads" || page === "core_team") && (
          <div className="flex flex-wrap pb-[2vw] w-full justify-center items-center sm:gap-[3vw] max-sm:gap-10">
            {facultyAdvisors?.length > 0 && (
              <>
                <h1 className="max-sm:text-2xl font-medium text-slate-600 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-full">
                  Meet our Faculty Advisords
                </h1>
              </>
            )}
            {facultyAdvisors?.length > 0 &&
              facultyAdvisors.map((faculty: any, index) => {
                return (
                  <>
                    <TeamCard
                      key={faculty?.id}
                      onClick={() => {
                        setIsVisible(true);
                      }}
                      member={faculty}
                    />
                  </>
                );
              })}
          </div>
        )}

        <h1 className="max-sm:text-2xl border-t-2 border-t-slate-400/40 font-medium text-slate-600 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-full">
          Meet to Our Captain
        </h1>

        <Confettin onClose={setIsVisible} onFire={isVisible} />

        <TeamCard
          onClick={() => {
            setIsVisible(true);
          }}
          member={GdscLead}
        />
        <div className="border-t-2 pb-10 flex flex-col justify-center items-center  dark:border-t-slate-700 border-t-slate-400/40  w-4/5">
          <h1 className="max-sm:text-2xl font-medium text-slate-600 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-full">
            {page === "alumni"
              ? "Formar Leads"
              : page === "volunteer"
              ? "Our Volunteers"
              : "Core Team"}
          </h1>
          <div className="flex flex-wrap w-full justify-center items-center sm:gap-[3vw] max-sm:gap-10">
            {members.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// pages/[page].tsx
// import { useRouter } from "next/navigation";

// export default function Page() {
//   const router = useRouter();
//   const { page } = router.query;

//   return (
//     <div>
//       <h1>Dynamic Page</h1>
//       <p>Page Parameter: {page}</p>
//     </div>
//   );
// }
