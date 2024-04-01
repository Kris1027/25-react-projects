import { MenuItem } from "./MenuItem";
import { MenuProps } from "./data";

export const MenuList = ({ list = [] }: { list: MenuProps[] }) => {
  return (
    <ul className="bg-blue-600 p-4 text-white flex flex-col h-screen w-96 overflow-hidden">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
};
