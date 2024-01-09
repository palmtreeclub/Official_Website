import React from "react";
import { motion } from "framer-motion";
import TeamCard from "@/app/components/v1/TeamCard";

interface MemberFormProps {
  newMemberDetails: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (e: React.MouseEvent, index: number) => void;
  handleMemberTypeChange: (e: React.MouseEvent, index: number) => void;
  selectedColor: string | null;
  memberTypes: Array<any>;
  colors: Array<ColorObject>;
  selectedMemberColor: string | null;
  imgRef: React.RefObject<HTMLInputElement>;
  previewAvtar: string | null;
  isEditMode: boolean;
  newMemberCradentials: any;
  setNewMemberCradentials: React.Dispatch<React.SetStateAction<any>>;
  removeAllCurrentDetails: () => void;
  SubmitDetails: () => void;
}

interface ColorObject {
  name: string;
  dbValue: string;
  value: string;
}

interface InputFieldProps {
  label: string;
  value: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  type,
  name,
  placeholder,
  onChange,
}) => (
  <label className="flex justify-between text-[1.2vw] items-center gap-5 w-full">
    {label}:
    <input
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      title={label}
      placeholder={placeholder}
      className="bg-slate-100 dark:text-white dark:bg-slate-800  focus:border-2 border-slate-600/50 shadow-inner max-sm:rounded-md sm:rounded-[.5vw] sm:pl-[1.5vw] max-sm:pl-5 max-sm:p-3 outline-none  sm:p-[.4vw]"
    />
  </label>
);

const MemberForm: React.FC<MemberFormProps> = ({
  newMemberDetails,
  handleInputChange,
  handleImgChange,
  handleColorChange,
  handleMemberTypeChange,
  selectedColor,
  isEditMode,
  memberTypes,
  selectedMemberColor,
  imgRef,
  colors,
  previewAvtar,
  newMemberCradentials,
  setNewMemberCradentials,
  removeAllCurrentDetails,
  SubmitDetails,
}) => {
  const inputFields = [
    {
      label: "Name",
      value: newMemberDetails.name,
      name: "name",
      placeholder: "Name",
    },
    {
      label: "Designation",
      value: newMemberDetails.designation,
      name: "designation",
      placeholder: "Designation",
    },
    {
      label: "Github",
      value: newMemberDetails.github,
      name: "github",
      placeholder: "https://github.com/",
    },
    {
      label: "Linkedin",
      value: newMemberDetails.linkedin,
      name: "linkedin",
      placeholder: "https://linkedin.com/",
    },
    {
      label: "Twitter",
      value: newMemberDetails.twitter,
      name: "twitter",
      placeholder: "https://twitter.com/",
    },
  ];

  return (
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
            onClick={() => console.log(newMemberDetails.avtar, previewAvtar)}
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
            onClick={() => console.log(newMemberDetails.avtar, previewAvtar)}
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
                  type.color === selectedMemberColor && "border-4 border-white"
                } mr-2 border-2 border-slate-600/50 cursor-pointer`}
              ></div>
              {type.name}
            </label>
          ))}
        </div>
        {(newMemberDetails.type === "gdsc_lead" ||
          newMemberDetails.type === "core_team") &&
          !isEditMode && (
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
            avtar: previewAvtar || newMemberDetails.avtar,
            color: newMemberDetails.color,
          }}
        />
      </div>
    </div>
  );
};

export default MemberForm;
