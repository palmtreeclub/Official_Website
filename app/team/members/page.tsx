"use client";
import TeamCard from "@/app/components/TeamCard";
import { useFirebase } from "@/app/context/firebase";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { BubbleMenu } from "./components/BubbleMenu";
import { CardLayout } from "./components/CardLayout";
import { FilteredTypesBar } from "./components/FilteredTypesBar";
import { TipsDialog } from "./components/TipsDialog";
import MemberForm from "./components/MemberForm";

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

  const deleteMember = (memberId: any, memberData: any) => {
    if (isDeleteMode) {
      if (confirm("Are you sure you want to delete this member?")) {
        firebase?.deleteMember(memberId);
      }
    }
    if (isEditMode) {
      setNewMemberDetails(memberData);
      setIsMemberDialog(true);
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
    if (isEditMode) {
      console.log({ newMemberDetails });
      await firebase?.updateMember(null, newMemberDetails);
      toast.success("Member Successfully updated!!!", {
        className: "sm:text-[1vw] max-sm:text-xl relative z-50",
      });
      removeAllCurrentDetails();
    } else {
      const res = await firebase?.addNewMemberDetails(
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
    }
  };

  return (
    <div
      className={`flex z-30 relative overflow-auto scrollbar-none pb-20 max-sm:pt-10 w-full ${
        showMembers?.length > 0 ? "h-[90%] pt-16" : "h-[90%]"
      } justify-center  ${isMemberDialog && "bg-black/10"} items-center`}
    >
      {isTip && (
        <TipsDialog
          setIsTip={setIsTip}
          isDeleteMode={isDeleteMode}
          isEditMode={isEditMode}
          deleteModeMsg="Delete Mode are Activated , just click on member and press Confirm to delete."
          editModeMsg="Edit Mode are Activated , just click on member and edit details and hit submit button."
        />
      )}
      {isMemberDialog && (
        <MemberForm
          handleColorChange={handleColorChange}
          handleImgChange={handleImgChange}
          handleInputChange={handleInputChange}
          handleMemberTypeChange={handleMemberTypeChange}
          imgRef={imgRef}
          colors={colors}
          memberTypes={memberTypes}
          newMemberCradentials={newMemberCradentials}
          newMemberDetails={newMemberDetails}
          previewAvtar={previewAvtar}
          isEditMode={isEditMode}
          removeAllCurrentDetails={removeAllCurrentDetails}
          selectedColor={selectedColor}
          selectedMemberColor={selectedMemberColor}
          setNewMemberCradentials={setNewMemberCradentials}
          SubmitDetails={() => SubmitDetails()}
        />
      )}
      <div className="border-t-2 h-4/5  pb-10 flex flex-col justify-center items-center  dark:border-t-slate-700 border-t-slate-400/40  w-4/5 gap-5">
        <FilteredTypesBar
          onClick={handleTypeChange}
          TypesData={memberTypes}
          selectedType={selectedType}
        />

        <div className="flex flex-wrap w-full h-full pb-10  justify-center items-center sm:gap-[3vw] sm:gap-y-0 max-sm:gap-10">
          {showMembers?.length > 0 ? (
            showMembers?.map((member: any) => (
              <CardLayout
                isDeleteMode={isDeleteMode}
                isEditMode={isEditMode}
                key={member?.id}
                onclick={() => deleteMember(member?.id, member)}
              >
                <TeamCard key={member} member={member} />
              </CardLayout>
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
      <BubbleMenu
        isCreateMode={isMemberDialog}
        isDeleteMode={isDeleteMode}
        isEditMode={isEditMode}
        isOptions={isOptions}
        onMenuPress={onMenuPress}
        setDeleteMode={setDeleteMode}
        setEditMode={setEditMode}
        setIsCreateMode={setIsMemberDialog}
      />
    </div>
  );
}
