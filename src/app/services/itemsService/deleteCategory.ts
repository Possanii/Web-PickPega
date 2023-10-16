import { Restaurant } from "../../interface/Restaurant";

interface cResponse {
  status: number;
  message: string;
  payload?: Array<string>;
}

export async function deleteCategory({
  user,
  category,
  index,
}: {
  user: Restaurant;
  category: string;
  index: number;
}) {
  const response: cResponse = {
    status: 500,
    message: "Algo deu errado ao criar novo array de categoria",
  };

  if (!user?.categories?.includes(category)) {
    response.status = 404;
    response.message = "Categoria não existe";
    return response;
  } else {
    response.status = 200;
    response.message = "Deletado com sucesso";
    user.categories!.splice(index, 1);
    response.payload = user.categories!;
    return response;
  }
}
