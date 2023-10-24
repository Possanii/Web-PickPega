import { instance } from "../../api/FirebaseConfig";
import cResponse from "../../interface/cResponse";
import { Restaurant } from "../../interface/Restaurant";

export async function editUser(data: Restaurant, uid: string) {
  const response: cResponse = {
    status: 500,
    message: "Erro ao atualizar usuário",
  };

  const result = await instance
    .put(`/editRestaurant/${uid}`, data)
    .then((result) => {
      if (result.status === 200) {
        response.status = 200;
        response.message = "Atualizado com sucesso";
        return response;
      } else {
        return response;
      }
    });
  return result;
}
