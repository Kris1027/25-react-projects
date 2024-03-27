import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const numberOfStars = 10;
  const size = 40;

  return (
    <div className="flex p-4">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={size}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            color={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
          />
        );
      })}
    </div>
  );
};
