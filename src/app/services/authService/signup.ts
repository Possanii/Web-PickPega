import { instance } from "../../api/FirebaseConfig";

interface SignupResponse {
  status: number;
  message: string;
  payload: {
    accessToken: string;
  };
}

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
  const response = {} as SignupResponse;
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
