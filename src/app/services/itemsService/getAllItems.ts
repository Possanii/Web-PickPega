import { instance } from "../../api/FirebaseConfig";
import { Item } from "../../interface/Item";

interface responseProps {
  status: number;
  message: string;
  payload: {
    categories: Array<Record<string, Array<Item>>>;
  };
}

export async function getAllItems(uid: string) {
  const result = await instance
    .get<responseProps>(`/getRestaurantMenu/${uid}`)
    .then((result) => {
      if (result.data.status === 200) {
        return result.data.payload.categories;
      } else {
        return [];
      }
    })
    .catch(() => {
      return [];
    });
  return result;
}
