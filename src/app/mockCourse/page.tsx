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
      <Navbar />
      {/*Site content*/}
      <Course name="O1"></Course>
    </div>
  );
};

export default MockCoursePage;
