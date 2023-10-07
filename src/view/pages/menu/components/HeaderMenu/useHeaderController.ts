import { useMenu } from "../MenuContext/useMenu";

export function useHeaderMenuController() {
  const {
    isNewItemMenuModalOpen,
    openNewItemMenuModal,
    closeNewItemMenuModal,
  } = useMenu();

  return {
    isNewItemMenuModalOpen,
    openNewItemMenuModal,
    closeNewItemMenuModal,
  };
}
