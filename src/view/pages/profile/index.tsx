import { Controller } from "react-hook-form";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import { CATEGORIES } from "../../../app/constants/categories";
import { UF } from "../../../app/constants/uf";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { useProfileController } from "./useProfileController";
import toast from "react-hot-toast";
import { searchAddressByZip } from "../../../app/services/locationService/searchAddressByZip";
import { Select, SelectItem } from "../../../components/Select";

export function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    errors,
    isLoading,
    control,
    getValues,
    setValue,
  } = useProfileController();

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Container lg>
        <Card.Root className="p-4 mx-4 my-6 md:m-0">
          <header className="w-full flex justify-center items-center">
            <h1 className="font-bold text-4xl">Informações pessoais</h1>
          </header>
          <main className="mt-6">
            <form className="grid gap-4" onSubmit={handleSubmit}>
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

                <Controller
                  control={control}
                  name="category"
                  render={({ field: { onChange, value } }) => (
                    <Select
                      placeholder="Categorias"
                      name="Categorias"
                      onChange={onChange}
                      value={value}
                      error={errors.category?.message}
                    >
                      {CATEGORIES.map((category, index) => {
                        return (
                          <SelectItem key={index} value={category}>
                            {category}
                          </SelectItem>
                        );
                      })}
                    </Select>
                  )}
                />
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
                      setLoading(true);
                      const result = await searchAddressByZip(zip);
                      setLoading(false);
                      if (result.payload) {
                        setValue("address.street", result.payload!.street);
                        setValue(
                          "address.neighborhood",
                          result.payload!.neighborhood
                        );
                        setValue("address.city", result.payload!.city);
                        setValue("address.uf", result.payload!.uf);
                      } else {
                        toast.error("Cep não encontrado");
                      }
                    } else {
                      toast.error("Insira um cep válido");
                    }
                  }}
                  error={errors.address?.zip?.message}
                  {...register("address.zip", { valueAsNumber: true })}
                />

                <Input
                  placeholder="Logadouro"
                  error={errors.address?.street?.message}
                  disabled={loading}
                  {...register("address.street")}
                />

                <Input
                  placeholder="Bairro"
                  error={errors.address?.neighborhood?.message}
                  disabled={loading}
                  {...register("address.neighborhood")}
                />
              </div>

              <div className="grid md:grid-cols-[20%_50%_auto] gap-2">
                <Input
                  placeholder="Numero"
                  error={errors.address?.number?.message}
                  disabled={loading}
                  {...register("address.number", { valueAsNumber: true })}
                />

                <Input
                  placeholder="Cidade"
                  error={errors.address?.city?.message}
                  disabled={loading}
                  {...register("address.city")}
                />

                <Controller
                  control={control}
                  name="address.uf"
                  render={({ field: { onChange, value } }) => (
                    <Select
                      placeholder="UF"
                      name="uf"
                      onChange={onChange}
                      value={value}
                      error={errors.address?.uf?.message}
                    >
                      {UF.map((uf, index) => {
                        return (
                          <SelectItem key={index} value={uf}>
                            {uf}
                          </SelectItem>
                        );
                      })}
                    </Select>
                  )}
                />
              </div>

              <Input
                placeholder="Imagem"
                className=" h-[60px] pt-6"
                type="file"
                error={errors.photo?.message}
                {...register("photo")}
              />

              <Button text="Atualizar" type="submit" isLoading={isLoading} />
            </form>
          </main>
        </Card.Root>
      </Container>
    </div>
  );
}
