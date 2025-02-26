interface CourseProps {
  name: string;
}

import React from "react";
import RatingCollector from "../RatingCollector/RatingCollector";
import Plaque from "../Plaque/Plaque";
import RatingPresentation, {
  getRatings,
} from "../RatingPresentation/RatingPresentation";

const Course = ({ name }: CourseProps) => {
  return (
    <div className="relative w-full bg-black">
      {/**Course name */}
      <div className="text-2xl font-semibold text-white p-4 w-full">{name}</div>
      {/* Container for right and left components */}
      <div className="flex flex-row">
        <Plaque />
        {getRatings().then((ratings) => (
          <RatingPresentation
            overallRatings={ratings.overallRatings}
            difficultyRatings={ratings.difficultyRatings}
            methodsRatings={ratings.methodsRatings}
            workloadRatings={ratings.workloadRatings}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
