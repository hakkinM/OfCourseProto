import React, { useEffect, useState } from "react";
import { Ratings } from "@/app/types/types";

function getRatingsMean(ratings: number[]) {
  const length = ratings.length;
  const mean = (
    ratings.reduce((acc, next) => acc + next, 0) / length
  ).toFixed(1);

  return parseFloat(mean); // return as number, not string
}

const StarRating = ({ value, max }: { value: number; max: number }) => {
  const fullStars = Math.round(value);
  return (
    <div className="flex justify-center gap-1">
      {[...Array(max)].map((_, i) => (
        <span key={i}>{i < fullStars ? "★" : "☆"}</span>
      ))}
    </div>
  );
};


const RatingPresentation = ({ pageID }: { pageID: number }) => {
  const maxRating = 5;
  const [ratings, setRatings] = useState<Ratings | null>(null);

  useEffect(() => {
    fetch(`/api/ratings?pageID=${pageID}`, { method: "GET" })
      .then((res) => res.json())
      .then((data: Ratings) => setRatings(data))
      .catch((error) => console.error("Failed to fetch ratings:", error));
  }, [pageID]);

  if (!ratings)
    return (
      <div className="flex-1">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center p-4 text-black">
      <div className="space-y-4">
        <div className="text-center">
          <p>Course overall:</p>
          <StarRating value={getRatingsMean(ratings.overallRatings)} max={maxRating} />
        </div>

        <div className="text-center">
          <p>Course difficulty:</p>
          <StarRating value={getRatingsMean(ratings.difficultyRatings)} max={maxRating} />
        </div>

        <div className="text-center">
          <p>Course methods:</p>
          <StarRating value={getRatingsMean(ratings.methodsRatings)} max={maxRating} />
        </div>

        <div className="text-center">
          <p>Course workload:</p>
          <StarRating value={getRatingsMean(ratings.workloadRatings)} max={maxRating} />
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Based on {ratings.overallRatings.length} reviews
      </p>
    </div>
  );
};



export default RatingPresentation;