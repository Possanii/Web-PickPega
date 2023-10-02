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
  x: number;
  y: number;
}

export async function signup(data: SignupProps) {
  const response: cResponse = { status: 401 };
  await instance.post("/addNewRestaurante", data).then((result) => {
    console.log(result);

    return response;
  });
}
