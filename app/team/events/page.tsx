"use client";
import { useFirebase } from "@/app/context/firebase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EventCard from "@/app/components/EventCard";
import { BubbleMenu } from "../members/components/BubbleMenu";
import AddEventPage from "./components/AddEventPage";
import { formData } from "./components/EventForm";
import { TipsDialog } from "../members/components/TipsDialog";
import { CardLayout } from "../members/components/CardLayout";
import { FilteredTypesBar, Type } from "../members/components/FilteredTypesBar";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const firebase: any = useFirebase();
  const [selectedType, setSelectedType] = useState<string>("");
  const [filteredEventTypes, setFilteredEventTypes] = useState<Array<Type>>();
  const [displayEvents, setDisplayEvents] = useState<any>([]);
  const [isOptions, setIsOptions] = useState(false);
  const [isTip, setIsTip] = useState(false);
  const [isDeleteMode, setDeleteMode] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [isEditableWithPreview, setIsEditableWithPreview] = useState(false);
  const [IsCreateMode, setIsCreateMode] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [events, setEvents] = useState(firebase?.events);
  const [formData, setFormData] = useState<formData>({
    eventName: "",
    eventType: "",
    eventCaption: "",
    eventLogo: "",
    eventTheme: 1,
    rsvpLink: "",
    driveLink: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    moreDetails: "",
    sponsors: [],
    speakers: [],
  });

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  const filterEventsByType = (type: string) => {
    setSelectedType(type);
  };
  const onMenuPress = () => {
    setIsOptions(!isOptions);
    if (isOptions) {
      setDeleteMode(false);
      setEditMode(false);
      setIsCreateMode(false);
      setIsFormVisible(false);
      setIsEditableWithPreview(false);
      setIsOptions(false);
      setIsTip(false);
      setFormData({
        driveLink: "",
        eventCaption: "",
        eventDate: "",
        eventLocation: "",
        eventLogo: "",
        eventName: "",
        eventTheme: 1,
        eventTime: "",
        eventType: "",
        moreDetails: "",
        rsvpLink: "",
        speakers: [],
        sponsors: [],
      });
    }
  };
  const validateFormData = (data: any): formData | boolean => {
    for (const key in data) {
      const value = data[key];

      if (value === null || value === "") {
        alert(`Field "${key}" cannot be null or empty.`);
        return false;
      }

      if (key === "speakers") {
        // Validate each speaker object
        for (const speaker of value) {
          if (
            speaker.name === "" ||
            speaker.designation === "" ||
            speaker.about === "" ||
            speaker.logo === "" ||
            speaker.link === ""
          ) {
            alert('All fields in the "speakers" are must be filled.');
            return false;
          }
        }
      }

      if (key === "sponsors") {
        // Validate each sponsor object
        for (const sponsor of value) {
          if (
            sponsor.name === "" ||
            sponsor.logo === "" ||
            sponsor.link === ""
          ) {
            alert('All fields in the "sponsors" are must be filled.');
            return false;
          }
        }
      }
    }

    return true;
  };

  const onSubmit = () => {
    const isValid = validateFormData(formData);
    if (isValid) {
      if (isEditMode) {
        firebase?.updateEvent(formData);
        onMenuPress();
      } else {
        firebase?.addEventToFirestore(formData);
        onMenuPress();
      }
    }
  };

  const deleteEvent = (eventId: any) => {
    if (isDeleteMode) {
      if (window.confirm("Are you sure you want to delete this event?")) {
        firebase?.deleteEvent(eventId);
      }
    }
  };

  useEffect(() => {
    setEvents(firebase?.events);

    const uniqueEventTypes = Array.from(
      firebase?.events.reduce((typesMap: any, event: any) => {
        const { eventType, eventName, eventColor, event: dbValue } = event;
        if (!typesMap.has(eventType)) {
          typesMap.set(eventType, {
            name: eventType,
            value: eventType,
            color: eventColor,
            dbValue,
          });
        }
        return typesMap;
      }, new Map<string, any>())
    ).map(([, type]: any) => type);

    setFilteredEventTypes(uniqueEventTypes);
    setSelectedType(uniqueEventTypes[0]?.value);
    console.log({ image: "", uniqueEventTypes });
  }, [firebase?.events]);

  const handleEditMode = () => {
    if (isEditMode) {
      setEditMode(false);
      setIsEditableWithPreview(false);
    } else {
      setEditMode(true);
    }
  };

  useEffect(() => {
    const filteredEvents = firebase?.events.filter(
      (event: any) => event.eventType === selectedType
    );
    setDisplayEvents(filteredEvents);
    console.log({
      displayEvents,
      filteredEvents,
      filteredEventTypes,
      events,
      selectedType,
    });
  }, [events, selectedType]);

  // useEffect(() => {
  //   if (isDeleteMode) {
  //     setEditMode(false);
  //     setIsEditableWithPreview(false);
  //     setIsTip(true);
  //     toast.warning("Delete Mode Activated !!!", {
  //       className: "sm:text-[1vw] max-sm:text-xl relative z-50",
  //     });
  //   }
  //   if (isEditMode) {
  //     setIsTip(true);
  //     setDeleteMode(false);
  //     toast.info("Edit Mode Activated !!!", {
  //       className: "sm:text-[1vw] max-sm:text-xl relative z-50",
  //     });
  //   }

  //   if (!isDeleteMode && !isEditMode) setIsTip(false);
  // }, [isDeleteMode, isEditMode]);

  useEffect(() => {
    firebase.isLoggedIn ? null : router.push("/login");
    console.log(firebase.isLoggedIn, "team");
  }, [firebase?.isLoggedIn, router]);
  return (
    <>
      <div className="flex w-screen h-[90%] justify-center items-center">
        {isTip && (
          <TipsDialog
            setIsTip={setIsTip}
            isDeleteMode={isDeleteMode}
            isEditMode={isEditMode}
            deleteModeMsg="Delete Mode are Activated , just click on event and press Confirm to delete."
            editModeMsg="Edit Mode are Activated , just click on event and edit details and hit submit button."
          />
        )}

        {IsCreateMode || isEditableWithPreview ? (
          <AddEventPage
            setFormData={setFormData}
            toggleFormVisibility={toggleFormVisibility}
            formData={formData}
            isFormVisible={isFormVisible}
            onsubmit={() => onSubmit()}
          />
        ) : (
          <div className="flex flex-col gap-[.5vw] justify-center items-center overflow-auto  h-full w-full pt-[10%] ">
            <FilteredTypesBar
              TypesData={filteredEventTypes}
              onClick={filterEventsByType}
              selectedType={selectedType}
            />
            <div className="flex-wrap flex w-full  gap-[2vw] justify-center items-start scale-90  h-full">
              {displayEvents?.map((event: any, index: number) => {
                return (
                  <>
                    <CardLayout
                      isDeleteMode={isDeleteMode}
                      isEditMode={isEditMode}
                      key={`${index}`}
                      onclick={() => deleteEvent(event?.id)}
                    >
                      <EventCard
                        isEditMode={isEditMode}
                        event={event}
                        mirror
                        key={index}
                        onEventClick={() => {
                          if (isEditMode) {
                            setFormData(event);
                            setIsEditableWithPreview(true);
                          } else {
                            router.push("/event/" + event.id);
                          }
                        }}
                      />
                    </CardLayout>
                  </>
                );
              })}
            </div>
          </div>
        )}

        <BubbleMenu
          isCreateMode={IsCreateMode}
          isDeleteMode={isDeleteMode}
          isEditMode={isEditMode}
          isOptions={isOptions}
          onMenuPress={onMenuPress}
          setDeleteMode={setDeleteMode}
          setEditMode={handleEditMode}
          setIsCreateMode={setIsCreateMode}
        />
      </div>
    </>
  );
}
