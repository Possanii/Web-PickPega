import { instance, auth } from "../../api/FirebaseConfig";
import { sleep } from "../../utils/sleep";

interface MeResponse {
  uid: string;
  name: string;
  email: string;
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

export async function getMe() {
  while (!auth.currentUser) {
    await sleep(100);
  }

  const uid = auth.currentUser.uid;
  const user = await instance
    .get<MeResponse>(`/getRestaurantById/?id=${uid}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  return user;
}
