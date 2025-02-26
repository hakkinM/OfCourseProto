interface CourseProps {
  name: string;
}

import React from "react";
import RatingCollector from "../RatingCollector/RatingCollector";
import Plaque from "../Plaque/Plaque";
import RatingPresentation from "../RatingPresentation/RatingPresentation";

const Course = ({ name }: CourseProps) => {
  return (
    <div className="relative w-full">
      {/**Course name */}
      <div className="text-2xl font-semibold text-white p-4 w-full">{name}</div>
      {/* Container for right and left components */}
      <div className="flex flex-row">
        <Plaque />
        <div className="flex w-full">
          <RatingPresentation />
        </div>
      </div>
    </div>
  );
};

export default Course;
