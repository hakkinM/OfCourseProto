"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function InfoPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null); // State to store user email

  useEffect(() => {
    // Ensure code only runs in the browser
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    const storedEmail = localStorage.getItem("userEmail"); // Get email from localStorage

    if (!loggedIn) {
      router.push("/login");
    } else {
      setEmail(storedEmail); // Set email in state
      setIsLoading(false); // Allow rendering once authentication check is complete
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // Clear login state
    localStorage.removeItem("userEmail"); // Remove stored email
    router.push("/login"); // Redirect to login page
  };

  // Show nothing while checking authentication
  if (isLoading) return null;

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* Email and Logout button in the top-right corner */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        {email && <span className="text-gray-400">{email}</span>}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <h1 className="text-2xl mb-4">Welcome to the Information Page</h1>
      <p className="mb-4">🔥 This page contains information 🔥</p>
    </div>
  );
}
