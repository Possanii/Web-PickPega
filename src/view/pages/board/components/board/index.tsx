import { Spinner } from "../../../../../components/Spinner";
import { BoardColumn } from "./boardColumn";
import { OrderModal } from "./boardColumn/orderModal";
import { useBoardController } from "./useBoardController";

export function DashboardOrders() {
  const { orderBeingViewed, orders, isFetching } = useBoardController();

  return (
    <div className="w-full flex gap-8 justify-center h-4/5 ">
      {isFetching && (
        <div className="flex flex-col items-center justify-center h-full">
          <Spinner className="h-40 w-40" />
        </div>
      )}
      {!isFetching && (
        <div className="flex flex-1 gap-8 mt-10 ">
          <BoardColumn
            orders={orders.filter((order) => order.status === "Em espera")}
            icon="🕑"
            title="Fila de espera"
          />
          <BoardColumn
            orders={orders.filter((order) => order.status === "Em produção")}
            icon="👨‍🍳"
            title="Em produção"
          />
          <BoardColumn
            orders={orders.filter((order) => order.status === "Finalizado")}
            icon="✅"
            title="Prontos"
          />
        </div>
      )}
      {orderBeingViewed !== null && <OrderModal />}
    </div>
  );
}
