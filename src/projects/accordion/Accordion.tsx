import { useState } from "react";
import { accordionData } from "./data";
import { IoIosArrowDropupCircle } from "react-icons/io";

export const Accordion = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleSelectedItem = (getCurrentId: number | null = null) => {
    setSelectedItem(getCurrentId === selectedItem ? null : getCurrentId);
  };

  return (
    <div>
      {accordionData.map((a) => {
        return (
          <div key={a.id}>
            <button
              onClick={() => handleSelectedItem(a.id)}
              className="flex justify-between w-full p-4 bg-slate-400"
            >
              {a.question}
              <IoIosArrowDropupCircle />
            </button>
            {selectedItem === a.id && (
              <p className="p-3 bg-slate-300">{a.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
