import { Input } from "../../../components/Input";
import { Container } from "../../../components/Container";
import { Card } from "../../../components/Card";
import background from "../../../assets/images/background.png";
import { Button } from "../../../components/Button";
import { useLoginController } from "./useLoginController";
import { Link } from "react-router-dom";

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <>
      <img src={background} className="absolute h-full w-full object-cover" />
      <Container sm className="h-full flex justify-center items-center">
        <Card.Root className="p-4 m-4 md:m-0">
          <header className="flex flex-col items-center gap-4 mb-4">
            <h1 className="text-2xl font-bold text-light-yellow">
              Entre em sua conta
            </h1>

            <p className="space-x-2">
              <span>Novo por aqui?</span>
              <Link to="/register" className="text-light-blue font-medium">
                Crie uma conta
              </Link>
            </p>
          </header>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              placeholder="E-mail"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              placeholder="Senha"
              type="password"
              error={errors.password?.message}
              {...register("password")}
            />

            <Button text="Login" type="submit" isLoading={isLoading} />
          </form>
        </Card.Root>
      </Container>
    </>
  );
}
