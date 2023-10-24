import { HeaderMenu } from "./components/HeaderMenu/Header";
import { ItemsListMenu } from "./components/ItemsListMenu/ItemsList";
import { MenuContext, MenuProvider } from "./components/MenuContext";
import { CategoriesModal } from "./components/Modals/CategoriesModal";
import { NewCategoryModal } from "./components/Modals/CategoriesModal/newCategoryModal";
import { EditProductModal } from "./components/Modals/EditProductModal";
import { NewProductModal } from "./components/Modals/NewProductModal";

export function MenuItemsPage() {
  return (
    <MenuProvider>
      <MenuContext.Consumer>
        {({ itemBeingEdited, categoryBeingEdited, newCategoryType }) => (
          <>
            <div className="h-[140px] w-full">
              <HeaderMenu />
            </div>
            <div className="w-full">
              <ItemsListMenu />
            </div>
            <NewProductModal />
            {itemBeingEdited && <EditProductModal />}
            <CategoriesModal />
            {(categoryBeingEdited || newCategoryType === "NEW") && (
              <NewCategoryModal />
            )}
          </>
        )}
      </MenuContext.Consumer>
    </MenuProvider>
  );
}
