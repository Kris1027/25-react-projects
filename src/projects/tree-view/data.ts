export type MenuProps = {
  label: string;
  to: string;
  children?: MenuProps[];
};

export const menus: MenuProps[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "/location",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "/account",
      },
      {
        label: "Security",
        to: "/security",
      },
      {
        label: "Register",
        to: "/register",
      },
    ],
  },
];
