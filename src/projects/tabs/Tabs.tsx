import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Tabs = ({
  tabsContent,
  onChange,
}: {
  tabsContent: { label: string; content: JSX.Element | string }[];
  onChange: (arg0: number) => void;
}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  function handleClick(getCurrentIndex: number) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="p-4">
      <div className="flex gap-4">
        {tabsContent.map((tabItem, index) => (
          <div
            className={twMerge(
              "p-4 text-2xl cursor-pointer text-white",
              `${currentTabIndex === index ? "bg-red-600" : "bg-green-600"}`
            )}
            onClick={() => handleClick(index)}
            key={tabItem.label}
          >
            <span>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-4">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};
