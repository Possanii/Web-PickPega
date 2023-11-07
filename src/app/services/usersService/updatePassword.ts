import { instance } from "../../api/FirebaseConfig";

interface updatePasswordResponse {
  status: number;
  message: string;
  payload: string;
}

export async function updatePassword({
  uid,
  password,
}: {
  uid: string;
  password: string;
}) {
  const response = await instance
    .put<updatePasswordResponse>(`/updatePassword/${uid}`, {
      novaSenha: password,
    })
    .then((result) => {
      return result;
    });
  return response;
}
