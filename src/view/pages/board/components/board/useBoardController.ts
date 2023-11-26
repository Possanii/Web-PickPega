import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { OrderService } from "../../../../../app/services/ordersService";
import { useBoard } from "../boardContext/useBoard";
import { useUser } from "../../../../../app/hooks/useUser";
import { firestore } from "../../../../../app/api/FirebaseConfig";
import toast from "react-hot-toast";

export function useBoardController() {
  const { orderBeingViewed } = useBoard();
  const { GetDailyOrders } = OrderService();
  const { user } = useUser();

  const queryClient = useQueryClient();

  async function handleOrders() {
    const orders = await GetDailyOrders(user!.uid);

    return orders;
  }

  const { data: orders, isFetching } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => await handleOrders(),
    staleTime: Infinity,
  });

  const q = query(collection(firestore, "Order", user!.uid, "orders"));
  onSnapshot(q, (snapshot) => {
    const docs: Array<DocumentData> = [];
    snapshot.docs.forEach((doc) => docs.push(doc.data()));
    docs.sort((a, b) => {
      return a.date.localeCompare(b.date);
    });
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === "added" && orders && !isFetching) {
        if (
          docs.length !== orders.length &&
          docs!.at(-1)!.name !== orders.at(-1)!.name
        ) {
          toast.success("Novo pedido encontrado 👨‍🍳");
          queryClient.invalidateQueries({ queryKey: ["orders"] });
        }
      }
    });
  });

  return {
    orderBeingViewed,
    orders: orders ?? [],
    isFetching,
  };
}
