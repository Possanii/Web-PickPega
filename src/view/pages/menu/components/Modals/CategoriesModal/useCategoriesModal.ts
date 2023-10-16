import { useUser } from "../../../../../../app/hooks/useUser";
import { useMenu } from "../../MenuContext/useMenu";

export function useCategoriesModal() {
  const {
    isCategoryMenuModalOpen,
    closeCategoryMenuModal,
    openNewCategoryMenuModal,
    newCategoryType,
  } = useMenu();

  const { user } = useUser();

  return {
    isCategoryMenuModalOpen,
    closeCategoryMenuModal,
    openNewCategoryMenuModal,
    categories: user!.categories ?? [],
    newCategoryType,
  };
}
