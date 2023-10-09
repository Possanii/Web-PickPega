import { instance } from "../../api/FirebaseConfig";

interface responseProps {
  payload: [
    {
      tempopreparo: number;
      foto: string;
      valor: number;
      description: string;
      categoria: string;
      nome: string;
      active: boolean;
      estauranteid: string;
    }
  ];
}

export async function getAllItems(uid: string) {
  const result = await instance
    .get<responseProps>(`/getItemsByRestauranteId/${uid}`)
    .then((result) => {
      if (result.status === 200) {
        return result.data.payload;
      } else {
        return [];
      }
    })
    .catch(() => {
      return [];
    });
  return result;
}
