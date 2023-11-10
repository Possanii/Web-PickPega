import { useEffect, useMemo, useState } from "react";
import { useBoard } from "../../../boardContext/useBoard";

export function useOrderModalController() {
  const { isOpenOrderModalOpen, handleCloseOrderModal, orderBeingViewed } =
    useBoard();

  const [totalPrice, setTotalPrice] = useState(0);

  const CalculateTotalPrice = useMemo(() => {
    orderBeingViewed!.products.forEach((product) => {
      setTotalPrice((prev) => prev + product.product.price);
    });
  }, [orderBeingViewed]);

  useEffect(() => CalculateTotalPrice, [CalculateTotalPrice]);

  return {
    isOpenOrderModalOpen,
    handleCloseOrderModal,
    orderBeingViewed,
    totalPrice,
  };
}
