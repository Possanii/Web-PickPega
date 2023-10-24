import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { CATEGORIES } from "../../../app/constants/categories";
import { UF } from "../../../app/constants/uf";
import { useUser } from "../../../app/hooks/useUser";
import { usersServices } from "../../../app/services/usersService";
import { storageService } from "../../../app/services/storageService";

export function useProfileController() {
  const { user } = useUser();

  const queryCliente = useQueryClient();

  const ProfileSchema = z.object({
    name: z.string().nonempty("Insira o nome do estabelecimento"),
    email: z
      .string()
      .nonempty("Insira um email")
      .email("Insira um email válido"),
    password: z.string().optional(),
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
      z.string().nonempty(),
    ]),
    address: z.object({
      street: z.string().nonempty("Insira um logadouro"),
      number: z
        .number({
          errorMap: (issue) => {
            switch (issue.code) {
              case "invalid_type":
                return { message: "Insira somente números." };
              default:
                return { message: "Insira um número" };
            }
          },
        })
        .positive("Insira um número válido"),
      neighborhood: z.string().nonempty("Insira um bairro"),
      city: z.string().nonempty("Insira uma cidade"),
      uf: z.union([
        z.enum(UF, {
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
        z.string().nonempty(),
      ]),
      zip: z
        .number({
          errorMap: (issue) => {
            switch (issue.code) {
              case "invalid_type":
                return { message: "Insira somente números." };
              default:
                return { message: "Insira um zip" };
            }
          },
        })
        .positive("Insira um zip válido"),
    }),
    photo: z.union([z.custom<FileList>(), z.string()]).optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  });

  type FormData = z.infer<typeof ProfileSchema>;

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      category: user!.category,
      address: {
        city: user!.address.city,
        neighborhood: user!.address.neighborhood,
        number: user!.address.number,
        street: user!.address.street,
        uf: user!.address.uf,
        zip: user!.address.zip,
      },
    },
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: FormData) => {
      let photo;
      if (data.photo!.length > 0) {
        photo = await storageService.uploadToStorage(
          data!.photo![0] as File,
          "/FotosRestaurantes"
        );
        data.photo = photo.payload?.url;
      } else {
        data.photo = user?.photo;
      }

      const response = await usersServices.editUser(data, user!.uid as string);

      return response;
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const response = await mutateAsync(data);

    if (response.status === 200) {
      queryCliente.invalidateQueries({ queryKey: ["users", "me"] });
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  });

  return {
    register,
    handleSubmit,
    control,
    errors,
    isLoading,
    getValues,
    setValue,
  };
}
