import { useMenuController } from "../../ItemsListMenu/useMenuController";
import { useMenu } from "../../MenuContext/useMenu";

export function useCategoriesModal() {
  const {
    isCategoryMenuModalOpen,
    closeCategoryMenuModal,
    openNewCategoryMenuModal,
    newCategoryType,
  } = useMenu();

  const { filterOptions } = useMenuController();

  const categories = filterOptions.filter((category) => category !== "Todos");

  return {
    isCategoryMenuModalOpen,
    closeCategoryMenuModal,
    openNewCategoryMenuModal,
    categories: categories ?? [],
    newCategoryType,
  };
}
