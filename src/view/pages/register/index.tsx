import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import background from "../../../assets/images/background.png";
import { useRegisterController } from "./useRegisterController";
import { Link } from "react-router-dom";
import { Select, SelectItem } from "../../../components/Select";
import { CATEGORIES } from "../../../app/constants/categories";
import { UF } from "../../../app/constants/uf";
import { searchAddressByZip } from "../../../app/services/locationService/searchAddressByZip";
import { useState } from "react";
import toast from "react-hot-toast";
import { Controller } from "react-hook-form";
import { weekDays } from "../../../app/constants/weekDays";
import { hours } from "../../../app/constants/hours";

export function Register() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    errors,
    getValues,
    setValue,
    isLoading,
    control,
  } = useRegisterController();

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
            <div className="flex flex-row gap-2">
              <Controller
                control={control}
                name="openDayOn"
                render={({ field: { onChange } }) => (
                  <Select
                    name="Dia de abertura"
                    placeholder="Aberto em"
                    onChange={onChange}
                    error={errors.openDayOn?.message}
                  >
                    {weekDays.map((day, index) => (
                      <SelectItem key={index} value={day}>
                        {day}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Controller
                control={control}
                name="closeDayOn"
                render={({ field: { onChange } }) => (
                  <Select
                    name="Dia de fechamento"
                    placeholder="Fecha em"
                    onChange={onChange}
                    error={errors.closeDayOn?.message}
                  >
                    {weekDays.map((day, index) => (
                      <SelectItem key={index} value={day}>
                        {day}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Controller
                control={control}
                name="openHourOn"
                render={({ field: { onChange } }) => (
                  <Select
                    name="Hora de abertura"
                    placeholder="Aberto às"
                    onChange={onChange}
                    error={errors.openHourOn?.message}
                  >
                    {hours.map((hour, index) => (
                      <SelectItem key={index} value={hour}>
                        {hour}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Controller
                control={control}
                name="closeHourOn"
                render={({ field: { onChange } }) => (
                  <Select
                    name="Hora de fechamento"
                    placeholder="Fecha às"
                    onChange={onChange}
                    error={errors.closeHourOn?.message}
                  >
                    {hours.map((hour, index) => (
                      <SelectItem key={index} value={hour}>
                        {hour}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
            </div>

            <Button text="Cadastrar" type="submit" isLoading={isLoading} />
          </form>
        </Card.Root>
      </Container>
    </>
  );
}
