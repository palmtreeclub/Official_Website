import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

export interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

export interface Speaker {
  name: string;
  designation: string;
  about: string;
  logo: string;
  link: string;
}
export interface formData {
  eventName: string;
  eventType: string;
  eventCaption: string;
  eventLogo: string;
  eventTheme: number;
  rsvpLink: string;
  driveLink: string;
  eventDate: string;
  eventTime: string;
  moreDetails: string;
  eventLocation: string;
  sponsors: Sponsor[];
  speakers: Speaker[];
}

interface EventFormProps {
  onSubmit: (formData: formData) => void;
  setFormData: any;
  formData: formData;
}
const InputField = ({
  label,
  value,
  type,
  onChange,
  maxLength,
}: {
  label: string;
  value: string;
  type: string;
  maxLength?: number;
  onChange: (value: string) => void;
}) => (
  <label className="flex text-[1.3vw] justify-between gap-[2vw]">
    {label}:
    <input
      maxLength={maxLength}
      className="outline-none focus:outline-none focus:border-2 p-[.2vw] pl-[.5vw] border-2 border-slate-300 focus:border-slate-500 rounded-[.5vw]"
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

const SectionHeading = ({ title, color }: { title: string; color: string }) => (
  <h1
    className={`text-[1.5vw] underline-offset-8 underline ${color} text-left font-semibold`}
  >
    {title}
  </h1>
);

const AddButton = ({
  onClick,
  title,
}: {
  onClick: () => void;
  title: string;
}) => (
  <button
    type="button"
    className="text-white bg-violet-600 w-full p-[.5vw] rounded-md"
    onClick={onClick}
  >
    + Add {title}
  </button>
);

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <button
    title="Delete"
    type="button"
    className="bg-red-600 font-bold  border border-1 rounded-full p-[.2vw] shadow-xl "
    onClick={onClick}
  >
    <IoClose className="text-white  font-bold text-[1.5vw] " />
  </button>
);

