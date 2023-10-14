import { HeaderMenu } from "./components/HeaderMenu/Header";
import { ItemsListMenu } from "./components/ItemsListMenu/ItemsList";
import { MenuContext, MenuProvider } from "./components/MenuContext";
import { EditProductModal } from "./components/Modals/EditProductModal";
import { NewProductModal } from "./components/Modals/NewProductModal";

export function MenuItems() {
  return (
    <MenuProvider>
      <MenuContext.Consumer>
        {({ itemBeingEdited }) => (
          <>
            <div className="h-[140px] w-full">
              <HeaderMenu />
            </div>
            <div className="w-full">
              <ItemsListMenu />
            </div>
            <NewProductModal />
            {itemBeingEdited && <EditProductModal />}
          </>
        )}
      </MenuContext.Consumer>
    </MenuProvider>
  );
}
