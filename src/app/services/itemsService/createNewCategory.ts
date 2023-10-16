import { Restaurant } from "../../interface/Restaurant";

interface cResponse {
  status: number;
  message: string;
  payload?: Array<string>;
}

export async function createNewCategory({
  user,
  category,
}: {
  user: Restaurant;
  category: string;
}) {
  const response: cResponse = {
    status: 500,
    message: "Algo deu errado ao criar novo array de categoria",
  };

  if (user?.categories?.length === 0) {
    response.status = 200;
    response.message = "Inserido com sucesso";
    response.payload = [category];
    return response;
  } else {
    if (user?.categories?.includes(category)) {
      response.status = 403;
      response.message = "Categoria já existe";
      return response;
    } else {
      response.status = 200;
      response.message = "Inserido com sucesso";
      user?.categories?.push(category);
      response.payload = user?.categories;
      return response;
    }
  }
}
