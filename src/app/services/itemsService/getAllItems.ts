import { instance } from "../../api/FirebaseConfig";
import { Item } from "../../interface/Item";

interface responseProps {
  payload: Array<Item>;
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
