"use client";
import {
  Suspense,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/v1/Navbar";
import Footer from "../components/v2/Footer.v2";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useOnline } from "rooks";
import Loading from "../loading";

const FirebaseContext: any = createContext(null);
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MESUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props: any) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [members, setMembers] = useState([]);
  const [events, setEvents] = useState([]);
  // const online = useOnline();

  const path = usePathname();
  const db = getFirestore();

  const resetPassword = useCallback(async (email: any) => {
    return await sendPasswordResetEmail(auth, email)
      .then((p) => console.log("pw reset email sented", p))
      .catch((err) => console.log(err));
  }, []);

  const handleAuthStateChanged = useCallback((user: any) => {
    if (user) {
      setUser(user);
      setIsLoggedIn(true);
      console.log({ user });
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  const signIn = useCallback(async (email: any, password: any) => {
    console.log(email, password);
    return await signInWithEmailAndPassword(auth, email, password);
  }, []);

  const signUp = useCallback(
    async (name: any, url: any, email: any, password: any) => {
      return await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          resetPassword(email);
          updateProfile(res.user, { displayName: name, photoURL: url });
        }
      );
    },
    [resetPassword]
  );

  const signout = async () => {
    return await signOut(auth);
  };
  const addNewMemberDetails = async (
    newMemberDetails: any,
    newMemberCradentials: any
  ) => {
    try {
      const docRef = await addDoc(collection(db, "members"), {
        name: newMemberDetails.name,
        designation: newMemberDetails.designation,
        color: newMemberDetails.color,
        github: newMemberDetails.github,
        linkedin: newMemberDetails.linkedin,
        twitter: newMemberDetails.twitter,
        type: newMemberDetails.type,
      });
      await uploadMemberPhoto(newMemberDetails?.avtar, docRef.id);
      const url = await getMemberPhotoURL(docRef.id);
      const memberDocRef = doc(db, "members", docRef.id); // Replace `memberId` with the actual member document ID
      await updateMember(memberDocRef, {
        id: docRef.id,
        avtar: url,
      });
      if (
        newMemberDetails.type !== "volunteer" &&
        newMemberDetails.type !== "alumni"
      ) {
        await signUp(
          newMemberDetails.name,
          url,
          newMemberCradentials.email,
          newMemberCradentials.password
        );
      }
      await getMembers();
      return {
        success: true,
        data: docRef.id,
      };
    } catch (error: any) {
      console.error("Error adding document: ", error);
      return {
        success: false,
        data: error.message,
      };
    }
  };

  const updateMember = async (memberRef: any, updatedData: any) => {
    try {
      const memberDocRef = memberRef || doc(db, "members", updatedData?.id); // Replace `memberId` with the actual member document ID
      await updateDoc(memberDocRef, updatedData);
      await getMembers();
      console.log("Member data updated successfully.");
    } catch (error) {
      console.error("Error updating member data: ", error);
    }
  };

  const uploadMemberPhoto = async (file: any, memberId: any) => {
    console.log({ file });
    const storageRef = ref(storage, `members/${memberId}/profile.png`);
    await uploadBytes(storageRef, file);
  };
  const getMemberPhotoURL = async (memberId: any) => {
    const storageRef = ref(storage, `members/${memberId}/profile.png`);
    return await getDownloadURL(storageRef);
  };
  const getMembers = useCallback(async () => {
    const membersCollection = collection(db, "members");
    const q = query(membersCollection);

    try {
      const querySnapshot = await getDocs(q);
      const members: any = [];
      querySnapshot.forEach((doc) => {
        members.push(doc.data());
      });

      setMembers(members);
      return members;
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
  }, [db]);

  const deleteMember = async (memberId: any) => {
    try {
      const memberDocRef = doc(db, `members/${memberId}`);

      await deleteDoc(memberDocRef);
      console.log("Document deleted from Firestore.");
      await deleteMemberPhoto(memberId);
      getMembers();
      return {
        success: true,
        data: "Member deleted successfully",
      };
    } catch (error: any) {
      console.error("Error deleting document:", error);
      return {
        success: false,
        data: "Error : " + error.message,
      };
    }
  };

  const deleteMemberPhoto = async (memberId: any) => {
    try {
      const imageRef = ref(storage, `members/${memberId}/profile.png`);

      await deleteObject(imageRef);
      console.log("Document deleted from Firestore.");
      return {
        success: true,
        data: "Member photo deleted successfully",
      };
    } catch (error: any) {
      console.error("Error deleting document:", error);
      return {
        success: false,
        data: "Error : " + error.message,
      };
    }
  };
  const addEventToFirestore = async (eventData: any) => {
    try {
      const docRef = await addDoc(collection(db, "events"), eventData);
      if (docRef.id) {
        const eventDocRef = doc(db, "events", docRef.id); // Replace `memberId` with the actual member document ID
        await updateDoc(eventDocRef, {
          id: docRef.id,
        });
        toast.success("Document added successfully ");
        await getEvents();
      }
      console.log("Event added with ID:", docRef.id);
    } catch (error: any) {
      console.error("Error adding event to Firestore:", error);
      toast.error("Error adding event : " + error.message);
    }
  };

  const getEvents = useCallback(async () => {
    const eventCollection = collection(db, "events");
    const q = query(eventCollection);

    try {
      const querySnapshot = await getDocs(q);
      const events: any = [];
      querySnapshot.forEach((doc) => {
        events.push(doc.data());
      });

      setEvents(events);
      return events;
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
  }, [db]);

  const updateEvent = async (updatedData: any) => {
    try {
      const eventDocRef = doc(db, "events", updatedData?.id); // Replace `memberId` with the actual member document ID
      await updateDoc(eventDocRef, updatedData);
      toast.success("event data updated successfully.");
    } catch (error: any) {
      toast.error("Error updating event data: ", error.message);
    }
  };

  const deleteEvent = async (eventId: any) => {
    try {
      const eventDocRef = doc(db, `events/${eventId}`);

      await deleteDoc(eventDocRef);
      console.log("Document deleted from Firestore.");
      await deleteMemberPhoto(eventId);
      getEvents();
      return {
        success: true,
        data: "Event deleted successfully",
      };
    } catch (error: any) {
      console.error("Error deleting document:", error);
      return {
        success: false,
        data: "Error : " + error.message,
      };
    }
  };

  const getInitialData = useCallback(() => {
    getMembers();
    getEvents();
  }, [getMembers, getEvents]);

  useEffect(() => {
    onAuthStateChanged(auth, handleAuthStateChanged);
  }, [path, handleAuthStateChanged]);

  useEffect(() => {
    getInitialData();
  }, [getInitialData]);

  // useEffect(() => {
  //   !online &&
  //     toast.error(
  //       "You are now offline,please check your internet connection!!"
  //     );
  // }, [online]);

  return (
    <>
      <FirebaseContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          setUser,
          user,
          members,
          events,
          signIn,
          signUp,
          signout,
          getMembers,
          deleteMember,
          addNewMemberDetails,
          addEventToFirestore,
          deleteEvent,
          getEvents,
          updateEvent,
          updateMember,
        }}
      >
        <ThemeProvider>
          {/* <AnimatePresence mode="sync"  key={path}> */}
          <Navbar />
          <Suspense fallback={<Loading />}>
            <ToastContainer className={"text-[1vw]"} />

            {props.children}
            <Footer />
          </Suspense>
          {/* </AnimatePresence> */}
        </ThemeProvider>
      </FirebaseContext.Provider>
    </>
  );
};
