import { Order } from "../../../../../../../app/interface/Order";
import { useBoardOrderController } from "./useBoardOrderController";

interface BoardOrderProps {
  order: Order;
}

export function BoardOrder({ order }: BoardOrderProps) {
  const { handleOpenOrderModal } = useBoardOrderController();

  return (
    <div
      className="flex flex-col justify-center items-center border rounded-lg h-[128px]"
      role="button"
      onClick={() =>
        handleOpenOrderModal({
          orderId: order.orderId,
          products: order.products,
          status: order.status,
          payment: order.payment,
          table: order.name,
        })
      }
    >
      <strong>Mesa {order.name}</strong>
      <span className="opacity-50">{order.products.length} Items</span>
    </div>
  );
}
