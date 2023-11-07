import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../../../../../../../components/Button";
import { Input } from "../../../../../../../components/Input";
import { Modal } from "../../../../../../../components/Modal";
import { useNewCategoryModal } from "./useNewCategoryModal";
import toast from "react-hot-toast";
import { useState } from "react";

export function NewCategoryModal() {
  const {
    isNewCategoryMenuModalOpen,
    closeNewCategoryMenuModal,
    openCategoryMenuModal,
    register,
    errors,
    isLoading,
    handleSubmit,
    newCategoryType,
  } = useNewCategoryModal();

  const [loading, setLoading] = useState(false);

  return (
    <Modal
      open={isNewCategoryMenuModalOpen}
      title={newCategoryType === "NEW" ? "Nova categoria" : "Editar categoria"}
      onClose={() => {
        closeNewCategoryMenuModal(), openCategoryMenuModal();
      }}
      rightAction={
        newCategoryType === "EDIT" && (
          <button disabled={isLoading || loading}>
            {
              <TrashIcon
                className="w-6 h-6"
                onClick={async () => {
                  setLoading(true);
                  toast.success("Categoria deletada");
                  setLoading(false);
                }}
              />
            }
          </button>
        )
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          placeholder="Categoria"
          {...register("category")}
          error={errors.category?.message}
        />
        <Button
          text={newCategoryType === "NEW" ? "Cadastrar" : "Editar"}
          type="submit"
          isLoading={isLoading}
        />
      </form>
    </Modal>
  );
}
