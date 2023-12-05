import { useState } from "react";
import { Controller } from "react-hook-form";
import { Button } from "../../../../../../components/Button";
import { Input } from "../../../../../../components/Input";
import { InputCurrency } from "../../../../../../components/InputCurrency";
import { InputHours } from "../../../../../../components/InputHours";
import { Modal } from "../../../../../../components/Modal";
import { Select, SelectItem } from "../../../../../../components/Select";
import { useNewProductModalController } from "./useNewProductModalController";

export function NewProductModal() {
  const [isNewCategoryDisable, setIsNewCategoryDisable] = useState(true);

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
        <div className="flex justify-between gap-4">
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange } }) => (
              <Select
                placeholder="Categorias"
                name="category"
                onChange={(value) => {
                  onChange(value);
                  if (value === "Nova categoria") {
                    setIsNewCategoryDisable(false);
                  } else setIsNewCategoryDisable(true);
                }}
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
            className="min-w-[200px]"
            placeholder="Nova categoria"
            error={errors.newCategory?.message}
            disabled={isNewCategoryDisable}
            {...register("newCategory")}
          />
        </div>
        <Controller
          control={control}
          name="timer"
          render={({ field: { onChange } }) => (
            <InputHours
              placeholder="Tempo de preparo"
              onChange={onChange}
              error={errors.timer?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange } }) => (
            <InputCurrency
              placeholder="Valor"
              onChange={onChange}
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
