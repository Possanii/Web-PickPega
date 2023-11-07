import { useForm } from "react-hook-form";
import { useMenu } from "../../../MenuContext/useMenu";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { itemsService } from "../../../../../../../app/services/itemsService";
import { usersServices } from "../../../../../../../app/services/usersService";
import { useUser } from "../../../../../../../app/hooks/useUser";

export function useNewCategoryModal() {
  const {
    isNewCategoryMenuModalOpen,
    closeNewCategoryMenuModal,
    openCategoryMenuModal,
    newCategoryType,
    categoryBeingEdited,
  } = useMenu();

  const queryClient = useQueryClient();

  const { user } = useUser();

  const { deleteCategory } = itemsService;

  const NewCategorySchema = z.object({
    category: z.string().nonempty("Insira uma categoria"),
  });

  type FormData = z.infer<typeof NewCategorySchema>;

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(NewCategorySchema),
    defaultValues: { category: categoryBeingEdited?.category },
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: FormData) => {
      let categoriesList;
      if (newCategoryType === "NEW") {
        categoriesList = await itemsService.createNewCategory({
          uid: user!.uid,
          categoryName: data.category,
        });
      } else {
        categoriesList = await itemsService.editCategory({
          user: user!,
          category: data.category,
          index: categoryBeingEdited!.index,
        });
      }
      return categoriesList;
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const response = await mutateAsync(data);
    if (response.status === 200) {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success(
        newCategoryType === "NEW" ? "Categoria criada" : "Categoria Atualizada"
      );
      closeNewCategoryMenuModal();
      openCategoryMenuModal();
      reset();
    } else {
      toast.error(
        newCategoryType === "NEW"
          ? "Erro ao criar categoria"
          : "Erro ao atualizar categoria"
      );
    }
  });

  return {
    isNewCategoryMenuModalOpen,
    closeNewCategoryMenuModal,
    openCategoryMenuModal,
    register,
    handleSubmit,
    errors,
    isLoading,
    newCategoryType,
    deleteCategory,
    user,
    editUser: usersServices.editUser,
    categoryBeingEdited,
    queryClient,
  };
}
