import { MenuList } from "./MenuList";
import { MenuProps } from "./data";

export const TreeView = ({ menus = [] }: { menus: MenuProps[] }) => {
  return (
    <div className="w-full p-4">
      <MenuList list={menus} />
    </div>
  );
};
