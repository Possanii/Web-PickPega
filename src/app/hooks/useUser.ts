import { useQuery } from "@tanstack/react-query";
import { usersServices } from "../services/usersService";

export function useUser() {
  const { data, isFetching } = useQuery({
    queryKey: ["users", "me"],
    queryFn: async () => await usersServices.getMe(),
    staleTime: Infinity,
  });

  return { user: data, isFetching };
}
