import { createContext, useCallback, useState } from "react";

interface MenuContextValue {
  isNewItemMenuModalOpen: boolean;
  openNewItemMenuModal(): void;
  closeNewItemMenuModal(): void;
}

export const MenuContext = createContext({} as MenuContextValue);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isNewItemMenuModalOpen, setIsNewItemMenuModalOpen] = useState(false);

  const openNewItemMenuModal = useCallback(() => {
    setIsNewItemMenuModalOpen(true);
  }, []);

  const closeNewItemMenuModal = useCallback(() => {
    setIsNewItemMenuModalOpen(false);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        isNewItemMenuModalOpen,
        openNewItemMenuModal,
        closeNewItemMenuModal,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
