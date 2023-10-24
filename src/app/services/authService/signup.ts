import { instance } from "../../api/FirebaseConfig";
import cResponse from "../../interface/cResponse";

interface SignupProps {
  name: string;
  email: string;
  password: string;
  category: string;
  address: {
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    uf: string;
    zip: number;
  };
  photo: string;
  lat: number;
  lng: number;
}

export async function signup(data: SignupProps) {
  const response: cResponse = {
    status: 400,
    message: "Algo deu errado ao criar restaurante",
  };
  await instance
    .post("/addNewRestaurant", data)
    .then((result) => {
      response.status = 200;
      response.message = "Restaurante criado com sucesso";
      response.payload = result.data;
    })
    .catch((error) => {
      response.status = 500;
      response.message = error.message;
    });
  return response;
}
