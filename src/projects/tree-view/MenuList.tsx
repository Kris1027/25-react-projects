import { MenuItem } from "./MenuItem";
import { MenuProps } from "./data";

export const MenuList = ({ list = [] }: { list: MenuProps[] }) => {
  return (
    <ul>
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
};
