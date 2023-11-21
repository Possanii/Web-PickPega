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
import { useMenuController } from "../../ItemsListMenu/useMenuController";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ACTIVE = ["true", "false"] as const;

export function useNewProductModalController() {
  const { isNewItemMenuModalOpen, closeNewItemMenuModal } = useMenu();

  const { filterOptions } = useMenuController();

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
    category: z.enum(filterOptions as [string, ...string[]], {
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
    newCategory: z.string().optional(),
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
    active: z.enum(ACTIVE, {
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
  });

  type FormData = z.infer<typeof registerProductSchema>;

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
      active: "true",
    },
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      const photo = await storageService.uploadToStorage(
        data.photo[0],
        "/FotosItems"
      );

      if (photo.status !== 200) {
        return photo;
      }

      try {
        const result = await itemsService.createNewItem(
          {
            picture: photo.payload!.url,
            name: data.name,
            description: data.description,
            category: data.category,
            time: data.timer,
            price: currencyStringToNumber(data.price),
            active: data.active === "true" ? true : false,
            restaurantId: user!.uid,
          },
          user!.uid
        );
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
      closeNewItemMenuModal();
      reset();
    } else {
      toast.error(response.message);
    }
  });

  const categories = filterOptions.filter((category) => category !== "Todos");

  return {
    isNewItemMenuModalOpen,
    closeNewItemMenuModal,
    register,
    handleSubmit,
    errors,
    isLoading,
    control,
    categories: categories ?? [],
  };
}
