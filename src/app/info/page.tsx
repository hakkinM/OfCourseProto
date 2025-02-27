"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toolbar } from "../components/toolbar";
import ReviewWindow from "../pages/review-section";
import Course from "@/app/components/courseComponents/Course/Course";

export default function InfoPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState<string | null>(null); // State to store user email

  useEffect(() => {
    // Ensure code only runs in the browser
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    const storedUserName = localStorage.getItem("userName"); // Get username from localStorage

    if (!loggedIn) {
      router.push("/login");
    } else {
      setUserName(storedUserName); // Set email in state
      setIsLoading(false); // Allow rendering once authentication check is complete
    }
  }, []);

  // logs user out when logout button is pressed
  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // Clear login state
    localStorage.removeItem("userName"); // Remove stored email
    localStorage.removeItem("userID"); // Remove stored userID
    router.push("/login"); // Redirect to login page
  };

  // Show nothing while checking authentication
  if (isLoading) return null;

  return (
    <div className="flex flex-col h-full bg-black">
      <Toolbar onLogout={handleLogout} userName={userName} />
      <Course name="O1" />
      <ReviewWindow />
    </div>
  );
}
