import { instance } from "../../api/FirebaseConfig";
import { Order } from "../../interface/Order";

interface ordersResponse {
  status: number;
  message: string;
  payload: Array<Order>;
}

export async function GetDailyOrders(uid: string) {
  const result = await instance.get<ordersResponse>(
    `/getRestaurantOrders/${uid}`
  );

  if (result.data.status !== 200) {
    return [];
  } else {
    return result.data.payload.sort((a, b) => a.date.localeCompare(b.date));
  }
}
