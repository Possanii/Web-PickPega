import { DashboardIcon, Pencil2Icon, PersonIcon } from "@radix-ui/react-icons";

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
    title: "Meu Perfil",
    name: "Profile",
    parent: true,
    icon: PersonIcon,
    link: "/profile",
  },
  {
    id: "menu",
    title: "Cardápio",
    name: "Menu",
    parent: true,
    icon: Pencil2Icon,
    link: "/menu",
  },
];

export { nav };
