import { Controller } from "react-hook-form";
import { Button } from "../../../../../../components/Button";
import { Input } from "../../../../../../components/Input";
import { Modal } from "../../../../../../components/Modal";
import { Select, SelectItem } from "../../../../../../components/Select";
import { useNewProductModalController } from "./useNewProductModalController";
import { InputCurrency } from "../../../../../../components/InputCurrency";

export function NewProductModal() {
  const {
    isNewItemMenuModalOpen,
    closeNewItemMenuModal,
    register,
    errors,
    handleSubmit,
    isLoading,
    control,
    categories,
  } = useNewProductModalController();

  return (
    <Modal
      open={isNewItemMenuModalOpen}
      title="Cadastrar produto"
      onClose={closeNewItemMenuModal}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          placeholder="Foto"
          type="file"
          className=" h-[60px] pt-6"
          error={errors.photo?.message}
          {...register("photo")}
        />
        <Input
          placeholder="Nome"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          placeholder="Descrição"
          error={errors.description?.message}
          {...register("description")}
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
              {categories!.map((category, index) => {
                return (
                  <SelectItem key={index} value={category}>
                    {category}
                  </SelectItem>
                );
              })}
            </Select>
          )}
        />
        <Input
          placeholder="Tempo de preparo"
          error={errors.timer?.message}
          {...register("timer", { valueAsNumber: true })}
        />
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, value } }) => (
            <InputCurrency
              placeholder="Valor"
              onChange={onChange}
              value={value}
              error={errors.price?.message}
            />
          )}
        />
        <div className="relative">
          <Controller
            control={control}
            name="active"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Ativo"
                name="active"
                onChange={onChange}
                value={value}
                error={errors.active?.message}
              >
                <SelectItem value="true">ATIVO</SelectItem>
                <SelectItem value="false">INATIVO</SelectItem>
              </Select>
            )}
          />
        </div>
        <Button text="Criar produto" type="submit" isLoading={isLoading} />
      </form>
    </Modal>
  );
}
