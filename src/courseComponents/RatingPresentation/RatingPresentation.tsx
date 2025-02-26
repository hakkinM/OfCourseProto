import React, { useState } from "react";
import { getAllReviews } from "@/database/db";

interface Ratings {
  overallRatings: number[];
  difficultyRatings: number[];
  methodsRatings: number[];
  workloadRatings: number[];
}

export async function getRatings() {
  const reviews = await getAllReviews();

  const overallRatings = reviews.map((review) => review.overall);
  const difficultyRatings = reviews.map((reviews) => reviews.difficulty);
  const methodsRatings = reviews.map((reviews) => reviews.methods);
  const workloadRatings = reviews.map((reviews) => reviews.workload);

  const ratings: Ratings = {
    overallRatings,
    difficultyRatings,
    methodsRatings,
    workloadRatings,
  };

  return { props: { ratings } };
}

function getRatingsMean(ratings: number[]) {
  const length = ratings.length;
  const mean =
    ratings.reduce((acc, next) => {
      return acc + next;
    }, 0) / length;

  return mean;
}

function RatingPresentation({
  overallRatings,
  difficultyRatings,
  methodsRatings,
  workloadRatings,
}: Ratings) {
  const maxRating = 5;

  const reviews = getRatings();

  const [overAllRatingsMean, setOverallMean] = useState(
    getRatingsMean(overallRatings)
  );
  const [difficultyRatingsMean, setDifficultyMean] = useState(
    getRatingsMean(difficultyRatings)
  );
  const [methodsRatingsMean, setMethodsMean] = useState(
    getRatingsMean(methodsRatings)
  );
  const [workloadRatingsMean, setRatingsMean] = useState(
    getRatingsMean(workloadRatings)
  );

  return (
    <div className="flex-1 flex-wrap">
      {/*Overall ratings*/}
      <div className="flex-1 items-center justify-center">
        <p>
          Course overall: {overAllRatingsMean}/{maxRating}
        </p>
        <p>from {overallRatings.length} ratings</p>
      </div>
      {/*difficulty ratings*/}
      <div className="flex-1 items-center justify-center">
        <p>
          Course difficulty: {difficultyRatingsMean}/{maxRating}
        </p>
        <p>from {difficultyRatings.length} ratings</p>
      </div>
      {/*methods ratings*/}
      <div className="flex-1 items-center justify-center">
        <p>
          Course methods: {methodsRatingsMean}/{maxRating}
        </p>
        <p>from {methodsRatings.length} ratings</p>
      </div>
      {/*workload ratings*/}
      <div className="flex-1 items-center justify-center">
        <p>
          Course workload: {workloadRatingsMean}/{maxRating}
        </p>
        <p>from {workloadRatings.length} ratings</p>
      </div>
    </div>
  );
}

export default RatingPresentation;
