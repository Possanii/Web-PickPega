import { GetDailyOrders } from "./getDailyOrders";
import { EditOrder } from "./editOrder";

export function OrderService() {
  return {
    GetDailyOrders,
    EditOrder,
  };
}
