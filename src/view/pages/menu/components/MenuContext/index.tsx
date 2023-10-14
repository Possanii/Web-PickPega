import { createContext, useCallback, useState } from "react";
import { Item } from "../../../../../app/interface/Item";

interface MenuContextValue {
  isNewItemMenuModalOpen: boolean;
  openNewItemMenuModal(): void;
  closeNewItemMenuModal(): void;
  isEditItemMenuModalOpen: boolean;
  openEditItemMenuModal(item: Item): void;
  closeEditItemMenuModal(): void;
  itemBeingEdited: null | Item;
}

export const MenuContext = createContext({} as MenuContextValue);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isNewItemMenuModalOpen, setIsNewItemMenuModalOpen] = useState(false);
  const [isEditItemMenuModalOpen, setIsEditItemMenuModalOpen] = useState(false);
  const [itemBeingEdited, setItemBeingEdited] = useState<null | Item>(null);

  const openNewItemMenuModal = useCallback(() => {
    setIsNewItemMenuModalOpen(true);
  }, []);

  const closeNewItemMenuModal = useCallback(() => {
    setIsNewItemMenuModalOpen(false);
  }, []);

  const openEditItemMenuModal = useCallback((item: Item) => {
    setItemBeingEdited(item);
    setIsEditItemMenuModalOpen(true);
  }, []);

  const closeEditItemMenuModal = useCallback(() => {
    setItemBeingEdited(null);
    setIsEditItemMenuModalOpen(false);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        isNewItemMenuModalOpen,
        openNewItemMenuModal,
        closeNewItemMenuModal,
        isEditItemMenuModalOpen,
        openEditItemMenuModal,
        closeEditItemMenuModal,
        itemBeingEdited,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
