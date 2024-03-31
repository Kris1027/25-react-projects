import { MenuList } from "./MenuList";
import { type MenuProps } from "./data";

export const MenuItem = ({ item }: { item: MenuProps }) => {
  return (
    <li>
      <p>{item.label}</p>
      {item && item.children && item.children.length > 0 ? (
        <MenuList key={item.label} list={item.children} />
      ) : null}
    </li>
  );
};
