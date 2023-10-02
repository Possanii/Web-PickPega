import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const typesRestaurant = [
  "Açaí",
  "Adega",
  "Bar",
  "Cafeteria",
  "Conveniência",
  "Culinária japonesa",
  "Doceria",
  "Hamburgueria",
  "Marmitaria",
  "Padaria",
  "Pastelaria",
  "Pizzaria",
  "Salgado",
  "Sorveteria",
] as const;

const uf = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SE",
  "SP",
  "TO",
] as const;

const registerSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(8),
  category: z.enum(typesRestaurant),
  address: z.object({
    street: z.string().nonempty(),
    number: z.number().positive(),
    neighborhood: z.string().nonempty(),
    city: z.string().nonempty(),
    uf: z.enum(uf),
    zip: z.number().positive(),
  }),
  photo: z.string(),
  x: z.number(),
  y: z.number(),
});

type FormData = z.infer<typeof registerSchema>;

export function useRegisterController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    console.log(data);
  });

  return { handleSubmit, register, errors };
}
