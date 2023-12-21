"use client";
import TeamCard from "@/app/components/TeamCard";
import { useFirebase } from "@/app/context/firebase";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export default function Page() {
  const [selectedType, setSelectedType] = useState("gdsc_lead"); // Default type
  const firebase: any = useFirebase();
  const imgRef: any = useRef();
  const [isOptions, setIsOptions] = useState(false);
  const [isTip, setIsTip] = useState(false);
  const [isDeleteMode, setDeleteMode] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [isMemberDialog, setIsMemberDialog] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedMemberColor, setSelectedMemberColor] = useState<any>(null);
  const [volunteers, setVolunteers] = useState([]);
  const [gdscLeads, setGdscLeads] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [coreTeam, setCoreTeam] = useState([]);
  const [showMembers, setShowMembers] = useState([]);
  const [previewAvtar, setPreviewAvtar] = useState(null);
  const [newMemberDetails, setNewMemberDetails] = useState({
    name: "",
    designation: "",
    color: "",
    github: "",
    linkedin: "",
    twitter: "",
    avtar: null,
    type: "",
  });
  const [newMemberCradentials, setNewMemberCradentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      const volunteerMembers = firebase.members.filter(
        (member: any) => member.type === "volunteer"
      );
      const gdscLeadMembers = firebase.members.filter(
        (member: any) => member.type === "gdsc_lead"
      );
      const alumniMembers = firebase.members.filter(
        (member: any) => member.type === "alumni"
      );
      const coreTeamMembers = firebase.members.filter(
        (member: any) => member.type === "core_team"
      );
      switch (selectedType) {
        case "volunteer":
          setShowMembers(volunteerMembers);
          break;
        case "gdsc_lead":
          setShowMembers(gdscLeadMembers);
          break;
        case "alumni":
          setShowMembers(alumniMembers);
          break;
        case "core_team":
          setShowMembers(coreTeamMembers);
          break;
        default:
          setShowMembers([]);
      }

      setVolunteers(volunteerMembers);
      setGdscLeads(gdscLeadMembers);
      setAlumni(alumniMembers);
      setCoreTeam(coreTeamMembers);
    } else {
      router.push("/login");
    }
  }, [firebase.isLoggedIn, firebase.members, selectedType]);
  useEffect(() => {
    if (isDeleteMode) {
      setEditMode(false);
      setIsTip(true);
      toast.warning("Delete Mode Activated !!!", {
        className: "sm:text-[1vw] max-sm:text-xl relative z-50",
      });
    }
    if (isEditMode) {
      setIsTip(true);
      setDeleteMode(false);
      toast.info("Edit Mode Activated !!!", {
        className: "sm:text-[1vw] max-sm:text-xl relative z-50",
      });
    }
    if (!isDeleteMode && !isEditMode) setIsTip(false);
  }, [isDeleteMode, isEditMode]);

  const colors = [
    { name: "Blue", value: "bg-blue-600", dbValue: "blue" },
    { name: "Red", value: "bg-red-600", dbValue: "red" },
    { name: "Yellow", value: "bg-yellow-600", dbValue: "yellow" },
    { name: "Green", value: "bg-green-600", dbValue: "green" },
    { name: "Purple", value: "bg-purple-600", dbValue: "purple" },
  ];
  const memberTypes = [
    {
      name: "GDSC Lead",
      value: "gdsc_lead",
      color: "bg-blue-600",
      dbValue: "blue",
    },
    {
      name: "Core Team",
      value: "core_team",
      color: "bg-red-600",
      dbValue: "red",
    },
    {
      name: "Volunteer",
      value: "volunteer",
      color: "bg-yellow-600",
      dbValue: "yellow",
    },
    {
      name: "Alumni",
      value: "alumni",
      color: "bg-green-600",
      dbValue: "green",
    },
  ];

  const handleTypeChange = (newType: any) => {
    console.log(newType, showMembers);

    setSelectedType(newType);
  };

  const handleColorChange = (e: any, index: any) => {
    setSelectedColor(e.target.value);
    setNewMemberDetails({
      ...newMemberDetails,
      color: colors[index].dbValue,
    });
  };
  const handleMemberTypeChange = (e: any, index: any) => {
    setSelectedMemberColor(memberTypes[index].color);
    setNewMemberDetails({
      ...newMemberDetails,
      type: memberTypes[index].value,
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

  const deleteMember = (memberId: any) => {
    if (isDeleteMode) {
      if (confirm("Are you sure you want to delete this member?")) {
        firebase?.deleteMember(memberId);
      }
    }
  };

  const removeAllCurrentDetails = async () => {
    setNewMemberDetails({
      name: "",
      designation: "",
      color: "",
      github: "",
      linkedin: "",
      twitter: "",
      avtar: null,
      type: "",
    });
    setNewMemberCradentials({
      email: "",
      password: "",
    });
    setPreviewAvtar(null);
    setIsMemberDialog(false);
  };

  const onMenuPress = () => {
    setIsOptions(!isOptions);
    if (isOptions) {
      setDeleteMode(false);
      setEditMode(false);
      setIsMemberDialog(false);
      setNewMemberDetails({
        name: "",
        designation: "",
        color: "",
        github: "",
        linkedin: "",
        twitter: "",
        avtar: null,
        type: "",
      });
      setNewMemberCradentials({
        email: "",
        password: "",
      });
      setPreviewAvtar(null);
    }
  };

  const SubmitDetails = async () => {
    const res = await firebase.addNewMemberDetails(
      newMemberDetails,
      newMemberCradentials
    );
    if (res.success) {
      toast.success("New Member Successfully Added!!!", {
        className: "sm:text-[1vw] max-sm:text-xl relative z-50",
      });
      removeAllCurrentDetails();
    } else {
      toast.error(res.data, {
        className: "sm:text-[1vw] max-sm:text-xl relative z-50",
      });
    }
  };

  return (
    <div
      className={`flex z-30 relative overflow-auto scrollbar-none pb-20 max-sm:pt-10 w-full ${
        showMembers?.length > 0 ? "h-[90%] pt-16" : "h-[90%]"
      } justify-center  ${isMemberDialog && "bg-black/10"} items-center`}
    >
      {isTip && (
        <motion.div
          initial={{ translateY: "-100px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className={`max-sm:text-md max-sm:w-4/5 ${
            isDeleteMode && "bg-red-200"
          } ${
            isEditMode && "bg-green-300"
          } sm:w-1/3 shadow-xl max-sm:p-4 sm:p-[2vw] max-sm:rounded-lg sm:rounded-[1vw] fixed sm:top-[7vw] max-sm:top-20 z-50 text-center w-full sm:text-[1.2vw] font-medium text-slate-500`}
        >
          <h1 className="relative">
            Tip
            <GrClose
              onClick={() => setIsTip(false)}
              className="absolute right-0 top-0 text-slate-500 font-bold cursor-pointer"
            />
          </h1>
          <h1 className="w-full">
            {isDeleteMode &&
              "Delete Mode are Activated , just click on member and press Confirm to delete."}
            {isEditMode &&
              "Edit Mode are Activated , just click on member and edit details and hit submit button."}
          </h1>
        </motion.div>
      )}
      <ToastContainer className={"text-xl"} />
      {isMemberDialog && (
        <div className="flex w-full max-sm:h-full  sm:h-full max-sm:scale-90 max-sm:py-24 rounded-2xl fixed max-sm:flex-col-reverse overflow-hidden sm:gap-[5vw] max-sm:gap-10  z-50 backdrop-blur-sm  justify-center items-center top-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
            className="flex relative h-max flex-wrap z-50 max-sm:w-full sm:w-[50vw] sm:gap-y-[.4vw] max-sm:gap-5 flex-cl sm:p-[2vw] bg-blue-200 max-sm:p-10 max-sm:rounded-xl sm:rounded-[1vw]"
          >
            <h1 className="max-sm:text-2xl pb-10 text-center w-full text-[2vw] font-medium text-red-500">
              Add New Member
            </h1>

            <div className="flex justify-center items-center gap-5 w-full">
              <div className="flex justify-center items-center gap-5 w-1/2">
                <h1 className="max-sm:text-[1vw] max-sm:text-xl font-semibold text-red-500">
                  Name:
                </h1>
                <input
                  value={newMemberDetails.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  title="Name"
                  placeholder="Name "
                  className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
                />
              </div>
              <div className="flex justify-center items-center gap-5 w-1/2">
                <h1 className="max-sm:text-[1vw] max-sm:text-xl font-semibold text-red-500">
                  Designation:
                </h1>
                <input
                  value={newMemberDetails.designation}
                  onChange={handleInputChange}
                  type="text"
                  name="designation"
                  title="Name"
                  placeholder="Designation "
                  className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 w-full">
              <div className="flex justify-center items-center gap-5 w-1/2">
                <h1 className="max-sm:text-[1vw] max-sm:text-xl font-semibold text-red-500">
                  Github:
                </h1>
                <input
                  value={newMemberDetails.github}
                  onChange={handleInputChange}
                  type="text"
                  name="github"
                  title="Name"
                  placeholder="https://github.com/ "
                  className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
                />
              </div>
              <div className="flex justify-center items-center gap-5  w-1/2">
                <h1 className="max-sm:text-[1vw] max-sm:text-xl font-semibold text-red-500">
                  Linkedin:
                </h1>

                <input
                  value={newMemberDetails.linkedin}
                  onChange={handleInputChange}
                  type="text"
                  name="linkedin"
                  title="Name"
                  placeholder="https://linkedin.com/ "
                  className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
                />
              </div>
            </div>

            <div className="flex justify-center items-center w-full gap-5">
              <div className="flex justify-center items-center w-1/2 gap-5">
                <h1 className="max-sm:text-[1vw] max-sm:text-xl font-semibold text-red-500">
                  Twitter:
                </h1>
                <input
                  value={newMemberDetails.twitter}
                  onChange={handleInputChange}
                  type="text"
                  name="twitter"
                  title="Name"
                  placeholder="https://twitter.com/ "
                  className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
                />
              </div>
              <div className="flex justify- items-center w-1/2 gap-5">
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
              </div>
            </div>

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
            <div className="flex max-sm:py-5 sm:py-[1vw] flex-wrap gap-5">
              <label
                onClick={() =>
                  console.log(newMemberDetails.avtar, previewAvtar)
                }
                className="text-red-600 font-medium mb-2"
              >
                Member Type:
              </label>

              {memberTypes.map((type: any, index: any) => (
                <label
                  onClick={(e) => handleMemberTypeChange(e, index)}
                  key={type.value}
                  className="inline-flex text-blue-700 font-bold  cursor-pointer items-center mb-2"
                >
                  <input
                    type="radio"
                    className="hidden"
                    name="color"
                    value={type.value}
                    checked={selectedMemberColor === type.color}
                    onClick={(e) => handleMemberTypeChange(e, index)}
                  />
                  <div
                    className={`w-6 h-6 rounded-full ${type.color} ${
                      type.color === selectedMemberColor &&
                      "border-4 border-white"
                    } mr-2 border-2 border-slate-600/50 cursor-pointer`}
                  ></div>
                  {type.name}
                </label>
              ))}
            </div>
            {(newMemberDetails.type === "gdsc_lead" ||
              newMemberDetails.type === "core_team") && (
              <div className="flex justify-center items-center gap-5 pb-5">
                <div className="flex justify-center items-center w-1/2 gap-5">
                  <h1 className="max-sm:text-[1vw] max-sm:text-xl font-semibold text-red-500">
                    Email:
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
                </div>
                <div className="flex justify-center items-center w-1/2 gap-5">
                  <h1 className="max-sm:text-[1vw] max-sm:text-xl font-semibold text-red-500">
                    Password:
                  </h1>
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
                </div>
              </div>
            )}
            <div className="flex w-full gap-5">
              <button
                onClick={() => removeAllCurrentDetails()}
                type="button"
                className="bg-red-600 hover:bg-red-600/75 text-white placeholder:text-center text-center shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
              >
                Cancel
              </button>
              <button
                onClick={() => SubmitDetails()}
                type="button"
                className="bg-yellow-500 hover:bg-yellow-400/70 text-white placeholder:text-center text-center shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none w-full sm:p-[.4vw]"
              >
                Submit
              </button>
            </div>
          </motion.div>
          <div className="flex max-md:hidden sm:p-[2vw] max-sm:p-5 bg-white sm:rounded-[2vw] max-sm:rounded-xl shadow-xl">
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
      <div className="border-t-2 h-4/5  pb-10 flex flex-col justify-center items-center  dark:border-t-slate-700 border-t-slate-400/40  w-4/5 gap-5">
        <div className="flex rounded-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] my-4">
          {memberTypes.map((type, index) => {
            return (
              <button
                key={index}
                type="button"
                className={`${
                  type.value === selectedType
                    ? "text-red-600"
                    : "text-slate-400"
                } p-4 font-semibold`}
                onClick={() => handleTypeChange(type.value)}
              >
                {type.name}
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap w-full h-full pb-10  justify-center items-center sm:gap-[3vw] sm:gap-y-0 max-sm:gap-10">
          {showMembers?.length > 0 ? (
            showMembers?.map((member: any) => (
              <div
                className={`flex pb-10 ${isDeleteMode && "shake"} ${
                  isEditMode && "pulse"
                }`}
                key={member?.id}
                onClick={() => deleteMember(member?.id)}
              >
                <TeamCard key={member} member={member} />
              </div>
            ))
          ) : (
            <div className="max-sm:text-xl h-full font-medium text-slate-600 sm:text-[1.3vw] max-sm:p-10 sm:p-[2vw] text-center w-full">
              No{" "}
              {memberTypes.map((type: any, index: any) => {
                return type.value === selectedType && <span>{type.name}</span>;
              })}{" "}
              Present in DB
            </div>
          )}
        </div>
      </div>
      <div className="">
        {isOptions && (
          <>
            <motion.div
              initial={{ translateY: "100px", opacity: 0 }}
              whileInView={{ translateY: "0px", opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className={`bg-red-600 fixed sm:p-[.6vw] rounded-[50%]  hover:bg-red-600/75 cursor-pointer 
          text-white z-50 transition-all  ${
            isDeleteMode && "grayscale"
          } duration-300  sm:bottom-[21vw] max-sm:bottom-[30vh] sm:right-[3.5vw] max-sm:text-4xl max-sm:right-7 sm:text-[3vw] max-sm:p-3`}
            >
              <MdDelete
                onClick={() => {
                  setEditMode(false);
                  setDeleteMode(!isDeleteMode);
                }}
                className={``}
              />
            </motion.div>
            <motion.div
              initial={{ translateY: "100px", opacity: 0 }}
              whileInView={{ translateY: "0px", opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              className={`cursor-pointer  ${
                isMemberDialog && "grayscale"
              } bg-white rounded-[50%] text-blue-600 z-50 hover:text-blue-600/75 transition-all duration-300 fixed sm:bottom-[15vw] max-sm:bottom-[22vh] sm:right-[3vw] max-sm:text-6xl max-sm:right-7 sm:text-[5vw]`}
            >
              <AiFillPlusCircle
                onClick={() => setIsMemberDialog(!isMemberDialog)}
              />
            </motion.div>
            <motion.div
              initial={{ translateY: "100px", opacity: 0 }}
              whileInView={{ translateY: "0px", opacity: 1 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: false }}
              className={`bg-green-600 fixed sm:p-[.6vw] rounded-[50%]  hover:bg-green-600/75 cursor-pointer 
          text-white z-50  ${
            isEditMode && "grayscale"
          } transition-all duration-300 max-sm:p-3 sm:bottom-[9.5vw] max-sm:bottom-[14vh] sm:right-[3.5vw] max-sm:text-4xl max-sm:right-7 sm:text-[3vw]`}
            >
              <MdEdit
                onClick={() => {
                  setEditMode(!isEditMode);
                  setDeleteMode(false);
                }}
                className={``}
              />
            </motion.div>
          </>
        )}
        <AiFillPlusCircle
          onClick={() => onMenuPress()}
          className={`cursor-pointer ${
            isOptions && "rotate-[135deg]"
          } text-yellow-500 z-50 hover:text-yellow-500/75 transition-all duration-300 fixed sm:bottom-[3vw] max-sm:bottom-10 sm:right-[3vw] max-sm:text-7xl max-sm:right-5 sm:text-[5vw]`}
        />
      </div>
    </div>
  );
}
