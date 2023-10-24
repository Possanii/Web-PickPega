import { instance } from "../../api/FirebaseConfig";
import { Item } from "../../interface/Item";
import cResponse from "../../interface/cResponse";

export async function EditItem(item: Item, uid: string) {
  const response: cResponse = {
    status: 500,
    message: "Algo deu errado ao editar item",
  };
  await instance
    .put(`/editItem/${uid}`, item)
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
    .catch((err) => {
      console.log(err);
      return response;
    });
  return response;
}
