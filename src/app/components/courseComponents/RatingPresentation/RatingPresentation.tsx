import React, { useEffect, useState } from "react";
import { Ratings } from "@/app/types/types";

function getRatingsMean(ratings: number[]) {
  const length = ratings.length;
  const mean = (
    ratings.reduce((acc, next) => {
      return acc + next;
    }, 0) / length
  ).toFixed(1);

  return mean;
}

function RatingPresentation() {
  const maxRating = 5;
  const [ratings, setRatings] = useState<Ratings | null>(null);

  useEffect(() => {
    fetch("/api/ratings", { method: "GET", next: { revalidate: 10 } })
      .then((res) => res.json())
      .then((data: Ratings) => setRatings(data))
      .catch((error) => console.error("Failed to fetch ratings:", error));
  }, []);

  if (!ratings)
    return (
      <div className="flex-1">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col p-4">
      <div className="w-full flex flex-row text-white">
        {/*Overall ratings*/}
        <div className="w-full p-4 rounded-lg text-center">
          <p>
            Course overall: {getRatingsMean(ratings.overallRatings)}/{maxRating}
          </p>
          <p>from {ratings.overallRatings.length} ratings</p>
        </div>
        {/*difficulty ratings*/}
        <div className="w-full p-4 rounded-lg text-center">
          <p>
            Course difficulty: {getRatingsMean(ratings.difficultyRatings)}/
            {maxRating}
          </p>
          <p>from {ratings.difficultyRatings.length} ratings</p>
        </div>
      </div>

      <div className="w-full flex flex-row text-white">
        {/*methods ratings*/}
        <div className="p-4 rounded-lg text-center">
          <p>
            Course methods: {getRatingsMean(ratings.methodsRatings)}/{maxRating}
          </p>
          <p>from {ratings.methodsRatings.length} ratings</p>
        </div>
        {/*workload ratings*/}
        <div className="p-4 rounded-lg text-center">
          <p>
            Course workload: {getRatingsMean(ratings.workloadRatings)}/
            {maxRating}
          </p>
          <p>from {ratings.workloadRatings.length} ratings</p>
        </div>
      </div>
    </div>
  );
}

export default RatingPresentation;
