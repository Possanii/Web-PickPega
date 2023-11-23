import { useQuery } from "@tanstack/react-query";
import { OrderService } from "../../../../../app/services/ordersService";
import { useBoard } from "../boardContext/useBoard";
import { useUser } from "../../../../../app/hooks/useUser";

export function useBoardController() {
  const { orderBeingViewed } = useBoard();
  const { GetDailyOrders } = OrderService();
  const { user } = useUser();

  async function handleOrders() {
    const orders = await GetDailyOrders(user!.uid);

    return orders;
  }

  const { data: orders, isFetching } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => await handleOrders(),
    staleTime: Infinity,
  });

  return {
    orderBeingViewed,
    orders: orders ?? [],
    isFetching,
  };
}
