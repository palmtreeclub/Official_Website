"use client";
import TeamCard from "@/app/components/TeamCard";
import { useFirebase } from "@/app/context/firebase";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const firebase: any = useFirebase();
  const imgRef: any = useRef();
  const [isMemberDialog, setIsMemberDialog] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [members, setMembers] = useState(firebase?.members);
  const [previewAvtar, setPreviewAvtar] = useState(null);
  const [newMemberDetails, setNewMemberDetails] = useState({
    name: "",
    designation: "",
    color: "",
    github: "",
    linkedin: "",
    twitter: "",
    avtar: null,
  });
  const [newMemberCradentials, setNewMemberCradentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  useEffect(() => {
    firebase.isLoggedIn ? null : router.push("/login");
    console.log(firebase.isLoggedIn, "team");
    setMembers(firebase?.members);
  }, [firebase?.isLoggedIn, firebase?.members]);

  const colors = [
    { name: "Blue", value: "bg-blue-600", dbValue: "blue" },
    { name: "Red", value: "bg-red-600", dbValue: "red" },
    { name: "Yellow", value: "bg-yellow-600", dbValue: "yellow" },
    { name: "Green", value: "bg-green-600", dbValue: "green" },
    { name: "Purple", value: "bg-purple-600", dbValue: "purple" },
  ];

  const handleColorChange = (e: any, index: any) => {
    setSelectedColor(e.target.value);
    setNewMemberDetails({
      ...newMemberDetails,
      color: colors[index].dbValue,
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewMemberDetails({
      ...newMemberDetails,
      [name]: value,
    });
  };

  const handleImgChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const base64String = event.target.result;
        console.log(base64String);
        setNewMemberDetails({
          ...newMemberDetails,
          avtar: file,
        });
        setPreviewAvtar(base64String); // Set the preview after loading the file
      };

      reader.readAsDataURL(file);
    }
  };

  const SubmitDetails = async () => {
    const res = await firebase.addNewMemberDetails(
      newMemberDetails,
      newMemberCradentials
    );
    if (res.success) {
      toast.success("New Member Successfully Added!!!");
      setNewMemberDetails({
        name: "",
        designation: "",
        color: "",
        github: "",
        linkedin: "",
        twitter: "",
        avtar: null,
      });
      setNewMemberCradentials({
        email: "",
        password: "",
      });
      setPreviewAvtar(null);
    } else toast.error(res.data);
  };

  return (
    <div
      className={`flex z-30 relative max-sm:pt-10 sm:pt-[5vw] w-full h-max justify-center ${
        isMemberDialog && "bg-black/10"
      } items-center`}
    >
      <ToastContainer />
      {isMemberDialog && (
        <div className="flex w-full h-full fixed max-sm:flex-col-reverse overflow-hidden sm:gap-[5vw] max-sm:gap-10  z-50 backdrop-blur-sm  justify-center items-center top-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
            className="flex relative h-max z-50 max-sm:w-4/5 sm:w-[50vw] sm:gap-[.4vw] max-sm:gap-5 flex-col sm:p-[2vw] bg-slate-300 max-sm:p-10 max-sm:rounded-xl sm:rounded-[1vw]"
          >
            <h1 className="max-sm:text-2xl text-center w-full text-[2vw] font-medium text-red-500">
              Add New Member
            </h1>
            <input
              value={newMemberCradentials.email}
              onChange={(e: any) =>
                setNewMemberCradentials({
                  ...newMemberCradentials,
                  email: e.target.value,
                })
              }
              type="text"
              name="email"
              title="email"
              placeholder="example@mail.com "
              className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
            />
            <input
              value={newMemberCradentials.password}
              onChange={(e: any) =>
                setNewMemberCradentials({
                  ...newMemberCradentials,
                  password: e.target.value,
                })
              }
              type="text"
              name="password"
              title="password"
              placeholder="******** "
              className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
            />
            <input
              value={newMemberDetails.name}
              onChange={handleInputChange}
              type="text"
              name="name"
              title="Name"
              placeholder="Name "
              className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
            />
            <input
              value={newMemberDetails.designation}
              onChange={handleInputChange}
              type="text"
              name="designation"
              title="Name"
              placeholder="Designation "
              className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
            />
            <input
              value={newMemberDetails.github}
              onChange={handleInputChange}
              type="text"
              name="github"
              title="Name"
              placeholder="https://github.com/ "
              className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
            />
            <input
              value={newMemberDetails.linkedin}
              onChange={handleInputChange}
              type="text"
              name="linkedin"
              title="Name"
              placeholder="https://linkedin.com/ "
              className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
            />
            <input
              value={newMemberDetails.twitter}
              onChange={handleInputChange}
              type="text"
              name="twitter"
              title="Name"
              placeholder="https://twitter.com/ "
              className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
            />
            <input
              ref={imgRef}
              type="file"
              name="image"
              title="image"
              className="hidden"
              onChange={(e: any) => handleImgChange(e)}
            />
            <button
              onClick={() => imgRef?.current?.click()}
              type="button"
              className="bg-red-600 w-max hover:bg-red-600/75 text-white placeholder:text-center text-center shadow-inner max-sm:rounded-md sm:rounded-[.5vw]  mt-2 max-sm:p-3 outline-none  sm:p-[.4vw]"
            >
              Choose Avtar
            </button>
            <div className="flex max-sm:py-5 sm:py-[1vw] flex-wrap gap-5">
              <label
                onClick={() =>
                  console.log(newMemberDetails.avtar, previewAvtar)
                }
                className="text-red-600 font-medium mb-2"
              >
                Choose a color:
              </label>

              {colors.map((color: any, index: any) => (
                <label
                  onClick={(e) => handleColorChange(e, index)}
                  key={color.value}
                  className="inline-flex cursor-pointer items-center mb-2"
                >
                  <input
                    type="radio"
                    className="hidden"
                    name="color"
                    value={color.value}
                    checked={selectedColor === color.value}
                    onClick={(e) => handleColorChange(e, index)}
                  />
                  <div
                    className={`w-6 h-6 rounded-full ${color.value} ${
                      color.value === selectedColor && "border-2 border-white"
                    } mr-2 border-2 border-slate-600/50 cursor-pointer`}
                  ></div>
                  {color.name}
                </label>
              ))}
            </div>
            <button
              onClick={() => SubmitDetails()}
              type="button"
              className="bg-red-600 hover:bg-red-600/75 text-white placeholder:text-center text-center shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
            >
              Submit
            </button>
          </motion.div>
          <div className="flex sm:p-[2vw] max-sm:p-5 bg-white sm:rounded-[2vw] max-sm:rounded-xl shadow-xl">
            <TeamCard
              member={{
                name: newMemberDetails.name,
                designation: newMemberDetails.designation,
                avtar: previewAvtar,
                color: newMemberDetails.color,
              }}
            />
          </div>
        </div>
      )}
      <div className="border-t-2  pb-10 flex flex-col justify-center items-center  dark:border-t-slate-700 border-t-slate-400/40  w-4/5">
        <h1 className="max-sm:text-2xl font-medium text-slate-600 sm:text-[2.3vw] max-sm:p-10 sm:p-[2vw] text-center w-full">
          Core Team Members
        </h1>
        <div className="flex flex-wrap w-full justify-center items-center sm:gap-[3vw] max-sm:gap-10">
          {members?.map((member: any) => (
            <TeamCard key={member} member={member} />
          ))}
        </div>
      </div>
      <AiFillPlusCircle
        onClick={() => setIsMemberDialog(!isMemberDialog)}
        className={`cursor-pointer ${
          isMemberDialog && "rotate-[135deg]"
        } text-red-600 z-50 hover:text-red-600/75 transition-all duration-300 fixed sm:bottom-[3vw] max-sm:bottom-10 sm:right-[3vw] max-sm:text-7xl max-sm:right-5 sm:text-[5vw]`}
      />
    </div>
  );
}
