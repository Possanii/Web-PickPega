import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatório")
    .min(8, "A senha deve conter no mínimo 8 caracteres"),
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

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: FormData) => {
      const result = await authService.signin({
        email: data.email,
        password: data.password,
      });

      return result;
    },
  });

  const { singin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const response = await mutateAsync(data);

    if (response.status === 200) {
      toast.success(response.message);
      singin(response.payload!.accessToken);
    } else {
      toast.error(response.message);
      console.log(response);
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
