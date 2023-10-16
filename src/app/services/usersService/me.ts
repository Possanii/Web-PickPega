import { instance, auth } from "../../api/FirebaseConfig";
import { Restaurant } from "../../interface/Restaurant";
import { sleep } from "../../utils/sleep";

export async function getMe() {
  while (!auth.currentUser) {
    await sleep(100);
  }

  const uid = auth.currentUser.uid;
  const user = await instance
    .get<Restaurant>(`/getRestaurantById/?id=${uid}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  return user;
}
