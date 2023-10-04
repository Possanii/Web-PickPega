import { storage } from "../../api/FirebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import cResponse from "../../interface/cResponse";

export async function uploadToStorage(image: File, path: string) {
  const response: cResponse = { status: 401, message: "Algo deu errado" };

  const storageRef = ref(storage, `${path}/${image.name + "-" + v4()}`);

  await uploadBytes(storageRef, image)
    .then(async (snapshot) => {
      await getDownloadURL(snapshot.ref)
        .then((url) => {
          response.status = 200;
          response.message = "Armazenado com sucesso";
          response.payload = { url: url };
          return response;
        })
        .catch(() => {
          response.status = 500;
          response.message = "Falha ao pegar a url da imagem";
          return response;
        });
    })
    .catch(() => {
      response.status = 500;
      response.message = "Falha ao armazenar a imagem";
      return response;
    });
  return response;
}
