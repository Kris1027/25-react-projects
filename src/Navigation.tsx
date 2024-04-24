import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      {!isOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-10 bg-black bg-opacity-90 text-white flex justify-center py-4 z-50"
          onMouseEnter={() => setIsOpen(!isOpen)}
        >
          <IoArrowRedoOutline size={20} onClick={() => setIsOpen(!isOpen)} />
        </div>
      )}
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-64 p-4 bg-black bg-opacity-90 text-white flex flex-col gap-4 z-50"
          onMouseLeave={() => setIsOpen(!isOpen)}
        >
          <IoArrowUndoOutline size={20} onClick={() => setIsOpen(!isOpen)} />
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="accordion"
            onClick={() => setIsOpen(!isOpen)}
          >
            Accordion
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="random-color"
            onClick={() => setIsOpen(!isOpen)}
          >
            Random Color
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="star-rating"
            onClick={() => setIsOpen(!isOpen)}
          >
            Star Rating
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="image-slider"
            onClick={() => setIsOpen(!isOpen)}
          >
            Image Slider
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="load-more-data"
            onClick={() => setIsOpen(!isOpen)}
          >
            Load More Data
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="tree-view"
            onClick={() => setIsOpen(!isOpen)}
          >
            Tree View
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="qr-code-generator"
            onClick={() => setIsOpen(!isOpen)}
          >
            QR Code Generator
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="light-dark-mode"
            onClick={() => setIsOpen(!isOpen)}
          >
            Light Dark Mode
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="scroll-indicator"
            onClick={() => setIsOpen(!isOpen)}
          >
            Scroll Indicator
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            to="tabs"
            onClick={() => setIsOpen(!isOpen)}
          >
            Tabs
          </Link>
          <Link
            className="hover:text-lime-900 hover:pl-4"
            onClick={() => setIsOpen(!isOpen)}
            to="custom-modal-popup"
          >
            Custom Modal
          </Link>
        </div>
      )}
    </nav>
  );
};
