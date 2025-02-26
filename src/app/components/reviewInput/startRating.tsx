import { useState } from "react";

type StarRatingProps = {
  selected: number;
  setSelected: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({ selected, setSelected }) => {
  const maxStars = 5;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex space-x-1">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={`cursor-pointer text-2xl ${
              (hovered !== null ? hovered >= starValue : selected >= starValue)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => setSelected(starValue)}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(null)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
