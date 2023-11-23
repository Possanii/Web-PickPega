import { Spinner } from "../../../../../components/Spinner";
import { BoardColumn } from "./boardColumn";
import { OrderModal } from "./boardColumn/orderModal";
import { useBoardController } from "./useBoardController";

export function DashboardOrders() {
  const { orderBeingViewed, orders, isFetching } = useBoardController();

  return (
    <div className="w-full flex flex-1 gap-8 mt-10">
      {isFetching && (
        <div className="flex flex-col items-center justify-center h-full">
          <Spinner className="h-40 w-40" />
        </div>
      )}
      {!isFetching && (
        <>
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
        </>
      )}
      {orderBeingViewed !== null && <OrderModal />}
    </div>
  );
}
