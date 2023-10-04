import { storage } from "../../api/FirebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import cResponse from "../../interface/cResponse";

export async function deleteFromStorage(path: string) {
  const response: cResponse = { status: 401, message: "Algo deu errado" };

  const storageRef = ref(storage, path);

  // Delete the file
  await deleteObject(storageRef)
    .then(() => {
      response.status = 200;
      response.message = "Imagem deletada com sucesso";
      return response;
    })
    .catch(() => {
      response.status = 500;
      response.message = "Falha ao deletar imagem";
      return response;
    });
  return response;
}
