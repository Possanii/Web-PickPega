import { createContext, useCallback, useState } from "react";

interface Products {
  _id: string;
  quantity: number;
  product: {
    name: string;
    imagePath: string;
    price: number;
  };
}

interface BoardContextValue {
  isOpenOrderModalOpen: boolean;
  handleOpenOrderModal(
    products: Products[],
    status: "WAITING" | "DOING" | "DONE",
    table: string
  ): void;
  handleCloseOrderModal(): void;
  orderBeingViewed: null | {
    products: Products[];
    status: "WAITING" | "DOING" | "DONE";
    table: string;
  };
}

export const BoardContext = createContext({} as BoardContextValue);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const [isOpenOrderModalOpen, setIsOpenOrderModalOpen] = useState(false);
  const [orderBeingViewed, setOrderBeingViewed] = useState<null | {
    products: Products[];
    status: "WAITING" | "DOING" | "DONE";
    table: string;
  }>(null);

  const handleOpenOrderModal = useCallback(
    (
      products: Products[],
      status: "WAITING" | "DOING" | "DONE",
      table: string
    ) => {
      setIsOpenOrderModalOpen(true);
      setOrderBeingViewed({ products, status, table });
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
