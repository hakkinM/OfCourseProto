"use client";
import Course from "@/courseComponents/Course/Course";
import Navbar from "@/courseComponents/NavBar/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

const MockCoursePage = () => {
  const router = useRouter();
  return (
    <div>
      {/*Navigation bar*/}
      <div className="navbar bg-primary text-primary-content text-xl">
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => router.push("/info")}
        >
          OfCourse
        </button>
      </div>
      {/*Site content*/}
      <Course name="O1"></Course>
    </div>
  );
};

export default MockCoursePage;
