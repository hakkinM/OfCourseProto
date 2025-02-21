"use client";
import Course from "@/courseComponents/Course";
import Plaque from "@/courseComponents/Plaque";
import Rating from "@/courseComponents/Rating";
import RatingCollector from "@/courseComponents/RatingCollector";
import Link from "next/link";
import React from "react";

const MockCoursePage = () => {
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">OfCourse</button>
      </div>
      <div className="flex">
        <Course name="Mock course"></Course>
      </div>
    </>
  );
};

export default MockCoursePage;
