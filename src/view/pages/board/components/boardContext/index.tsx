import { createContext, useCallback, useState } from "react";
import { ItemOrder } from "../../../../../app/interface/Item";

interface BoardContextValue {
  isOpenOrderModalOpen: boolean;
  handleOpenOrderModal(
    products: ItemOrder[],
    status: "Em espera" | "Em produção" | "Finalizado",
    table: string,
    payment: string
  ): void;
  handleCloseOrderModal(): void;
  orderBeingViewed: null | {
    products: ItemOrder[];
    status: "Em espera" | "Em produção" | "Finalizado";
    table: string;
    payment: string;
  };
}

export const BoardContext = createContext({} as BoardContextValue);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const [isOpenOrderModalOpen, setIsOpenOrderModalOpen] = useState(false);
  const [orderBeingViewed, setOrderBeingViewed] = useState<null | {
    products: ItemOrder[];
    status: "Em espera" | "Em produção" | "Finalizado";
    table: string;
    payment: string;
  }>(null);

  const handleOpenOrderModal = useCallback(
    (
      products: ItemOrder[],
      status: "Em espera" | "Em produção" | "Finalizado",
      table: string,
      payment: string
    ) => {
      setIsOpenOrderModalOpen(true);
      setOrderBeingViewed({ products, status, table, payment });
    },
    []
  );

  const handleCloseOrderModal = useCallback(() => {
    setIsOpenOrderModalOpen(false);
    setOrderBeingViewed(null);
  }, []);

  return (
    <BoardContext.Provider
      value={{
        isOpenOrderModalOpen,
        handleOpenOrderModal,
        handleCloseOrderModal,
        orderBeingViewed,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
