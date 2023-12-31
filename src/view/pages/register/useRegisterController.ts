import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "../../../app/services/authService";
import { CATEGORIES } from "../../../app/constants/categories";
import { UF } from "../../../app/constants/uf";
import { storageService } from "../../../app/services/storageService";
import { locationService } from "../../../app/services/locationService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";
import { User } from "firebase/auth";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const registerSchema = z.object({
  name: z.string().nonempty("Insira o nome do estabelecimento"),
  email: z.string().nonempty("Insira um email").email("Insira um email válido"),
  password: z
    .string()
    .nonempty("insira uma senha")
    .min(8, "A senha deve conter no mínimo 8 caracteres"),
  category: z.enum(CATEGORIES, {
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
    uf: z.enum(UF, {
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
  openDayOn: z
    .string({
      required_error: "Insira um valor",
    })
    .nonempty("Selecione uma dia de abertura"),
  closeDayOn: z
    .string({
      required_error: "Insira um valor",
    })
    .nonempty("Selecione um dia de fechamento"),
  openHourOn: z
    .string({
      required_error: "Insira um valor",
    })
    .nonempty("Selecione um horário de abertura"),
  closeHourOn: z
    .string({
      required_error: "Insira um valor",
    })
    .nonempty("Selecione um horário de fechamento"),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

interface SigninResponse {
  status: number;
  message: string;
  payload: User | null;
}

type FormData = z.infer<typeof registerSchema>;

export function useRegisterController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    getValues,
    setValue,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      const response: SigninResponse = {
        status: 400,
        message: "Algo deu errado",
        payload: null,
      };
      const photo = await storageService.uploadToStorage(
        data.photo[0],
        "/FotosRestaurantes"
      );

      if (photo.status !== 200) {
        response.message = photo.message;
        return response;
      }

      const geoLocation = await locationService.getGeoPosition(
        data.address.zip
      );

      if (geoLocation.status !== 200) {
        response.message = geoLocation.message;
        return response;
      }

      try {
        const result = await authService.signup({
          email: data.email,
          password: data.password,
          name: data.name,
          category: data.category,
          address: {
            street: data.address.street,
            number: data.address.number,
            neighborhood: data.address.neighborhood,
            city: data.address.city,
            uf: data.address.uf,
            zip: data.address.zip,
          },
          photo: photo.payload!.url,
          openDays: `${data.openDayOn} - ${data.closeDayOn}`,
          openHours: `${data.openHourOn} - ${data.closeHourOn}`,
          lat: geoLocation.payload!.lat,
          lng: geoLocation.payload!.lng,
        });

        return result;
      } catch (error) {
        await storageService.deleteFromStorage(photo.payload!.url);
        return response;
      }
    },
  });

  const { singin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const response = await mutateAsync(data);

    if (response.status === 200) {
      toast.success(response.message);
      singin(response.payload!.refreshToken);
    } else {
      toast.error(response.message);
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    getValues,
    setValue,
    isLoading,
    control,
  };
}
