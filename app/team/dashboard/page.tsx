"use client";
import { useFirebase } from "@/app/context/firebase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const firebase: any = useFirebase();
  const router = useRouter();
  useEffect(() => {
    firebase.isLoggedIn ? null : router.push("/login");
    console.log(firebase.isLoggedIn, "team");
  }, [firebase?.isLoggedIn]);
  return (
    <div className="flex w-full h-full justify-center items-center">Page</div>
  );
}
