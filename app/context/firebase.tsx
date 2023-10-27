"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
const auth = getAuth(app);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props: any) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        console.log(user.email);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });
  }, []);

  const signIn = async (email: any, password: any) => {
    console.log(email, password);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email: any, password: any) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = async (email: any) => {
    return await sendPasswordResetEmail(auth, email)
      .then((p) => console.log("pw reset email sented", p))
      .catch((err) => console.log(err));
  };
  const signout = async () => {
    return await signOut(auth);
  };
  return (
    <>
      <FirebaseContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          setUser,
          user,
          signIn,
          signUp,
          signout,
        }}
      >
        {props.children}
      </FirebaseContext.Provider>
    </>
  );
};
