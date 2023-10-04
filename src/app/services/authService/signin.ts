import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../api/FirebaseConfig";
import cResponse from "../../interface/cResponse";

const auth = getAuth(app);

interface SigninProps {
  email: string;
  password: string;
}

export async function signin({ email, password }: SigninProps) {
  const response: cResponse = { status: 400, message: "Algo deu errado" };
  await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;

      response.status = 200;
      response.message = "Logado com sucesso";
      response.payload = user;
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          response.status = 401;
          response.message = "Login ou senha inválidos";
          break;
        case "auth/too-many-requests":
          response.status = 429;
          response.message = "Muitas requisições";
          break;
        default:
          response.status = error.code;
          response.message = "Algo deu errado";
          break;
      }
    });
  return response;
}
