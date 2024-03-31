import { MenuList } from "./MenuList";
import { MenuProps } from "./data";

export const TreeView = ({ menus = [] }: { menus: MenuProps[] }) => {
  return (
    <div>
      <MenuList list={menus} />
    </div>
  );
};
