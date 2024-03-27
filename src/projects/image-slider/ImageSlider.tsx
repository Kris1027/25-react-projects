import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const ImageSlider: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number>(1);

  const handlePrevImage = () => {
    if (activeImage === 1) {
      setActiveImage(5);
    } else {
      setActiveImage(activeImage - 1);
    }
  };
  const handleNextImage = () => {
    if (activeImage === 5) {
      setActiveImage(1);
    } else {
      setActiveImage(activeImage + 1);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center pb-4">
        <FaArrowAltCircleLeft
          size={40}
          className="cursor-pointer active:scale-95 hover:text-red-500"
          onClick={handlePrevImage}
        />
        <img
          className="w-[40rem] h-[40rem] object-cover rounded-lg shadow-lg"
          src={`/src/assets/image-slider/carousel-${activeImage}.jpg`}
        />
        <FaArrowAltCircleRight
          size={40}
          className="cursor-pointer active:scale-95 hover:text-red-500"
          onClick={handleNextImage}
        />
      </div>
      <div className="flex gap-2 justify-center">
        <button
          className={twMerge(
            "w-4 h-4 bg-black rounded-full",
            activeImage === 1 && "bg-red-500"
          )}
          onClick={() => setActiveImage(1)}
        ></button>
        <button
          className={twMerge(
            "w-4 h-4 bg-black rounded-full",
            activeImage === 2 && "bg-red-500"
          )}
          onClick={() => setActiveImage(2)}
        ></button>
        <button
          className={twMerge(
            "w-4 h-4 bg-black rounded-full",
            activeImage === 3 && "bg-red-500"
          )}
          onClick={() => setActiveImage(3)}
        ></button>
        <button
          className={twMerge(
            "w-4 h-4 bg-black rounded-full",
            activeImage === 4 && "bg-red-500"
          )}
          onClick={() => setActiveImage(4)}
        ></button>
        <button
          className={twMerge(
            "w-4 h-4 bg-black rounded-full",
            activeImage === 5 && "bg-red-500"
          )}
          onClick={() => setActiveImage(5)}
        ></button>
      </div>
    </div>
  );
};
