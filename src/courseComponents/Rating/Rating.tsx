import React, { useState } from "react";

interface RatingProps {
  name: string; // Unique identifier for the rating
}

const Rating: React.FC<RatingProps> = ({ name }: RatingProps) => {
  const [rating, setRating] = useState(0); // State to store the rating

  // Handle star click
  const handleRating = (newRating: number) => {
    setRating(newRating);
    console.log(`Rating for ${name}: ${newRating}`); // Log the rating (replace with API call if needed)
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-2">
      <h3 className="text-lg font-semibold text-gray-500">{name}:</h3>
      <div className="flex space-x-2">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              key={name + starValue}
              onClick={() => handleRating(starValue)}
              className={`text-3xl cursor-pointer ${
                starValue <= rating ? "text-white" : "text-gray-300"
              }`}
            >
              ★
            </button>
          );
        })}
      </div>
      <p className="text-sm text-gray-500">Selected Rating: {rating}</p>
    </div>
  );
};

export default Rating;
