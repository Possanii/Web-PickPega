import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../api/FirebaseConfig";
import cResponse from "../../interface/cResponse";

const auth = getAuth(app);

interface SigninProps {
  email: string;
  password: string;
}

export async function signin({ email, password }: SigninProps) {
  const response: cResponse = { status: 401 };
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      response.status = 200;
      response.toast = {
        title: "Success",
        content: "Successfully signed in",
      };
      response.payload = user;
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          response.status = 401;
          response.toast = {
            title: "Login ou senha inválidos",
            content: "Suas credencias estão incorretas. Tente novamente.",
          };
          break;
        case "auth/too-many-requests":
          response.status = 429;
          response.toast = {
            title: "Muitas requisições",
            content:
              "As solicitações foram bloqueadas devido a atividades incomuns. Tente novamente depois que algum tempo.",
          };
          break;
        default:
          response.status = error.code;
          response.toast = {
            title: error.code,
            content: error.message,
          };
          break;
      }
    });
  return response;
}