const EventForm: React.FC<EventFormProps> = ({
  onSubmit,
  setFormData,
  formData,
}) => {
  const handleChange = (field: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSponsorChange = (index: number, field: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      sponsors: prevData.sponsors.map((sponsor: any, i: any) =>
        i === index ? { ...sponsor, [field]: value } : sponsor
      ),
    }));
  };

  const handleSpeakerChange = (index: number, field: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      speakers: prevData.speakers.map((speaker: any, i: any) =>
        i === index ? { ...speaker, [field]: value } : speaker
      ),
    }));
  };

  const handleRemoveSponsor = (index: number) => {
    setFormData((prevData: any) => ({
      ...prevData,
      sponsors: prevData.sponsors.filter((_: any, i: any) => i !== index),
    }));
  };

  const handleRemoveSpeaker = (index: number) => {
    setFormData((prevData: any) => ({
      ...prevData,
      speakers: prevData.speakers.filter((_: any, i: any) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-[2vw] text-blue-600 text-center font-semibold">
        Add Event
      </h1>
      <hr className=" border-[.1vw] " />
      <SectionHeading title="Event information:" color="text-red-600" />
      <div className="flex flex-col gap-[.5vw] py-[1vw]">
        <InputField
          label="Name"
          onChange={(val) => handleChange("eventName", val)}
          type="text"
          value={formData.eventName}
        />
        <InputField
          label="Type"
          type="text"
          value={formData.eventType}
          onChange={(val) => handleChange("eventType", val)}
        />

        <InputField
          label="Caption"
          type="text"
          value={formData.eventCaption}
          onChange={(val) => handleChange("eventCaption", val)}
        />

        <InputField
          label="Logo"
          type="text"
          value={formData.eventLogo}
          onChange={(val) => handleChange("eventLogo", val)}
        />

        <InputField
          label="Theme"
          type="number"
          value={`${formData.eventTheme}`}
          onChange={(val) => handleChange("eventTheme", val)}
        />

        <InputField
          label="Date"
          type="text"
          value={formData.eventDate}
          onChange={(val) => handleChange("eventDate", val)}
        />

        <InputField
          label="Time"
          type="text"
          value={formData.eventTime}
          onChange={(val) => handleChange("eventTime", val)}
        />

        <InputField
          label="Location"
          type="text"
          value={formData.eventLocation}
          onChange={(val) => handleChange("eventLocation", val)}
        />

        <InputField
          label="RSVP"
          type="text"
          value={formData.rsvpLink}
          onChange={(val) => handleChange("rsvpLink", val)}
        />

        <InputField
          label="Drive"
          type="text"
          value={formData.driveLink}
          onChange={(val) => handleChange("driveLink", val)}
        />
        <InputField
          maxLength={900}
          label="More Details"
          type="text"
          value={formData.moreDetails}
          onChange={(val) => handleChange("moreDetails", val)}
        />
      </div>
      {/* Add other event-related fields */}

      {/* Sponsors section */}
      <div>
        <div className="flex gap-[2vw] justify-between items-center -mr-[1vw]">
          <SectionHeading color="text-green-600" title="Sponsors" />
          {formData?.sponsors?.length === 0 && (
            <div className="scale-75">
              <AddButton
                title={"Sponsor"}
                onClick={() =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    sponsors: [...prevData.sponsors, { name: "", logo: "" }],
                  }))
                }
              />
            </div>
          )}
        </div>
        {formData.sponsors.map((sponsor: any, index: any) => (
          <div key={index} className="flex flex-col gap-[1vw] py-5 border-b-2">
            <div className="flex justify-between items-center">
              <h1>Sponsors {index + 1}</h1>
              <DeleteButton onClick={() => handleRemoveSponsor(index)} />
            </div>
            <InputField
              label="Name"
              type="text"
              value={sponsor.name}
              onChange={(val) => handleSponsorChange(index, "name", val)}
            />
            <InputField
              label="Logo"
              type="text"
              value={sponsor.logo}
              onChange={(val) => handleSponsorChange(index, "logo", val)}
            />
            <InputField
              label="Website"
              type="text"
              value={sponsor.link}
              onChange={(val) => handleSponsorChange(index, "link", val)}
            />
          </div>
        ))}
        {formData?.sponsors?.length !== 0 && (
          <div className="scale-100">
            <AddButton
              title={"Sponsor"}
              onClick={() =>
                setFormData((prevData: any) => ({
                  ...prevData,
                  sponsors: [...prevData.sponsors, { name: "", logo: "" }],
                }))
              }
            />
          </div>
        )}
      </div>

      {/* Speakers section */}
      <div className="flex flex-col">
        <div className="flex gap-[2vw] justify-between items-center -mr-[1vw]">
          <SectionHeading color="text-blue-600" title="Speakers" />
          {formData?.speakers?.length === 0 && (
            <div className="scale-75">
              <AddButton
                title="Speaker"
                onClick={() =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    speakers: [
                      ...prevData.speakers,
                      { name: "", designation: "", about: "", logo: "" },
                    ],
                  }))
                }
              />
            </div>
          )}
        </div>
        {formData.speakers.map((speaker: any, index: any) => (
          <div key={index} className="flex flex-col gap-[1vw] py-5 border-b-2">
            <div className="flex justify-between items-center">
              <h1 className="text-[1.3vw] text-slate-500 text-left font-semibold">
                Speaker {index + 1}
              </h1>
              <DeleteButton onClick={() => handleRemoveSpeaker(index)} />
            </div>
            <InputField
              label="Name"
              type="text"
              value={speaker.name}
              onChange={(val) => handleSpeakerChange(index, "name", val)}
            />
            <InputField
              label="Designation"
              type="text"
              value={speaker.designation}
              onChange={(val) => handleSpeakerChange(index, "designation", val)}
            />
            <InputField
              label="About"
              type="text"
              value={speaker.about}
              onChange={(val) => handleSpeakerChange(index, "about", val)}
            />
            <InputField
              label="Logo"
              type="text"
              value={speaker.logo}
              onChange={(val) => handleSpeakerChange(index, "logo", val)}
            />
            <InputField
              label="LinkedIn Profile"
              type="text"
              value={speaker.link}
              onChange={(val) => handleSpeakerChange(index, "link", val)}
            />
          </div>
        ))}
        {formData?.speakers?.length !== 0 && (
          <div className="scale-100">
            <AddButton
              title="Speaker"
              onClick={() =>
                setFormData((prevData: any) => ({
                  ...prevData,
                  speakers: [
                    ...prevData.speakers,
                    { name: "", designation: "", about: "", logo: "" },
                  ],
                }))
              }
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-green-500 w-full my-5 py-[.5vw] rounded-md text-white "
      >
        Submit
      </button>
    </form>
  );
};

export default EventForm;
