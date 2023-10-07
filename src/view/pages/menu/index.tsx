import { HeaderMenu } from "./components/HeaderMenu/Header";
import { ItemsListMenu } from "./components/ItemsListMenu/ItemsList";
import { MenuProvider } from "./components/MenuContext";

export function MenuItems() {
  return (
    <MenuProvider>
      <div className="w-full h-full">
        <HeaderMenu />
        <ItemsListMenu />
      </div>
    </MenuProvider>
  );
}
