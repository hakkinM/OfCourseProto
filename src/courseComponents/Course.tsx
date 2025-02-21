interface CourseProps {
  name: string;
}

import React from "react";
import Plaque from "./Plaque";
import RatingCollector from "./RatingCollector";

const Course = ({ name }: CourseProps) => {
  return (
    <div>
      <h1 className="static top-0 left-0 p-2">{name}</h1>
      <div>
        {Plaque()}
        {RatingCollector()}
      </div>
    </div>
  );
};

export default Course;
