import { instance } from "../../api/FirebaseConfig";
import cResponse from "../../interface/cResponse";

interface NewCategoryResponse {
  status: number;
  message: string;
  payload?: string;
}

export async function createNewCategory({
  uid,
  categoryName,
}: {
  uid: string;
  categoryName: string;
}) {
  const response: cResponse = {
    status: 500,
    message: "Algo deu errado ao criar novo item",
  };
  const result = await instance
    .post<NewCategoryResponse>(`/createCategory/${uid}`, {
      categoryName: categoryName,
    })
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
