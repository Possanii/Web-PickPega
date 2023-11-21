import {
  DashboardIcon,
  FileTextIcon,
  Pencil2Icon,
  PersonIcon,
} from "@radix-ui/react-icons";

const nav = [
  {
    id: "dashboard",
    title: "Dashboard",
    name: "dashboard",
    parent: true,
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    id: "profile",
    title: "Meu Perfil",
    name: "profile",
    parent: true,
    icon: PersonIcon,
    link: "/profile",
  },
  {
    id: "menu",
    title: "Cardápio",
    name: "menu",
    parent: true,
    icon: Pencil2Icon,
    link: "/menu",
  },
  {
    id: "board",
    title: "Pedidos",
    name: "board",
    parent: true,
    icon: FileTextIcon,
    link: "/board",
  },
];

export { nav };
