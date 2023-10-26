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
  isCategoryMenuModalOpen: boolean;
  openCategoryMenuModal(): void;
  closeCategoryMenuModal(): void;
  isNewCategoryMenuModalOpen: boolean;
  openNewCategoryMenuModal(
    type: "NEW" | "EDIT",
    category?: { index: number; category: string }
  ): void;
  closeNewCategoryMenuModal(): void;
  newCategoryType: "NEW" | "EDIT" | null;
  categoryBeingEdited: null | { category: string; index: number };
  currentFilterOptions(options: string[]): void;
  filterOptions: string[];
}

export const MenuContext = createContext({} as MenuContextValue);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isNewItemMenuModalOpen, setIsNewItemMenuModalOpen] = useState(false);
  const [isEditItemMenuModalOpen, setIsEditItemMenuModalOpen] = useState(false);
  const [itemBeingEdited, setItemBeingEdited] = useState<null | Item>(null);
  const [isCategoryMenuModalOpen, setIsCategoryMenuModalOpen] = useState(false);
  const [isNewCategoryMenuModalOpen, setIsNewCategoryMenuModalOpen] =
    useState(false);
  const [newCategoryType, setNewCategoryType] = useState<"NEW" | "EDIT" | null>(
    null
  );
  const [categoryBeingEdited, setCategoryBeingEdited] = useState<null | {
    category: string;
    index: number;
  }>(null);
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

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

  const openCategoryMenuModal = useCallback(() => {
    setIsCategoryMenuModalOpen(true);
  }, []);

  const closeCategoryMenuModal = useCallback(() => {
    setIsCategoryMenuModalOpen(false);
  }, []);

  const openNewCategoryMenuModal = useCallback(
    (type: "NEW" | "EDIT", category?: { index: number; category: string }) => {
      setNewCategoryType(type);
      setCategoryBeingEdited(category ?? null);
      setIsNewCategoryMenuModalOpen(true);
    },
    []
  );

  const closeNewCategoryMenuModal = useCallback(() => {
    setNewCategoryType(null);
    setCategoryBeingEdited(null);
    setIsNewCategoryMenuModalOpen(false);
  }, []);

  const currentFilterOptions = useCallback((options: string[]) => {
    setFilterOptions(options);
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
        isCategoryMenuModalOpen,
        openCategoryMenuModal,
        closeCategoryMenuModal,
        isNewCategoryMenuModalOpen,
        openNewCategoryMenuModal,
        closeNewCategoryMenuModal,
        newCategoryType,
        categoryBeingEdited,
        currentFilterOptions,
        filterOptions,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
