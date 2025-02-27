interface CourseProps {
  name: string;
}

import React from "react";
import RatingCollector from "../RatingCollector/RatingCollector";
import Plaque from "../Plaque/Plaque";
import RatingPresentation from "../RatingPresentation/RatingPresentation";
import { ReviewInput } from "@/app/components/reviewInput/reviewInput";

const Course = ({ name }: CourseProps) => {
  return (
    <div className="relative w-full bg-inherit">
      {/**Course name */}
      <div className="text-2xl font-semibold bg-gray-900 text-white p-4 w-full">
        {name}
      </div>

      {/* Container for right and left components */}
      <div className="flex flex-row">
        <Plaque />
        <div className="flex flex-col items-center">
          <RatingPresentation />
          <ReviewInput />
        </div>
      </div>
    </div>
  );
};

export default Course;
