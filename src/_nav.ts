import { DashboardIcon, PersonIcon } from "@radix-ui/react-icons";

const nav = [
  {
    id: "dashboard",
    title: "Dashboard",
    name: "Dashboard",
    parent: true,
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    id: "profile",
    title: "Profile",
    name: "Profile",
    parent: true,
    icon: PersonIcon,
    child: [
      {
        id: "My profile",
        title: "My profile",
        name: "My profile",
        link: "/profile/my-profile",
        icon: "dot",
      },
    ],
  },
];

export { nav };