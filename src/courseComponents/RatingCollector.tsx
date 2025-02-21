import React, { useState } from "react";

import Rating from "./Rating";

const RatingCollector = () => {
  const ratingArr: string[] = [
    "Overall rating",
    "Difficulty rating",
    "Time rating",
  ];

  return (
    <div className="p-2">
      <h1>Click the stars to give your rating!</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{ratingArr.map((item) => Rating(item))}</tbody>
      </table>
    </div>
  );
};

export default RatingCollector;
