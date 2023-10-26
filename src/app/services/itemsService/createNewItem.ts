import { instance } from "../../api/FirebaseConfig";
import { Item } from "../../interface/Item";
import cResponse from "../../interface/cResponse";

export async function createNewItem(data: Item, uid: string) {
  const response: cResponse = {
    status: 500,
    message: "Algo deu errado ao criar novo item",
  };
  const result = await instance
    .post<cResponse>(`/addNewItem/${uid}`, data)
    .then((result) => {
      if (result.status === 200) {
        response.status = 200;
        response.message = result.data.message;
        response.payload = result.data.payload;
        return response;
      } else {
        return response;
      }
    })
    .catch(() => {
      return response;
    });
  return result;
}
