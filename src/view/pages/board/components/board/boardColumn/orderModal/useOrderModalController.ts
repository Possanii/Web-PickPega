import { useEffect, useMemo, useState } from "react";
import { useBoard } from "../../../boardContext/useBoard";
import { OrderService } from "../../../../../../../app/services/ordersService";
import { useUser } from "../../../../../../../app/hooks/useUser";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useOrderModalController() {
  const { isOpenOrderModalOpen, handleCloseOrderModal, orderBeingViewed } =
    useBoard();
  const { EditOrder } = OrderService();
  const { user } = useUser();

  const [totalPrice, setTotalPrice] = useState(0);

  const queryClient = useQueryClient();

  const CalculateTotalPrice = useMemo(() => {
    orderBeingViewed!.products.forEach((product) => {
      setTotalPrice((prev) => prev + Number(product.price) * product.qntd);
    });
  }, [orderBeingViewed]);

  useEffect(() => CalculateTotalPrice, [CalculateTotalPrice]);

  async function handleStatusOrder() {
    const response = await mutateAsync();

    if (response.status === 200) {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Pedido em produção");
      handleCloseOrderModal();
    } else {
      toast.error("Algo deu errado ao mudar o status");
    }
  }

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async () => {
      if (orderBeingViewed!.status === "Em espera") {
        return await EditOrder({
          id: orderBeingViewed!.orderId,
          updateOrder: { restaurantId: user!.uid, status: "Em produção" },
        });
      } else if (orderBeingViewed!.status === "Em produção") {
        return await EditOrder({
          id: orderBeingViewed!.orderId,
          updateOrder: { restaurantId: user!.uid, status: "Finalizado" },
        });
      } else {
        return { status: 500, message: "Algo deu errado ao mudar o status" };
      }
    },
  });

  return {
    isOpenOrderModalOpen,
    handleCloseOrderModal,
    orderBeingViewed,
    totalPrice,
    handleStatusOrder,
    isLoading,
  };
}
