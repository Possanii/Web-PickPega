import { instance } from "../../api/FirebaseConfig";
import cResponse from "../../interface/cResponse";

interface newItemProps {
  tempopreparo: number;
  foto: string;
  valor: number;
  description: string;
  categoria: string;
  nome: string;
  active: boolean;
  restauranteid: string;
}

export async function createNewItem(data: newItemProps) {
  const response: cResponse = {
    status: 500,
    message: "Algo deu errado ao criar novo item",
  };
  const result = await instance
    .post<cResponse>(`/addNewItem`, data)
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
