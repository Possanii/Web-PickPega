import { storage } from "../../api/FirebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import cResponse from "../../interface/cResponse";

export async function deleteFromStorage(path: string) {
  const response: cResponse = { status: 401 };

  const storageRef = ref(storage, path);

  // Delete the file
  await deleteObject(storageRef)
    .then(() => {
      response.status = 200;
      response.message = "Successfully deleted";
      return response;
    })
    .catch(() => {
      response.status = 500;
      response.message = "Failed to delete from storage";
      return response;
    });
  return response;
}
