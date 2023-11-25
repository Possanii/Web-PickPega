import { createContext, useCallback, useState } from "react";
import { OrderBeingViewed } from "../../../../../app/interface/OrderBeingViewed";

interface BoardContextValue {
  isOpenOrderModalOpen: boolean;
  handleOpenOrderModal(orderBeingViewed: OrderBeingViewed): void;
  handleCloseOrderModal(): void;
  orderBeingViewed: null | OrderBeingViewed;
}

export const BoardContext = createContext({} as BoardContextValue);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const [isOpenOrderModalOpen, setIsOpenOrderModalOpen] = useState(false);
  const [orderBeingViewed, setOrderBeingViewed] =
    useState<null | OrderBeingViewed>(null);

  const handleOpenOrderModal = useCallback(
    ({ products, status, table, payment, orderId }: OrderBeingViewed) => {
      setIsOpenOrderModalOpen(true);
      setOrderBeingViewed({ products, status, table, payment, orderId });
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
