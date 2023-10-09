import { HeaderMenu } from "./components/HeaderMenu/Header";
import { ItemsListMenu } from "./components/ItemsListMenu/ItemsList";
import { MenuProvider } from "./components/MenuContext";

export function MenuItems() {
  return (
    <MenuProvider>
      <div className="h-full w-full">
        <div className="h-full w-full flex flex-col">
          <HeaderMenu />
          <ItemsListMenu />
        </div>
      </div>
    </MenuProvider>
  );
}
