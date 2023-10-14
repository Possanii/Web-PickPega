import { z } from "zod";
import { CATEGORIES } from "../../../../../../app/constants/categories";
import { useMenu } from "../../MenuContext/useMenu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storageService } from "../../../../../../app/services/storageService";
import { itemsService } from "../../../../../../app/services/itemsService";
import { useUser } from "../../../../../../app/hooks/useUser";
import toast from "react-hot-toast";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ACTIVE = ["true", "false"] as const;

export function useEditProductModalController() {
  const registerProductSchema = z.object({
    photo: z
      .custom<FileList>()
      .refine((files) => files?.length === 1, "Insira uma imagem.")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        `Tamanho máximo da imagem é de 5MB.`
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Selecione uma imagem tipo .jpg, .jpeg, .png ou .webp."
      ),
    name: z.string().nonempty(),
    description: z.string().nonempty(),
    category: z.union([
      z.enum(CATEGORIES, {
        errorMap: (issue) => {
          switch (issue.code) {
            case "invalid_type":
              return { message: "Selecione uma opção válida." };
            case "invalid_enum_value":
              return { message: "Selecione uma opção válida." };
            default:
              return { message: "Selecione uma opção" };
          }
        },
      }),
      z.string(),
    ]),
    timer: z
      .number({
        errorMap: (issue) => {
          switch (issue.code) {
            case "invalid_type":
              return { message: "Insira somente números." };
            default:
              return { message: "Insira um tempo" };
          }
        },
      })
      .positive("Insira um tempo válido"),
    price: z
      .number({
        errorMap: (issue) => {
          switch (issue.code) {
            case "invalid_type":
              return { message: "Insira somente números." };
            default:
              return { message: "Insira um preço" };
          }
        },
      })
      .positive("Insira um preço válido"),
    active: z.union([
      z.enum(ACTIVE, {
        errorMap: (issue) => {
          switch (issue.code) {
            case "invalid_type":
              return { message: "Selecione uma opção válida." };
            case "invalid_enum_value":
              return { message: "Selecione uma opção válida." };
            default:
              return { message: "Selecione uma opção" };
          }
        },
      }),
      z.boolean(),
    ]),
  });

  type FormData = z.infer<typeof registerProductSchema>;

  const { isEditItemMenuModalOpen, closeEditItemMenuModal, itemBeingEdited } =
    useMenu();

  const { user } = useUser();

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(registerProductSchema),
    defaultValues: {
      name: itemBeingEdited?.nome,
      description: itemBeingEdited?.description,
      category: itemBeingEdited?.categoria,
      timer: itemBeingEdited?.tempopreparo,
      price: itemBeingEdited?.valor,
      active: itemBeingEdited?.active,
    },
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      const photo = await storageService.uploadToStorage(
        data.photo[0],
        "/FotosRestaurantes"
      );

      if (photo.status !== 200) {
        return photo;
      }

      try {
        const result = await itemsService.createNewItem({
          foto: photo.payload!.url,
          nome: data.name,
          description: data.description,
          categoria: data.category,
          tempopreparo: data.timer,
          valor: data.price,
          active: Boolean(data.active),
          restauranteid: user!.uid,
        });
        return result;
      } catch (error) {
        await storageService.deleteFromStorage(photo.payload!.url);
        return { status: 500, message: "Falha ao criar restaurante" };
      }
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const response = await mutateAsync(data);

    if (response.status === 200) {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      toast.success(response.message);
      closeEditItemMenuModal();
      reset();
    } else {
      toast.error(response.message);
    }
  });

  return {
    isEditItemMenuModalOpen,
    closeEditItemMenuModal,
    register,
    handleSubmit,
    errors,
    isLoading,
    itemBeingEdited,
  };
}
