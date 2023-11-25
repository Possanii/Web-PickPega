import { instance } from "../../api/FirebaseConfig";
import cResponse from "../../interface/cResponse";

export async function EditOrder(data: {
  id: string;
  updateOrder: {
    restaurantId: string;
    status: "Em produção" | "Finalizado";
  };
}) {
  const result = await instance.put<cResponse>(
    `/editOrder/${data.id}`,
    data.updateOrder
  );

  if (result.data.status === 200) {
    return { status: result.data.status, message: result.data.message };
  } else {
    return { status: result.data.status, message: result.data.message };
  }
}
