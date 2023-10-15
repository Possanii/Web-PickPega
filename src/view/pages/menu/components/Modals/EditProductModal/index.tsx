import { Controller } from "react-hook-form";
import { CATEGORIES } from "../../../../../../app/constants/categories";
import { Button } from "../../../../../../components/Button";
import { Input } from "../../../../../../components/Input";
import { Modal } from "../../../../../../components/Modal";
import { Select, SelectItem } from "../../../../../../components/Select";
import { useEditProductModalController } from "./useEditProductModalController";
import { InputHours } from "../../../../../../components/InputHours";
import { InputCurrency } from "../../../../../../components/InputCurrency";

export function EditProductModal() {
  const {
    isEditItemMenuModalOpen,
    closeEditItemMenuModal,
    register,
    errors,
    handleSubmit,
    isLoading,
    control,
  } = useEditProductModalController();

  return (
    <Modal
      open={isEditItemMenuModalOpen}
      title="Editar produto"
      onClose={closeEditItemMenuModal}
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

        <Controller
          control={control}
          name="timer"
          render={({ field: { onChange, value } }) => (
            <InputHours
              placeholder="Tempo de preparo"
              error={errors.timer?.message}
              onChange={onChange}
              value={value}
            />
          )}
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
                value={value.toString()}
                error={errors.active?.message}
              >
                <SelectItem value="true">ATIVO</SelectItem>
                <SelectItem value="false">INATIVO</SelectItem>
              </Select>
            )}
          />
        </div>
        <Button text="Atualizar produto" type="submit" isLoading={isLoading} />
      </form>
    </Modal>
  );
}
