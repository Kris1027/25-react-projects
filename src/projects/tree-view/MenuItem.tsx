import { useState } from "react";
import { MenuList } from "./MenuList";
import { type MenuProps } from "./data";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

export const MenuItem = ({ item }: { item: MenuProps }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<{
    [key: string]: boolean;
  }>({});

  function handleToggleChildren(getCurrentLabel: string) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <p className="text-3xl">
        {item.label}{" "}
        {item && item.children && item.children.length && (
          <button onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinusCircle />
            ) : (
              <FaPlusCircle />
            )}
          </button>
        )}
      </p>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList key={item.label} list={item.children} />
      ) : null}
    </li>
  );
};
