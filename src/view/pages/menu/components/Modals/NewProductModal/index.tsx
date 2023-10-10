import { CATEGORIES } from "../../../../../../app/constants/categories";
import { Button } from "../../../../../../components/Button";
import { Input } from "../../../../../../components/Input";
import { Modal } from "../../../../../../components/Modal";
import { Select, SelectItem } from "../../../../../../components/Select";
import { useNewProductModalController } from "./useNewProductModalController";

export function NewProductModal() {
  const {
    isNewItemMenuModalOpen,
    closeNewItemMenuModal,
    register,
    errors,
    handleSubmit,
    isLoading,
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
        <Select
          placeholder="Categorias"
          {...register("category")}
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
        <Input
          placeholder="Tempo de preparo"
          error={errors.timer?.message}
          {...register("timer", { valueAsNumber: true })}
        />
        <Input
          placeholder="Valor"
          error={errors.price?.message}
          {...register("price", { valueAsNumber: true })}
        />
        <div className="relative">
          <Select
            placeholder="Ativo"
            error={errors.active?.message}
            {...register("active")}
          >
            <SelectItem value="true">ATIVO</SelectItem>
            <SelectItem value="false">INATIVO</SelectItem>
          </Select>
        </div>
        <Button text="Criar produto" type="submit" isLoading={isLoading} />
      </form>
    </Modal>
  );
}
