import React, { useState } from "react";

interface RatingProps {
  ratingType: string;
}

function Rating({ ratingType }: RatingProps) {
  return (
    <tr>
      <th>
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
        </div>
      </th>
    </tr>
  );
}

export default Rating;
