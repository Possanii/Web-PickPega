import { HeaderMenu } from "./components/HeaderMenu/Header";
import { ItemsListMenu } from "./components/ItemsListMenu/ItemsList";
import { MenuProvider } from "./components/MenuContext";
import { NewProductModal } from "./components/Modals/NewProductModal";

export function MenuItems() {
  return (
    <MenuProvider>
      <div className="w-full h-full">
        <HeaderMenu />
        <ItemsListMenu />
      </div>
      <NewProductModal />
    </MenuProvider>
  );
}
