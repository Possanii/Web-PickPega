import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import background from "../../../assets/images/background.png";
import { useRegisterController } from "./useRegisterController";
import { Link } from "react-router-dom";
import { Select, SelectItem } from "../../../components/Select";

export function Register() {
  const { handleSubmit, register, errors } = useRegisterController();

  return (
    <>
      <img src={background} className="absolute h-full w-full object-cover" />
      <Container sm className="h-full flex justify-center items-center">
        <Card.Root className="p-4 m-4 md:m-0">
          <header className="flex flex-col items-center gap-4 mb-4">
            <h1 className="text-2xl font-bold text-light-yellow">
              Cadastre seu restaurante
            </h1>

            <p className="space-x-2">
              <span>Já possui cadastro?</span>
              <Link to="/login" className="text-light-blue font-medium">
                Fazer login
              </Link>
            </p>
          </header>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              placeholder="Nome"
              error={errors.name?.message}
              {...register("name")}
            />

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

            <Select placeholder="Categorias">
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </Select>

            <Input
              placeholder="CEP"
              error={errors.address?.zip?.message}
              {...register("address.zip", { valueAsNumber: true })}
            />

            <Input
              placeholder="Logadouro"
              error={errors.address?.street?.message}
              {...register("address.street")}
            />

            <Input
              placeholder="Bairro"
              error={errors.address?.neighborhood?.message}
              {...register("address.neighborhood")}
            />

            <Input
              placeholder="Numero"
              error={errors.address?.number?.message}
              {...register("address.number", { valueAsNumber: true })}
            />

            <Input
              placeholder="Cidade"
              error={errors.address?.city?.message}
              {...register("address.city")}
            />

            <Input
              placeholder="UF"
              error={errors.address?.uf?.message}
              {...register("address.uf")}
            />

            <Button text="Cadastrar" type="submit" />
          </form>
        </Card.Root>
      </Container>
    </>
  );
}
