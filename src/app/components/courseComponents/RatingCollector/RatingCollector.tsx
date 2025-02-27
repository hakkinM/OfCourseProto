import React, { useState } from "react";

import Rating from "../Rating/Rating";

const RatingCollector = () => {
  const ratingArr: string[] = [
    "Overall rating",
    "Difficulty rating",
    "Time rating",
  ];

  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
      <p className="text-white">Click a star to give rating</p>
      {ratingArr.map((rating) => (
        <div className="flex flex-col gap-3">
          <Rating name={rating} key={rating}></Rating>
        </div>
      ))}
      <button className="btn">Send</button>
    </div>
  );
};

export default RatingCollector;
