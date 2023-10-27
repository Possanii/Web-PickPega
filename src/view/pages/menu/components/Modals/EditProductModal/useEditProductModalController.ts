import { z } from "zod";
import { useMenu } from "../../MenuContext/useMenu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storageService } from "../../../../../../app/services/storageService";
import { itemsService } from "../../../../../../app/services/itemsService";
import { useUser } from "../../../../../../app/hooks/useUser";
import toast from "react-hot-toast";
import { currencyStringToNumber } from "../../../../../../app/utils/currencyStringToNumber";

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
      .optional()
      .refine(
        (files) => files?.[0]?.size ?? 0 <= MAX_FILE_SIZE,
        `Tamanho máximo da imagem é de 5MB.`
      )
      .refine(
        (files) =>
          ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type ?? "image/png"),
        "Selecione uma imagem tipo .jpg, .jpeg, .png ou .webp."
      ),
    name: z.string().nonempty("Insira um nome"),
    description: z.string().nonempty("Insira uma descrição"),
    category: z.string().nonempty("Insira uma categoria"),
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
      .min(0, "Insira um tempo válido"),
    price: z.union([z.string().nonempty("Informe o valor"), z.number()]),
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
    control,
  } = useForm<FormData>({
    resolver: zodResolver(registerProductSchema),
    defaultValues: {
      name: itemBeingEdited?.name,
      description: itemBeingEdited?.description,
      category: itemBeingEdited?.category,
      timer: itemBeingEdited?.time,
      price: itemBeingEdited?.price,
      active: itemBeingEdited?.active,
    },
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      if (data.photo!.length !== 0) {
        const photo = await storageService.uploadToStorage(
          data.photo![0],
          "/FotosItems"
        );
        if (photo.status !== 200) {
          return photo;
        }

        try {
          const result = await itemsService.EditItem(
            {
              itemId: itemBeingEdited!.itemId,
              picture: photo.payload!.url,
              name: data.name,
              description: data.description,
              category: data.category,
              time: data.timer,
              price: currencyStringToNumber(data.price),
              active:
                data.active === "true" || data.active === true ? true : false,
              restaurantId: user!.uid,
            },
            itemBeingEdited!.itemId!
          );

          await storageService.deleteFromStorage(itemBeingEdited!.picture!);

          return result;
        } catch (error) {
          await storageService.deleteFromStorage(photo.payload!.url);
          return { status: 500, message: "Falha ao atualizar restaurante" };
        }
      } else {
        try {
          const result = await itemsService.EditItem(
            {
              itemId: itemBeingEdited!.itemId,
              name: data.name,
              description: data.description,
              category: data.category,
              time: data.timer,
              price: currencyStringToNumber(data.price),
              active:
                data.active === "true" || data.active === true ? true : false,
              restaurantId: user!.uid,
            },
            itemBeingEdited!.itemId!
          );
          return result;
        } catch (error) {
          return { status: 500, message: "Falha ao atualizar restaurante" };
        }
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
    control,
  };
}
