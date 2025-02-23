"use client";
import Course from "@/courseComponents/Course";
import { useRouter } from "next/navigation";
import React from "react";

const MockCoursePage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="navbar bg-primary text-primary-content text-xl">
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => router.push("/info")}
        >
          OfCourse
        </button>
      </div>
      <div className="bg-black">
        <Course name="O1"></Course>
      </div>
    </div>
  );
};

export default MockCoursePage;
