import { storage } from "../../api/FirebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import cResponse from "../../interface/cResponse";

export async function uploadToStorage(image: File, path: string) {
  const response: cResponse = { status: 401 };

  const storageRef = ref(storage, `${path}/${image.name + "-" + v4()}`);

  await uploadBytes(storageRef, image)
    .then(async (snapshot) => {
      await getDownloadURL(snapshot.ref)
        .then((url) => {
          response.status = 200;
          response.message = "Successfully uploaded";
          response.payload = { url: url };
          return response;
        })
        .catch(() => {
          response.status = 500;
          response.message = "Failed to get download url to storage";
          return response;
        });
    })
    .catch(() => {
      response.status = 500;
      response.message = "Failed to upload to storage";
      return response;
    });
  return response;
}
