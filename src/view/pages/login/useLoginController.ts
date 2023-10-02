import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "../../../app/services/authService";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatório")
    .min(6, "A senha deve conter no mínimo 8 caracteres"),
});

type FormData = z.infer<typeof loginSchema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const result = await authService.signin({
      email: data.email,
      password: data.password,
    });
    console.log(result.payload?.accessToken);
  });

  return { handleSubmit, register, errors };
}
