import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({
  numberOfStars = 10,
  size = 40,
}: {
  numberOfStars?: number;
  size?: number;
}): JSX.Element => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="flex p-4">
      {[...Array(numberOfStars)].map((_, index: number) => {
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
