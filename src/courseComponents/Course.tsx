interface CourseProps {
  name: string;
}

import React from "react";
import Plaque from "./Plaque";
import RatingCollector from "./RatingCollector";

const Course = ({ name }: CourseProps) => {
  return (
    <div className="relative">
      <div className="text-2xl font-semibold text-white p-4 w-full">{name}</div>
      {/* Left Component */}
      <div className="flex flex-row">
        <div className="basis-3 p-4">
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>

        <div className="divider divider-primary lg:divider-horizontal"></div>

        <div>
          <RatingCollector></RatingCollector>
        </div>
      </div>
    </div>
  );
};

export default Course;
