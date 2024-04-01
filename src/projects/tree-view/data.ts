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
            children: [
              {
                label: "City",
                to: "/city",
                children: [
                  {
                    label: "London",
                    to: "/london",
                  },
                ],
              },
            ],
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
        children: [
          {
            label: "Login",
            to: "/login",
          },
          {
            label: "Register",
            to: "/register",
          },
        ],
      },
    ],
  },
];
