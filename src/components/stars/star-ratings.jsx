import React from "react";
import { FaStar } from "react-icons/fa";

export const StarRatings = () => {
  const [rating, setRating] = React.useState(null);
  const [hover, setHover] = React.useState(null);

  return (
    <div className="flex gap-4">
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                key={index}
                type="radio"
                className="hidden"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="cursor-pointer"
                size={20}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <h2>({rating ? rating : "0"})</h2>
    </div>
  );
};
