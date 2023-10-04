import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import background from "../../../assets/images/background.png";
import { useRegisterController } from "./useRegisterController";
import { Link } from "react-router-dom";
import { Select, SelectItem } from "../../../components/Select";
import { categories } from "../../../app/types/categories";
import { uf } from "../../../app/types/uf";
import { searchAddressByZip } from "../../../app/services/locationService/searchAddressByZip";
import { useState } from "react";

export function Register() {
  const [ufValue, setUfValue] = useState();
  const { handleSubmit, register, errors, getValues, setValue, isLoading } =
    useRegisterController();
  return (
    <>
      <img src={background} className="absolute h-full w-full object-cover" />
      <Container md className="h-full flex justify-center items-center">
        <Card.Root className="p-4 mx-4 my-6 md:m-0">
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
            <div className="grid md:grid-cols-[60%_auto] gap-2">
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
            </div>

            <div className="grid md:grid-cols-[60%_auto] gap-2">
              <Input
                placeholder="Nome"
                error={errors.name?.message}
                {...register("name")}
              />

              <Select
                placeholder="Categorias"
                {...register("category")}
                error={errors.category?.message}
              >
                {categories.map((category, index) => {
                  return (
                    <SelectItem key={index} value={category}>
                      {category}
                    </SelectItem>
                  );
                })}
              </Select>
            </div>

            <div className="grid md:grid-cols-[20%_50%_auto] gap-2">
              <Input
                placeholder="CEP"
                maxLength={8}
                minLength={8}
                search
                onSearchClick={async () => {
                  const zip = getValues("address.zip");
                  if (zip.toString().length === 8) {
                    const result = await searchAddressByZip(zip);
                    if (result.payload) {
                      setValue("address.street", result.payload.street);
                    }
                    setValue(
                      "address.neighborhood",
                      result.payload.neighborhood
                    );
                    setValue("address.city", result.payload.city);
                    setValue("address.uf", result.payload.uf);
                    setUfValue(result.payload.uf);
                  }
                }}
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
            </div>

            <div className="grid md:grid-cols-[20%_50%_auto] gap-2">
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

              <Select
                placeholder="UF"
                value={ufValue}
                error={errors.address?.uf?.message}
                {...register("address.uf")}
              >
                {uf.map((uf, index) => {
                  return (
                    <SelectItem key={index} value={uf}>
                      {uf}
                    </SelectItem>
                  );
                })}
              </Select>
            </div>

            <Input
              placeholder="Imagem"
              className=" h-[60px] pt-6"
              type="file"
              error={errors.photo?.message}
              {...register("photo")}
            />

            <Button text="Cadastrar" type="submit" isLoading={isLoading} />
          </form>
        </Card.Root>
      </Container>
    </>
  );
}
