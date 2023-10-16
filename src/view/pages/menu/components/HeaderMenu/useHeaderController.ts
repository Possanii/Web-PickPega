import { useMenu } from "../MenuContext/useMenu";

export function useHeaderMenuController() {
  const { openNewItemMenuModal, openCategoryMenuModal } = useMenu();

  return {
    openNewItemMenuModal,
    openCategoryMenuModal,
  };
}
