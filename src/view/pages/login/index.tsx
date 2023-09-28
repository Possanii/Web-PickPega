import { useEffect, useRef, useState } from "react";
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";
import { Container } from "../../../components/Container";
import { Card } from "../../../components/Card";
import background from "../../../assets/images/background.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../app/api/FirebaseConfig";
import { Toast, ToastHandles, ToastProps } from "../../../components/Toast";

export function Login() {
  const elementRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState<ToastProps>();
  const ref = useRef<ToastHandles>(null);

  useEffect(() => {
    toast && ref.current!.publish();
  }, [toast]);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) {
    e.preventDefault();

    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        // ...
        setToast({ title: "Sucesso", content: "Login realizado com sucesso." });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-login-credentials":
            setToast({
              title: "Login ou senha inválidos",
              content: "Suas credencias estão incorretas. Tente novamente.",
            });
            break;
          case "auth/too-many-requests":
            setToast({
              title: "Muitas requisições",
              content:
                "As solicitações foram bloqueadas devido a atividades incomuns. Tente novamente depois que algum tempo.",
            });
            break;
          default:
            setToast({ title: error.code, content: error.message });
            break;
        }
      });
  }

  return (
    <>
      <img src={background} className="absolute h-full w-full object-cover" />
      <Container sm className="h-full flex justify-center items-center">
        <Card.Root className="p-4 m-4 md:m-0">
          <Form.Root onSubmit={(e) => handleSubmit(e, email, password)}>
            <Form.Field name="email">
              <Form.Label text="Email" />
              <Form.Control asChild>
                <Input
                  ref={elementRef}
                  onChange={(value) => setEmail(value.target.value)}
                  type="email"
                  required
                />
              </Form.Control>
              <Form.Message
                text="Insira um Email Válido"
                match={"typeMismatch"}
              />
              <Form.Message text="Insira um Email" match={"valueMissing"} />
            </Form.Field>
            <Form.Field name="Senha">
              <Form.Label text="Senha" />
              <Form.Control asChild>
                <Input
                  ref={elementRef}
                  onChange={(value) => setPassword(value.target.value)}
                  type="password"
                  required
                />
              </Form.Control>
              <Form.Message
                match={(value) => value !== "1234562"}
                text="A senha não atende aos requisitos mínimos"
              />
              <Form.Message text="Insira uma senha" match={"valueMissing"} />
            </Form.Field>
            <Form.Submit text="Enviar" type="submit" />
          </Form.Root>
        </Card.Root>
      </Container>
      <Toast
        ref={ref}
        title={toast?.title || ""}
        content={toast?.content || ""}
        buttonAction
        linkButtonAction="http://localhost:5173/register"
      />
    </>
  );
}
