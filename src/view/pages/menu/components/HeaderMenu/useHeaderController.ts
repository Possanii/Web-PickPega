import { useMenu } from "../MenuContext/useMenu";

export function useHeaderMenuController() {
  const { openNewItemMenuModal } = useMenu();

  return {
    openNewItemMenuModal,
  };
}
