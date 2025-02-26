"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Toolbar } from "../components/toolbar";
import { ReviewInput } from "../components/reviewInput/reviewInput";
import ReviewWindow from "../pages/review-section";

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
    <div className="relative flex flex-col items-center justify-center h-screen">
      <Toolbar onLogout={handleLogout} userName={userName} />
      <ReviewInput />
      <ReviewWindow />
    </div>
  );
}
